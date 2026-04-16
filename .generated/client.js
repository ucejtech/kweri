// @ts-nocheck
import { Type } from "kweri";
export const User = Type.Object({
    id: Type.Number(),
    username: Type.Optional(Type.Union([Type.String(), Type.Undefined()])),
    email: Type.Optional(Type.Union([Type.String(), Type.Undefined()])),
    profile: Type.Optional(Type.Union([
        Type.Partial(Type.Object({
            firstName: Type.String(),
            lastName: Type.String(),
            avatar: Type.String(),
            bio: Type.String(),
            location: Type.String(),
            website: Type.String(),
        })),
        Type.Undefined(),
    ])),
    preferences: Type.Optional(Type.Union([
        Type.Partial(Type.Object({
            theme: Type.String(),
            notifications: Type.Boolean(),
            language: Type.String(),
            timezone: Type.String(),
            emailNotifications: Type.Partial(Type.Object({
                marketing: Type.Boolean(),
                security: Type.Boolean(),
                updates: Type.Boolean(),
            })),
        })),
        Type.Undefined(),
    ])),
    createdAt: Type.Optional(Type.Union([Type.String(), Type.Undefined()])),
    lastLogin: Type.Optional(Type.Union([Type.String(), Type.Undefined()])),
    isActive: Type.Optional(Type.Union([Type.Boolean(), Type.Undefined()])),
    role: Type.Optional(Type.Union([Type.String(), Type.Undefined()])),
    stats: Type.Optional(Type.Union([
        Type.Partial(Type.Object({
            postsCreated: Type.Number(),
            commentsPosted: Type.Number(),
            loginCount: Type.Number(),
        })),
        Type.Undefined(),
    ])),
});
export const UserList = Type.Array(User);
export const Post = Type.Object({
    id: Type.Number(),
    title: Type.Optional(Type.Union([Type.String(), Type.Undefined()])),
    content: Type.Optional(Type.Union([Type.String(), Type.Undefined()])),
    excerpt: Type.Optional(Type.Union([Type.String(), Type.Undefined()])),
    authorId: Type.Optional(Type.Union([Type.Number(), Type.Undefined()])),
    categoryId: Type.Optional(Type.Union([Type.Number(), Type.Undefined()])),
    tags: Type.Optional(Type.Union([Type.Array(Type.String()), Type.Undefined()])),
    status: Type.Optional(Type.Union([Type.String(), Type.Undefined()])),
    featured: Type.Optional(Type.Union([Type.Boolean(), Type.Undefined()])),
    metadata: Type.Optional(Type.Union([
        Type.Partial(Type.Object({
            views: Type.Number(),
            likes: Type.Number(),
            comments: Type.Number(),
            shares: Type.Number(),
            bookmarks: Type.Number(),
            readTime: Type.Number(),
        })),
        Type.Undefined(),
    ])),
    seo: Type.Optional(Type.Union([
        Type.Partial(Type.Object({
            slug: Type.String(),
            metaTitle: Type.String(),
            metaDescription: Type.String(),
            keywords: Type.Array(Type.String()),
        })),
        Type.Undefined(),
    ])),
    createdAt: Type.Optional(Type.Union([Type.String(), Type.Undefined()])),
    updatedAt: Type.Optional(Type.Union([Type.String(), Type.Undefined()])),
    publishedAt: Type.Optional(Type.Union([Type.String(), Type.Undefined()])),
});
export const PostList = Type.Array(Post);
export const Comment = Type.Object({
    id: Type.Number(),
    postId: Type.Optional(Type.Union([Type.Number(), Type.Undefined()])),
    authorId: Type.Optional(Type.Union([Type.Number(), Type.Undefined()])),
    content: Type.Optional(Type.Union([Type.String(), Type.Undefined()])),
    parentId: Type.Optional(Type.Union([Type.Null(), Type.Undefined()])),
    likes: Type.Optional(Type.Union([Type.Number(), Type.Undefined()])),
    isApproved: Type.Optional(Type.Union([Type.Boolean(), Type.Undefined()])),
    isEdited: Type.Optional(Type.Union([Type.Boolean(), Type.Undefined()])),
    createdAt: Type.Optional(Type.Union([Type.String(), Type.Undefined()])),
    updatedAt: Type.Optional(Type.Union([Type.String(), Type.Undefined()])),
});
export const CommentList = Type.Array(Comment);
export const Categorie = Type.Object({
    id: Type.Number(),
    name: Type.Optional(Type.Union([Type.String(), Type.Undefined()])),
    slug: Type.Optional(Type.Union([Type.String(), Type.Undefined()])),
    description: Type.Optional(Type.Union([Type.String(), Type.Undefined()])),
    postCount: Type.Optional(Type.Union([Type.Number(), Type.Undefined()])),
    color: Type.Optional(Type.Union([Type.String(), Type.Undefined()])),
    icon: Type.Optional(Type.Union([Type.String(), Type.Undefined()])),
    isActive: Type.Optional(Type.Union([Type.Boolean(), Type.Undefined()])),
    parentId: Type.Optional(Type.Union([Type.Null(), Type.Undefined()])),
    createdAt: Type.Optional(Type.Union([Type.String(), Type.Undefined()])),
    metadata: Type.Optional(Type.Union([
        Type.Partial(Type.Object({
            totalViews: Type.Number(),
            averageRating: Type.Number(),
        })),
        Type.Undefined(),
    ])),
});
export const CategorieList = Type.Array(Categorie);
export const Product = Type.Object({
    id: Type.Number(),
    name: Type.Optional(Type.Union([Type.String(), Type.Undefined()])),
    description: Type.Optional(Type.Union([Type.String(), Type.Undefined()])),
    shortDescription: Type.Optional(Type.Union([Type.String(), Type.Undefined()])),
    price: Type.Optional(Type.Union([Type.Number(), Type.Undefined()])),
    originalPrice: Type.Optional(Type.Union([Type.Number(), Type.Undefined()])),
    currency: Type.Optional(Type.Union([Type.String(), Type.Undefined()])),
    categoryId: Type.Optional(Type.Union([Type.Number(), Type.Undefined()])),
    brand: Type.Optional(Type.Union([Type.String(), Type.Undefined()])),
    model: Type.Optional(Type.Union([Type.String(), Type.Undefined()])),
    sku: Type.Optional(Type.Union([Type.String(), Type.Undefined()])),
    barcode: Type.Optional(Type.Union([Type.String(), Type.Undefined()])),
    inventory: Type.Optional(Type.Union([
        Type.Partial(Type.Object({
            inStock: Type.Number(),
            reserved: Type.Number(),
            available: Type.Number(),
            lowStockThreshold: Type.Number(),
        })),
        Type.Undefined(),
    ])),
    images: Type.Optional(Type.Union([Type.Array(Type.String()), Type.Undefined()])),
    specifications: Type.Optional(Type.Union([
        Type.Partial(Type.Object({
            batteryLife: Type.String(),
            chargingTime: Type.String(),
            connectivity: Type.String(),
            weight: Type.String(),
            dimensions: Type.String(),
            colors: Type.Array(Type.String()),
            warranty: Type.String(),
        })),
        Type.Undefined(),
    ])),
    features: Type.Optional(Type.Union([Type.Array(Type.String()), Type.Undefined()])),
    ratings: Type.Optional(Type.Union([
        Type.Partial(Type.Object({
            average: Type.Number(),
            count: Type.Number(),
            breakdown: Type.Partial(Type.Object({
                1: Type.Number(),
                2: Type.Number(),
                3: Type.Number(),
                4: Type.Number(),
                5: Type.Number(),
            })),
        })),
        Type.Undefined(),
    ])),
    tags: Type.Optional(Type.Union([Type.Array(Type.String()), Type.Undefined()])),
    isActive: Type.Optional(Type.Union([Type.Boolean(), Type.Undefined()])),
    isFeatured: Type.Optional(Type.Union([Type.Boolean(), Type.Undefined()])),
    createdAt: Type.Optional(Type.Union([Type.String(), Type.Undefined()])),
    updatedAt: Type.Optional(Type.Union([Type.String(), Type.Undefined()])),
});
export const ProductList = Type.Array(Product);
export const Order = Type.Object({
    id: Type.Number(),
    userId: Type.Optional(Type.Union([Type.Number(), Type.Undefined()])),
    orderNumber: Type.Optional(Type.Union([Type.String(), Type.Undefined()])),
    items: Type.Optional(Type.Union([
        Type.Array(Type.Partial(Type.Object({
            productId: Type.Number(),
            productName: Type.String(),
            quantity: Type.Number(),
            unitPrice: Type.Number(),
            totalPrice: Type.Number(),
            sku: Type.String(),
        }))),
        Type.Undefined(),
    ])),
    status: Type.Optional(Type.Union([Type.String(), Type.Undefined()])),
    paymentStatus: Type.Optional(Type.Union([Type.String(), Type.Undefined()])),
    shippingMethod: Type.Optional(Type.Union([Type.String(), Type.Undefined()])),
    trackingNumber: Type.Optional(Type.Union([Type.String(), Type.Undefined()])),
    addresses: Type.Optional(Type.Union([
        Type.Partial(Type.Object({
            shipping: Type.Partial(Type.Object({
                name: Type.String(),
                street: Type.String(),
                apartment: Type.String(),
                city: Type.String(),
                state: Type.String(),
                zipCode: Type.String(),
                country: Type.String(),
                phone: Type.String(),
            })),
            billing: Type.Partial(Type.Object({
                name: Type.String(),
                street: Type.String(),
                apartment: Type.String(),
                city: Type.String(),
                state: Type.String(),
                zipCode: Type.String(),
                country: Type.String(),
                phone: Type.String(),
            })),
        })),
        Type.Undefined(),
    ])),
    totals: Type.Optional(Type.Union([
        Type.Partial(Type.Object({
            subtotal: Type.Number(),
            tax: Type.Number(),
            shipping: Type.Number(),
            discount: Type.Number(),
            total: Type.Number(),
        })),
        Type.Undefined(),
    ])),
    timeline: Type.Optional(Type.Union([
        Type.Array(Type.Partial(Type.Object({
            status: Type.String(),
            timestamp: Type.String(),
            note: Type.String(),
        }))),
        Type.Undefined(),
    ])),
    createdAt: Type.Optional(Type.Union([Type.String(), Type.Undefined()])),
    updatedAt: Type.Optional(Type.Union([Type.String(), Type.Undefined()])),
});
export const OrderList = Type.Array(Order);
export const Analytic = Type.Object({
    id: Type.Number(),
    date: Type.Optional(Type.Union([Type.String(), Type.Undefined()])),
    period: Type.Optional(Type.Union([Type.String(), Type.Undefined()])),
    metrics: Type.Optional(Type.Union([
        Type.Partial(Type.Object({
            users: Type.Partial(Type.Object({
                total: Type.Number(),
                new: Type.Number(),
                returning: Type.Number(),
                active: Type.Number(),
            })),
            traffic: Type.Partial(Type.Object({
                pageViews: Type.Number(),
                uniqueViews: Type.Number(),
                bounceRate: Type.Number(),
                avgSessionDuration: Type.Number(),
                topPages: Type.Array(Type.Partial(Type.Object({
                    path: Type.String(),
                    views: Type.Number(),
                }))),
            })),
            performance: Type.Partial(Type.Object({
                avgLoadTime: Type.Number(),
                apiCalls: Type.Number(),
                cacheHitRate: Type.Number(),
                errorRate: Type.Number(),
            })),
            business: Type.Partial(Type.Object({
                orders: Type.Number(),
                revenue: Type.Number(),
                conversionRate: Type.Number(),
                avgOrderValue: Type.Number(),
            })),
        })),
        Type.Undefined(),
    ])),
});
export const AnalyticList = Type.Array(Analytic);
export const Notification = Type.Object({
    id: Type.Number(),
    userId: Type.Optional(Type.Union([Type.Number(), Type.Undefined()])),
    type: Type.Optional(Type.Union([Type.String(), Type.Undefined()])),
    title: Type.Optional(Type.Union([Type.String(), Type.Undefined()])),
    message: Type.Optional(Type.Union([Type.String(), Type.Undefined()])),
    data: Type.Optional(Type.Union([
        Type.Partial(Type.Object({
            orderId: Type.Number(),
            trackingNumber: Type.String(),
        })),
        Type.Undefined(),
    ])),
    isRead: Type.Optional(Type.Union([Type.Boolean(), Type.Undefined()])),
    priority: Type.Optional(Type.Union([Type.String(), Type.Undefined()])),
    createdAt: Type.Optional(Type.Union([Type.String(), Type.Undefined()])),
});
export const NotificationList = Type.Array(Notification);
const __ENDPOINTS_START__ = Type.Object({});
export const get__users = Type.Object({
    method: Type.Literal("GET"),
    path: Type.Literal("/users"),
    requestFormat: Type.Literal("json"),
    parameters: Type.Object({
        query: Type.Partial(Type.Object({
            _page: Type.Number(),
            _limit: Type.Number(),
            _sort: Type.String(),
            _order: Type.Union([Type.Literal("asc"), Type.Literal("desc")]),
            q: Type.String(),
        })),
    }),
    responses: Type.Object({
        200: UserList,
    }),
});
export const post__users = Type.Object({
    method: Type.Literal("POST"),
    path: Type.Literal("/users"),
    requestFormat: Type.Literal("json"),
    parameters: Type.Object({
        body: User,
    }),
    responses: Type.Object({
        201: User,
        400: Type.Unknown(),
    }),
});
export const get__users_Id = Type.Object({
    method: Type.Literal("GET"),
    path: Type.Literal("/users/{id}"),
    requestFormat: Type.Literal("json"),
    parameters: Type.Object({
        path: Type.Object({
            id: Type.Number(),
        }),
    }),
    responses: Type.Object({
        200: User,
        404: Type.Unknown(),
    }),
});
export const put__users_Id = Type.Object({
    method: Type.Literal("PUT"),
    path: Type.Literal("/users/{id}"),
    requestFormat: Type.Literal("json"),
    parameters: Type.Object({
        path: Type.Object({
            id: Type.Number(),
        }),
        body: User,
    }),
    responses: Type.Object({
        200: User,
        400: Type.Unknown(),
        404: Type.Unknown(),
    }),
});
export const patch__users_Id = Type.Object({
    method: Type.Literal("PATCH"),
    path: Type.Literal("/users/{id}"),
    requestFormat: Type.Literal("json"),
    parameters: Type.Object({
        path: Type.Object({
            id: Type.Number(),
        }),
        body: User,
    }),
    responses: Type.Object({
        200: User,
        400: Type.Unknown(),
        404: Type.Unknown(),
    }),
});
export const delete__users_Id = Type.Object({
    method: Type.Literal("DELETE"),
    path: Type.Literal("/users/{id}"),
    requestFormat: Type.Literal("json"),
    parameters: Type.Object({
        path: Type.Object({
            id: Type.Number(),
        }),
    }),
    responses: Type.Object({
        200: Type.Unknown(),
        404: Type.Unknown(),
    }),
});
export const get__posts = Type.Object({
    method: Type.Literal("GET"),
    path: Type.Literal("/posts"),
    requestFormat: Type.Literal("json"),
    parameters: Type.Object({
        query: Type.Partial(Type.Object({
            _page: Type.Number(),
            _limit: Type.Number(),
            _sort: Type.String(),
            _order: Type.Union([Type.Literal("asc"), Type.Literal("desc")]),
            q: Type.String(),
        })),
    }),
    responses: Type.Object({
        200: PostList,
    }),
});
export const post__posts = Type.Object({
    method: Type.Literal("POST"),
    path: Type.Literal("/posts"),
    requestFormat: Type.Literal("json"),
    parameters: Type.Object({
        body: Post,
    }),
    responses: Type.Object({
        201: Post,
        400: Type.Unknown(),
    }),
});
export const get__posts_Id = Type.Object({
    method: Type.Literal("GET"),
    path: Type.Literal("/posts/{id}"),
    requestFormat: Type.Literal("json"),
    parameters: Type.Object({
        path: Type.Object({
            id: Type.Number(),
        }),
    }),
    responses: Type.Object({
        200: Post,
        404: Type.Unknown(),
    }),
});
export const put__posts_Id = Type.Object({
    method: Type.Literal("PUT"),
    path: Type.Literal("/posts/{id}"),
    requestFormat: Type.Literal("json"),
    parameters: Type.Object({
        path: Type.Object({
            id: Type.Number(),
        }),
        body: Post,
    }),
    responses: Type.Object({
        200: Post,
        400: Type.Unknown(),
        404: Type.Unknown(),
    }),
});
export const patch__posts_Id = Type.Object({
    method: Type.Literal("PATCH"),
    path: Type.Literal("/posts/{id}"),
    requestFormat: Type.Literal("json"),
    parameters: Type.Object({
        path: Type.Object({
            id: Type.Number(),
        }),
        body: Post,
    }),
    responses: Type.Object({
        200: Post,
        400: Type.Unknown(),
        404: Type.Unknown(),
    }),
});
export const delete__posts_Id = Type.Object({
    method: Type.Literal("DELETE"),
    path: Type.Literal("/posts/{id}"),
    requestFormat: Type.Literal("json"),
    parameters: Type.Object({
        path: Type.Object({
            id: Type.Number(),
        }),
    }),
    responses: Type.Object({
        200: Type.Unknown(),
        404: Type.Unknown(),
    }),
});
export const get__comments = Type.Object({
    method: Type.Literal("GET"),
    path: Type.Literal("/comments"),
    requestFormat: Type.Literal("json"),
    parameters: Type.Object({
        query: Type.Partial(Type.Object({
            _page: Type.Number(),
            _limit: Type.Number(),
            _sort: Type.String(),
            _order: Type.Union([Type.Literal("asc"), Type.Literal("desc")]),
            q: Type.String(),
        })),
    }),
    responses: Type.Object({
        200: CommentList,
    }),
});
export const post__comments = Type.Object({
    method: Type.Literal("POST"),
    path: Type.Literal("/comments"),
    requestFormat: Type.Literal("json"),
    parameters: Type.Object({
        body: Comment,
    }),
    responses: Type.Object({
        201: Comment,
        400: Type.Unknown(),
    }),
});
export const get__comments_Id = Type.Object({
    method: Type.Literal("GET"),
    path: Type.Literal("/comments/{id}"),
    requestFormat: Type.Literal("json"),
    parameters: Type.Object({
        path: Type.Object({
            id: Type.Number(),
        }),
    }),
    responses: Type.Object({
        200: Comment,
        404: Type.Unknown(),
    }),
});
export const put__comments_Id = Type.Object({
    method: Type.Literal("PUT"),
    path: Type.Literal("/comments/{id}"),
    requestFormat: Type.Literal("json"),
    parameters: Type.Object({
        path: Type.Object({
            id: Type.Number(),
        }),
        body: Comment,
    }),
    responses: Type.Object({
        200: Comment,
        400: Type.Unknown(),
        404: Type.Unknown(),
    }),
});
export const patch__comments_Id = Type.Object({
    method: Type.Literal("PATCH"),
    path: Type.Literal("/comments/{id}"),
    requestFormat: Type.Literal("json"),
    parameters: Type.Object({
        path: Type.Object({
            id: Type.Number(),
        }),
        body: Comment,
    }),
    responses: Type.Object({
        200: Comment,
        400: Type.Unknown(),
        404: Type.Unknown(),
    }),
});
export const delete__comments_Id = Type.Object({
    method: Type.Literal("DELETE"),
    path: Type.Literal("/comments/{id}"),
    requestFormat: Type.Literal("json"),
    parameters: Type.Object({
        path: Type.Object({
            id: Type.Number(),
        }),
    }),
    responses: Type.Object({
        200: Type.Unknown(),
        404: Type.Unknown(),
    }),
});
export const get__categories = Type.Object({
    method: Type.Literal("GET"),
    path: Type.Literal("/categories"),
    requestFormat: Type.Literal("json"),
    parameters: Type.Object({
        query: Type.Partial(Type.Object({
            _page: Type.Number(),
            _limit: Type.Number(),
            _sort: Type.String(),
            _order: Type.Union([Type.Literal("asc"), Type.Literal("desc")]),
            q: Type.String(),
        })),
    }),
    responses: Type.Object({
        200: CategorieList,
    }),
});
export const post__categories = Type.Object({
    method: Type.Literal("POST"),
    path: Type.Literal("/categories"),
    requestFormat: Type.Literal("json"),
    parameters: Type.Object({
        body: Categorie,
    }),
    responses: Type.Object({
        201: Categorie,
        400: Type.Unknown(),
    }),
});
export const get__categories_Id = Type.Object({
    method: Type.Literal("GET"),
    path: Type.Literal("/categories/{id}"),
    requestFormat: Type.Literal("json"),
    parameters: Type.Object({
        path: Type.Object({
            id: Type.Number(),
        }),
    }),
    responses: Type.Object({
        200: Categorie,
        404: Type.Unknown(),
    }),
});
export const put__categories_Id = Type.Object({
    method: Type.Literal("PUT"),
    path: Type.Literal("/categories/{id}"),
    requestFormat: Type.Literal("json"),
    parameters: Type.Object({
        path: Type.Object({
            id: Type.Number(),
        }),
        body: Categorie,
    }),
    responses: Type.Object({
        200: Categorie,
        400: Type.Unknown(),
        404: Type.Unknown(),
    }),
});
export const patch__categories_Id = Type.Object({
    method: Type.Literal("PATCH"),
    path: Type.Literal("/categories/{id}"),
    requestFormat: Type.Literal("json"),
    parameters: Type.Object({
        path: Type.Object({
            id: Type.Number(),
        }),
        body: Categorie,
    }),
    responses: Type.Object({
        200: Categorie,
        400: Type.Unknown(),
        404: Type.Unknown(),
    }),
});
export const delete__categories_Id = Type.Object({
    method: Type.Literal("DELETE"),
    path: Type.Literal("/categories/{id}"),
    requestFormat: Type.Literal("json"),
    parameters: Type.Object({
        path: Type.Object({
            id: Type.Number(),
        }),
    }),
    responses: Type.Object({
        200: Type.Unknown(),
        404: Type.Unknown(),
    }),
});
export const get__products = Type.Object({
    method: Type.Literal("GET"),
    path: Type.Literal("/products"),
    requestFormat: Type.Literal("json"),
    parameters: Type.Object({
        query: Type.Partial(Type.Object({
            _page: Type.Number(),
            _limit: Type.Number(),
            _sort: Type.String(),
            _order: Type.Union([Type.Literal("asc"), Type.Literal("desc")]),
            q: Type.String(),
        })),
    }),
    responses: Type.Object({
        200: ProductList,
    }),
});
export const post__products = Type.Object({
    method: Type.Literal("POST"),
    path: Type.Literal("/products"),
    requestFormat: Type.Literal("json"),
    parameters: Type.Object({
        body: Product,
    }),
    responses: Type.Object({
        201: Product,
        400: Type.Unknown(),
    }),
});
export const get__products_Id = Type.Object({
    method: Type.Literal("GET"),
    path: Type.Literal("/products/{id}"),
    requestFormat: Type.Literal("json"),
    parameters: Type.Object({
        path: Type.Object({
            id: Type.Number(),
        }),
    }),
    responses: Type.Object({
        200: Product,
        404: Type.Unknown(),
    }),
});
export const put__products_Id = Type.Object({
    method: Type.Literal("PUT"),
    path: Type.Literal("/products/{id}"),
    requestFormat: Type.Literal("json"),
    parameters: Type.Object({
        path: Type.Object({
            id: Type.Number(),
        }),
        body: Product,
    }),
    responses: Type.Object({
        200: Product,
        400: Type.Unknown(),
        404: Type.Unknown(),
    }),
});
export const patch__products_Id = Type.Object({
    method: Type.Literal("PATCH"),
    path: Type.Literal("/products/{id}"),
    requestFormat: Type.Literal("json"),
    parameters: Type.Object({
        path: Type.Object({
            id: Type.Number(),
        }),
        body: Product,
    }),
    responses: Type.Object({
        200: Product,
        400: Type.Unknown(),
        404: Type.Unknown(),
    }),
});
export const delete__products_Id = Type.Object({
    method: Type.Literal("DELETE"),
    path: Type.Literal("/products/{id}"),
    requestFormat: Type.Literal("json"),
    parameters: Type.Object({
        path: Type.Object({
            id: Type.Number(),
        }),
    }),
    responses: Type.Object({
        200: Type.Unknown(),
        404: Type.Unknown(),
    }),
});
export const get__orders = Type.Object({
    method: Type.Literal("GET"),
    path: Type.Literal("/orders"),
    requestFormat: Type.Literal("json"),
    parameters: Type.Object({
        query: Type.Partial(Type.Object({
            _page: Type.Number(),
            _limit: Type.Number(),
            _sort: Type.String(),
            _order: Type.Union([Type.Literal("asc"), Type.Literal("desc")]),
            q: Type.String(),
        })),
    }),
    responses: Type.Object({
        200: OrderList,
    }),
});
export const post__orders = Type.Object({
    method: Type.Literal("POST"),
    path: Type.Literal("/orders"),
    requestFormat: Type.Literal("json"),
    parameters: Type.Object({
        body: Order,
    }),
    responses: Type.Object({
        201: Order,
        400: Type.Unknown(),
    }),
});
export const get__orders_Id = Type.Object({
    method: Type.Literal("GET"),
    path: Type.Literal("/orders/{id}"),
    requestFormat: Type.Literal("json"),
    parameters: Type.Object({
        path: Type.Object({
            id: Type.Number(),
        }),
    }),
    responses: Type.Object({
        200: Order,
        404: Type.Unknown(),
    }),
});
export const put__orders_Id = Type.Object({
    method: Type.Literal("PUT"),
    path: Type.Literal("/orders/{id}"),
    requestFormat: Type.Literal("json"),
    parameters: Type.Object({
        path: Type.Object({
            id: Type.Number(),
        }),
        body: Order,
    }),
    responses: Type.Object({
        200: Order,
        400: Type.Unknown(),
        404: Type.Unknown(),
    }),
});
export const patch__orders_Id = Type.Object({
    method: Type.Literal("PATCH"),
    path: Type.Literal("/orders/{id}"),
    requestFormat: Type.Literal("json"),
    parameters: Type.Object({
        path: Type.Object({
            id: Type.Number(),
        }),
        body: Order,
    }),
    responses: Type.Object({
        200: Order,
        400: Type.Unknown(),
        404: Type.Unknown(),
    }),
});
export const delete__orders_Id = Type.Object({
    method: Type.Literal("DELETE"),
    path: Type.Literal("/orders/{id}"),
    requestFormat: Type.Literal("json"),
    parameters: Type.Object({
        path: Type.Object({
            id: Type.Number(),
        }),
    }),
    responses: Type.Object({
        200: Type.Unknown(),
        404: Type.Unknown(),
    }),
});
export const get__analytics = Type.Object({
    method: Type.Literal("GET"),
    path: Type.Literal("/analytics"),
    requestFormat: Type.Literal("json"),
    parameters: Type.Object({
        query: Type.Partial(Type.Object({
            _page: Type.Number(),
            _limit: Type.Number(),
            _sort: Type.String(),
            _order: Type.Union([Type.Literal("asc"), Type.Literal("desc")]),
            q: Type.String(),
        })),
    }),
    responses: Type.Object({
        200: AnalyticList,
    }),
});
export const post__analytics = Type.Object({
    method: Type.Literal("POST"),
    path: Type.Literal("/analytics"),
    requestFormat: Type.Literal("json"),
    parameters: Type.Object({
        body: Analytic,
    }),
    responses: Type.Object({
        201: Analytic,
        400: Type.Unknown(),
    }),
});
export const get__analytics_Id = Type.Object({
    method: Type.Literal("GET"),
    path: Type.Literal("/analytics/{id}"),
    requestFormat: Type.Literal("json"),
    parameters: Type.Object({
        path: Type.Object({
            id: Type.Number(),
        }),
    }),
    responses: Type.Object({
        200: Analytic,
        404: Type.Unknown(),
    }),
});
export const put__analytics_Id = Type.Object({
    method: Type.Literal("PUT"),
    path: Type.Literal("/analytics/{id}"),
    requestFormat: Type.Literal("json"),
    parameters: Type.Object({
        path: Type.Object({
            id: Type.Number(),
        }),
        body: Analytic,
    }),
    responses: Type.Object({
        200: Analytic,
        400: Type.Unknown(),
        404: Type.Unknown(),
    }),
});
export const patch__analytics_Id = Type.Object({
    method: Type.Literal("PATCH"),
    path: Type.Literal("/analytics/{id}"),
    requestFormat: Type.Literal("json"),
    parameters: Type.Object({
        path: Type.Object({
            id: Type.Number(),
        }),
        body: Analytic,
    }),
    responses: Type.Object({
        200: Analytic,
        400: Type.Unknown(),
        404: Type.Unknown(),
    }),
});
export const delete__analytics_Id = Type.Object({
    method: Type.Literal("DELETE"),
    path: Type.Literal("/analytics/{id}"),
    requestFormat: Type.Literal("json"),
    parameters: Type.Object({
        path: Type.Object({
            id: Type.Number(),
        }),
    }),
    responses: Type.Object({
        200: Type.Unknown(),
        404: Type.Unknown(),
    }),
});
export const get__notifications = Type.Object({
    method: Type.Literal("GET"),
    path: Type.Literal("/notifications"),
    requestFormat: Type.Literal("json"),
    parameters: Type.Object({
        query: Type.Partial(Type.Object({
            _page: Type.Number(),
            _limit: Type.Number(),
            _sort: Type.String(),
            _order: Type.Union([Type.Literal("asc"), Type.Literal("desc")]),
            q: Type.String(),
        })),
    }),
    responses: Type.Object({
        200: NotificationList,
    }),
});
export const post__notifications = Type.Object({
    method: Type.Literal("POST"),
    path: Type.Literal("/notifications"),
    requestFormat: Type.Literal("json"),
    parameters: Type.Object({
        body: Notification,
    }),
    responses: Type.Object({
        201: Notification,
        400: Type.Unknown(),
    }),
});
export const get__notifications_Id = Type.Object({
    method: Type.Literal("GET"),
    path: Type.Literal("/notifications/{id}"),
    requestFormat: Type.Literal("json"),
    parameters: Type.Object({
        path: Type.Object({
            id: Type.Number(),
        }),
    }),
    responses: Type.Object({
        200: Notification,
        404: Type.Unknown(),
    }),
});
export const put__notifications_Id = Type.Object({
    method: Type.Literal("PUT"),
    path: Type.Literal("/notifications/{id}"),
    requestFormat: Type.Literal("json"),
    parameters: Type.Object({
        path: Type.Object({
            id: Type.Number(),
        }),
        body: Notification,
    }),
    responses: Type.Object({
        200: Notification,
        400: Type.Unknown(),
        404: Type.Unknown(),
    }),
});
export const patch__notifications_Id = Type.Object({
    method: Type.Literal("PATCH"),
    path: Type.Literal("/notifications/{id}"),
    requestFormat: Type.Literal("json"),
    parameters: Type.Object({
        path: Type.Object({
            id: Type.Number(),
        }),
        body: Notification,
    }),
    responses: Type.Object({
        200: Notification,
        400: Type.Unknown(),
        404: Type.Unknown(),
    }),
});
export const delete__notifications_Id = Type.Object({
    method: Type.Literal("DELETE"),
    path: Type.Literal("/notifications/{id}"),
    requestFormat: Type.Literal("json"),
    parameters: Type.Object({
        path: Type.Object({
            id: Type.Number(),
        }),
    }),
    responses: Type.Object({
        200: Type.Unknown(),
        404: Type.Unknown(),
    }),
});
export const get_ = Type.Object({
    method: Type.Literal("GET"),
    path: Type.Literal(""),
    requestFormat: Type.Literal("json"),
    parameters: Type.Never(),
    responses: Type.Object({
        200: Type.Record(Type.String(), Type.Unknown()),
    }),
});
export const get__users__id_posts = Type.Object({
    method: Type.Literal("GET"),
    path: Type.Literal("/users/:id/posts"),
    requestFormat: Type.Literal("json"),
    parameters: Type.Never(),
    responses: Type.Object({
        200: Type.Record(Type.String(), Type.Unknown()),
    }),
});
export const get__users__id_comments = Type.Object({
    method: Type.Literal("GET"),
    path: Type.Literal("/users/:id/comments"),
    requestFormat: Type.Literal("json"),
    parameters: Type.Never(),
    responses: Type.Object({
        200: Type.Record(Type.String(), Type.Unknown()),
    }),
});
export const get__users__id_orders = Type.Object({
    method: Type.Literal("GET"),
    path: Type.Literal("/users/:id/orders"),
    requestFormat: Type.Literal("json"),
    parameters: Type.Never(),
    responses: Type.Object({
        200: Type.Record(Type.String(), Type.Unknown()),
    }),
});
export const get__users__id_notifications = Type.Object({
    method: Type.Literal("GET"),
    path: Type.Literal("/users/:id/notifications"),
    requestFormat: Type.Literal("json"),
    parameters: Type.Never(),
    responses: Type.Object({
        200: Type.Record(Type.String(), Type.Unknown()),
    }),
});
export const get__posts__id_comments = Type.Object({
    method: Type.Literal("GET"),
    path: Type.Literal("/posts/:id/comments"),
    requestFormat: Type.Literal("json"),
    parameters: Type.Never(),
    responses: Type.Object({
        200: Type.Record(Type.String(), Type.Unknown()),
    }),
});
export const get__categories__id_posts = Type.Object({
    method: Type.Literal("GET"),
    path: Type.Literal("/categories/:id/posts"),
    requestFormat: Type.Literal("json"),
    parameters: Type.Never(),
    responses: Type.Object({
        200: Type.Record(Type.String(), Type.Unknown()),
    }),
});
export const get__orders__id_items = Type.Object({
    method: Type.Literal("GET"),
    path: Type.Literal("/orders/:id/items"),
    requestFormat: Type.Literal("json"),
    parameters: Type.Never(),
    responses: Type.Object({
        200: Type.Record(Type.String(), Type.Unknown()),
    }),
});
export const get__products_search = Type.Object({
    method: Type.Literal("GET"),
    path: Type.Literal("/products/search"),
    requestFormat: Type.Literal("json"),
    parameters: Type.Never(),
    responses: Type.Object({
        200: Type.Record(Type.String(), Type.Unknown()),
    }),
});
export const get__posts_search = Type.Object({
    method: Type.Literal("GET"),
    path: Type.Literal("/posts/search"),
    requestFormat: Type.Literal("json"),
    parameters: Type.Never(),
    responses: Type.Object({
        200: Type.Record(Type.String(), Type.Unknown()),
    }),
});
export const get__users_search = Type.Object({
    method: Type.Literal("GET"),
    path: Type.Literal("/users/search"),
    requestFormat: Type.Literal("json"),
    parameters: Type.Never(),
    responses: Type.Object({
        200: Type.Record(Type.String(), Type.Unknown()),
    }),
});
export const get__featured_posts = Type.Object({
    method: Type.Literal("GET"),
    path: Type.Literal("/featured/posts"),
    requestFormat: Type.Literal("json"),
    parameters: Type.Never(),
    responses: Type.Object({
        200: Type.Record(Type.String(), Type.Unknown()),
    }),
});
export const get__published_posts = Type.Object({
    method: Type.Literal("GET"),
    path: Type.Literal("/published/posts"),
    requestFormat: Type.Literal("json"),
    parameters: Type.Never(),
    responses: Type.Object({
        200: Type.Record(Type.String(), Type.Unknown()),
    }),
});
export const get__stats_analytics = Type.Object({
    method: Type.Literal("GET"),
    path: Type.Literal("/stats/analytics"),
    requestFormat: Type.Literal("json"),
    parameters: Type.Never(),
    responses: Type.Object({
        200: Type.Record(Type.String(), Type.Unknown()),
    }),
});
export const get__stats_daily__date = Type.Object({
    method: Type.Literal("GET"),
    path: Type.Literal("/stats/daily/:date"),
    requestFormat: Type.Literal("json"),
    parameters: Type.Never(),
    responses: Type.Object({
        200: Type.Record(Type.String(), Type.Unknown()),
    }),
});
export const get__inventory_lowStock = Type.Object({
    method: Type.Literal("GET"),
    path: Type.Literal("/inventory/low-stock"),
    requestFormat: Type.Literal("json"),
    parameters: Type.Never(),
    responses: Type.Object({
        200: Type.Record(Type.String(), Type.Unknown()),
    }),
});
export const get__orders_byStatus__status = Type.Object({
    method: Type.Literal("GET"),
    path: Type.Literal("/orders/by-status/:status"),
    requestFormat: Type.Literal("json"),
    parameters: Type.Never(),
    responses: Type.Object({
        200: Type.Record(Type.String(), Type.Unknown()),
    }),
});
export const get__bulk_users = Type.Object({
    method: Type.Literal("GET"),
    path: Type.Literal("/bulk/users"),
    requestFormat: Type.Literal("json"),
    parameters: Type.Never(),
    responses: Type.Object({
        200: Type.Record(Type.String(), Type.Unknown()),
    }),
});
export const get__bulk_posts = Type.Object({
    method: Type.Literal("GET"),
    path: Type.Literal("/bulk/posts"),
    requestFormat: Type.Literal("json"),
    parameters: Type.Never(),
    responses: Type.Object({
        200: Type.Record(Type.String(), Type.Unknown()),
    }),
});
export const get__bulk_products = Type.Object({
    method: Type.Literal("GET"),
    path: Type.Literal("/bulk/products"),
    requestFormat: Type.Literal("json"),
    parameters: Type.Never(),
    responses: Type.Object({
        200: Type.Record(Type.String(), Type.Unknown()),
    }),
});
const __ENDPOINTS_END__ = Type.Object({});
// <EndpointByMethod>
export const EndpointByMethod = {
    get: {
        "/users": get__users,
        "/users/{id}": get__users_Id,
        "/posts": get__posts,
        "/posts/{id}": get__posts_Id,
        "/comments": get__comments,
        "/comments/{id}": get__comments_Id,
        "/categories": get__categories,
        "/categories/{id}": get__categories_Id,
        "/products": get__products,
        "/products/{id}": get__products_Id,
        "/orders": get__orders,
        "/orders/{id}": get__orders_Id,
        "/analytics": get__analytics,
        "/analytics/{id}": get__analytics_Id,
        "/notifications": get__notifications,
        "/notifications/{id}": get__notifications_Id,
        "": get_,
        "/users/:id/posts": get__users__id_posts,
        "/users/:id/comments": get__users__id_comments,
        "/users/:id/orders": get__users__id_orders,
        "/users/:id/notifications": get__users__id_notifications,
        "/posts/:id/comments": get__posts__id_comments,
        "/categories/:id/posts": get__categories__id_posts,
        "/orders/:id/items": get__orders__id_items,
        "/products/search": get__products_search,
        "/posts/search": get__posts_search,
        "/users/search": get__users_search,
        "/featured/posts": get__featured_posts,
        "/published/posts": get__published_posts,
        "/stats/analytics": get__stats_analytics,
        "/stats/daily/:date": get__stats_daily__date,
        "/inventory/low-stock": get__inventory_lowStock,
        "/orders/by-status/:status": get__orders_byStatus__status,
        "/bulk/users": get__bulk_users,
        "/bulk/posts": get__bulk_posts,
        "/bulk/products": get__bulk_products,
    },
    post: {
        "/users": post__users,
        "/posts": post__posts,
        "/comments": post__comments,
        "/categories": post__categories,
        "/products": post__products,
        "/orders": post__orders,
        "/analytics": post__analytics,
        "/notifications": post__notifications,
    },
    put: {
        "/users/{id}": put__users_Id,
        "/posts/{id}": put__posts_Id,
        "/comments/{id}": put__comments_Id,
        "/categories/{id}": put__categories_Id,
        "/products/{id}": put__products_Id,
        "/orders/{id}": put__orders_Id,
        "/analytics/{id}": put__analytics_Id,
        "/notifications/{id}": put__notifications_Id,
    },
    patch: {
        "/users/{id}": patch__users_Id,
        "/posts/{id}": patch__posts_Id,
        "/comments/{id}": patch__comments_Id,
        "/categories/{id}": patch__categories_Id,
        "/products/{id}": patch__products_Id,
        "/orders/{id}": patch__orders_Id,
        "/analytics/{id}": patch__analytics_Id,
        "/notifications/{id}": patch__notifications_Id,
    },
    delete: {
        "/users/{id}": delete__users_Id,
        "/posts/{id}": delete__posts_Id,
        "/comments/{id}": delete__comments_Id,
        "/categories/{id}": delete__categories_Id,
        "/products/{id}": delete__products_Id,
        "/orders/{id}": delete__orders_Id,
        "/analytics/{id}": delete__analytics_Id,
        "/notifications/{id}": delete__notifications_Id,
    },
};
export class GeneratedClient {
    baseURL;
    defaultHeaders;
    constructor(config = {}) {
        this.baseURL = config.baseURL || "";
        this.defaultHeaders = config.defaultHeaders || {};
    }
    async request(method, path, options = {}) {
        const url = this.baseURL + path;
        const headers = { ...this.defaultHeaders, ...options.headers };
        const response = await fetch(url, {
            method,
            headers,
            body: options.body ? JSON.stringify(options.body) : undefined
        });
        if (!response.ok) {
            throw new Error(`HTTP ${response.status}: ${response.statusText}`);
        }
        return response.json();
    }
    // Generic methods
    async get(path, params) {
        let url = path;
        if (params && Object.keys(params).length > 0) {
            const query = new URLSearchParams(params).toString();
            url += `?${query}`;
        }
        return this.request("GET", url);
    }
    async post(path, body) {
        return this.request("POST", path, { body });
    }
    async put(path, body) {
        return this.request("PUT", path, { body });
    }
    async patch(path, body) {
        return this.request("PATCH", path, { body });
    }
    async delete(path) {
        return this.request("DELETE", path);
    }
}
export function createClient(config) {
    return new GeneratedClient(config);
}
