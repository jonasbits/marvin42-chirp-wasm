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

const hexString = '031919'

// hexstring -> Uint8Array
const fromHexString = hexString =>
  new Uint8Array(hexString.match(/.{1,2}/g).map(byte => parseInt(byte, 16)));
const goForward = fromHexString(hexString)
const goLeft =  fromHexString('030019')
const goRight = fromHexString('031900')
const goBack =  fromHexString('031111')
const goNot =   fromHexString('04')

const payload = goForward
// Uint8Array -> hexstring
const toHexString = bytes =>
  bytes.reduce((str, byte) => str + byte.toString(16).padStart(2, '0'), '');
const hexString2 = toHexString(payload)

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
          key: 'E7Aad2030C2ff4bAB9fA3D6FE',
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
//forward
    h('button', {
      id: 'goF',
      disabled: state.state === 'Receiving',
      onkeyup: e => {
        e.preventDefault()
        if (e.keyCode === 119 || e.keyCode === 87) // w/W
           document.getElementById('goF').click()
      },
      onclick: (e) => {
        try {
          sdk.send(goForward)
        } catch (err) {
          window.alert(err)
        }
      }
    }, 'FORWARD'),
//begin div
h('div', {}, [
    h('button', {
      id: 'goL',
      disabled: state.state === 'Receiving',
      onkeyup: e => {
        e.preventDefault()
        if (e.keyCode === 97 || e.keyCode === 65) // a/A
          document.getElementById('goL').click()
      },
      onclick: (e) => {
        try {
          sdk.send(goLeft)
        } catch (err) {
          window.alert(err)
        }
      }
    }, 'LEFT'),
//goRight
    h('button', {
      id: 'goR',
      disabled: state.state === 'Receiving',
      onkeyup: e => {
        e.preventDefault()
        if (e.keyCode === 100 || e.keyCode === 68) //forward arrow and W/w
          document.getElementById('goR').click()
      },
      onclick: (e) => {
        try {
          sdk.send(goRight)
        } catch (err) {
          window.alert(err)
        }
      }
    }, 'RIGHT')
]), //end div
//back
    h('button', {
      id: 'goB',
      disabled: state.state === 'Receiving',
      onkeyup: e => {
        e.preventDefault()
        if (e.keyCode === 115 || e.keyCode === 83) //forward arrow and W/w
          document.getElementById('goB').click()
      },
      onclick: (e) => {
        try {
          sdk.send(goBack)
        } catch (err) {
          window.alert(err)
        }
      }
    }, 'BACK'),
  //stop
    h('button', {
      id: 'goN',
      disabled: state.state === 'Receiving',
      onkeyup: e => {
        e.preventDefault()
        if (e.keyCode === 1115 || e.keyCode === 1183) //stop could be q/Q
          document.getElementById('goN').click()
      },
      onclick: (e) => {
        try {
          sdk.send(goNot)
        } catch (err) {
          window.alert(err)
        }
      }
    }, 'STOP'),
    footer,
    h('div', { class: 'spinner', style: { visibility: state.spinner } })
  ])

const view = (state, actions) =>
  state.started ? main(state, actions) : intro(state, actions)

app(state, actions, view, document.body)
