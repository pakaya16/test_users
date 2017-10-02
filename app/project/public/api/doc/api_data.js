define({ "api": [
  {
    "type": "post",
    "url": "/users",
    "title": "4. Create user",
    "version": "0.0.1",
    "name": "CreateUser",
    "group": "User",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "first_name",
            "description": "<p>First name.</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "last_name",
            "description": "<p>Last name.</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "sex",
            "description": "<p>Gender.</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "birthday",
            "description": "<p>Birthday.</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "email",
            "description": "<p>Email.</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "address",
            "description": "<p>Address.</p>"
          },
          {
            "group": "Parameter",
            "type": "Integer",
            "optional": false,
            "field": "telephone",
            "description": "<p>Telephone.</p>"
          }
        ]
      }
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "code",
            "description": "<p>Success Code number is '00'.</p>"
          },
          {
            "group": "Success 200",
            "type": "Integer",
            "optional": false,
            "field": "id",
            "description": "<p>Id user.</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "message",
            "description": "<p>success.</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Success-Response:",
          "content": "HTTP/1.1 200 OK\n{\n    \"code\": \"00\",\n    \"id\": 12,\n    \"message\": \"create user success.\"\n}",
          "type": "json"
        }
      ]
    },
    "sampleRequest": [
      {
        "url": "http://localhost:8000/api/v1/users"
      }
    ],
    "filename": "user/_apidoc.js",
    "groupTitle": "User"
  },
  {
    "type": "delete",
    "url": "/users/:id",
    "title": "5. Delete user",
    "version": "0.0.1",
    "name": "DeleteUser",
    "group": "User",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "Integer",
            "optional": false,
            "field": "id",
            "description": "<p>Id user.</p>"
          }
        ]
      }
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "code",
            "description": "<p>Success Code number is '00'.</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "message",
            "description": "<p>success.</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Success-Response:",
          "content": " HTTP/1.1 200 OK\n{\n    \"code\": \"00\",\n    \"message\": \"delete user success.\"\n}",
          "type": "json"
        }
      ]
    },
    "sampleRequest": [
      {
        "url": "http://localhost:8000/api/v1/users/:id"
      }
    ],
    "filename": "user/_apidoc.js",
    "groupTitle": "User"
  },
  {
    "type": "get",
    "url": "/users/:id/edit",
    "title": "2. Get user information",
    "version": "0.0.1",
    "name": "GetUserInformation",
    "group": "User",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "Integer",
            "optional": false,
            "field": "id",
            "description": "<p>Id user.</p>"
          }
        ]
      }
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "code",
            "description": "<p>Success Code number is '00'.</p>"
          },
          {
            "group": "Success 200",
            "type": "Integer",
            "optional": false,
            "field": "id",
            "description": "<p>User id.</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "first_name",
            "description": "<p>First name.</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "last_name",
            "description": "<p>Last name.</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "sex",
            "description": "<p>Gender.</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "birthday",
            "description": "<p>Birthday.</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "email",
            "description": "<p>Email.</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "address",
            "description": "<p>Address.</p>"
          },
          {
            "group": "Success 200",
            "type": "Integer",
            "optional": false,
            "field": "telephone",
            "description": "<p>Telephone.</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Success-Response:",
          "content": " HTTP/1.1 200 OK\n {\n   \"code\": \"00\",\n   \"id\": 1,\n   \"first_name\": \"fname\",\n   \"last_name\": \"lname\",\n   \"sex\": \"Men\",\n   \"birthday\": \"1990-04-15\",\n   \"email\": \"aab@gmail.com\",\n   \"address\": \"2/89 ram\",\n   \"telephone\": \"0889998888\"\n}",
          "type": "json"
        }
      ]
    },
    "error": {
      "examples": [
        {
          "title": "Error-Response:",
          "content": "HTTP/1.1 404 Not Found\n{\n \"code\": \"01\",\n \"message\": \"No data in system.\"\n}",
          "type": "json"
        }
      ]
    },
    "sampleRequest": [
      {
        "url": "http://localhost:8000/api/v1/users/:id/edit"
      }
    ],
    "filename": "user/_apidoc.js",
    "groupTitle": "User"
  },
  {
    "type": "get",
    "url": "/users/",
    "title": "1. Get All user",
    "version": "0.0.1",
    "name": "GetUsers",
    "group": "User",
    "permission": [
      {
        "name": "admin"
      }
    ],
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "Integer",
            "optional": false,
            "field": "limit",
            "defaultValue": "10",
            "description": "<p>Limit for pagination.</p>"
          },
          {
            "group": "Parameter",
            "type": "Integer",
            "optional": false,
            "field": "page",
            "defaultValue": "1",
            "description": "<p>For current page</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "orderByField",
            "defaultValue": "id",
            "description": "<p>Name of field</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "orderByType",
            "defaultValue": "desc",
            "description": "<p>Type for sort (desc, asc)</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "conditionField",
            "description": "<p>Name of field for search ( where userid = xxx )</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "conditionValue",
            "description": "<p>Value of field for search ( where xxx = 10 )</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Request-Example:",
          "content": "?page=1\n&limit=10\n&orderByField=first_name\n&orderByType=asc\n&conditionField=first_name\n&conditionValue=jaja",
          "type": "String"
        }
      ]
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "code",
            "description": "<p>Success Code number is '00'.</p>"
          },
          {
            "group": "Success 200",
            "type": "Object",
            "optional": false,
            "field": "data",
            "description": "<p>Fullname of the User.</p>"
          },
          {
            "group": "Success 200",
            "type": "Integer",
            "optional": false,
            "field": "data.id",
            "description": "<p>User id.</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "data.first_name",
            "description": "<p>First name.</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "data.last_name",
            "description": "<p>Last name.</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "data.sex",
            "description": "<p>Gender.</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "data.birthday",
            "description": "<p>Birthday.</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "data.email",
            "description": "<p>Email.</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "data.address",
            "description": "<p>Address.</p>"
          },
          {
            "group": "Success 200",
            "type": "Integer",
            "optional": false,
            "field": "data.telephone",
            "description": "<p>Telephone.</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Success-Response:",
          "content": "HTTP/1.1 200 OK\n{\n \"code\": \"00\",\n \"count\": 2,\n \"data\": [\n     {\n         \"id\": 11,\n         \"first_name\": \"fname\",\n         \"last_name\": \"lname\",\n         \"sex\": \"Men\",\n         \"birthday\": \"1990-04-15\",\n         \"email\": \"aa@gmail.com\",\n         \"address\": \"2/89 ram\",\n         \"telephone\": \"0889998888\"\n     },\n     {\n         \"id\": 10,\n         \"first_name\": \"Samara\",\n         \"last_name\": \"Feil\",\n         \"sex\": \"Women\",\n         \"birthday\": \"2012-11-28\",\n         \"email\": \"porter61@homenick.net\",\n         \"address\": \"8692 Krystina Brook\\nRosarioberg, WI 34826-0805\",\n         \"telephone\": \"5890846075\"\n     }\n  ]\n}",
          "type": "json"
        }
      ]
    },
    "error": {
      "examples": [
        {
          "title": "Error-Response:",
          "content": "HTTP/1.1 404 Not Found\n{\n \"code\": \"01\",\n \"message\": \"No data in system.\"\n}",
          "type": "json"
        }
      ]
    },
    "sampleRequest": [
      {
        "url": "http://localhost:8000/api/v1/users?limit=:limit&page=:page&orderByField=:orderByField&orderByType=:orderByType&conditionField=:conditionField&conditionValue=:conditionValue"
      }
    ],
    "filename": "user/_apidoc.js",
    "groupTitle": "User"
  },
  {
    "type": "put",
    "url": "/users/:id",
    "title": "3. Update data user",
    "version": "0.0.1",
    "name": "PutUser",
    "group": "User",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "Integer",
            "optional": false,
            "field": "id",
            "description": "<p>Id user.</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "first_name",
            "description": "<p>First name.</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "last_name",
            "description": "<p>Last name.</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "sex",
            "description": "<p>Gender.</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "birthday",
            "description": "<p>Birthday.</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "email",
            "description": "<p>Email.</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "address",
            "description": "<p>Address.</p>"
          },
          {
            "group": "Parameter",
            "type": "Integer",
            "optional": false,
            "field": "telephone",
            "description": "<p>Telephone.</p>"
          }
        ]
      }
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "code",
            "description": "<p>Success Code number is '00'.</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "message",
            "description": "<p>success.</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Success-Response:",
          "content": "HTTP/1.1 200 OK\n{\n    \"code\": \"00\",\n    \"message\": \"update user success.\"\n}",
          "type": "json"
        }
      ]
    },
    "sampleRequest": [
      {
        "url": "http://localhost:8000/api/v1/users/:id"
      }
    ],
    "filename": "user/_apidoc.js",
    "groupTitle": "User"
  }
] });
