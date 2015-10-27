## SQL Share

Sharing server for SQL documents created with [SQL Tabs](http://www.sqltabs.com).

### Installation

```
git clone https://github.com/sasha-alias/sqlshare.git
cd sqlshare
psql postgres://user@host:port/dbname -f db/create.sql
npm install
export SQLSHARE_PORT = 8080
export SQLSHARE_DB = postgres://user@host:port/dbname
npm start
```


