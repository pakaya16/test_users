install docker
 link https://www.docker.com/docker-mac

Install Docker Compose
 link https://docs.docker.com/compose/install/

use port 3306, 8000

```bash
git clone https://github.com/pakaya16/test_users.git
cd test_users
docker-compose up -d
docker ps
```
**copy ContainerID**

**_345a3a6b9831_**        testusers_phpfpm   "docker-php-entryp..."   4 minutes ago       Up 4 minutes        9000/tcp                      testusers_phpfpm_1

```bash
docker exec -it <ContainerID> /bin/bash 
    (****OR****    docker exec -it <ContainerID> sh)
    (***example*** docker exec -it 345a3a6b9831 sh)
cd project
composer install
php artisan migrate:refresh --seed

```
Open broswer
 http://localhost:8000
 
Open Api document
 http://localhost:8000/api/doc
 
Can run unittest in docker
```bash
docker exec -it <ContainerID> /bin/bash 
    (****OR****    docker exec -it <ContainerID> sh)
    (***example*** docker exec -it 345a3a6b9831 sh)
cd project
phpunit

```