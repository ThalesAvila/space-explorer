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
