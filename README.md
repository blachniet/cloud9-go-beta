# Cloud9 Docker Image for go Development using latest go beta

Includes go 1.8rc2 running on Debian Jessie with working code completion and debugging.

## Run the container with defaults

```
docker run -d \
    -p 8080:8080 -p 8081:8081 -p 8082:8082 \
    blachniet/cloud9-go-beta
```

By default, the IDE is served on 8080. 8081 and 8082 can be used to serve other web apps within the container.

## Options

### PNAT the port, mount a workspace and mount ssh keys

```
docker run -d \
    -p 8888:8080 \
    -v ~/my_go_workspace:/go \
    -v ~/.ssh:/root/.ssh \
    blachniet/cloud9-go-beta
```


### Add basic authentication

```
docker run -d \
    -p 8080:8080 \
    -v ~:/go \
    blachniet/cloud9-go-beta -a user:pass
```

Note: the password will be easily visible to anyone in the docker group, so no valuable passwords!
