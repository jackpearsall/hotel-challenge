# Schema

## User

```js
{
  name: String,
  email: String,
}
```

## Hotel

```js
{
  name: String,
  email: String,
  address: String,
  rooms: Number,
  exceptions: [{
    date: Number,
    rooms: Number,
  }]
}
```

## Booking

```js
{
  startDate: Number,
  endDate: Number,
  accepted: Boolean,
  user: User,
  hotel: Hotel,
}
```
