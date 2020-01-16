```
query GetLaunches {
  launches {
    id
    mission {
      name
    }
  }
}
```

```
query GetLaunchById($id: ID!) {
  launch(id: $id) {
    id
    rocket {
      id
      type
    }
  }
}
Query variables: { "id": 60 }
```

```
query GetLaunches {
  launches(pageSize: 10) {
    launches {
      id
      mission {
        name
      }
    }
  }
}
```

```
mutation LoginUser {
  login(email: "daisy@apollographql.com")
}
```

```
mutation BookTrips {
  bookTrips(launchIds: [67, 68, 69]) {
    success
    message
    launches {
      id
    }
  }
}
{
  "authorization": "ZGFpc3lAYXBvbGxvZ3JhcGhxbC5jb20="
}
```

```
apollo schema:publish --endpoint=http://localhost:4000 --key="service:<my-key>"
```
