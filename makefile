publish: 
	yarn publish --access public

act-pull:
	act pull_request \
  	-P ubuntu-latest=catthehacker/ubuntu:act-latest