if (!'WebAssembly' in window) window.alert('WebAssembly is not supported in this browser')
const audioError = `Failed to open web audio stream.
This may happen if your browser doesn't support Web Audio or have a mic and speaker.`

const { Chirp, toAscii } = ChirpConnectSDK;
const h = window.hyperapp.h;
const app = window.hyperapp.app;
let sdk;

const state = {
  input: '',
  started: false,
  text: 'Chirp Messenger',
  spinner: 'hidden',
  state: 'Sleeping',
}

const actions = {
  setText: text => ({ text }),
  setInput: input => ({ input }),
  setStarted: started => ({ started }),
  setSpinner: spinner => ({ spinner }),
  setState: state => ({ state }),
}

// emoji support :)
const encode = s => typeof TextEncoder === 'undefined' ? s : new TextEncoder('utf-8').encode(s)
const decode = s => typeof TextDecoder === 'undefined' ? toAscii(s) : new TextDecoder('utf-8').decode(s)

const footer =
  h('p', { className: 'footer' }, [
    'Made by ',
    h('a', { href: 'https://chirp.io' }, 'Chirp'),
    '.',
    h('br'),
    'Want to create your own web apps using data-over-sound?',
    h('br'),
    'Start building at the ',
    h('a', { href: 'https://developers.chirp.io' }, 'Chirp developer hub'),
    '.',
  ]);

const intro = (state, actions) =>
  h('main', {}, [
    h('h3', {}, 'Chirp Messenger'),
    h('p', {}, "Chirp Messenger uses your computer's speaker and microphone to send and receive messages via audio."),
    h('p', {}, [
      'It uses Web Audio and the Chirp ',
      h('a', { href: 'https://developers.chirp.io/docs/getting-started/wasm' }, 'Web Assembly SDK'),
      ' for transmitting data-over-sound.'
    ]),
    h('img', { src: 'devices.png' }),
    h('p', {}, "Click below to get started. You'll need to grant microphone permissions to receive messages."),
    h('button', {
      onclick: (e) => {
        Chirp({
          key: '3b5CFdE1B45d12d2B1CD5BFBb',
          onStateChanged: (previous, current) => actions.setState(current),
          onReceiving: () => actions.setSpinner('visible'),
          onReceived: data => {
            actions.setText(decode(data))
            actions.setSpinner('hidden')
          },
        }).then(_sdk => {
          sdk = _sdk;
          actions.setStarted(true)
          window.scroll({ top: 0, behavior: 'smooth'})
        }).catch(err => console.error(err) && err.message.includes('WebAssembly') ?
          window.alert(err) : window.alert(audioError)
        )
      }
    }, 'START'),
    footer
  ])

const main = (state, actions) =>
  h('main', {}, [
    h('h3', {}, state.text),
    h('p', {}, 'Enter your message below.'),
    h('input', {
      onkeyup: e => {
        e.preventDefault()
        if (e.keyCode === 13)
          document.getElementById('send').click()
      },
      oninput: e => actions.setInput(e.target.value),
      value: state.input
    }),
    h('button', {
      id: 'send',
      disabled: state.state === 'Receiving',
      onclick: (e) => {
        try {
          sdk.send(encode(state.input))
        } catch (err) {
          window.alert(err)
        }
      },
    }, 'SEND'),
    footer,
    h('div', { class: 'spinner', style: { visibility: state.spinner } })
  ])

const view = (state, actions) =>
  state.started ? main(state, actions) : intro(state, actions)

app(state, actions, view, document.body)
