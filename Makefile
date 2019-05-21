help:
	echo "Usage sha384, postCommit\n"

sha384: index.js chirp-connect.js
	shasum -b -a 384 index.js | awk '{ print $1 }' | xxd -r -p | base64 > index.js.sha384
	shasum -b -a 384 chirp-connect.js | awk '{ print $1 }' | xxd -r -p | base64 > chirp-connect.js.sha384
	shasum -b -a 384 6.3.2/adapter.min.js | awk '{ print $1 }' | xxd -r -p | base64 > 6.3.2/adapter.min.js.sha384
	shasum -b -a 384 1.1.2/hyperapp.js | awk '{ print $1 }' | xxd -r -p | base64 > 1.1.2/hyperapp.js.sha384

check:
	cat index.js.sha384 | base64 --decode | hexdump -C
	shasum -b -a 384 index.js

show:
	cat chirp-connect.js.sha384 && echo '\n'
	cat 1.1.2/hyperapp.js.sha384 && echo '\n'
	cat index.js.sha384 && echo '\n'
	cat 6.3.2/adapter.min.js.sha384 && echo '\n'
