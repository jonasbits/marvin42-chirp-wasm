#!/usr/bin/env bash

mkdir 6.3.2
pushd 6.3.2
 wget -c https://cdnjs.cloudflare.com/ajax/libs/webrtc-adapter/6.3.2/adapter.min.js
 wget -c https://cdnjs.cloudflare.com/ajax/libs/webrtc-adapter/6.3.2/adapter.min.js.map
 # human-readable
 wget -c https://cdnjs.cloudflare.com/ajax/libs/webrtc-adapter/6.3.2/adapter.js
popd

mkdir 1.1.2
pushd 1.1.2
 wget -c https://cdnjs.cloudflare.com/ajax/libs/hyperapp/1.1.2/hyperapp.js
 wget -c https://cdnjs.cloudflare.com/ajax/libs/hyperapp/1.1.2/hyperapp.js.map
 # convert to hyperapp.human.js
 # more info at https://www.npmjs.com/package/hyperapp
 # and https://github.com/jorgebucaran/hyperapp
popd

mkdir 3.0.3
pushd 3.0.3
 wget -c https://public.chirp.io/wasm/3.0.3/chirp-connect.wasm
 # no wat file is available, only the pre-compiled wasm file.
popd

# source unspecified version
# https://public.chirp.io/wasm/latest/chirp-connect.js
# try
wget -c https://public.chirp.io/wasm/3.0.3/chirp-connect.js

wget -c https://messenger.chirp.io/index.js
# already human readable

# css-related
wget -c https://public.chirp.io/images/logos/devices.png

wget -c https://messenger.chirp.io/index.html
wget -c https://messenger.chirp.io/index.css
wget -c https://messenger.chirp.io/manifest.json

echo FINISH
