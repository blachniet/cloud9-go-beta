# Cloud9 Docker Image for go Development using latest go beta

Includes go 1.8rc3 running on Debian Jessie with working code completion and debugging.

**This repository contains some personal customizations based the great work done by [@msmiley](https://github.com/msmiley) in [msmiley/cloud9-go-beta](https://github.com/msmiley/cloud9-go-beta).**

## Run the container with defaults

```
docker run -d \
    -p 8080:8080 -p 8081:8081 -p 8082:8082 \
    blachniet/cloud9-go-beta
```

By default, the IDE is served on 8080. 8081 and 8082 can be used to serve other web apps within the container.

## Options

### PNAT the port and mount a workspace

```
docker run -d \
    -p 8888:8080 \
    -v ~/my_go_workspace:/go \
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

### Add SSH Keys

If you have SSH keys that you would like to reuse across Cloud9 instances, you can add those keys to the container. Run the following command from the host:

```
docker cp ~/.ssh cloud9_container_name:/root/.ssh
```

Then, inside the Cloud9 terminal, modify the permissions on the private key.

```
chmod 600 ~/.ssh/id_rsa
```
