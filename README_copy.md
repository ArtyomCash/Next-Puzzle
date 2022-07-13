# Prototype Web App

1. Create a new build

create a fresh build
```
npm run build
```

create a new docker image
```
docker build -t webbydnd/prototype_ssr_next:latest .
```

2. Deploy docker a new image to docker hub

login into docker account and then enter password (see in docker hub https://hub.docker.com/settings/security)
```
docker login --username webbydnd
```

push local image to remote docker hub
```
docker image push webbydnd/prototype_ssr_next:latest
```

3. Run container 
```
docker run --name flexyti -d -p 80:80 -p 7331:7331 webbydnd/flexyti:latest
```
4. Commit changes which were done in container

commit local changes into container to new image
```
docker commit prototype_ssr_next  webbydnd/prototype_ssr_next:latest
```
push local image to remote docker hub
```
docker image push webbydnd/prototype_ssr_next:latest
```
copy imeges docer to the computer, instead of a dot, the path to the directory where to copy
```
docker cp webbydnd/prototype_ssr_next/webbycms .

docker cp -a prototype_ssr_next:webbycms /d/Work/Projects/images/DomusPacis
```
check if imeges has signed up to the server
```
docker history webbydnd/prototype_ssr_next