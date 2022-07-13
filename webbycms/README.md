# Webby CMS application
How to build webbycms admin/api application for a new project

1. Use default webbydnd/webbycms:latest docker image (with default entities)

make a separate build for the project
```
docker build -t webbydnd/[:PROJECT_NAME]_webbycms:latest .
```

if need to run it on local server, just execute the following commands
```
docker run --name [:PROJECT_NAME]_webbycms -d -p 7331:7331 webbydnd/[:PROJECT_NAME]_webbycms:latest
```
then go to http://localhost:7331/admin/ 
```
Login: admin@webbycms.com
Password: w.......
```

2. Or create a customization build of WebbyCMS

go to backend folder
```
cd webbycms
```
remove all files/folders from backend folder (included hidden and files/folders which start with .)

clone from git repo clone from git repo
```
git clone git@github.com:webbydnd/webbycms.git .
```

do some customisation in admin or api folder

create build
```
npm i
npm run build
```

create a new docker image
```
docker build -t webbydnd/[:PROJECT_NAME]_webbycms:latest .
```

3. Crete a docker hub repo https://hub.docker.com/repository/create?namespace=webbydnd
webbydnd/[:PROJECT_NAME]_webbycms
e.g webbydnd/project_webbycms


3. Deploy docker a new image to docker hub

login into docker account and then enter password (see in docker hub https://hub.docker.com/settings/security)
```
docker login --username webbydnd
```

push local image to remote docker hub
```
docker image push webbydnd/[:PROJECT_NAME]_webbycms:latest
```
