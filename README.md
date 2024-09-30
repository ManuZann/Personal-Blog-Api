
# Personal Blog API

API of posts for a personal blog.





## API Reference

#### Get all posts

```http
  GET /posts/
```

#### Get post

```http
  GET /posts/${id}
```

| Parameter | Type     | Description                       |
| :-------- | :------- | :-------------------------------- |
| `id`      | `string` | **Required**. Id of item to fetch |

#### Create Post

```http
  POST /posts/
```

| Parameter | Type     | Description                       |
| :-------- | :------- | :-------------------------------- |
| `title`      | `string` | **Required**. Post title. |
| `content`      | `string` | **Required**. Post content. |
| `category`      | `string` | **Required**. Post category. |
| `tags`      | `array` | **Required**. Array Post tags. |

#### Update Post

```http
  PUT /posts/${id}
```

| Parameter | Type     | Description                       |
| :-------- | :------- | :-------------------------------- |
| `id`      | `string` | **Required**. Id of Post to uptdate |
| `title`      | `string` | **Required**. New post title. |
| `content`      | `string` | **Required**. New post content. |
| `category`      | `string` | **Required**. New post category. |
| `tags`      | `array` | **Required**. New array post tags. |

#### Delete post

```http
  DELETE /posts/${id}
```

| Parameter | Type     | Description                       |
| :-------- | :------- | :-------------------------------- |
| `id`      | `string` | **Required**. Id of Post to delete |



## Documentation

[Roadmap](https://roadmap.sh/projects/blogging-platform-api)

