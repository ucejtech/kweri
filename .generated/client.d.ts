import { type Static } from "kweri";
export type User = Static<typeof User>;
export declare const User: import("@sinclair/typebox").TObject<{
    id: import("@sinclair/typebox").TNumber;
    username: import("@sinclair/typebox").TOptional<import("@sinclair/typebox").TUnion<[import("@sinclair/typebox").TString, import("@sinclair/typebox").TUndefined]>>;
    email: import("@sinclair/typebox").TOptional<import("@sinclair/typebox").TUnion<[import("@sinclair/typebox").TString, import("@sinclair/typebox").TUndefined]>>;
    profile: import("@sinclair/typebox").TOptional<import("@sinclair/typebox").TUnion<[import("@sinclair/typebox").TObject<{
        firstName: import("@sinclair/typebox").TOptional<import("@sinclair/typebox").TString>;
        lastName: import("@sinclair/typebox").TOptional<import("@sinclair/typebox").TString>;
        avatar: import("@sinclair/typebox").TOptional<import("@sinclair/typebox").TString>;
        bio: import("@sinclair/typebox").TOptional<import("@sinclair/typebox").TString>;
        location: import("@sinclair/typebox").TOptional<import("@sinclair/typebox").TString>;
        website: import("@sinclair/typebox").TOptional<import("@sinclair/typebox").TString>;
    }>, import("@sinclair/typebox").TUndefined]>>;
    preferences: import("@sinclair/typebox").TOptional<import("@sinclair/typebox").TUnion<[import("@sinclair/typebox").TObject<{
        theme: import("@sinclair/typebox").TOptional<import("@sinclair/typebox").TString>;
        notifications: import("@sinclair/typebox").TOptional<import("@sinclair/typebox").TBoolean>;
        language: import("@sinclair/typebox").TOptional<import("@sinclair/typebox").TString>;
        timezone: import("@sinclair/typebox").TOptional<import("@sinclair/typebox").TString>;
        emailNotifications: import("@sinclair/typebox").TOptional<import("@sinclair/typebox").TObject<{
            marketing: import("@sinclair/typebox").TOptional<import("@sinclair/typebox").TBoolean>;
            security: import("@sinclair/typebox").TOptional<import("@sinclair/typebox").TBoolean>;
            updates: import("@sinclair/typebox").TOptional<import("@sinclair/typebox").TBoolean>;
        }>>;
    }>, import("@sinclair/typebox").TUndefined]>>;
    createdAt: import("@sinclair/typebox").TOptional<import("@sinclair/typebox").TUnion<[import("@sinclair/typebox").TString, import("@sinclair/typebox").TUndefined]>>;
    lastLogin: import("@sinclair/typebox").TOptional<import("@sinclair/typebox").TUnion<[import("@sinclair/typebox").TString, import("@sinclair/typebox").TUndefined]>>;
    isActive: import("@sinclair/typebox").TOptional<import("@sinclair/typebox").TUnion<[import("@sinclair/typebox").TBoolean, import("@sinclair/typebox").TUndefined]>>;
    role: import("@sinclair/typebox").TOptional<import("@sinclair/typebox").TUnion<[import("@sinclair/typebox").TString, import("@sinclair/typebox").TUndefined]>>;
    stats: import("@sinclair/typebox").TOptional<import("@sinclair/typebox").TUnion<[import("@sinclair/typebox").TObject<{
        postsCreated: import("@sinclair/typebox").TOptional<import("@sinclair/typebox").TNumber>;
        commentsPosted: import("@sinclair/typebox").TOptional<import("@sinclair/typebox").TNumber>;
        loginCount: import("@sinclair/typebox").TOptional<import("@sinclair/typebox").TNumber>;
    }>, import("@sinclair/typebox").TUndefined]>>;
}>;
export type UserList = Static<typeof UserList>;
export declare const UserList: import("@sinclair/typebox").TArray<import("@sinclair/typebox").TObject<{
    id: import("@sinclair/typebox").TNumber;
    username: import("@sinclair/typebox").TOptional<import("@sinclair/typebox").TUnion<[import("@sinclair/typebox").TString, import("@sinclair/typebox").TUndefined]>>;
    email: import("@sinclair/typebox").TOptional<import("@sinclair/typebox").TUnion<[import("@sinclair/typebox").TString, import("@sinclair/typebox").TUndefined]>>;
    profile: import("@sinclair/typebox").TOptional<import("@sinclair/typebox").TUnion<[import("@sinclair/typebox").TObject<{
        firstName: import("@sinclair/typebox").TOptional<import("@sinclair/typebox").TString>;
        lastName: import("@sinclair/typebox").TOptional<import("@sinclair/typebox").TString>;
        avatar: import("@sinclair/typebox").TOptional<import("@sinclair/typebox").TString>;
        bio: import("@sinclair/typebox").TOptional<import("@sinclair/typebox").TString>;
        location: import("@sinclair/typebox").TOptional<import("@sinclair/typebox").TString>;
        website: import("@sinclair/typebox").TOptional<import("@sinclair/typebox").TString>;
    }>, import("@sinclair/typebox").TUndefined]>>;
    preferences: import("@sinclair/typebox").TOptional<import("@sinclair/typebox").TUnion<[import("@sinclair/typebox").TObject<{
        theme: import("@sinclair/typebox").TOptional<import("@sinclair/typebox").TString>;
        notifications: import("@sinclair/typebox").TOptional<import("@sinclair/typebox").TBoolean>;
        language: import("@sinclair/typebox").TOptional<import("@sinclair/typebox").TString>;
        timezone: import("@sinclair/typebox").TOptional<import("@sinclair/typebox").TString>;
        emailNotifications: import("@sinclair/typebox").TOptional<import("@sinclair/typebox").TObject<{
            marketing: import("@sinclair/typebox").TOptional<import("@sinclair/typebox").TBoolean>;
            security: import("@sinclair/typebox").TOptional<import("@sinclair/typebox").TBoolean>;
            updates: import("@sinclair/typebox").TOptional<import("@sinclair/typebox").TBoolean>;
        }>>;
    }>, import("@sinclair/typebox").TUndefined]>>;
    createdAt: import("@sinclair/typebox").TOptional<import("@sinclair/typebox").TUnion<[import("@sinclair/typebox").TString, import("@sinclair/typebox").TUndefined]>>;
    lastLogin: import("@sinclair/typebox").TOptional<import("@sinclair/typebox").TUnion<[import("@sinclair/typebox").TString, import("@sinclair/typebox").TUndefined]>>;
    isActive: import("@sinclair/typebox").TOptional<import("@sinclair/typebox").TUnion<[import("@sinclair/typebox").TBoolean, import("@sinclair/typebox").TUndefined]>>;
    role: import("@sinclair/typebox").TOptional<import("@sinclair/typebox").TUnion<[import("@sinclair/typebox").TString, import("@sinclair/typebox").TUndefined]>>;
    stats: import("@sinclair/typebox").TOptional<import("@sinclair/typebox").TUnion<[import("@sinclair/typebox").TObject<{
        postsCreated: import("@sinclair/typebox").TOptional<import("@sinclair/typebox").TNumber>;
        commentsPosted: import("@sinclair/typebox").TOptional<import("@sinclair/typebox").TNumber>;
        loginCount: import("@sinclair/typebox").TOptional<import("@sinclair/typebox").TNumber>;
    }>, import("@sinclair/typebox").TUndefined]>>;
}>>;
export type Post = Static<typeof Post>;
export declare const Post: import("@sinclair/typebox").TObject<{
    id: import("@sinclair/typebox").TNumber;
    title: import("@sinclair/typebox").TOptional<import("@sinclair/typebox").TUnion<[import("@sinclair/typebox").TString, import("@sinclair/typebox").TUndefined]>>;
    content: import("@sinclair/typebox").TOptional<import("@sinclair/typebox").TUnion<[import("@sinclair/typebox").TString, import("@sinclair/typebox").TUndefined]>>;
    excerpt: import("@sinclair/typebox").TOptional<import("@sinclair/typebox").TUnion<[import("@sinclair/typebox").TString, import("@sinclair/typebox").TUndefined]>>;
    authorId: import("@sinclair/typebox").TOptional<import("@sinclair/typebox").TUnion<[import("@sinclair/typebox").TNumber, import("@sinclair/typebox").TUndefined]>>;
    categoryId: import("@sinclair/typebox").TOptional<import("@sinclair/typebox").TUnion<[import("@sinclair/typebox").TNumber, import("@sinclair/typebox").TUndefined]>>;
    tags: import("@sinclair/typebox").TOptional<import("@sinclair/typebox").TUnion<[import("@sinclair/typebox").TArray<import("@sinclair/typebox").TString>, import("@sinclair/typebox").TUndefined]>>;
    status: import("@sinclair/typebox").TOptional<import("@sinclair/typebox").TUnion<[import("@sinclair/typebox").TString, import("@sinclair/typebox").TUndefined]>>;
    featured: import("@sinclair/typebox").TOptional<import("@sinclair/typebox").TUnion<[import("@sinclair/typebox").TBoolean, import("@sinclair/typebox").TUndefined]>>;
    metadata: import("@sinclair/typebox").TOptional<import("@sinclair/typebox").TUnion<[import("@sinclair/typebox").TObject<{
        views: import("@sinclair/typebox").TOptional<import("@sinclair/typebox").TNumber>;
        likes: import("@sinclair/typebox").TOptional<import("@sinclair/typebox").TNumber>;
        comments: import("@sinclair/typebox").TOptional<import("@sinclair/typebox").TNumber>;
        shares: import("@sinclair/typebox").TOptional<import("@sinclair/typebox").TNumber>;
        bookmarks: import("@sinclair/typebox").TOptional<import("@sinclair/typebox").TNumber>;
        readTime: import("@sinclair/typebox").TOptional<import("@sinclair/typebox").TNumber>;
    }>, import("@sinclair/typebox").TUndefined]>>;
    seo: import("@sinclair/typebox").TOptional<import("@sinclair/typebox").TUnion<[import("@sinclair/typebox").TObject<{
        slug: import("@sinclair/typebox").TOptional<import("@sinclair/typebox").TString>;
        metaTitle: import("@sinclair/typebox").TOptional<import("@sinclair/typebox").TString>;
        metaDescription: import("@sinclair/typebox").TOptional<import("@sinclair/typebox").TString>;
        keywords: import("@sinclair/typebox").TOptional<import("@sinclair/typebox").TArray<import("@sinclair/typebox").TString>>;
    }>, import("@sinclair/typebox").TUndefined]>>;
    createdAt: import("@sinclair/typebox").TOptional<import("@sinclair/typebox").TUnion<[import("@sinclair/typebox").TString, import("@sinclair/typebox").TUndefined]>>;
    updatedAt: import("@sinclair/typebox").TOptional<import("@sinclair/typebox").TUnion<[import("@sinclair/typebox").TString, import("@sinclair/typebox").TUndefined]>>;
    publishedAt: import("@sinclair/typebox").TOptional<import("@sinclair/typebox").TUnion<[import("@sinclair/typebox").TString, import("@sinclair/typebox").TUndefined]>>;
}>;
export type PostList = Static<typeof PostList>;
export declare const PostList: import("@sinclair/typebox").TArray<import("@sinclair/typebox").TObject<{
    id: import("@sinclair/typebox").TNumber;
    title: import("@sinclair/typebox").TOptional<import("@sinclair/typebox").TUnion<[import("@sinclair/typebox").TString, import("@sinclair/typebox").TUndefined]>>;
    content: import("@sinclair/typebox").TOptional<import("@sinclair/typebox").TUnion<[import("@sinclair/typebox").TString, import("@sinclair/typebox").TUndefined]>>;
    excerpt: import("@sinclair/typebox").TOptional<import("@sinclair/typebox").TUnion<[import("@sinclair/typebox").TString, import("@sinclair/typebox").TUndefined]>>;
    authorId: import("@sinclair/typebox").TOptional<import("@sinclair/typebox").TUnion<[import("@sinclair/typebox").TNumber, import("@sinclair/typebox").TUndefined]>>;
    categoryId: import("@sinclair/typebox").TOptional<import("@sinclair/typebox").TUnion<[import("@sinclair/typebox").TNumber, import("@sinclair/typebox").TUndefined]>>;
    tags: import("@sinclair/typebox").TOptional<import("@sinclair/typebox").TUnion<[import("@sinclair/typebox").TArray<import("@sinclair/typebox").TString>, import("@sinclair/typebox").TUndefined]>>;
    status: import("@sinclair/typebox").TOptional<import("@sinclair/typebox").TUnion<[import("@sinclair/typebox").TString, import("@sinclair/typebox").TUndefined]>>;
    featured: import("@sinclair/typebox").TOptional<import("@sinclair/typebox").TUnion<[import("@sinclair/typebox").TBoolean, import("@sinclair/typebox").TUndefined]>>;
    metadata: import("@sinclair/typebox").TOptional<import("@sinclair/typebox").TUnion<[import("@sinclair/typebox").TObject<{
        views: import("@sinclair/typebox").TOptional<import("@sinclair/typebox").TNumber>;
        likes: import("@sinclair/typebox").TOptional<import("@sinclair/typebox").TNumber>;
        comments: import("@sinclair/typebox").TOptional<import("@sinclair/typebox").TNumber>;
        shares: import("@sinclair/typebox").TOptional<import("@sinclair/typebox").TNumber>;
        bookmarks: import("@sinclair/typebox").TOptional<import("@sinclair/typebox").TNumber>;
        readTime: import("@sinclair/typebox").TOptional<import("@sinclair/typebox").TNumber>;
    }>, import("@sinclair/typebox").TUndefined]>>;
    seo: import("@sinclair/typebox").TOptional<import("@sinclair/typebox").TUnion<[import("@sinclair/typebox").TObject<{
        slug: import("@sinclair/typebox").TOptional<import("@sinclair/typebox").TString>;
        metaTitle: import("@sinclair/typebox").TOptional<import("@sinclair/typebox").TString>;
        metaDescription: import("@sinclair/typebox").TOptional<import("@sinclair/typebox").TString>;
        keywords: import("@sinclair/typebox").TOptional<import("@sinclair/typebox").TArray<import("@sinclair/typebox").TString>>;
    }>, import("@sinclair/typebox").TUndefined]>>;
    createdAt: import("@sinclair/typebox").TOptional<import("@sinclair/typebox").TUnion<[import("@sinclair/typebox").TString, import("@sinclair/typebox").TUndefined]>>;
    updatedAt: import("@sinclair/typebox").TOptional<import("@sinclair/typebox").TUnion<[import("@sinclair/typebox").TString, import("@sinclair/typebox").TUndefined]>>;
    publishedAt: import("@sinclair/typebox").TOptional<import("@sinclair/typebox").TUnion<[import("@sinclair/typebox").TString, import("@sinclair/typebox").TUndefined]>>;
}>>;
export type Comment = Static<typeof Comment>;
export declare const Comment: import("@sinclair/typebox").TObject<{
    id: import("@sinclair/typebox").TNumber;
    postId: import("@sinclair/typebox").TOptional<import("@sinclair/typebox").TUnion<[import("@sinclair/typebox").TNumber, import("@sinclair/typebox").TUndefined]>>;
    authorId: import("@sinclair/typebox").TOptional<import("@sinclair/typebox").TUnion<[import("@sinclair/typebox").TNumber, import("@sinclair/typebox").TUndefined]>>;
    content: import("@sinclair/typebox").TOptional<import("@sinclair/typebox").TUnion<[import("@sinclair/typebox").TString, import("@sinclair/typebox").TUndefined]>>;
    parentId: import("@sinclair/typebox").TOptional<import("@sinclair/typebox").TUnion<[import("@sinclair/typebox").TNull, import("@sinclair/typebox").TUndefined]>>;
    likes: import("@sinclair/typebox").TOptional<import("@sinclair/typebox").TUnion<[import("@sinclair/typebox").TNumber, import("@sinclair/typebox").TUndefined]>>;
    isApproved: import("@sinclair/typebox").TOptional<import("@sinclair/typebox").TUnion<[import("@sinclair/typebox").TBoolean, import("@sinclair/typebox").TUndefined]>>;
    isEdited: import("@sinclair/typebox").TOptional<import("@sinclair/typebox").TUnion<[import("@sinclair/typebox").TBoolean, import("@sinclair/typebox").TUndefined]>>;
    createdAt: import("@sinclair/typebox").TOptional<import("@sinclair/typebox").TUnion<[import("@sinclair/typebox").TString, import("@sinclair/typebox").TUndefined]>>;
    updatedAt: import("@sinclair/typebox").TOptional<import("@sinclair/typebox").TUnion<[import("@sinclair/typebox").TString, import("@sinclair/typebox").TUndefined]>>;
}>;
export type CommentList = Static<typeof CommentList>;
export declare const CommentList: import("@sinclair/typebox").TArray<import("@sinclair/typebox").TObject<{
    id: import("@sinclair/typebox").TNumber;
    postId: import("@sinclair/typebox").TOptional<import("@sinclair/typebox").TUnion<[import("@sinclair/typebox").TNumber, import("@sinclair/typebox").TUndefined]>>;
    authorId: import("@sinclair/typebox").TOptional<import("@sinclair/typebox").TUnion<[import("@sinclair/typebox").TNumber, import("@sinclair/typebox").TUndefined]>>;
    content: import("@sinclair/typebox").TOptional<import("@sinclair/typebox").TUnion<[import("@sinclair/typebox").TString, import("@sinclair/typebox").TUndefined]>>;
    parentId: import("@sinclair/typebox").TOptional<import("@sinclair/typebox").TUnion<[import("@sinclair/typebox").TNull, import("@sinclair/typebox").TUndefined]>>;
    likes: import("@sinclair/typebox").TOptional<import("@sinclair/typebox").TUnion<[import("@sinclair/typebox").TNumber, import("@sinclair/typebox").TUndefined]>>;
    isApproved: import("@sinclair/typebox").TOptional<import("@sinclair/typebox").TUnion<[import("@sinclair/typebox").TBoolean, import("@sinclair/typebox").TUndefined]>>;
    isEdited: import("@sinclair/typebox").TOptional<import("@sinclair/typebox").TUnion<[import("@sinclair/typebox").TBoolean, import("@sinclair/typebox").TUndefined]>>;
    createdAt: import("@sinclair/typebox").TOptional<import("@sinclair/typebox").TUnion<[import("@sinclair/typebox").TString, import("@sinclair/typebox").TUndefined]>>;
    updatedAt: import("@sinclair/typebox").TOptional<import("@sinclair/typebox").TUnion<[import("@sinclair/typebox").TString, import("@sinclair/typebox").TUndefined]>>;
}>>;
export type Categorie = Static<typeof Categorie>;
export declare const Categorie: import("@sinclair/typebox").TObject<{
    id: import("@sinclair/typebox").TNumber;
    name: import("@sinclair/typebox").TOptional<import("@sinclair/typebox").TUnion<[import("@sinclair/typebox").TString, import("@sinclair/typebox").TUndefined]>>;
    slug: import("@sinclair/typebox").TOptional<import("@sinclair/typebox").TUnion<[import("@sinclair/typebox").TString, import("@sinclair/typebox").TUndefined]>>;
    description: import("@sinclair/typebox").TOptional<import("@sinclair/typebox").TUnion<[import("@sinclair/typebox").TString, import("@sinclair/typebox").TUndefined]>>;
    postCount: import("@sinclair/typebox").TOptional<import("@sinclair/typebox").TUnion<[import("@sinclair/typebox").TNumber, import("@sinclair/typebox").TUndefined]>>;
    color: import("@sinclair/typebox").TOptional<import("@sinclair/typebox").TUnion<[import("@sinclair/typebox").TString, import("@sinclair/typebox").TUndefined]>>;
    icon: import("@sinclair/typebox").TOptional<import("@sinclair/typebox").TUnion<[import("@sinclair/typebox").TString, import("@sinclair/typebox").TUndefined]>>;
    isActive: import("@sinclair/typebox").TOptional<import("@sinclair/typebox").TUnion<[import("@sinclair/typebox").TBoolean, import("@sinclair/typebox").TUndefined]>>;
    parentId: import("@sinclair/typebox").TOptional<import("@sinclair/typebox").TUnion<[import("@sinclair/typebox").TNull, import("@sinclair/typebox").TUndefined]>>;
    createdAt: import("@sinclair/typebox").TOptional<import("@sinclair/typebox").TUnion<[import("@sinclair/typebox").TString, import("@sinclair/typebox").TUndefined]>>;
    metadata: import("@sinclair/typebox").TOptional<import("@sinclair/typebox").TUnion<[import("@sinclair/typebox").TObject<{
        totalViews: import("@sinclair/typebox").TOptional<import("@sinclair/typebox").TNumber>;
        averageRating: import("@sinclair/typebox").TOptional<import("@sinclair/typebox").TNumber>;
    }>, import("@sinclair/typebox").TUndefined]>>;
}>;
export type CategorieList = Static<typeof CategorieList>;
export declare const CategorieList: import("@sinclair/typebox").TArray<import("@sinclair/typebox").TObject<{
    id: import("@sinclair/typebox").TNumber;
    name: import("@sinclair/typebox").TOptional<import("@sinclair/typebox").TUnion<[import("@sinclair/typebox").TString, import("@sinclair/typebox").TUndefined]>>;
    slug: import("@sinclair/typebox").TOptional<import("@sinclair/typebox").TUnion<[import("@sinclair/typebox").TString, import("@sinclair/typebox").TUndefined]>>;
    description: import("@sinclair/typebox").TOptional<import("@sinclair/typebox").TUnion<[import("@sinclair/typebox").TString, import("@sinclair/typebox").TUndefined]>>;
    postCount: import("@sinclair/typebox").TOptional<import("@sinclair/typebox").TUnion<[import("@sinclair/typebox").TNumber, import("@sinclair/typebox").TUndefined]>>;
    color: import("@sinclair/typebox").TOptional<import("@sinclair/typebox").TUnion<[import("@sinclair/typebox").TString, import("@sinclair/typebox").TUndefined]>>;
    icon: import("@sinclair/typebox").TOptional<import("@sinclair/typebox").TUnion<[import("@sinclair/typebox").TString, import("@sinclair/typebox").TUndefined]>>;
    isActive: import("@sinclair/typebox").TOptional<import("@sinclair/typebox").TUnion<[import("@sinclair/typebox").TBoolean, import("@sinclair/typebox").TUndefined]>>;
    parentId: import("@sinclair/typebox").TOptional<import("@sinclair/typebox").TUnion<[import("@sinclair/typebox").TNull, import("@sinclair/typebox").TUndefined]>>;
    createdAt: import("@sinclair/typebox").TOptional<import("@sinclair/typebox").TUnion<[import("@sinclair/typebox").TString, import("@sinclair/typebox").TUndefined]>>;
    metadata: import("@sinclair/typebox").TOptional<import("@sinclair/typebox").TUnion<[import("@sinclair/typebox").TObject<{
        totalViews: import("@sinclair/typebox").TOptional<import("@sinclair/typebox").TNumber>;
        averageRating: import("@sinclair/typebox").TOptional<import("@sinclair/typebox").TNumber>;
    }>, import("@sinclair/typebox").TUndefined]>>;
}>>;
export type Product = Static<typeof Product>;
export declare const Product: import("@sinclair/typebox").TObject<{
    id: import("@sinclair/typebox").TNumber;
    name: import("@sinclair/typebox").TOptional<import("@sinclair/typebox").TUnion<[import("@sinclair/typebox").TString, import("@sinclair/typebox").TUndefined]>>;
    description: import("@sinclair/typebox").TOptional<import("@sinclair/typebox").TUnion<[import("@sinclair/typebox").TString, import("@sinclair/typebox").TUndefined]>>;
    shortDescription: import("@sinclair/typebox").TOptional<import("@sinclair/typebox").TUnion<[import("@sinclair/typebox").TString, import("@sinclair/typebox").TUndefined]>>;
    price: import("@sinclair/typebox").TOptional<import("@sinclair/typebox").TUnion<[import("@sinclair/typebox").TNumber, import("@sinclair/typebox").TUndefined]>>;
    originalPrice: import("@sinclair/typebox").TOptional<import("@sinclair/typebox").TUnion<[import("@sinclair/typebox").TNumber, import("@sinclair/typebox").TUndefined]>>;
    currency: import("@sinclair/typebox").TOptional<import("@sinclair/typebox").TUnion<[import("@sinclair/typebox").TString, import("@sinclair/typebox").TUndefined]>>;
    categoryId: import("@sinclair/typebox").TOptional<import("@sinclair/typebox").TUnion<[import("@sinclair/typebox").TNumber, import("@sinclair/typebox").TUndefined]>>;
    brand: import("@sinclair/typebox").TOptional<import("@sinclair/typebox").TUnion<[import("@sinclair/typebox").TString, import("@sinclair/typebox").TUndefined]>>;
    model: import("@sinclair/typebox").TOptional<import("@sinclair/typebox").TUnion<[import("@sinclair/typebox").TString, import("@sinclair/typebox").TUndefined]>>;
    sku: import("@sinclair/typebox").TOptional<import("@sinclair/typebox").TUnion<[import("@sinclair/typebox").TString, import("@sinclair/typebox").TUndefined]>>;
    barcode: import("@sinclair/typebox").TOptional<import("@sinclair/typebox").TUnion<[import("@sinclair/typebox").TString, import("@sinclair/typebox").TUndefined]>>;
    inventory: import("@sinclair/typebox").TOptional<import("@sinclair/typebox").TUnion<[import("@sinclair/typebox").TObject<{
        inStock: import("@sinclair/typebox").TOptional<import("@sinclair/typebox").TNumber>;
        reserved: import("@sinclair/typebox").TOptional<import("@sinclair/typebox").TNumber>;
        available: import("@sinclair/typebox").TOptional<import("@sinclair/typebox").TNumber>;
        lowStockThreshold: import("@sinclair/typebox").TOptional<import("@sinclair/typebox").TNumber>;
    }>, import("@sinclair/typebox").TUndefined]>>;
    images: import("@sinclair/typebox").TOptional<import("@sinclair/typebox").TUnion<[import("@sinclair/typebox").TArray<import("@sinclair/typebox").TString>, import("@sinclair/typebox").TUndefined]>>;
    specifications: import("@sinclair/typebox").TOptional<import("@sinclair/typebox").TUnion<[import("@sinclair/typebox").TObject<{
        batteryLife: import("@sinclair/typebox").TOptional<import("@sinclair/typebox").TString>;
        chargingTime: import("@sinclair/typebox").TOptional<import("@sinclair/typebox").TString>;
        connectivity: import("@sinclair/typebox").TOptional<import("@sinclair/typebox").TString>;
        weight: import("@sinclair/typebox").TOptional<import("@sinclair/typebox").TString>;
        dimensions: import("@sinclair/typebox").TOptional<import("@sinclair/typebox").TString>;
        colors: import("@sinclair/typebox").TOptional<import("@sinclair/typebox").TArray<import("@sinclair/typebox").TString>>;
        warranty: import("@sinclair/typebox").TOptional<import("@sinclair/typebox").TString>;
    }>, import("@sinclair/typebox").TUndefined]>>;
    features: import("@sinclair/typebox").TOptional<import("@sinclair/typebox").TUnion<[import("@sinclair/typebox").TArray<import("@sinclair/typebox").TString>, import("@sinclair/typebox").TUndefined]>>;
    ratings: import("@sinclair/typebox").TOptional<import("@sinclair/typebox").TUnion<[import("@sinclair/typebox").TObject<{
        average: import("@sinclair/typebox").TOptional<import("@sinclair/typebox").TNumber>;
        count: import("@sinclair/typebox").TOptional<import("@sinclair/typebox").TNumber>;
        breakdown: import("@sinclair/typebox").TOptional<import("@sinclair/typebox").TObject<{
            1: import("@sinclair/typebox").TOptional<import("@sinclair/typebox").TNumber>;
            2: import("@sinclair/typebox").TOptional<import("@sinclair/typebox").TNumber>;
            3: import("@sinclair/typebox").TOptional<import("@sinclair/typebox").TNumber>;
            4: import("@sinclair/typebox").TOptional<import("@sinclair/typebox").TNumber>;
            5: import("@sinclair/typebox").TOptional<import("@sinclair/typebox").TNumber>;
        }>>;
    }>, import("@sinclair/typebox").TUndefined]>>;
    tags: import("@sinclair/typebox").TOptional<import("@sinclair/typebox").TUnion<[import("@sinclair/typebox").TArray<import("@sinclair/typebox").TString>, import("@sinclair/typebox").TUndefined]>>;
    isActive: import("@sinclair/typebox").TOptional<import("@sinclair/typebox").TUnion<[import("@sinclair/typebox").TBoolean, import("@sinclair/typebox").TUndefined]>>;
    isFeatured: import("@sinclair/typebox").TOptional<import("@sinclair/typebox").TUnion<[import("@sinclair/typebox").TBoolean, import("@sinclair/typebox").TUndefined]>>;
    createdAt: import("@sinclair/typebox").TOptional<import("@sinclair/typebox").TUnion<[import("@sinclair/typebox").TString, import("@sinclair/typebox").TUndefined]>>;
    updatedAt: import("@sinclair/typebox").TOptional<import("@sinclair/typebox").TUnion<[import("@sinclair/typebox").TString, import("@sinclair/typebox").TUndefined]>>;
}>;
export type ProductList = Static<typeof ProductList>;
export declare const ProductList: import("@sinclair/typebox").TArray<import("@sinclair/typebox").TObject<{
    id: import("@sinclair/typebox").TNumber;
    name: import("@sinclair/typebox").TOptional<import("@sinclair/typebox").TUnion<[import("@sinclair/typebox").TString, import("@sinclair/typebox").TUndefined]>>;
    description: import("@sinclair/typebox").TOptional<import("@sinclair/typebox").TUnion<[import("@sinclair/typebox").TString, import("@sinclair/typebox").TUndefined]>>;
    shortDescription: import("@sinclair/typebox").TOptional<import("@sinclair/typebox").TUnion<[import("@sinclair/typebox").TString, import("@sinclair/typebox").TUndefined]>>;
    price: import("@sinclair/typebox").TOptional<import("@sinclair/typebox").TUnion<[import("@sinclair/typebox").TNumber, import("@sinclair/typebox").TUndefined]>>;
    originalPrice: import("@sinclair/typebox").TOptional<import("@sinclair/typebox").TUnion<[import("@sinclair/typebox").TNumber, import("@sinclair/typebox").TUndefined]>>;
    currency: import("@sinclair/typebox").TOptional<import("@sinclair/typebox").TUnion<[import("@sinclair/typebox").TString, import("@sinclair/typebox").TUndefined]>>;
    categoryId: import("@sinclair/typebox").TOptional<import("@sinclair/typebox").TUnion<[import("@sinclair/typebox").TNumber, import("@sinclair/typebox").TUndefined]>>;
    brand: import("@sinclair/typebox").TOptional<import("@sinclair/typebox").TUnion<[import("@sinclair/typebox").TString, import("@sinclair/typebox").TUndefined]>>;
    model: import("@sinclair/typebox").TOptional<import("@sinclair/typebox").TUnion<[import("@sinclair/typebox").TString, import("@sinclair/typebox").TUndefined]>>;
    sku: import("@sinclair/typebox").TOptional<import("@sinclair/typebox").TUnion<[import("@sinclair/typebox").TString, import("@sinclair/typebox").TUndefined]>>;
    barcode: import("@sinclair/typebox").TOptional<import("@sinclair/typebox").TUnion<[import("@sinclair/typebox").TString, import("@sinclair/typebox").TUndefined]>>;
    inventory: import("@sinclair/typebox").TOptional<import("@sinclair/typebox").TUnion<[import("@sinclair/typebox").TObject<{
        inStock: import("@sinclair/typebox").TOptional<import("@sinclair/typebox").TNumber>;
        reserved: import("@sinclair/typebox").TOptional<import("@sinclair/typebox").TNumber>;
        available: import("@sinclair/typebox").TOptional<import("@sinclair/typebox").TNumber>;
        lowStockThreshold: import("@sinclair/typebox").TOptional<import("@sinclair/typebox").TNumber>;
    }>, import("@sinclair/typebox").TUndefined]>>;
    images: import("@sinclair/typebox").TOptional<import("@sinclair/typebox").TUnion<[import("@sinclair/typebox").TArray<import("@sinclair/typebox").TString>, import("@sinclair/typebox").TUndefined]>>;
    specifications: import("@sinclair/typebox").TOptional<import("@sinclair/typebox").TUnion<[import("@sinclair/typebox").TObject<{
        batteryLife: import("@sinclair/typebox").TOptional<import("@sinclair/typebox").TString>;
        chargingTime: import("@sinclair/typebox").TOptional<import("@sinclair/typebox").TString>;
        connectivity: import("@sinclair/typebox").TOptional<import("@sinclair/typebox").TString>;
        weight: import("@sinclair/typebox").TOptional<import("@sinclair/typebox").TString>;
        dimensions: import("@sinclair/typebox").TOptional<import("@sinclair/typebox").TString>;
        colors: import("@sinclair/typebox").TOptional<import("@sinclair/typebox").TArray<import("@sinclair/typebox").TString>>;
        warranty: import("@sinclair/typebox").TOptional<import("@sinclair/typebox").TString>;
    }>, import("@sinclair/typebox").TUndefined]>>;
    features: import("@sinclair/typebox").TOptional<import("@sinclair/typebox").TUnion<[import("@sinclair/typebox").TArray<import("@sinclair/typebox").TString>, import("@sinclair/typebox").TUndefined]>>;
    ratings: import("@sinclair/typebox").TOptional<import("@sinclair/typebox").TUnion<[import("@sinclair/typebox").TObject<{
        average: import("@sinclair/typebox").TOptional<import("@sinclair/typebox").TNumber>;
        count: import("@sinclair/typebox").TOptional<import("@sinclair/typebox").TNumber>;
        breakdown: import("@sinclair/typebox").TOptional<import("@sinclair/typebox").TObject<{
            1: import("@sinclair/typebox").TOptional<import("@sinclair/typebox").TNumber>;
            2: import("@sinclair/typebox").TOptional<import("@sinclair/typebox").TNumber>;
            3: import("@sinclair/typebox").TOptional<import("@sinclair/typebox").TNumber>;
            4: import("@sinclair/typebox").TOptional<import("@sinclair/typebox").TNumber>;
            5: import("@sinclair/typebox").TOptional<import("@sinclair/typebox").TNumber>;
        }>>;
    }>, import("@sinclair/typebox").TUndefined]>>;
    tags: import("@sinclair/typebox").TOptional<import("@sinclair/typebox").TUnion<[import("@sinclair/typebox").TArray<import("@sinclair/typebox").TString>, import("@sinclair/typebox").TUndefined]>>;
    isActive: import("@sinclair/typebox").TOptional<import("@sinclair/typebox").TUnion<[import("@sinclair/typebox").TBoolean, import("@sinclair/typebox").TUndefined]>>;
    isFeatured: import("@sinclair/typebox").TOptional<import("@sinclair/typebox").TUnion<[import("@sinclair/typebox").TBoolean, import("@sinclair/typebox").TUndefined]>>;
    createdAt: import("@sinclair/typebox").TOptional<import("@sinclair/typebox").TUnion<[import("@sinclair/typebox").TString, import("@sinclair/typebox").TUndefined]>>;
    updatedAt: import("@sinclair/typebox").TOptional<import("@sinclair/typebox").TUnion<[import("@sinclair/typebox").TString, import("@sinclair/typebox").TUndefined]>>;
}>>;
export type Order = Static<typeof Order>;
export declare const Order: import("@sinclair/typebox").TObject<{
    id: import("@sinclair/typebox").TNumber;
    userId: import("@sinclair/typebox").TOptional<import("@sinclair/typebox").TUnion<[import("@sinclair/typebox").TNumber, import("@sinclair/typebox").TUndefined]>>;
    orderNumber: import("@sinclair/typebox").TOptional<import("@sinclair/typebox").TUnion<[import("@sinclair/typebox").TString, import("@sinclair/typebox").TUndefined]>>;
    items: import("@sinclair/typebox").TOptional<import("@sinclair/typebox").TUnion<[import("@sinclair/typebox").TArray<import("@sinclair/typebox").TObject<{
        productId: import("@sinclair/typebox").TOptional<import("@sinclair/typebox").TNumber>;
        productName: import("@sinclair/typebox").TOptional<import("@sinclair/typebox").TString>;
        quantity: import("@sinclair/typebox").TOptional<import("@sinclair/typebox").TNumber>;
        unitPrice: import("@sinclair/typebox").TOptional<import("@sinclair/typebox").TNumber>;
        totalPrice: import("@sinclair/typebox").TOptional<import("@sinclair/typebox").TNumber>;
        sku: import("@sinclair/typebox").TOptional<import("@sinclair/typebox").TString>;
    }>>, import("@sinclair/typebox").TUndefined]>>;
    status: import("@sinclair/typebox").TOptional<import("@sinclair/typebox").TUnion<[import("@sinclair/typebox").TString, import("@sinclair/typebox").TUndefined]>>;
    paymentStatus: import("@sinclair/typebox").TOptional<import("@sinclair/typebox").TUnion<[import("@sinclair/typebox").TString, import("@sinclair/typebox").TUndefined]>>;
    shippingMethod: import("@sinclair/typebox").TOptional<import("@sinclair/typebox").TUnion<[import("@sinclair/typebox").TString, import("@sinclair/typebox").TUndefined]>>;
    trackingNumber: import("@sinclair/typebox").TOptional<import("@sinclair/typebox").TUnion<[import("@sinclair/typebox").TString, import("@sinclair/typebox").TUndefined]>>;
    addresses: import("@sinclair/typebox").TOptional<import("@sinclair/typebox").TUnion<[import("@sinclair/typebox").TObject<{
        shipping: import("@sinclair/typebox").TOptional<import("@sinclair/typebox").TObject<{
            name: import("@sinclair/typebox").TOptional<import("@sinclair/typebox").TString>;
            street: import("@sinclair/typebox").TOptional<import("@sinclair/typebox").TString>;
            apartment: import("@sinclair/typebox").TOptional<import("@sinclair/typebox").TString>;
            city: import("@sinclair/typebox").TOptional<import("@sinclair/typebox").TString>;
            state: import("@sinclair/typebox").TOptional<import("@sinclair/typebox").TString>;
            zipCode: import("@sinclair/typebox").TOptional<import("@sinclair/typebox").TString>;
            country: import("@sinclair/typebox").TOptional<import("@sinclair/typebox").TString>;
            phone: import("@sinclair/typebox").TOptional<import("@sinclair/typebox").TString>;
        }>>;
        billing: import("@sinclair/typebox").TOptional<import("@sinclair/typebox").TObject<{
            name: import("@sinclair/typebox").TOptional<import("@sinclair/typebox").TString>;
            street: import("@sinclair/typebox").TOptional<import("@sinclair/typebox").TString>;
            apartment: import("@sinclair/typebox").TOptional<import("@sinclair/typebox").TString>;
            city: import("@sinclair/typebox").TOptional<import("@sinclair/typebox").TString>;
            state: import("@sinclair/typebox").TOptional<import("@sinclair/typebox").TString>;
            zipCode: import("@sinclair/typebox").TOptional<import("@sinclair/typebox").TString>;
            country: import("@sinclair/typebox").TOptional<import("@sinclair/typebox").TString>;
            phone: import("@sinclair/typebox").TOptional<import("@sinclair/typebox").TString>;
        }>>;
    }>, import("@sinclair/typebox").TUndefined]>>;
    totals: import("@sinclair/typebox").TOptional<import("@sinclair/typebox").TUnion<[import("@sinclair/typebox").TObject<{
        subtotal: import("@sinclair/typebox").TOptional<import("@sinclair/typebox").TNumber>;
        tax: import("@sinclair/typebox").TOptional<import("@sinclair/typebox").TNumber>;
        shipping: import("@sinclair/typebox").TOptional<import("@sinclair/typebox").TNumber>;
        discount: import("@sinclair/typebox").TOptional<import("@sinclair/typebox").TNumber>;
        total: import("@sinclair/typebox").TOptional<import("@sinclair/typebox").TNumber>;
    }>, import("@sinclair/typebox").TUndefined]>>;
    timeline: import("@sinclair/typebox").TOptional<import("@sinclair/typebox").TUnion<[import("@sinclair/typebox").TArray<import("@sinclair/typebox").TObject<{
        status: import("@sinclair/typebox").TOptional<import("@sinclair/typebox").TString>;
        timestamp: import("@sinclair/typebox").TOptional<import("@sinclair/typebox").TString>;
        note: import("@sinclair/typebox").TOptional<import("@sinclair/typebox").TString>;
    }>>, import("@sinclair/typebox").TUndefined]>>;
    createdAt: import("@sinclair/typebox").TOptional<import("@sinclair/typebox").TUnion<[import("@sinclair/typebox").TString, import("@sinclair/typebox").TUndefined]>>;
    updatedAt: import("@sinclair/typebox").TOptional<import("@sinclair/typebox").TUnion<[import("@sinclair/typebox").TString, import("@sinclair/typebox").TUndefined]>>;
}>;
export type OrderList = Static<typeof OrderList>;
export declare const OrderList: import("@sinclair/typebox").TArray<import("@sinclair/typebox").TObject<{
    id: import("@sinclair/typebox").TNumber;
    userId: import("@sinclair/typebox").TOptional<import("@sinclair/typebox").TUnion<[import("@sinclair/typebox").TNumber, import("@sinclair/typebox").TUndefined]>>;
    orderNumber: import("@sinclair/typebox").TOptional<import("@sinclair/typebox").TUnion<[import("@sinclair/typebox").TString, import("@sinclair/typebox").TUndefined]>>;
    items: import("@sinclair/typebox").TOptional<import("@sinclair/typebox").TUnion<[import("@sinclair/typebox").TArray<import("@sinclair/typebox").TObject<{
        productId: import("@sinclair/typebox").TOptional<import("@sinclair/typebox").TNumber>;
        productName: import("@sinclair/typebox").TOptional<import("@sinclair/typebox").TString>;
        quantity: import("@sinclair/typebox").TOptional<import("@sinclair/typebox").TNumber>;
        unitPrice: import("@sinclair/typebox").TOptional<import("@sinclair/typebox").TNumber>;
        totalPrice: import("@sinclair/typebox").TOptional<import("@sinclair/typebox").TNumber>;
        sku: import("@sinclair/typebox").TOptional<import("@sinclair/typebox").TString>;
    }>>, import("@sinclair/typebox").TUndefined]>>;
    status: import("@sinclair/typebox").TOptional<import("@sinclair/typebox").TUnion<[import("@sinclair/typebox").TString, import("@sinclair/typebox").TUndefined]>>;
    paymentStatus: import("@sinclair/typebox").TOptional<import("@sinclair/typebox").TUnion<[import("@sinclair/typebox").TString, import("@sinclair/typebox").TUndefined]>>;
    shippingMethod: import("@sinclair/typebox").TOptional<import("@sinclair/typebox").TUnion<[import("@sinclair/typebox").TString, import("@sinclair/typebox").TUndefined]>>;
    trackingNumber: import("@sinclair/typebox").TOptional<import("@sinclair/typebox").TUnion<[import("@sinclair/typebox").TString, import("@sinclair/typebox").TUndefined]>>;
    addresses: import("@sinclair/typebox").TOptional<import("@sinclair/typebox").TUnion<[import("@sinclair/typebox").TObject<{
        shipping: import("@sinclair/typebox").TOptional<import("@sinclair/typebox").TObject<{
            name: import("@sinclair/typebox").TOptional<import("@sinclair/typebox").TString>;
            street: import("@sinclair/typebox").TOptional<import("@sinclair/typebox").TString>;
            apartment: import("@sinclair/typebox").TOptional<import("@sinclair/typebox").TString>;
            city: import("@sinclair/typebox").TOptional<import("@sinclair/typebox").TString>;
            state: import("@sinclair/typebox").TOptional<import("@sinclair/typebox").TString>;
            zipCode: import("@sinclair/typebox").TOptional<import("@sinclair/typebox").TString>;
            country: import("@sinclair/typebox").TOptional<import("@sinclair/typebox").TString>;
            phone: import("@sinclair/typebox").TOptional<import("@sinclair/typebox").TString>;
        }>>;
        billing: import("@sinclair/typebox").TOptional<import("@sinclair/typebox").TObject<{
            name: import("@sinclair/typebox").TOptional<import("@sinclair/typebox").TString>;
            street: import("@sinclair/typebox").TOptional<import("@sinclair/typebox").TString>;
            apartment: import("@sinclair/typebox").TOptional<import("@sinclair/typebox").TString>;
            city: import("@sinclair/typebox").TOptional<import("@sinclair/typebox").TString>;
            state: import("@sinclair/typebox").TOptional<import("@sinclair/typebox").TString>;
            zipCode: import("@sinclair/typebox").TOptional<import("@sinclair/typebox").TString>;
            country: import("@sinclair/typebox").TOptional<import("@sinclair/typebox").TString>;
            phone: import("@sinclair/typebox").TOptional<import("@sinclair/typebox").TString>;
        }>>;
    }>, import("@sinclair/typebox").TUndefined]>>;
    totals: import("@sinclair/typebox").TOptional<import("@sinclair/typebox").TUnion<[import("@sinclair/typebox").TObject<{
        subtotal: import("@sinclair/typebox").TOptional<import("@sinclair/typebox").TNumber>;
        tax: import("@sinclair/typebox").TOptional<import("@sinclair/typebox").TNumber>;
        shipping: import("@sinclair/typebox").TOptional<import("@sinclair/typebox").TNumber>;
        discount: import("@sinclair/typebox").TOptional<import("@sinclair/typebox").TNumber>;
        total: import("@sinclair/typebox").TOptional<import("@sinclair/typebox").TNumber>;
    }>, import("@sinclair/typebox").TUndefined]>>;
    timeline: import("@sinclair/typebox").TOptional<import("@sinclair/typebox").TUnion<[import("@sinclair/typebox").TArray<import("@sinclair/typebox").TObject<{
        status: import("@sinclair/typebox").TOptional<import("@sinclair/typebox").TString>;
        timestamp: import("@sinclair/typebox").TOptional<import("@sinclair/typebox").TString>;
        note: import("@sinclair/typebox").TOptional<import("@sinclair/typebox").TString>;
    }>>, import("@sinclair/typebox").TUndefined]>>;
    createdAt: import("@sinclair/typebox").TOptional<import("@sinclair/typebox").TUnion<[import("@sinclair/typebox").TString, import("@sinclair/typebox").TUndefined]>>;
    updatedAt: import("@sinclair/typebox").TOptional<import("@sinclair/typebox").TUnion<[import("@sinclair/typebox").TString, import("@sinclair/typebox").TUndefined]>>;
}>>;
export type Analytic = Static<typeof Analytic>;
export declare const Analytic: import("@sinclair/typebox").TObject<{
    id: import("@sinclair/typebox").TNumber;
    date: import("@sinclair/typebox").TOptional<import("@sinclair/typebox").TUnion<[import("@sinclair/typebox").TString, import("@sinclair/typebox").TUndefined]>>;
    period: import("@sinclair/typebox").TOptional<import("@sinclair/typebox").TUnion<[import("@sinclair/typebox").TString, import("@sinclair/typebox").TUndefined]>>;
    metrics: import("@sinclair/typebox").TOptional<import("@sinclair/typebox").TUnion<[import("@sinclair/typebox").TObject<{
        users: import("@sinclair/typebox").TOptional<import("@sinclair/typebox").TObject<{
            total: import("@sinclair/typebox").TOptional<import("@sinclair/typebox").TNumber>;
            new: import("@sinclair/typebox").TOptional<import("@sinclair/typebox").TNumber>;
            returning: import("@sinclair/typebox").TOptional<import("@sinclair/typebox").TNumber>;
            active: import("@sinclair/typebox").TOptional<import("@sinclair/typebox").TNumber>;
        }>>;
        traffic: import("@sinclair/typebox").TOptional<import("@sinclair/typebox").TObject<{
            pageViews: import("@sinclair/typebox").TOptional<import("@sinclair/typebox").TNumber>;
            uniqueViews: import("@sinclair/typebox").TOptional<import("@sinclair/typebox").TNumber>;
            bounceRate: import("@sinclair/typebox").TOptional<import("@sinclair/typebox").TNumber>;
            avgSessionDuration: import("@sinclair/typebox").TOptional<import("@sinclair/typebox").TNumber>;
            topPages: import("@sinclair/typebox").TOptional<import("@sinclair/typebox").TArray<import("@sinclair/typebox").TObject<{
                path: import("@sinclair/typebox").TOptional<import("@sinclair/typebox").TString>;
                views: import("@sinclair/typebox").TOptional<import("@sinclair/typebox").TNumber>;
            }>>>;
        }>>;
        performance: import("@sinclair/typebox").TOptional<import("@sinclair/typebox").TObject<{
            avgLoadTime: import("@sinclair/typebox").TOptional<import("@sinclair/typebox").TNumber>;
            apiCalls: import("@sinclair/typebox").TOptional<import("@sinclair/typebox").TNumber>;
            cacheHitRate: import("@sinclair/typebox").TOptional<import("@sinclair/typebox").TNumber>;
            errorRate: import("@sinclair/typebox").TOptional<import("@sinclair/typebox").TNumber>;
        }>>;
        business: import("@sinclair/typebox").TOptional<import("@sinclair/typebox").TObject<{
            orders: import("@sinclair/typebox").TOptional<import("@sinclair/typebox").TNumber>;
            revenue: import("@sinclair/typebox").TOptional<import("@sinclair/typebox").TNumber>;
            conversionRate: import("@sinclair/typebox").TOptional<import("@sinclair/typebox").TNumber>;
            avgOrderValue: import("@sinclair/typebox").TOptional<import("@sinclair/typebox").TNumber>;
        }>>;
    }>, import("@sinclair/typebox").TUndefined]>>;
}>;
export type AnalyticList = Static<typeof AnalyticList>;
export declare const AnalyticList: import("@sinclair/typebox").TArray<import("@sinclair/typebox").TObject<{
    id: import("@sinclair/typebox").TNumber;
    date: import("@sinclair/typebox").TOptional<import("@sinclair/typebox").TUnion<[import("@sinclair/typebox").TString, import("@sinclair/typebox").TUndefined]>>;
    period: import("@sinclair/typebox").TOptional<import("@sinclair/typebox").TUnion<[import("@sinclair/typebox").TString, import("@sinclair/typebox").TUndefined]>>;
    metrics: import("@sinclair/typebox").TOptional<import("@sinclair/typebox").TUnion<[import("@sinclair/typebox").TObject<{
        users: import("@sinclair/typebox").TOptional<import("@sinclair/typebox").TObject<{
            total: import("@sinclair/typebox").TOptional<import("@sinclair/typebox").TNumber>;
            new: import("@sinclair/typebox").TOptional<import("@sinclair/typebox").TNumber>;
            returning: import("@sinclair/typebox").TOptional<import("@sinclair/typebox").TNumber>;
            active: import("@sinclair/typebox").TOptional<import("@sinclair/typebox").TNumber>;
        }>>;
        traffic: import("@sinclair/typebox").TOptional<import("@sinclair/typebox").TObject<{
            pageViews: import("@sinclair/typebox").TOptional<import("@sinclair/typebox").TNumber>;
            uniqueViews: import("@sinclair/typebox").TOptional<import("@sinclair/typebox").TNumber>;
            bounceRate: import("@sinclair/typebox").TOptional<import("@sinclair/typebox").TNumber>;
            avgSessionDuration: import("@sinclair/typebox").TOptional<import("@sinclair/typebox").TNumber>;
            topPages: import("@sinclair/typebox").TOptional<import("@sinclair/typebox").TArray<import("@sinclair/typebox").TObject<{
                path: import("@sinclair/typebox").TOptional<import("@sinclair/typebox").TString>;
                views: import("@sinclair/typebox").TOptional<import("@sinclair/typebox").TNumber>;
            }>>>;
        }>>;
        performance: import("@sinclair/typebox").TOptional<import("@sinclair/typebox").TObject<{
            avgLoadTime: import("@sinclair/typebox").TOptional<import("@sinclair/typebox").TNumber>;
            apiCalls: import("@sinclair/typebox").TOptional<import("@sinclair/typebox").TNumber>;
            cacheHitRate: import("@sinclair/typebox").TOptional<import("@sinclair/typebox").TNumber>;
            errorRate: import("@sinclair/typebox").TOptional<import("@sinclair/typebox").TNumber>;
        }>>;
        business: import("@sinclair/typebox").TOptional<import("@sinclair/typebox").TObject<{
            orders: import("@sinclair/typebox").TOptional<import("@sinclair/typebox").TNumber>;
            revenue: import("@sinclair/typebox").TOptional<import("@sinclair/typebox").TNumber>;
            conversionRate: import("@sinclair/typebox").TOptional<import("@sinclair/typebox").TNumber>;
            avgOrderValue: import("@sinclair/typebox").TOptional<import("@sinclair/typebox").TNumber>;
        }>>;
    }>, import("@sinclair/typebox").TUndefined]>>;
}>>;
export type Notification = Static<typeof Notification>;
export declare const Notification: import("@sinclair/typebox").TObject<{
    id: import("@sinclair/typebox").TNumber;
    userId: import("@sinclair/typebox").TOptional<import("@sinclair/typebox").TUnion<[import("@sinclair/typebox").TNumber, import("@sinclair/typebox").TUndefined]>>;
    type: import("@sinclair/typebox").TOptional<import("@sinclair/typebox").TUnion<[import("@sinclair/typebox").TString, import("@sinclair/typebox").TUndefined]>>;
    title: import("@sinclair/typebox").TOptional<import("@sinclair/typebox").TUnion<[import("@sinclair/typebox").TString, import("@sinclair/typebox").TUndefined]>>;
    message: import("@sinclair/typebox").TOptional<import("@sinclair/typebox").TUnion<[import("@sinclair/typebox").TString, import("@sinclair/typebox").TUndefined]>>;
    data: import("@sinclair/typebox").TOptional<import("@sinclair/typebox").TUnion<[import("@sinclair/typebox").TObject<{
        orderId: import("@sinclair/typebox").TOptional<import("@sinclair/typebox").TNumber>;
        trackingNumber: import("@sinclair/typebox").TOptional<import("@sinclair/typebox").TString>;
    }>, import("@sinclair/typebox").TUndefined]>>;
    isRead: import("@sinclair/typebox").TOptional<import("@sinclair/typebox").TUnion<[import("@sinclair/typebox").TBoolean, import("@sinclair/typebox").TUndefined]>>;
    priority: import("@sinclair/typebox").TOptional<import("@sinclair/typebox").TUnion<[import("@sinclair/typebox").TString, import("@sinclair/typebox").TUndefined]>>;
    createdAt: import("@sinclair/typebox").TOptional<import("@sinclair/typebox").TUnion<[import("@sinclair/typebox").TString, import("@sinclair/typebox").TUndefined]>>;
}>;
export type NotificationList = Static<typeof NotificationList>;
export declare const NotificationList: import("@sinclair/typebox").TArray<import("@sinclair/typebox").TObject<{
    id: import("@sinclair/typebox").TNumber;
    userId: import("@sinclair/typebox").TOptional<import("@sinclair/typebox").TUnion<[import("@sinclair/typebox").TNumber, import("@sinclair/typebox").TUndefined]>>;
    type: import("@sinclair/typebox").TOptional<import("@sinclair/typebox").TUnion<[import("@sinclair/typebox").TString, import("@sinclair/typebox").TUndefined]>>;
    title: import("@sinclair/typebox").TOptional<import("@sinclair/typebox").TUnion<[import("@sinclair/typebox").TString, import("@sinclair/typebox").TUndefined]>>;
    message: import("@sinclair/typebox").TOptional<import("@sinclair/typebox").TUnion<[import("@sinclair/typebox").TString, import("@sinclair/typebox").TUndefined]>>;
    data: import("@sinclair/typebox").TOptional<import("@sinclair/typebox").TUnion<[import("@sinclair/typebox").TObject<{
        orderId: import("@sinclair/typebox").TOptional<import("@sinclair/typebox").TNumber>;
        trackingNumber: import("@sinclair/typebox").TOptional<import("@sinclair/typebox").TString>;
    }>, import("@sinclair/typebox").TUndefined]>>;
    isRead: import("@sinclair/typebox").TOptional<import("@sinclair/typebox").TUnion<[import("@sinclair/typebox").TBoolean, import("@sinclair/typebox").TUndefined]>>;
    priority: import("@sinclair/typebox").TOptional<import("@sinclair/typebox").TUnion<[import("@sinclair/typebox").TString, import("@sinclair/typebox").TUndefined]>>;
    createdAt: import("@sinclair/typebox").TOptional<import("@sinclair/typebox").TUnion<[import("@sinclair/typebox").TString, import("@sinclair/typebox").TUndefined]>>;
}>>;
export type get__users = Static<typeof get__users>;
export declare const get__users: import("@sinclair/typebox").TObject<{
    method: import("@sinclair/typebox").TLiteral<"GET">;
    path: import("@sinclair/typebox").TLiteral<"/users">;
    requestFormat: import("@sinclair/typebox").TLiteral<"json">;
    parameters: import("@sinclair/typebox").TObject<{
        query: import("@sinclair/typebox").TObject<{
            _page: import("@sinclair/typebox").TOptional<import("@sinclair/typebox").TNumber>;
            _limit: import("@sinclair/typebox").TOptional<import("@sinclair/typebox").TNumber>;
            _sort: import("@sinclair/typebox").TOptional<import("@sinclair/typebox").TString>;
            _order: import("@sinclair/typebox").TOptional<import("@sinclair/typebox").TUnion<[import("@sinclair/typebox").TLiteral<"asc">, import("@sinclair/typebox").TLiteral<"desc">]>>;
            q: import("@sinclair/typebox").TOptional<import("@sinclair/typebox").TString>;
        }>;
    }>;
    responses: import("@sinclair/typebox").TObject<{
        200: import("@sinclair/typebox").TArray<import("@sinclair/typebox").TObject<{
            id: import("@sinclair/typebox").TNumber;
            username: import("@sinclair/typebox").TOptional<import("@sinclair/typebox").TUnion<[import("@sinclair/typebox").TString, import("@sinclair/typebox").TUndefined]>>;
            email: import("@sinclair/typebox").TOptional<import("@sinclair/typebox").TUnion<[import("@sinclair/typebox").TString, import("@sinclair/typebox").TUndefined]>>;
            profile: import("@sinclair/typebox").TOptional<import("@sinclair/typebox").TUnion<[import("@sinclair/typebox").TObject<{
                firstName: import("@sinclair/typebox").TOptional<import("@sinclair/typebox").TString>;
                lastName: import("@sinclair/typebox").TOptional<import("@sinclair/typebox").TString>;
                avatar: import("@sinclair/typebox").TOptional<import("@sinclair/typebox").TString>;
                bio: import("@sinclair/typebox").TOptional<import("@sinclair/typebox").TString>;
                location: import("@sinclair/typebox").TOptional<import("@sinclair/typebox").TString>;
                website: import("@sinclair/typebox").TOptional<import("@sinclair/typebox").TString>;
            }>, import("@sinclair/typebox").TUndefined]>>;
            preferences: import("@sinclair/typebox").TOptional<import("@sinclair/typebox").TUnion<[import("@sinclair/typebox").TObject<{
                theme: import("@sinclair/typebox").TOptional<import("@sinclair/typebox").TString>;
                notifications: import("@sinclair/typebox").TOptional<import("@sinclair/typebox").TBoolean>;
                language: import("@sinclair/typebox").TOptional<import("@sinclair/typebox").TString>;
                timezone: import("@sinclair/typebox").TOptional<import("@sinclair/typebox").TString>;
                emailNotifications: import("@sinclair/typebox").TOptional<import("@sinclair/typebox").TObject<{
                    marketing: import("@sinclair/typebox").TOptional<import("@sinclair/typebox").TBoolean>;
                    security: import("@sinclair/typebox").TOptional<import("@sinclair/typebox").TBoolean>;
                    updates: import("@sinclair/typebox").TOptional<import("@sinclair/typebox").TBoolean>;
                }>>;
            }>, import("@sinclair/typebox").TUndefined]>>;
            createdAt: import("@sinclair/typebox").TOptional<import("@sinclair/typebox").TUnion<[import("@sinclair/typebox").TString, import("@sinclair/typebox").TUndefined]>>;
            lastLogin: import("@sinclair/typebox").TOptional<import("@sinclair/typebox").TUnion<[import("@sinclair/typebox").TString, import("@sinclair/typebox").TUndefined]>>;
            isActive: import("@sinclair/typebox").TOptional<import("@sinclair/typebox").TUnion<[import("@sinclair/typebox").TBoolean, import("@sinclair/typebox").TUndefined]>>;
            role: import("@sinclair/typebox").TOptional<import("@sinclair/typebox").TUnion<[import("@sinclair/typebox").TString, import("@sinclair/typebox").TUndefined]>>;
            stats: import("@sinclair/typebox").TOptional<import("@sinclair/typebox").TUnion<[import("@sinclair/typebox").TObject<{
                postsCreated: import("@sinclair/typebox").TOptional<import("@sinclair/typebox").TNumber>;
                commentsPosted: import("@sinclair/typebox").TOptional<import("@sinclair/typebox").TNumber>;
                loginCount: import("@sinclair/typebox").TOptional<import("@sinclair/typebox").TNumber>;
            }>, import("@sinclair/typebox").TUndefined]>>;
        }>>;
    }>;
}>;
export type post__users = Static<typeof post__users>;
export declare const post__users: import("@sinclair/typebox").TObject<{
    method: import("@sinclair/typebox").TLiteral<"POST">;
    path: import("@sinclair/typebox").TLiteral<"/users">;
    requestFormat: import("@sinclair/typebox").TLiteral<"json">;
    parameters: import("@sinclair/typebox").TObject<{
        body: import("@sinclair/typebox").TObject<{
            id: import("@sinclair/typebox").TNumber;
            username: import("@sinclair/typebox").TOptional<import("@sinclair/typebox").TUnion<[import("@sinclair/typebox").TString, import("@sinclair/typebox").TUndefined]>>;
            email: import("@sinclair/typebox").TOptional<import("@sinclair/typebox").TUnion<[import("@sinclair/typebox").TString, import("@sinclair/typebox").TUndefined]>>;
            profile: import("@sinclair/typebox").TOptional<import("@sinclair/typebox").TUnion<[import("@sinclair/typebox").TObject<{
                firstName: import("@sinclair/typebox").TOptional<import("@sinclair/typebox").TString>;
                lastName: import("@sinclair/typebox").TOptional<import("@sinclair/typebox").TString>;
                avatar: import("@sinclair/typebox").TOptional<import("@sinclair/typebox").TString>;
                bio: import("@sinclair/typebox").TOptional<import("@sinclair/typebox").TString>;
                location: import("@sinclair/typebox").TOptional<import("@sinclair/typebox").TString>;
                website: import("@sinclair/typebox").TOptional<import("@sinclair/typebox").TString>;
            }>, import("@sinclair/typebox").TUndefined]>>;
            preferences: import("@sinclair/typebox").TOptional<import("@sinclair/typebox").TUnion<[import("@sinclair/typebox").TObject<{
                theme: import("@sinclair/typebox").TOptional<import("@sinclair/typebox").TString>;
                notifications: import("@sinclair/typebox").TOptional<import("@sinclair/typebox").TBoolean>;
                language: import("@sinclair/typebox").TOptional<import("@sinclair/typebox").TString>;
                timezone: import("@sinclair/typebox").TOptional<import("@sinclair/typebox").TString>;
                emailNotifications: import("@sinclair/typebox").TOptional<import("@sinclair/typebox").TObject<{
                    marketing: import("@sinclair/typebox").TOptional<import("@sinclair/typebox").TBoolean>;
                    security: import("@sinclair/typebox").TOptional<import("@sinclair/typebox").TBoolean>;
                    updates: import("@sinclair/typebox").TOptional<import("@sinclair/typebox").TBoolean>;
                }>>;
            }>, import("@sinclair/typebox").TUndefined]>>;
            createdAt: import("@sinclair/typebox").TOptional<import("@sinclair/typebox").TUnion<[import("@sinclair/typebox").TString, import("@sinclair/typebox").TUndefined]>>;
            lastLogin: import("@sinclair/typebox").TOptional<import("@sinclair/typebox").TUnion<[import("@sinclair/typebox").TString, import("@sinclair/typebox").TUndefined]>>;
            isActive: import("@sinclair/typebox").TOptional<import("@sinclair/typebox").TUnion<[import("@sinclair/typebox").TBoolean, import("@sinclair/typebox").TUndefined]>>;
            role: import("@sinclair/typebox").TOptional<import("@sinclair/typebox").TUnion<[import("@sinclair/typebox").TString, import("@sinclair/typebox").TUndefined]>>;
            stats: import("@sinclair/typebox").TOptional<import("@sinclair/typebox").TUnion<[import("@sinclair/typebox").TObject<{
                postsCreated: import("@sinclair/typebox").TOptional<import("@sinclair/typebox").TNumber>;
                commentsPosted: import("@sinclair/typebox").TOptional<import("@sinclair/typebox").TNumber>;
                loginCount: import("@sinclair/typebox").TOptional<import("@sinclair/typebox").TNumber>;
            }>, import("@sinclair/typebox").TUndefined]>>;
        }>;
    }>;
    responses: import("@sinclair/typebox").TObject<{
        201: import("@sinclair/typebox").TObject<{
            id: import("@sinclair/typebox").TNumber;
            username: import("@sinclair/typebox").TOptional<import("@sinclair/typebox").TUnion<[import("@sinclair/typebox").TString, import("@sinclair/typebox").TUndefined]>>;
            email: import("@sinclair/typebox").TOptional<import("@sinclair/typebox").TUnion<[import("@sinclair/typebox").TString, import("@sinclair/typebox").TUndefined]>>;
            profile: import("@sinclair/typebox").TOptional<import("@sinclair/typebox").TUnion<[import("@sinclair/typebox").TObject<{
                firstName: import("@sinclair/typebox").TOptional<import("@sinclair/typebox").TString>;
                lastName: import("@sinclair/typebox").TOptional<import("@sinclair/typebox").TString>;
                avatar: import("@sinclair/typebox").TOptional<import("@sinclair/typebox").TString>;
                bio: import("@sinclair/typebox").TOptional<import("@sinclair/typebox").TString>;
                location: import("@sinclair/typebox").TOptional<import("@sinclair/typebox").TString>;
                website: import("@sinclair/typebox").TOptional<import("@sinclair/typebox").TString>;
            }>, import("@sinclair/typebox").TUndefined]>>;
            preferences: import("@sinclair/typebox").TOptional<import("@sinclair/typebox").TUnion<[import("@sinclair/typebox").TObject<{
                theme: import("@sinclair/typebox").TOptional<import("@sinclair/typebox").TString>;
                notifications: import("@sinclair/typebox").TOptional<import("@sinclair/typebox").TBoolean>;
                language: import("@sinclair/typebox").TOptional<import("@sinclair/typebox").TString>;
                timezone: import("@sinclair/typebox").TOptional<import("@sinclair/typebox").TString>;
                emailNotifications: import("@sinclair/typebox").TOptional<import("@sinclair/typebox").TObject<{
                    marketing: import("@sinclair/typebox").TOptional<import("@sinclair/typebox").TBoolean>;
                    security: import("@sinclair/typebox").TOptional<import("@sinclair/typebox").TBoolean>;
                    updates: import("@sinclair/typebox").TOptional<import("@sinclair/typebox").TBoolean>;
                }>>;
            }>, import("@sinclair/typebox").TUndefined]>>;
            createdAt: import("@sinclair/typebox").TOptional<import("@sinclair/typebox").TUnion<[import("@sinclair/typebox").TString, import("@sinclair/typebox").TUndefined]>>;
            lastLogin: import("@sinclair/typebox").TOptional<import("@sinclair/typebox").TUnion<[import("@sinclair/typebox").TString, import("@sinclair/typebox").TUndefined]>>;
            isActive: import("@sinclair/typebox").TOptional<import("@sinclair/typebox").TUnion<[import("@sinclair/typebox").TBoolean, import("@sinclair/typebox").TUndefined]>>;
            role: import("@sinclair/typebox").TOptional<import("@sinclair/typebox").TUnion<[import("@sinclair/typebox").TString, import("@sinclair/typebox").TUndefined]>>;
            stats: import("@sinclair/typebox").TOptional<import("@sinclair/typebox").TUnion<[import("@sinclair/typebox").TObject<{
                postsCreated: import("@sinclair/typebox").TOptional<import("@sinclair/typebox").TNumber>;
                commentsPosted: import("@sinclair/typebox").TOptional<import("@sinclair/typebox").TNumber>;
                loginCount: import("@sinclair/typebox").TOptional<import("@sinclair/typebox").TNumber>;
            }>, import("@sinclair/typebox").TUndefined]>>;
        }>;
        400: import("@sinclair/typebox").TUnknown;
    }>;
}>;
export type get__users_Id = Static<typeof get__users_Id>;
export declare const get__users_Id: import("@sinclair/typebox").TObject<{
    method: import("@sinclair/typebox").TLiteral<"GET">;
    path: import("@sinclair/typebox").TLiteral<"/users/{id}">;
    requestFormat: import("@sinclair/typebox").TLiteral<"json">;
    parameters: import("@sinclair/typebox").TObject<{
        path: import("@sinclair/typebox").TObject<{
            id: import("@sinclair/typebox").TNumber;
        }>;
    }>;
    responses: import("@sinclair/typebox").TObject<{
        200: import("@sinclair/typebox").TObject<{
            id: import("@sinclair/typebox").TNumber;
            username: import("@sinclair/typebox").TOptional<import("@sinclair/typebox").TUnion<[import("@sinclair/typebox").TString, import("@sinclair/typebox").TUndefined]>>;
            email: import("@sinclair/typebox").TOptional<import("@sinclair/typebox").TUnion<[import("@sinclair/typebox").TString, import("@sinclair/typebox").TUndefined]>>;
            profile: import("@sinclair/typebox").TOptional<import("@sinclair/typebox").TUnion<[import("@sinclair/typebox").TObject<{
                firstName: import("@sinclair/typebox").TOptional<import("@sinclair/typebox").TString>;
                lastName: import("@sinclair/typebox").TOptional<import("@sinclair/typebox").TString>;
                avatar: import("@sinclair/typebox").TOptional<import("@sinclair/typebox").TString>;
                bio: import("@sinclair/typebox").TOptional<import("@sinclair/typebox").TString>;
                location: import("@sinclair/typebox").TOptional<import("@sinclair/typebox").TString>;
                website: import("@sinclair/typebox").TOptional<import("@sinclair/typebox").TString>;
            }>, import("@sinclair/typebox").TUndefined]>>;
            preferences: import("@sinclair/typebox").TOptional<import("@sinclair/typebox").TUnion<[import("@sinclair/typebox").TObject<{
                theme: import("@sinclair/typebox").TOptional<import("@sinclair/typebox").TString>;
                notifications: import("@sinclair/typebox").TOptional<import("@sinclair/typebox").TBoolean>;
                language: import("@sinclair/typebox").TOptional<import("@sinclair/typebox").TString>;
                timezone: import("@sinclair/typebox").TOptional<import("@sinclair/typebox").TString>;
                emailNotifications: import("@sinclair/typebox").TOptional<import("@sinclair/typebox").TObject<{
                    marketing: import("@sinclair/typebox").TOptional<import("@sinclair/typebox").TBoolean>;
                    security: import("@sinclair/typebox").TOptional<import("@sinclair/typebox").TBoolean>;
                    updates: import("@sinclair/typebox").TOptional<import("@sinclair/typebox").TBoolean>;
                }>>;
            }>, import("@sinclair/typebox").TUndefined]>>;
            createdAt: import("@sinclair/typebox").TOptional<import("@sinclair/typebox").TUnion<[import("@sinclair/typebox").TString, import("@sinclair/typebox").TUndefined]>>;
            lastLogin: import("@sinclair/typebox").TOptional<import("@sinclair/typebox").TUnion<[import("@sinclair/typebox").TString, import("@sinclair/typebox").TUndefined]>>;
            isActive: import("@sinclair/typebox").TOptional<import("@sinclair/typebox").TUnion<[import("@sinclair/typebox").TBoolean, import("@sinclair/typebox").TUndefined]>>;
            role: import("@sinclair/typebox").TOptional<import("@sinclair/typebox").TUnion<[import("@sinclair/typebox").TString, import("@sinclair/typebox").TUndefined]>>;
            stats: import("@sinclair/typebox").TOptional<import("@sinclair/typebox").TUnion<[import("@sinclair/typebox").TObject<{
                postsCreated: import("@sinclair/typebox").TOptional<import("@sinclair/typebox").TNumber>;
                commentsPosted: import("@sinclair/typebox").TOptional<import("@sinclair/typebox").TNumber>;
                loginCount: import("@sinclair/typebox").TOptional<import("@sinclair/typebox").TNumber>;
            }>, import("@sinclair/typebox").TUndefined]>>;
        }>;
        404: import("@sinclair/typebox").TUnknown;
    }>;
}>;
export type put__users_Id = Static<typeof put__users_Id>;
export declare const put__users_Id: import("@sinclair/typebox").TObject<{
    method: import("@sinclair/typebox").TLiteral<"PUT">;
    path: import("@sinclair/typebox").TLiteral<"/users/{id}">;
    requestFormat: import("@sinclair/typebox").TLiteral<"json">;
    parameters: import("@sinclair/typebox").TObject<{
        path: import("@sinclair/typebox").TObject<{
            id: import("@sinclair/typebox").TNumber;
        }>;
        body: import("@sinclair/typebox").TObject<{
            id: import("@sinclair/typebox").TNumber;
            username: import("@sinclair/typebox").TOptional<import("@sinclair/typebox").TUnion<[import("@sinclair/typebox").TString, import("@sinclair/typebox").TUndefined]>>;
            email: import("@sinclair/typebox").TOptional<import("@sinclair/typebox").TUnion<[import("@sinclair/typebox").TString, import("@sinclair/typebox").TUndefined]>>;
            profile: import("@sinclair/typebox").TOptional<import("@sinclair/typebox").TUnion<[import("@sinclair/typebox").TObject<{
                firstName: import("@sinclair/typebox").TOptional<import("@sinclair/typebox").TString>;
                lastName: import("@sinclair/typebox").TOptional<import("@sinclair/typebox").TString>;
                avatar: import("@sinclair/typebox").TOptional<import("@sinclair/typebox").TString>;
                bio: import("@sinclair/typebox").TOptional<import("@sinclair/typebox").TString>;
                location: import("@sinclair/typebox").TOptional<import("@sinclair/typebox").TString>;
                website: import("@sinclair/typebox").TOptional<import("@sinclair/typebox").TString>;
            }>, import("@sinclair/typebox").TUndefined]>>;
            preferences: import("@sinclair/typebox").TOptional<import("@sinclair/typebox").TUnion<[import("@sinclair/typebox").TObject<{
                theme: import("@sinclair/typebox").TOptional<import("@sinclair/typebox").TString>;
                notifications: import("@sinclair/typebox").TOptional<import("@sinclair/typebox").TBoolean>;
                language: import("@sinclair/typebox").TOptional<import("@sinclair/typebox").TString>;
                timezone: import("@sinclair/typebox").TOptional<import("@sinclair/typebox").TString>;
                emailNotifications: import("@sinclair/typebox").TOptional<import("@sinclair/typebox").TObject<{
                    marketing: import("@sinclair/typebox").TOptional<import("@sinclair/typebox").TBoolean>;
                    security: import("@sinclair/typebox").TOptional<import("@sinclair/typebox").TBoolean>;
                    updates: import("@sinclair/typebox").TOptional<import("@sinclair/typebox").TBoolean>;
                }>>;
            }>, import("@sinclair/typebox").TUndefined]>>;
            createdAt: import("@sinclair/typebox").TOptional<import("@sinclair/typebox").TUnion<[import("@sinclair/typebox").TString, import("@sinclair/typebox").TUndefined]>>;
            lastLogin: import("@sinclair/typebox").TOptional<import("@sinclair/typebox").TUnion<[import("@sinclair/typebox").TString, import("@sinclair/typebox").TUndefined]>>;
            isActive: import("@sinclair/typebox").TOptional<import("@sinclair/typebox").TUnion<[import("@sinclair/typebox").TBoolean, import("@sinclair/typebox").TUndefined]>>;
            role: import("@sinclair/typebox").TOptional<import("@sinclair/typebox").TUnion<[import("@sinclair/typebox").TString, import("@sinclair/typebox").TUndefined]>>;
            stats: import("@sinclair/typebox").TOptional<import("@sinclair/typebox").TUnion<[import("@sinclair/typebox").TObject<{
                postsCreated: import("@sinclair/typebox").TOptional<import("@sinclair/typebox").TNumber>;
                commentsPosted: import("@sinclair/typebox").TOptional<import("@sinclair/typebox").TNumber>;
                loginCount: import("@sinclair/typebox").TOptional<import("@sinclair/typebox").TNumber>;
            }>, import("@sinclair/typebox").TUndefined]>>;
        }>;
    }>;
    responses: import("@sinclair/typebox").TObject<{
        200: import("@sinclair/typebox").TObject<{
            id: import("@sinclair/typebox").TNumber;
            username: import("@sinclair/typebox").TOptional<import("@sinclair/typebox").TUnion<[import("@sinclair/typebox").TString, import("@sinclair/typebox").TUndefined]>>;
            email: import("@sinclair/typebox").TOptional<import("@sinclair/typebox").TUnion<[import("@sinclair/typebox").TString, import("@sinclair/typebox").TUndefined]>>;
            profile: import("@sinclair/typebox").TOptional<import("@sinclair/typebox").TUnion<[import("@sinclair/typebox").TObject<{
                firstName: import("@sinclair/typebox").TOptional<import("@sinclair/typebox").TString>;
                lastName: import("@sinclair/typebox").TOptional<import("@sinclair/typebox").TString>;
                avatar: import("@sinclair/typebox").TOptional<import("@sinclair/typebox").TString>;
                bio: import("@sinclair/typebox").TOptional<import("@sinclair/typebox").TString>;
                location: import("@sinclair/typebox").TOptional<import("@sinclair/typebox").TString>;
                website: import("@sinclair/typebox").TOptional<import("@sinclair/typebox").TString>;
            }>, import("@sinclair/typebox").TUndefined]>>;
            preferences: import("@sinclair/typebox").TOptional<import("@sinclair/typebox").TUnion<[import("@sinclair/typebox").TObject<{
                theme: import("@sinclair/typebox").TOptional<import("@sinclair/typebox").TString>;
                notifications: import("@sinclair/typebox").TOptional<import("@sinclair/typebox").TBoolean>;
                language: import("@sinclair/typebox").TOptional<import("@sinclair/typebox").TString>;
                timezone: import("@sinclair/typebox").TOptional<import("@sinclair/typebox").TString>;
                emailNotifications: import("@sinclair/typebox").TOptional<import("@sinclair/typebox").TObject<{
                    marketing: import("@sinclair/typebox").TOptional<import("@sinclair/typebox").TBoolean>;
                    security: import("@sinclair/typebox").TOptional<import("@sinclair/typebox").TBoolean>;
                    updates: import("@sinclair/typebox").TOptional<import("@sinclair/typebox").TBoolean>;
                }>>;
            }>, import("@sinclair/typebox").TUndefined]>>;
            createdAt: import("@sinclair/typebox").TOptional<import("@sinclair/typebox").TUnion<[import("@sinclair/typebox").TString, import("@sinclair/typebox").TUndefined]>>;
            lastLogin: import("@sinclair/typebox").TOptional<import("@sinclair/typebox").TUnion<[import("@sinclair/typebox").TString, import("@sinclair/typebox").TUndefined]>>;
            isActive: import("@sinclair/typebox").TOptional<import("@sinclair/typebox").TUnion<[import("@sinclair/typebox").TBoolean, import("@sinclair/typebox").TUndefined]>>;
            role: import("@sinclair/typebox").TOptional<import("@sinclair/typebox").TUnion<[import("@sinclair/typebox").TString, import("@sinclair/typebox").TUndefined]>>;
            stats: import("@sinclair/typebox").TOptional<import("@sinclair/typebox").TUnion<[import("@sinclair/typebox").TObject<{
                postsCreated: import("@sinclair/typebox").TOptional<import("@sinclair/typebox").TNumber>;
                commentsPosted: import("@sinclair/typebox").TOptional<import("@sinclair/typebox").TNumber>;
                loginCount: import("@sinclair/typebox").TOptional<import("@sinclair/typebox").TNumber>;
            }>, import("@sinclair/typebox").TUndefined]>>;
        }>;
        400: import("@sinclair/typebox").TUnknown;
        404: import("@sinclair/typebox").TUnknown;
    }>;
}>;
export type patch__users_Id = Static<typeof patch__users_Id>;
export declare const patch__users_Id: import("@sinclair/typebox").TObject<{
    method: import("@sinclair/typebox").TLiteral<"PATCH">;
    path: import("@sinclair/typebox").TLiteral<"/users/{id}">;
    requestFormat: import("@sinclair/typebox").TLiteral<"json">;
    parameters: import("@sinclair/typebox").TObject<{
        path: import("@sinclair/typebox").TObject<{
            id: import("@sinclair/typebox").TNumber;
        }>;
        body: import("@sinclair/typebox").TObject<{
            id: import("@sinclair/typebox").TNumber;
            username: import("@sinclair/typebox").TOptional<import("@sinclair/typebox").TUnion<[import("@sinclair/typebox").TString, import("@sinclair/typebox").TUndefined]>>;
            email: import("@sinclair/typebox").TOptional<import("@sinclair/typebox").TUnion<[import("@sinclair/typebox").TString, import("@sinclair/typebox").TUndefined]>>;
            profile: import("@sinclair/typebox").TOptional<import("@sinclair/typebox").TUnion<[import("@sinclair/typebox").TObject<{
                firstName: import("@sinclair/typebox").TOptional<import("@sinclair/typebox").TString>;
                lastName: import("@sinclair/typebox").TOptional<import("@sinclair/typebox").TString>;
                avatar: import("@sinclair/typebox").TOptional<import("@sinclair/typebox").TString>;
                bio: import("@sinclair/typebox").TOptional<import("@sinclair/typebox").TString>;
                location: import("@sinclair/typebox").TOptional<import("@sinclair/typebox").TString>;
                website: import("@sinclair/typebox").TOptional<import("@sinclair/typebox").TString>;
            }>, import("@sinclair/typebox").TUndefined]>>;
            preferences: import("@sinclair/typebox").TOptional<import("@sinclair/typebox").TUnion<[import("@sinclair/typebox").TObject<{
                theme: import("@sinclair/typebox").TOptional<import("@sinclair/typebox").TString>;
                notifications: import("@sinclair/typebox").TOptional<import("@sinclair/typebox").TBoolean>;
                language: import("@sinclair/typebox").TOptional<import("@sinclair/typebox").TString>;
                timezone: import("@sinclair/typebox").TOptional<import("@sinclair/typebox").TString>;
                emailNotifications: import("@sinclair/typebox").TOptional<import("@sinclair/typebox").TObject<{
                    marketing: import("@sinclair/typebox").TOptional<import("@sinclair/typebox").TBoolean>;
                    security: import("@sinclair/typebox").TOptional<import("@sinclair/typebox").TBoolean>;
                    updates: import("@sinclair/typebox").TOptional<import("@sinclair/typebox").TBoolean>;
                }>>;
            }>, import("@sinclair/typebox").TUndefined]>>;
            createdAt: import("@sinclair/typebox").TOptional<import("@sinclair/typebox").TUnion<[import("@sinclair/typebox").TString, import("@sinclair/typebox").TUndefined]>>;
            lastLogin: import("@sinclair/typebox").TOptional<import("@sinclair/typebox").TUnion<[import("@sinclair/typebox").TString, import("@sinclair/typebox").TUndefined]>>;
            isActive: import("@sinclair/typebox").TOptional<import("@sinclair/typebox").TUnion<[import("@sinclair/typebox").TBoolean, import("@sinclair/typebox").TUndefined]>>;
            role: import("@sinclair/typebox").TOptional<import("@sinclair/typebox").TUnion<[import("@sinclair/typebox").TString, import("@sinclair/typebox").TUndefined]>>;
            stats: import("@sinclair/typebox").TOptional<import("@sinclair/typebox").TUnion<[import("@sinclair/typebox").TObject<{
                postsCreated: import("@sinclair/typebox").TOptional<import("@sinclair/typebox").TNumber>;
                commentsPosted: import("@sinclair/typebox").TOptional<import("@sinclair/typebox").TNumber>;
                loginCount: import("@sinclair/typebox").TOptional<import("@sinclair/typebox").TNumber>;
            }>, import("@sinclair/typebox").TUndefined]>>;
        }>;
    }>;
    responses: import("@sinclair/typebox").TObject<{
        200: import("@sinclair/typebox").TObject<{
            id: import("@sinclair/typebox").TNumber;
            username: import("@sinclair/typebox").TOptional<import("@sinclair/typebox").TUnion<[import("@sinclair/typebox").TString, import("@sinclair/typebox").TUndefined]>>;
            email: import("@sinclair/typebox").TOptional<import("@sinclair/typebox").TUnion<[import("@sinclair/typebox").TString, import("@sinclair/typebox").TUndefined]>>;
            profile: import("@sinclair/typebox").TOptional<import("@sinclair/typebox").TUnion<[import("@sinclair/typebox").TObject<{
                firstName: import("@sinclair/typebox").TOptional<import("@sinclair/typebox").TString>;
                lastName: import("@sinclair/typebox").TOptional<import("@sinclair/typebox").TString>;
                avatar: import("@sinclair/typebox").TOptional<import("@sinclair/typebox").TString>;
                bio: import("@sinclair/typebox").TOptional<import("@sinclair/typebox").TString>;
                location: import("@sinclair/typebox").TOptional<import("@sinclair/typebox").TString>;
                website: import("@sinclair/typebox").TOptional<import("@sinclair/typebox").TString>;
            }>, import("@sinclair/typebox").TUndefined]>>;
            preferences: import("@sinclair/typebox").TOptional<import("@sinclair/typebox").TUnion<[import("@sinclair/typebox").TObject<{
                theme: import("@sinclair/typebox").TOptional<import("@sinclair/typebox").TString>;
                notifications: import("@sinclair/typebox").TOptional<import("@sinclair/typebox").TBoolean>;
                language: import("@sinclair/typebox").TOptional<import("@sinclair/typebox").TString>;
                timezone: import("@sinclair/typebox").TOptional<import("@sinclair/typebox").TString>;
                emailNotifications: import("@sinclair/typebox").TOptional<import("@sinclair/typebox").TObject<{
                    marketing: import("@sinclair/typebox").TOptional<import("@sinclair/typebox").TBoolean>;
                    security: import("@sinclair/typebox").TOptional<import("@sinclair/typebox").TBoolean>;
                    updates: import("@sinclair/typebox").TOptional<import("@sinclair/typebox").TBoolean>;
                }>>;
            }>, import("@sinclair/typebox").TUndefined]>>;
            createdAt: import("@sinclair/typebox").TOptional<import("@sinclair/typebox").TUnion<[import("@sinclair/typebox").TString, import("@sinclair/typebox").TUndefined]>>;
            lastLogin: import("@sinclair/typebox").TOptional<import("@sinclair/typebox").TUnion<[import("@sinclair/typebox").TString, import("@sinclair/typebox").TUndefined]>>;
            isActive: import("@sinclair/typebox").TOptional<import("@sinclair/typebox").TUnion<[import("@sinclair/typebox").TBoolean, import("@sinclair/typebox").TUndefined]>>;
            role: import("@sinclair/typebox").TOptional<import("@sinclair/typebox").TUnion<[import("@sinclair/typebox").TString, import("@sinclair/typebox").TUndefined]>>;
            stats: import("@sinclair/typebox").TOptional<import("@sinclair/typebox").TUnion<[import("@sinclair/typebox").TObject<{
                postsCreated: import("@sinclair/typebox").TOptional<import("@sinclair/typebox").TNumber>;
                commentsPosted: import("@sinclair/typebox").TOptional<import("@sinclair/typebox").TNumber>;
                loginCount: import("@sinclair/typebox").TOptional<import("@sinclair/typebox").TNumber>;
            }>, import("@sinclair/typebox").TUndefined]>>;
        }>;
        400: import("@sinclair/typebox").TUnknown;
        404: import("@sinclair/typebox").TUnknown;
    }>;
}>;
export type delete__users_Id = Static<typeof delete__users_Id>;
export declare const delete__users_Id: import("@sinclair/typebox").TObject<{
    method: import("@sinclair/typebox").TLiteral<"DELETE">;
    path: import("@sinclair/typebox").TLiteral<"/users/{id}">;
    requestFormat: import("@sinclair/typebox").TLiteral<"json">;
    parameters: import("@sinclair/typebox").TObject<{
        path: import("@sinclair/typebox").TObject<{
            id: import("@sinclair/typebox").TNumber;
        }>;
    }>;
    responses: import("@sinclair/typebox").TObject<{
        200: import("@sinclair/typebox").TUnknown;
        404: import("@sinclair/typebox").TUnknown;
    }>;
}>;
export type get__posts = Static<typeof get__posts>;
export declare const get__posts: import("@sinclair/typebox").TObject<{
    method: import("@sinclair/typebox").TLiteral<"GET">;
    path: import("@sinclair/typebox").TLiteral<"/posts">;
    requestFormat: import("@sinclair/typebox").TLiteral<"json">;
    parameters: import("@sinclair/typebox").TObject<{
        query: import("@sinclair/typebox").TObject<{
            _page: import("@sinclair/typebox").TOptional<import("@sinclair/typebox").TNumber>;
            _limit: import("@sinclair/typebox").TOptional<import("@sinclair/typebox").TNumber>;
            _sort: import("@sinclair/typebox").TOptional<import("@sinclair/typebox").TString>;
            _order: import("@sinclair/typebox").TOptional<import("@sinclair/typebox").TUnion<[import("@sinclair/typebox").TLiteral<"asc">, import("@sinclair/typebox").TLiteral<"desc">]>>;
            q: import("@sinclair/typebox").TOptional<import("@sinclair/typebox").TString>;
        }>;
    }>;
    responses: import("@sinclair/typebox").TObject<{
        200: import("@sinclair/typebox").TArray<import("@sinclair/typebox").TObject<{
            id: import("@sinclair/typebox").TNumber;
            title: import("@sinclair/typebox").TOptional<import("@sinclair/typebox").TUnion<[import("@sinclair/typebox").TString, import("@sinclair/typebox").TUndefined]>>;
            content: import("@sinclair/typebox").TOptional<import("@sinclair/typebox").TUnion<[import("@sinclair/typebox").TString, import("@sinclair/typebox").TUndefined]>>;
            excerpt: import("@sinclair/typebox").TOptional<import("@sinclair/typebox").TUnion<[import("@sinclair/typebox").TString, import("@sinclair/typebox").TUndefined]>>;
            authorId: import("@sinclair/typebox").TOptional<import("@sinclair/typebox").TUnion<[import("@sinclair/typebox").TNumber, import("@sinclair/typebox").TUndefined]>>;
            categoryId: import("@sinclair/typebox").TOptional<import("@sinclair/typebox").TUnion<[import("@sinclair/typebox").TNumber, import("@sinclair/typebox").TUndefined]>>;
            tags: import("@sinclair/typebox").TOptional<import("@sinclair/typebox").TUnion<[import("@sinclair/typebox").TArray<import("@sinclair/typebox").TString>, import("@sinclair/typebox").TUndefined]>>;
            status: import("@sinclair/typebox").TOptional<import("@sinclair/typebox").TUnion<[import("@sinclair/typebox").TString, import("@sinclair/typebox").TUndefined]>>;
            featured: import("@sinclair/typebox").TOptional<import("@sinclair/typebox").TUnion<[import("@sinclair/typebox").TBoolean, import("@sinclair/typebox").TUndefined]>>;
            metadata: import("@sinclair/typebox").TOptional<import("@sinclair/typebox").TUnion<[import("@sinclair/typebox").TObject<{
                views: import("@sinclair/typebox").TOptional<import("@sinclair/typebox").TNumber>;
                likes: import("@sinclair/typebox").TOptional<import("@sinclair/typebox").TNumber>;
                comments: import("@sinclair/typebox").TOptional<import("@sinclair/typebox").TNumber>;
                shares: import("@sinclair/typebox").TOptional<import("@sinclair/typebox").TNumber>;
                bookmarks: import("@sinclair/typebox").TOptional<import("@sinclair/typebox").TNumber>;
                readTime: import("@sinclair/typebox").TOptional<import("@sinclair/typebox").TNumber>;
            }>, import("@sinclair/typebox").TUndefined]>>;
            seo: import("@sinclair/typebox").TOptional<import("@sinclair/typebox").TUnion<[import("@sinclair/typebox").TObject<{
                slug: import("@sinclair/typebox").TOptional<import("@sinclair/typebox").TString>;
                metaTitle: import("@sinclair/typebox").TOptional<import("@sinclair/typebox").TString>;
                metaDescription: import("@sinclair/typebox").TOptional<import("@sinclair/typebox").TString>;
                keywords: import("@sinclair/typebox").TOptional<import("@sinclair/typebox").TArray<import("@sinclair/typebox").TString>>;
            }>, import("@sinclair/typebox").TUndefined]>>;
            createdAt: import("@sinclair/typebox").TOptional<import("@sinclair/typebox").TUnion<[import("@sinclair/typebox").TString, import("@sinclair/typebox").TUndefined]>>;
            updatedAt: import("@sinclair/typebox").TOptional<import("@sinclair/typebox").TUnion<[import("@sinclair/typebox").TString, import("@sinclair/typebox").TUndefined]>>;
            publishedAt: import("@sinclair/typebox").TOptional<import("@sinclair/typebox").TUnion<[import("@sinclair/typebox").TString, import("@sinclair/typebox").TUndefined]>>;
        }>>;
    }>;
}>;
export type post__posts = Static<typeof post__posts>;
export declare const post__posts: import("@sinclair/typebox").TObject<{
    method: import("@sinclair/typebox").TLiteral<"POST">;
    path: import("@sinclair/typebox").TLiteral<"/posts">;
    requestFormat: import("@sinclair/typebox").TLiteral<"json">;
    parameters: import("@sinclair/typebox").TObject<{
        body: import("@sinclair/typebox").TObject<{
            id: import("@sinclair/typebox").TNumber;
            title: import("@sinclair/typebox").TOptional<import("@sinclair/typebox").TUnion<[import("@sinclair/typebox").TString, import("@sinclair/typebox").TUndefined]>>;
            content: import("@sinclair/typebox").TOptional<import("@sinclair/typebox").TUnion<[import("@sinclair/typebox").TString, import("@sinclair/typebox").TUndefined]>>;
            excerpt: import("@sinclair/typebox").TOptional<import("@sinclair/typebox").TUnion<[import("@sinclair/typebox").TString, import("@sinclair/typebox").TUndefined]>>;
            authorId: import("@sinclair/typebox").TOptional<import("@sinclair/typebox").TUnion<[import("@sinclair/typebox").TNumber, import("@sinclair/typebox").TUndefined]>>;
            categoryId: import("@sinclair/typebox").TOptional<import("@sinclair/typebox").TUnion<[import("@sinclair/typebox").TNumber, import("@sinclair/typebox").TUndefined]>>;
            tags: import("@sinclair/typebox").TOptional<import("@sinclair/typebox").TUnion<[import("@sinclair/typebox").TArray<import("@sinclair/typebox").TString>, import("@sinclair/typebox").TUndefined]>>;
            status: import("@sinclair/typebox").TOptional<import("@sinclair/typebox").TUnion<[import("@sinclair/typebox").TString, import("@sinclair/typebox").TUndefined]>>;
            featured: import("@sinclair/typebox").TOptional<import("@sinclair/typebox").TUnion<[import("@sinclair/typebox").TBoolean, import("@sinclair/typebox").TUndefined]>>;
            metadata: import("@sinclair/typebox").TOptional<import("@sinclair/typebox").TUnion<[import("@sinclair/typebox").TObject<{
                views: import("@sinclair/typebox").TOptional<import("@sinclair/typebox").TNumber>;
                likes: import("@sinclair/typebox").TOptional<import("@sinclair/typebox").TNumber>;
                comments: import("@sinclair/typebox").TOptional<import("@sinclair/typebox").TNumber>;
                shares: import("@sinclair/typebox").TOptional<import("@sinclair/typebox").TNumber>;
                bookmarks: import("@sinclair/typebox").TOptional<import("@sinclair/typebox").TNumber>;
                readTime: import("@sinclair/typebox").TOptional<import("@sinclair/typebox").TNumber>;
            }>, import("@sinclair/typebox").TUndefined]>>;
            seo: import("@sinclair/typebox").TOptional<import("@sinclair/typebox").TUnion<[import("@sinclair/typebox").TObject<{
                slug: import("@sinclair/typebox").TOptional<import("@sinclair/typebox").TString>;
                metaTitle: import("@sinclair/typebox").TOptional<import("@sinclair/typebox").TString>;
                metaDescription: import("@sinclair/typebox").TOptional<import("@sinclair/typebox").TString>;
                keywords: import("@sinclair/typebox").TOptional<import("@sinclair/typebox").TArray<import("@sinclair/typebox").TString>>;
            }>, import("@sinclair/typebox").TUndefined]>>;
            createdAt: import("@sinclair/typebox").TOptional<import("@sinclair/typebox").TUnion<[import("@sinclair/typebox").TString, import("@sinclair/typebox").TUndefined]>>;
            updatedAt: import("@sinclair/typebox").TOptional<import("@sinclair/typebox").TUnion<[import("@sinclair/typebox").TString, import("@sinclair/typebox").TUndefined]>>;
            publishedAt: import("@sinclair/typebox").TOptional<import("@sinclair/typebox").TUnion<[import("@sinclair/typebox").TString, import("@sinclair/typebox").TUndefined]>>;
        }>;
    }>;
    responses: import("@sinclair/typebox").TObject<{
        201: import("@sinclair/typebox").TObject<{
            id: import("@sinclair/typebox").TNumber;
            title: import("@sinclair/typebox").TOptional<import("@sinclair/typebox").TUnion<[import("@sinclair/typebox").TString, import("@sinclair/typebox").TUndefined]>>;
            content: import("@sinclair/typebox").TOptional<import("@sinclair/typebox").TUnion<[import("@sinclair/typebox").TString, import("@sinclair/typebox").TUndefined]>>;
            excerpt: import("@sinclair/typebox").TOptional<import("@sinclair/typebox").TUnion<[import("@sinclair/typebox").TString, import("@sinclair/typebox").TUndefined]>>;
            authorId: import("@sinclair/typebox").TOptional<import("@sinclair/typebox").TUnion<[import("@sinclair/typebox").TNumber, import("@sinclair/typebox").TUndefined]>>;
            categoryId: import("@sinclair/typebox").TOptional<import("@sinclair/typebox").TUnion<[import("@sinclair/typebox").TNumber, import("@sinclair/typebox").TUndefined]>>;
            tags: import("@sinclair/typebox").TOptional<import("@sinclair/typebox").TUnion<[import("@sinclair/typebox").TArray<import("@sinclair/typebox").TString>, import("@sinclair/typebox").TUndefined]>>;
            status: import("@sinclair/typebox").TOptional<import("@sinclair/typebox").TUnion<[import("@sinclair/typebox").TString, import("@sinclair/typebox").TUndefined]>>;
            featured: import("@sinclair/typebox").TOptional<import("@sinclair/typebox").TUnion<[import("@sinclair/typebox").TBoolean, import("@sinclair/typebox").TUndefined]>>;
            metadata: import("@sinclair/typebox").TOptional<import("@sinclair/typebox").TUnion<[import("@sinclair/typebox").TObject<{
                views: import("@sinclair/typebox").TOptional<import("@sinclair/typebox").TNumber>;
                likes: import("@sinclair/typebox").TOptional<import("@sinclair/typebox").TNumber>;
                comments: import("@sinclair/typebox").TOptional<import("@sinclair/typebox").TNumber>;
                shares: import("@sinclair/typebox").TOptional<import("@sinclair/typebox").TNumber>;
                bookmarks: import("@sinclair/typebox").TOptional<import("@sinclair/typebox").TNumber>;
                readTime: import("@sinclair/typebox").TOptional<import("@sinclair/typebox").TNumber>;
            }>, import("@sinclair/typebox").TUndefined]>>;
            seo: import("@sinclair/typebox").TOptional<import("@sinclair/typebox").TUnion<[import("@sinclair/typebox").TObject<{
                slug: import("@sinclair/typebox").TOptional<import("@sinclair/typebox").TString>;
                metaTitle: import("@sinclair/typebox").TOptional<import("@sinclair/typebox").TString>;
                metaDescription: import("@sinclair/typebox").TOptional<import("@sinclair/typebox").TString>;
                keywords: import("@sinclair/typebox").TOptional<import("@sinclair/typebox").TArray<import("@sinclair/typebox").TString>>;
            }>, import("@sinclair/typebox").TUndefined]>>;
            createdAt: import("@sinclair/typebox").TOptional<import("@sinclair/typebox").TUnion<[import("@sinclair/typebox").TString, import("@sinclair/typebox").TUndefined]>>;
            updatedAt: import("@sinclair/typebox").TOptional<import("@sinclair/typebox").TUnion<[import("@sinclair/typebox").TString, import("@sinclair/typebox").TUndefined]>>;
            publishedAt: import("@sinclair/typebox").TOptional<import("@sinclair/typebox").TUnion<[import("@sinclair/typebox").TString, import("@sinclair/typebox").TUndefined]>>;
        }>;
        400: import("@sinclair/typebox").TUnknown;
    }>;
}>;
export type get__posts_Id = Static<typeof get__posts_Id>;
export declare const get__posts_Id: import("@sinclair/typebox").TObject<{
    method: import("@sinclair/typebox").TLiteral<"GET">;
    path: import("@sinclair/typebox").TLiteral<"/posts/{id}">;
    requestFormat: import("@sinclair/typebox").TLiteral<"json">;
    parameters: import("@sinclair/typebox").TObject<{
        path: import("@sinclair/typebox").TObject<{
            id: import("@sinclair/typebox").TNumber;
        }>;
    }>;
    responses: import("@sinclair/typebox").TObject<{
        200: import("@sinclair/typebox").TObject<{
            id: import("@sinclair/typebox").TNumber;
            title: import("@sinclair/typebox").TOptional<import("@sinclair/typebox").TUnion<[import("@sinclair/typebox").TString, import("@sinclair/typebox").TUndefined]>>;
            content: import("@sinclair/typebox").TOptional<import("@sinclair/typebox").TUnion<[import("@sinclair/typebox").TString, import("@sinclair/typebox").TUndefined]>>;
            excerpt: import("@sinclair/typebox").TOptional<import("@sinclair/typebox").TUnion<[import("@sinclair/typebox").TString, import("@sinclair/typebox").TUndefined]>>;
            authorId: import("@sinclair/typebox").TOptional<import("@sinclair/typebox").TUnion<[import("@sinclair/typebox").TNumber, import("@sinclair/typebox").TUndefined]>>;
            categoryId: import("@sinclair/typebox").TOptional<import("@sinclair/typebox").TUnion<[import("@sinclair/typebox").TNumber, import("@sinclair/typebox").TUndefined]>>;
            tags: import("@sinclair/typebox").TOptional<import("@sinclair/typebox").TUnion<[import("@sinclair/typebox").TArray<import("@sinclair/typebox").TString>, import("@sinclair/typebox").TUndefined]>>;
            status: import("@sinclair/typebox").TOptional<import("@sinclair/typebox").TUnion<[import("@sinclair/typebox").TString, import("@sinclair/typebox").TUndefined]>>;
            featured: import("@sinclair/typebox").TOptional<import("@sinclair/typebox").TUnion<[import("@sinclair/typebox").TBoolean, import("@sinclair/typebox").TUndefined]>>;
            metadata: import("@sinclair/typebox").TOptional<import("@sinclair/typebox").TUnion<[import("@sinclair/typebox").TObject<{
                views: import("@sinclair/typebox").TOptional<import("@sinclair/typebox").TNumber>;
                likes: import("@sinclair/typebox").TOptional<import("@sinclair/typebox").TNumber>;
                comments: import("@sinclair/typebox").TOptional<import("@sinclair/typebox").TNumber>;
                shares: import("@sinclair/typebox").TOptional<import("@sinclair/typebox").TNumber>;
                bookmarks: import("@sinclair/typebox").TOptional<import("@sinclair/typebox").TNumber>;
                readTime: import("@sinclair/typebox").TOptional<import("@sinclair/typebox").TNumber>;
            }>, import("@sinclair/typebox").TUndefined]>>;
            seo: import("@sinclair/typebox").TOptional<import("@sinclair/typebox").TUnion<[import("@sinclair/typebox").TObject<{
                slug: import("@sinclair/typebox").TOptional<import("@sinclair/typebox").TString>;
                metaTitle: import("@sinclair/typebox").TOptional<import("@sinclair/typebox").TString>;
                metaDescription: import("@sinclair/typebox").TOptional<import("@sinclair/typebox").TString>;
                keywords: import("@sinclair/typebox").TOptional<import("@sinclair/typebox").TArray<import("@sinclair/typebox").TString>>;
            }>, import("@sinclair/typebox").TUndefined]>>;
            createdAt: import("@sinclair/typebox").TOptional<import("@sinclair/typebox").TUnion<[import("@sinclair/typebox").TString, import("@sinclair/typebox").TUndefined]>>;
            updatedAt: import("@sinclair/typebox").TOptional<import("@sinclair/typebox").TUnion<[import("@sinclair/typebox").TString, import("@sinclair/typebox").TUndefined]>>;
            publishedAt: import("@sinclair/typebox").TOptional<import("@sinclair/typebox").TUnion<[import("@sinclair/typebox").TString, import("@sinclair/typebox").TUndefined]>>;
        }>;
        404: import("@sinclair/typebox").TUnknown;
    }>;
}>;
export type put__posts_Id = Static<typeof put__posts_Id>;
export declare const put__posts_Id: import("@sinclair/typebox").TObject<{
    method: import("@sinclair/typebox").TLiteral<"PUT">;
    path: import("@sinclair/typebox").TLiteral<"/posts/{id}">;
    requestFormat: import("@sinclair/typebox").TLiteral<"json">;
    parameters: import("@sinclair/typebox").TObject<{
        path: import("@sinclair/typebox").TObject<{
            id: import("@sinclair/typebox").TNumber;
        }>;
        body: import("@sinclair/typebox").TObject<{
            id: import("@sinclair/typebox").TNumber;
            title: import("@sinclair/typebox").TOptional<import("@sinclair/typebox").TUnion<[import("@sinclair/typebox").TString, import("@sinclair/typebox").TUndefined]>>;
            content: import("@sinclair/typebox").TOptional<import("@sinclair/typebox").TUnion<[import("@sinclair/typebox").TString, import("@sinclair/typebox").TUndefined]>>;
            excerpt: import("@sinclair/typebox").TOptional<import("@sinclair/typebox").TUnion<[import("@sinclair/typebox").TString, import("@sinclair/typebox").TUndefined]>>;
            authorId: import("@sinclair/typebox").TOptional<import("@sinclair/typebox").TUnion<[import("@sinclair/typebox").TNumber, import("@sinclair/typebox").TUndefined]>>;
            categoryId: import("@sinclair/typebox").TOptional<import("@sinclair/typebox").TUnion<[import("@sinclair/typebox").TNumber, import("@sinclair/typebox").TUndefined]>>;
            tags: import("@sinclair/typebox").TOptional<import("@sinclair/typebox").TUnion<[import("@sinclair/typebox").TArray<import("@sinclair/typebox").TString>, import("@sinclair/typebox").TUndefined]>>;
            status: import("@sinclair/typebox").TOptional<import("@sinclair/typebox").TUnion<[import("@sinclair/typebox").TString, import("@sinclair/typebox").TUndefined]>>;
            featured: import("@sinclair/typebox").TOptional<import("@sinclair/typebox").TUnion<[import("@sinclair/typebox").TBoolean, import("@sinclair/typebox").TUndefined]>>;
            metadata: import("@sinclair/typebox").TOptional<import("@sinclair/typebox").TUnion<[import("@sinclair/typebox").TObject<{
                views: import("@sinclair/typebox").TOptional<import("@sinclair/typebox").TNumber>;
                likes: import("@sinclair/typebox").TOptional<import("@sinclair/typebox").TNumber>;
                comments: import("@sinclair/typebox").TOptional<import("@sinclair/typebox").TNumber>;
                shares: import("@sinclair/typebox").TOptional<import("@sinclair/typebox").TNumber>;
                bookmarks: import("@sinclair/typebox").TOptional<import("@sinclair/typebox").TNumber>;
                readTime: import("@sinclair/typebox").TOptional<import("@sinclair/typebox").TNumber>;
            }>, import("@sinclair/typebox").TUndefined]>>;
            seo: import("@sinclair/typebox").TOptional<import("@sinclair/typebox").TUnion<[import("@sinclair/typebox").TObject<{
                slug: import("@sinclair/typebox").TOptional<import("@sinclair/typebox").TString>;
                metaTitle: import("@sinclair/typebox").TOptional<import("@sinclair/typebox").TString>;
                metaDescription: import("@sinclair/typebox").TOptional<import("@sinclair/typebox").TString>;
                keywords: import("@sinclair/typebox").TOptional<import("@sinclair/typebox").TArray<import("@sinclair/typebox").TString>>;
            }>, import("@sinclair/typebox").TUndefined]>>;
            createdAt: import("@sinclair/typebox").TOptional<import("@sinclair/typebox").TUnion<[import("@sinclair/typebox").TString, import("@sinclair/typebox").TUndefined]>>;
            updatedAt: import("@sinclair/typebox").TOptional<import("@sinclair/typebox").TUnion<[import("@sinclair/typebox").TString, import("@sinclair/typebox").TUndefined]>>;
            publishedAt: import("@sinclair/typebox").TOptional<import("@sinclair/typebox").TUnion<[import("@sinclair/typebox").TString, import("@sinclair/typebox").TUndefined]>>;
        }>;
    }>;
    responses: import("@sinclair/typebox").TObject<{
        200: import("@sinclair/typebox").TObject<{
            id: import("@sinclair/typebox").TNumber;
            title: import("@sinclair/typebox").TOptional<import("@sinclair/typebox").TUnion<[import("@sinclair/typebox").TString, import("@sinclair/typebox").TUndefined]>>;
            content: import("@sinclair/typebox").TOptional<import("@sinclair/typebox").TUnion<[import("@sinclair/typebox").TString, import("@sinclair/typebox").TUndefined]>>;
            excerpt: import("@sinclair/typebox").TOptional<import("@sinclair/typebox").TUnion<[import("@sinclair/typebox").TString, import("@sinclair/typebox").TUndefined]>>;
            authorId: import("@sinclair/typebox").TOptional<import("@sinclair/typebox").TUnion<[import("@sinclair/typebox").TNumber, import("@sinclair/typebox").TUndefined]>>;
            categoryId: import("@sinclair/typebox").TOptional<import("@sinclair/typebox").TUnion<[import("@sinclair/typebox").TNumber, import("@sinclair/typebox").TUndefined]>>;
            tags: import("@sinclair/typebox").TOptional<import("@sinclair/typebox").TUnion<[import("@sinclair/typebox").TArray<import("@sinclair/typebox").TString>, import("@sinclair/typebox").TUndefined]>>;
            status: import("@sinclair/typebox").TOptional<import("@sinclair/typebox").TUnion<[import("@sinclair/typebox").TString, import("@sinclair/typebox").TUndefined]>>;
            featured: import("@sinclair/typebox").TOptional<import("@sinclair/typebox").TUnion<[import("@sinclair/typebox").TBoolean, import("@sinclair/typebox").TUndefined]>>;
            metadata: import("@sinclair/typebox").TOptional<import("@sinclair/typebox").TUnion<[import("@sinclair/typebox").TObject<{
                views: import("@sinclair/typebox").TOptional<import("@sinclair/typebox").TNumber>;
                likes: import("@sinclair/typebox").TOptional<import("@sinclair/typebox").TNumber>;
                comments: import("@sinclair/typebox").TOptional<import("@sinclair/typebox").TNumber>;
                shares: import("@sinclair/typebox").TOptional<import("@sinclair/typebox").TNumber>;
                bookmarks: import("@sinclair/typebox").TOptional<import("@sinclair/typebox").TNumber>;
                readTime: import("@sinclair/typebox").TOptional<import("@sinclair/typebox").TNumber>;
            }>, import("@sinclair/typebox").TUndefined]>>;
            seo: import("@sinclair/typebox").TOptional<import("@sinclair/typebox").TUnion<[import("@sinclair/typebox").TObject<{
                slug: import("@sinclair/typebox").TOptional<import("@sinclair/typebox").TString>;
                metaTitle: import("@sinclair/typebox").TOptional<import("@sinclair/typebox").TString>;
                metaDescription: import("@sinclair/typebox").TOptional<import("@sinclair/typebox").TString>;
                keywords: import("@sinclair/typebox").TOptional<import("@sinclair/typebox").TArray<import("@sinclair/typebox").TString>>;
            }>, import("@sinclair/typebox").TUndefined]>>;
            createdAt: import("@sinclair/typebox").TOptional<import("@sinclair/typebox").TUnion<[import("@sinclair/typebox").TString, import("@sinclair/typebox").TUndefined]>>;
            updatedAt: import("@sinclair/typebox").TOptional<import("@sinclair/typebox").TUnion<[import("@sinclair/typebox").TString, import("@sinclair/typebox").TUndefined]>>;
            publishedAt: import("@sinclair/typebox").TOptional<import("@sinclair/typebox").TUnion<[import("@sinclair/typebox").TString, import("@sinclair/typebox").TUndefined]>>;
        }>;
        400: import("@sinclair/typebox").TUnknown;
        404: import("@sinclair/typebox").TUnknown;
    }>;
}>;
export type patch__posts_Id = Static<typeof patch__posts_Id>;
export declare const patch__posts_Id: import("@sinclair/typebox").TObject<{
    method: import("@sinclair/typebox").TLiteral<"PATCH">;
    path: import("@sinclair/typebox").TLiteral<"/posts/{id}">;
    requestFormat: import("@sinclair/typebox").TLiteral<"json">;
    parameters: import("@sinclair/typebox").TObject<{
        path: import("@sinclair/typebox").TObject<{
            id: import("@sinclair/typebox").TNumber;
        }>;
        body: import("@sinclair/typebox").TObject<{
            id: import("@sinclair/typebox").TNumber;
            title: import("@sinclair/typebox").TOptional<import("@sinclair/typebox").TUnion<[import("@sinclair/typebox").TString, import("@sinclair/typebox").TUndefined]>>;
            content: import("@sinclair/typebox").TOptional<import("@sinclair/typebox").TUnion<[import("@sinclair/typebox").TString, import("@sinclair/typebox").TUndefined]>>;
            excerpt: import("@sinclair/typebox").TOptional<import("@sinclair/typebox").TUnion<[import("@sinclair/typebox").TString, import("@sinclair/typebox").TUndefined]>>;
            authorId: import("@sinclair/typebox").TOptional<import("@sinclair/typebox").TUnion<[import("@sinclair/typebox").TNumber, import("@sinclair/typebox").TUndefined]>>;
            categoryId: import("@sinclair/typebox").TOptional<import("@sinclair/typebox").TUnion<[import("@sinclair/typebox").TNumber, import("@sinclair/typebox").TUndefined]>>;
            tags: import("@sinclair/typebox").TOptional<import("@sinclair/typebox").TUnion<[import("@sinclair/typebox").TArray<import("@sinclair/typebox").TString>, import("@sinclair/typebox").TUndefined]>>;
            status: import("@sinclair/typebox").TOptional<import("@sinclair/typebox").TUnion<[import("@sinclair/typebox").TString, import("@sinclair/typebox").TUndefined]>>;
            featured: import("@sinclair/typebox").TOptional<import("@sinclair/typebox").TUnion<[import("@sinclair/typebox").TBoolean, import("@sinclair/typebox").TUndefined]>>;
            metadata: import("@sinclair/typebox").TOptional<import("@sinclair/typebox").TUnion<[import("@sinclair/typebox").TObject<{
                views: import("@sinclair/typebox").TOptional<import("@sinclair/typebox").TNumber>;
                likes: import("@sinclair/typebox").TOptional<import("@sinclair/typebox").TNumber>;
                comments: import("@sinclair/typebox").TOptional<import("@sinclair/typebox").TNumber>;
                shares: import("@sinclair/typebox").TOptional<import("@sinclair/typebox").TNumber>;
                bookmarks: import("@sinclair/typebox").TOptional<import("@sinclair/typebox").TNumber>;
                readTime: import("@sinclair/typebox").TOptional<import("@sinclair/typebox").TNumber>;
            }>, import("@sinclair/typebox").TUndefined]>>;
            seo: import("@sinclair/typebox").TOptional<import("@sinclair/typebox").TUnion<[import("@sinclair/typebox").TObject<{
                slug: import("@sinclair/typebox").TOptional<import("@sinclair/typebox").TString>;
                metaTitle: import("@sinclair/typebox").TOptional<import("@sinclair/typebox").TString>;
                metaDescription: import("@sinclair/typebox").TOptional<import("@sinclair/typebox").TString>;
                keywords: import("@sinclair/typebox").TOptional<import("@sinclair/typebox").TArray<import("@sinclair/typebox").TString>>;
            }>, import("@sinclair/typebox").TUndefined]>>;
            createdAt: import("@sinclair/typebox").TOptional<import("@sinclair/typebox").TUnion<[import("@sinclair/typebox").TString, import("@sinclair/typebox").TUndefined]>>;
            updatedAt: import("@sinclair/typebox").TOptional<import("@sinclair/typebox").TUnion<[import("@sinclair/typebox").TString, import("@sinclair/typebox").TUndefined]>>;
            publishedAt: import("@sinclair/typebox").TOptional<import("@sinclair/typebox").TUnion<[import("@sinclair/typebox").TString, import("@sinclair/typebox").TUndefined]>>;
        }>;
    }>;
    responses: import("@sinclair/typebox").TObject<{
        200: import("@sinclair/typebox").TObject<{
            id: import("@sinclair/typebox").TNumber;
            title: import("@sinclair/typebox").TOptional<import("@sinclair/typebox").TUnion<[import("@sinclair/typebox").TString, import("@sinclair/typebox").TUndefined]>>;
            content: import("@sinclair/typebox").TOptional<import("@sinclair/typebox").TUnion<[import("@sinclair/typebox").TString, import("@sinclair/typebox").TUndefined]>>;
            excerpt: import("@sinclair/typebox").TOptional<import("@sinclair/typebox").TUnion<[import("@sinclair/typebox").TString, import("@sinclair/typebox").TUndefined]>>;
            authorId: import("@sinclair/typebox").TOptional<import("@sinclair/typebox").TUnion<[import("@sinclair/typebox").TNumber, import("@sinclair/typebox").TUndefined]>>;
            categoryId: import("@sinclair/typebox").TOptional<import("@sinclair/typebox").TUnion<[import("@sinclair/typebox").TNumber, import("@sinclair/typebox").TUndefined]>>;
            tags: import("@sinclair/typebox").TOptional<import("@sinclair/typebox").TUnion<[import("@sinclair/typebox").TArray<import("@sinclair/typebox").TString>, import("@sinclair/typebox").TUndefined]>>;
            status: import("@sinclair/typebox").TOptional<import("@sinclair/typebox").TUnion<[import("@sinclair/typebox").TString, import("@sinclair/typebox").TUndefined]>>;
            featured: import("@sinclair/typebox").TOptional<import("@sinclair/typebox").TUnion<[import("@sinclair/typebox").TBoolean, import("@sinclair/typebox").TUndefined]>>;
            metadata: import("@sinclair/typebox").TOptional<import("@sinclair/typebox").TUnion<[import("@sinclair/typebox").TObject<{
                views: import("@sinclair/typebox").TOptional<import("@sinclair/typebox").TNumber>;
                likes: import("@sinclair/typebox").TOptional<import("@sinclair/typebox").TNumber>;
                comments: import("@sinclair/typebox").TOptional<import("@sinclair/typebox").TNumber>;
                shares: import("@sinclair/typebox").TOptional<import("@sinclair/typebox").TNumber>;
                bookmarks: import("@sinclair/typebox").TOptional<import("@sinclair/typebox").TNumber>;
                readTime: import("@sinclair/typebox").TOptional<import("@sinclair/typebox").TNumber>;
            }>, import("@sinclair/typebox").TUndefined]>>;
            seo: import("@sinclair/typebox").TOptional<import("@sinclair/typebox").TUnion<[import("@sinclair/typebox").TObject<{
                slug: import("@sinclair/typebox").TOptional<import("@sinclair/typebox").TString>;
                metaTitle: import("@sinclair/typebox").TOptional<import("@sinclair/typebox").TString>;
                metaDescription: import("@sinclair/typebox").TOptional<import("@sinclair/typebox").TString>;
                keywords: import("@sinclair/typebox").TOptional<import("@sinclair/typebox").TArray<import("@sinclair/typebox").TString>>;
            }>, import("@sinclair/typebox").TUndefined]>>;
            createdAt: import("@sinclair/typebox").TOptional<import("@sinclair/typebox").TUnion<[import("@sinclair/typebox").TString, import("@sinclair/typebox").TUndefined]>>;
            updatedAt: import("@sinclair/typebox").TOptional<import("@sinclair/typebox").TUnion<[import("@sinclair/typebox").TString, import("@sinclair/typebox").TUndefined]>>;
            publishedAt: import("@sinclair/typebox").TOptional<import("@sinclair/typebox").TUnion<[import("@sinclair/typebox").TString, import("@sinclair/typebox").TUndefined]>>;
        }>;
        400: import("@sinclair/typebox").TUnknown;
        404: import("@sinclair/typebox").TUnknown;
    }>;
}>;
export type delete__posts_Id = Static<typeof delete__posts_Id>;
export declare const delete__posts_Id: import("@sinclair/typebox").TObject<{
    method: import("@sinclair/typebox").TLiteral<"DELETE">;
    path: import("@sinclair/typebox").TLiteral<"/posts/{id}">;
    requestFormat: import("@sinclair/typebox").TLiteral<"json">;
    parameters: import("@sinclair/typebox").TObject<{
        path: import("@sinclair/typebox").TObject<{
            id: import("@sinclair/typebox").TNumber;
        }>;
    }>;
    responses: import("@sinclair/typebox").TObject<{
        200: import("@sinclair/typebox").TUnknown;
        404: import("@sinclair/typebox").TUnknown;
    }>;
}>;
export type get__comments = Static<typeof get__comments>;
export declare const get__comments: import("@sinclair/typebox").TObject<{
    method: import("@sinclair/typebox").TLiteral<"GET">;
    path: import("@sinclair/typebox").TLiteral<"/comments">;
    requestFormat: import("@sinclair/typebox").TLiteral<"json">;
    parameters: import("@sinclair/typebox").TObject<{
        query: import("@sinclair/typebox").TObject<{
            _page: import("@sinclair/typebox").TOptional<import("@sinclair/typebox").TNumber>;
            _limit: import("@sinclair/typebox").TOptional<import("@sinclair/typebox").TNumber>;
            _sort: import("@sinclair/typebox").TOptional<import("@sinclair/typebox").TString>;
            _order: import("@sinclair/typebox").TOptional<import("@sinclair/typebox").TUnion<[import("@sinclair/typebox").TLiteral<"asc">, import("@sinclair/typebox").TLiteral<"desc">]>>;
            q: import("@sinclair/typebox").TOptional<import("@sinclair/typebox").TString>;
        }>;
    }>;
    responses: import("@sinclair/typebox").TObject<{
        200: import("@sinclair/typebox").TArray<import("@sinclair/typebox").TObject<{
            id: import("@sinclair/typebox").TNumber;
            postId: import("@sinclair/typebox").TOptional<import("@sinclair/typebox").TUnion<[import("@sinclair/typebox").TNumber, import("@sinclair/typebox").TUndefined]>>;
            authorId: import("@sinclair/typebox").TOptional<import("@sinclair/typebox").TUnion<[import("@sinclair/typebox").TNumber, import("@sinclair/typebox").TUndefined]>>;
            content: import("@sinclair/typebox").TOptional<import("@sinclair/typebox").TUnion<[import("@sinclair/typebox").TString, import("@sinclair/typebox").TUndefined]>>;
            parentId: import("@sinclair/typebox").TOptional<import("@sinclair/typebox").TUnion<[import("@sinclair/typebox").TNull, import("@sinclair/typebox").TUndefined]>>;
            likes: import("@sinclair/typebox").TOptional<import("@sinclair/typebox").TUnion<[import("@sinclair/typebox").TNumber, import("@sinclair/typebox").TUndefined]>>;
            isApproved: import("@sinclair/typebox").TOptional<import("@sinclair/typebox").TUnion<[import("@sinclair/typebox").TBoolean, import("@sinclair/typebox").TUndefined]>>;
            isEdited: import("@sinclair/typebox").TOptional<import("@sinclair/typebox").TUnion<[import("@sinclair/typebox").TBoolean, import("@sinclair/typebox").TUndefined]>>;
            createdAt: import("@sinclair/typebox").TOptional<import("@sinclair/typebox").TUnion<[import("@sinclair/typebox").TString, import("@sinclair/typebox").TUndefined]>>;
            updatedAt: import("@sinclair/typebox").TOptional<import("@sinclair/typebox").TUnion<[import("@sinclair/typebox").TString, import("@sinclair/typebox").TUndefined]>>;
        }>>;
    }>;
}>;
export type post__comments = Static<typeof post__comments>;
export declare const post__comments: import("@sinclair/typebox").TObject<{
    method: import("@sinclair/typebox").TLiteral<"POST">;
    path: import("@sinclair/typebox").TLiteral<"/comments">;
    requestFormat: import("@sinclair/typebox").TLiteral<"json">;
    parameters: import("@sinclair/typebox").TObject<{
        body: import("@sinclair/typebox").TObject<{
            id: import("@sinclair/typebox").TNumber;
            postId: import("@sinclair/typebox").TOptional<import("@sinclair/typebox").TUnion<[import("@sinclair/typebox").TNumber, import("@sinclair/typebox").TUndefined]>>;
            authorId: import("@sinclair/typebox").TOptional<import("@sinclair/typebox").TUnion<[import("@sinclair/typebox").TNumber, import("@sinclair/typebox").TUndefined]>>;
            content: import("@sinclair/typebox").TOptional<import("@sinclair/typebox").TUnion<[import("@sinclair/typebox").TString, import("@sinclair/typebox").TUndefined]>>;
            parentId: import("@sinclair/typebox").TOptional<import("@sinclair/typebox").TUnion<[import("@sinclair/typebox").TNull, import("@sinclair/typebox").TUndefined]>>;
            likes: import("@sinclair/typebox").TOptional<import("@sinclair/typebox").TUnion<[import("@sinclair/typebox").TNumber, import("@sinclair/typebox").TUndefined]>>;
            isApproved: import("@sinclair/typebox").TOptional<import("@sinclair/typebox").TUnion<[import("@sinclair/typebox").TBoolean, import("@sinclair/typebox").TUndefined]>>;
            isEdited: import("@sinclair/typebox").TOptional<import("@sinclair/typebox").TUnion<[import("@sinclair/typebox").TBoolean, import("@sinclair/typebox").TUndefined]>>;
            createdAt: import("@sinclair/typebox").TOptional<import("@sinclair/typebox").TUnion<[import("@sinclair/typebox").TString, import("@sinclair/typebox").TUndefined]>>;
            updatedAt: import("@sinclair/typebox").TOptional<import("@sinclair/typebox").TUnion<[import("@sinclair/typebox").TString, import("@sinclair/typebox").TUndefined]>>;
        }>;
    }>;
    responses: import("@sinclair/typebox").TObject<{
        201: import("@sinclair/typebox").TObject<{
            id: import("@sinclair/typebox").TNumber;
            postId: import("@sinclair/typebox").TOptional<import("@sinclair/typebox").TUnion<[import("@sinclair/typebox").TNumber, import("@sinclair/typebox").TUndefined]>>;
            authorId: import("@sinclair/typebox").TOptional<import("@sinclair/typebox").TUnion<[import("@sinclair/typebox").TNumber, import("@sinclair/typebox").TUndefined]>>;
            content: import("@sinclair/typebox").TOptional<import("@sinclair/typebox").TUnion<[import("@sinclair/typebox").TString, import("@sinclair/typebox").TUndefined]>>;
            parentId: import("@sinclair/typebox").TOptional<import("@sinclair/typebox").TUnion<[import("@sinclair/typebox").TNull, import("@sinclair/typebox").TUndefined]>>;
            likes: import("@sinclair/typebox").TOptional<import("@sinclair/typebox").TUnion<[import("@sinclair/typebox").TNumber, import("@sinclair/typebox").TUndefined]>>;
            isApproved: import("@sinclair/typebox").TOptional<import("@sinclair/typebox").TUnion<[import("@sinclair/typebox").TBoolean, import("@sinclair/typebox").TUndefined]>>;
            isEdited: import("@sinclair/typebox").TOptional<import("@sinclair/typebox").TUnion<[import("@sinclair/typebox").TBoolean, import("@sinclair/typebox").TUndefined]>>;
            createdAt: import("@sinclair/typebox").TOptional<import("@sinclair/typebox").TUnion<[import("@sinclair/typebox").TString, import("@sinclair/typebox").TUndefined]>>;
            updatedAt: import("@sinclair/typebox").TOptional<import("@sinclair/typebox").TUnion<[import("@sinclair/typebox").TString, import("@sinclair/typebox").TUndefined]>>;
        }>;
        400: import("@sinclair/typebox").TUnknown;
    }>;
}>;
export type get__comments_Id = Static<typeof get__comments_Id>;
export declare const get__comments_Id: import("@sinclair/typebox").TObject<{
    method: import("@sinclair/typebox").TLiteral<"GET">;
    path: import("@sinclair/typebox").TLiteral<"/comments/{id}">;
    requestFormat: import("@sinclair/typebox").TLiteral<"json">;
    parameters: import("@sinclair/typebox").TObject<{
        path: import("@sinclair/typebox").TObject<{
            id: import("@sinclair/typebox").TNumber;
        }>;
    }>;
    responses: import("@sinclair/typebox").TObject<{
        200: import("@sinclair/typebox").TObject<{
            id: import("@sinclair/typebox").TNumber;
            postId: import("@sinclair/typebox").TOptional<import("@sinclair/typebox").TUnion<[import("@sinclair/typebox").TNumber, import("@sinclair/typebox").TUndefined]>>;
            authorId: import("@sinclair/typebox").TOptional<import("@sinclair/typebox").TUnion<[import("@sinclair/typebox").TNumber, import("@sinclair/typebox").TUndefined]>>;
            content: import("@sinclair/typebox").TOptional<import("@sinclair/typebox").TUnion<[import("@sinclair/typebox").TString, import("@sinclair/typebox").TUndefined]>>;
            parentId: import("@sinclair/typebox").TOptional<import("@sinclair/typebox").TUnion<[import("@sinclair/typebox").TNull, import("@sinclair/typebox").TUndefined]>>;
            likes: import("@sinclair/typebox").TOptional<import("@sinclair/typebox").TUnion<[import("@sinclair/typebox").TNumber, import("@sinclair/typebox").TUndefined]>>;
            isApproved: import("@sinclair/typebox").TOptional<import("@sinclair/typebox").TUnion<[import("@sinclair/typebox").TBoolean, import("@sinclair/typebox").TUndefined]>>;
            isEdited: import("@sinclair/typebox").TOptional<import("@sinclair/typebox").TUnion<[import("@sinclair/typebox").TBoolean, import("@sinclair/typebox").TUndefined]>>;
            createdAt: import("@sinclair/typebox").TOptional<import("@sinclair/typebox").TUnion<[import("@sinclair/typebox").TString, import("@sinclair/typebox").TUndefined]>>;
            updatedAt: import("@sinclair/typebox").TOptional<import("@sinclair/typebox").TUnion<[import("@sinclair/typebox").TString, import("@sinclair/typebox").TUndefined]>>;
        }>;
        404: import("@sinclair/typebox").TUnknown;
    }>;
}>;
export type put__comments_Id = Static<typeof put__comments_Id>;
export declare const put__comments_Id: import("@sinclair/typebox").TObject<{
    method: import("@sinclair/typebox").TLiteral<"PUT">;
    path: import("@sinclair/typebox").TLiteral<"/comments/{id}">;
    requestFormat: import("@sinclair/typebox").TLiteral<"json">;
    parameters: import("@sinclair/typebox").TObject<{
        path: import("@sinclair/typebox").TObject<{
            id: import("@sinclair/typebox").TNumber;
        }>;
        body: import("@sinclair/typebox").TObject<{
            id: import("@sinclair/typebox").TNumber;
            postId: import("@sinclair/typebox").TOptional<import("@sinclair/typebox").TUnion<[import("@sinclair/typebox").TNumber, import("@sinclair/typebox").TUndefined]>>;
            authorId: import("@sinclair/typebox").TOptional<import("@sinclair/typebox").TUnion<[import("@sinclair/typebox").TNumber, import("@sinclair/typebox").TUndefined]>>;
            content: import("@sinclair/typebox").TOptional<import("@sinclair/typebox").TUnion<[import("@sinclair/typebox").TString, import("@sinclair/typebox").TUndefined]>>;
            parentId: import("@sinclair/typebox").TOptional<import("@sinclair/typebox").TUnion<[import("@sinclair/typebox").TNull, import("@sinclair/typebox").TUndefined]>>;
            likes: import("@sinclair/typebox").TOptional<import("@sinclair/typebox").TUnion<[import("@sinclair/typebox").TNumber, import("@sinclair/typebox").TUndefined]>>;
            isApproved: import("@sinclair/typebox").TOptional<import("@sinclair/typebox").TUnion<[import("@sinclair/typebox").TBoolean, import("@sinclair/typebox").TUndefined]>>;
            isEdited: import("@sinclair/typebox").TOptional<import("@sinclair/typebox").TUnion<[import("@sinclair/typebox").TBoolean, import("@sinclair/typebox").TUndefined]>>;
            createdAt: import("@sinclair/typebox").TOptional<import("@sinclair/typebox").TUnion<[import("@sinclair/typebox").TString, import("@sinclair/typebox").TUndefined]>>;
            updatedAt: import("@sinclair/typebox").TOptional<import("@sinclair/typebox").TUnion<[import("@sinclair/typebox").TString, import("@sinclair/typebox").TUndefined]>>;
        }>;
    }>;
    responses: import("@sinclair/typebox").TObject<{
        200: import("@sinclair/typebox").TObject<{
            id: import("@sinclair/typebox").TNumber;
            postId: import("@sinclair/typebox").TOptional<import("@sinclair/typebox").TUnion<[import("@sinclair/typebox").TNumber, import("@sinclair/typebox").TUndefined]>>;
            authorId: import("@sinclair/typebox").TOptional<import("@sinclair/typebox").TUnion<[import("@sinclair/typebox").TNumber, import("@sinclair/typebox").TUndefined]>>;
            content: import("@sinclair/typebox").TOptional<import("@sinclair/typebox").TUnion<[import("@sinclair/typebox").TString, import("@sinclair/typebox").TUndefined]>>;
            parentId: import("@sinclair/typebox").TOptional<import("@sinclair/typebox").TUnion<[import("@sinclair/typebox").TNull, import("@sinclair/typebox").TUndefined]>>;
            likes: import("@sinclair/typebox").TOptional<import("@sinclair/typebox").TUnion<[import("@sinclair/typebox").TNumber, import("@sinclair/typebox").TUndefined]>>;
            isApproved: import("@sinclair/typebox").TOptional<import("@sinclair/typebox").TUnion<[import("@sinclair/typebox").TBoolean, import("@sinclair/typebox").TUndefined]>>;
            isEdited: import("@sinclair/typebox").TOptional<import("@sinclair/typebox").TUnion<[import("@sinclair/typebox").TBoolean, import("@sinclair/typebox").TUndefined]>>;
            createdAt: import("@sinclair/typebox").TOptional<import("@sinclair/typebox").TUnion<[import("@sinclair/typebox").TString, import("@sinclair/typebox").TUndefined]>>;
            updatedAt: import("@sinclair/typebox").TOptional<import("@sinclair/typebox").TUnion<[import("@sinclair/typebox").TString, import("@sinclair/typebox").TUndefined]>>;
        }>;
        400: import("@sinclair/typebox").TUnknown;
        404: import("@sinclair/typebox").TUnknown;
    }>;
}>;
export type patch__comments_Id = Static<typeof patch__comments_Id>;
export declare const patch__comments_Id: import("@sinclair/typebox").TObject<{
    method: import("@sinclair/typebox").TLiteral<"PATCH">;
    path: import("@sinclair/typebox").TLiteral<"/comments/{id}">;
    requestFormat: import("@sinclair/typebox").TLiteral<"json">;
    parameters: import("@sinclair/typebox").TObject<{
        path: import("@sinclair/typebox").TObject<{
            id: import("@sinclair/typebox").TNumber;
        }>;
        body: import("@sinclair/typebox").TObject<{
            id: import("@sinclair/typebox").TNumber;
            postId: import("@sinclair/typebox").TOptional<import("@sinclair/typebox").TUnion<[import("@sinclair/typebox").TNumber, import("@sinclair/typebox").TUndefined]>>;
            authorId: import("@sinclair/typebox").TOptional<import("@sinclair/typebox").TUnion<[import("@sinclair/typebox").TNumber, import("@sinclair/typebox").TUndefined]>>;
            content: import("@sinclair/typebox").TOptional<import("@sinclair/typebox").TUnion<[import("@sinclair/typebox").TString, import("@sinclair/typebox").TUndefined]>>;
            parentId: import("@sinclair/typebox").TOptional<import("@sinclair/typebox").TUnion<[import("@sinclair/typebox").TNull, import("@sinclair/typebox").TUndefined]>>;
            likes: import("@sinclair/typebox").TOptional<import("@sinclair/typebox").TUnion<[import("@sinclair/typebox").TNumber, import("@sinclair/typebox").TUndefined]>>;
            isApproved: import("@sinclair/typebox").TOptional<import("@sinclair/typebox").TUnion<[import("@sinclair/typebox").TBoolean, import("@sinclair/typebox").TUndefined]>>;
            isEdited: import("@sinclair/typebox").TOptional<import("@sinclair/typebox").TUnion<[import("@sinclair/typebox").TBoolean, import("@sinclair/typebox").TUndefined]>>;
            createdAt: import("@sinclair/typebox").TOptional<import("@sinclair/typebox").TUnion<[import("@sinclair/typebox").TString, import("@sinclair/typebox").TUndefined]>>;
            updatedAt: import("@sinclair/typebox").TOptional<import("@sinclair/typebox").TUnion<[import("@sinclair/typebox").TString, import("@sinclair/typebox").TUndefined]>>;
        }>;
    }>;
    responses: import("@sinclair/typebox").TObject<{
        200: import("@sinclair/typebox").TObject<{
            id: import("@sinclair/typebox").TNumber;
            postId: import("@sinclair/typebox").TOptional<import("@sinclair/typebox").TUnion<[import("@sinclair/typebox").TNumber, import("@sinclair/typebox").TUndefined]>>;
            authorId: import("@sinclair/typebox").TOptional<import("@sinclair/typebox").TUnion<[import("@sinclair/typebox").TNumber, import("@sinclair/typebox").TUndefined]>>;
            content: import("@sinclair/typebox").TOptional<import("@sinclair/typebox").TUnion<[import("@sinclair/typebox").TString, import("@sinclair/typebox").TUndefined]>>;
            parentId: import("@sinclair/typebox").TOptional<import("@sinclair/typebox").TUnion<[import("@sinclair/typebox").TNull, import("@sinclair/typebox").TUndefined]>>;
            likes: import("@sinclair/typebox").TOptional<import("@sinclair/typebox").TUnion<[import("@sinclair/typebox").TNumber, import("@sinclair/typebox").TUndefined]>>;
            isApproved: import("@sinclair/typebox").TOptional<import("@sinclair/typebox").TUnion<[import("@sinclair/typebox").TBoolean, import("@sinclair/typebox").TUndefined]>>;
            isEdited: import("@sinclair/typebox").TOptional<import("@sinclair/typebox").TUnion<[import("@sinclair/typebox").TBoolean, import("@sinclair/typebox").TUndefined]>>;
            createdAt: import("@sinclair/typebox").TOptional<import("@sinclair/typebox").TUnion<[import("@sinclair/typebox").TString, import("@sinclair/typebox").TUndefined]>>;
            updatedAt: import("@sinclair/typebox").TOptional<import("@sinclair/typebox").TUnion<[import("@sinclair/typebox").TString, import("@sinclair/typebox").TUndefined]>>;
        }>;
        400: import("@sinclair/typebox").TUnknown;
        404: import("@sinclair/typebox").TUnknown;
    }>;
}>;
export type delete__comments_Id = Static<typeof delete__comments_Id>;
export declare const delete__comments_Id: import("@sinclair/typebox").TObject<{
    method: import("@sinclair/typebox").TLiteral<"DELETE">;
    path: import("@sinclair/typebox").TLiteral<"/comments/{id}">;
    requestFormat: import("@sinclair/typebox").TLiteral<"json">;
    parameters: import("@sinclair/typebox").TObject<{
        path: import("@sinclair/typebox").TObject<{
            id: import("@sinclair/typebox").TNumber;
        }>;
    }>;
    responses: import("@sinclair/typebox").TObject<{
        200: import("@sinclair/typebox").TUnknown;
        404: import("@sinclair/typebox").TUnknown;
    }>;
}>;
export type get__categories = Static<typeof get__categories>;
export declare const get__categories: import("@sinclair/typebox").TObject<{
    method: import("@sinclair/typebox").TLiteral<"GET">;
    path: import("@sinclair/typebox").TLiteral<"/categories">;
    requestFormat: import("@sinclair/typebox").TLiteral<"json">;
    parameters: import("@sinclair/typebox").TObject<{
        query: import("@sinclair/typebox").TObject<{
            _page: import("@sinclair/typebox").TOptional<import("@sinclair/typebox").TNumber>;
            _limit: import("@sinclair/typebox").TOptional<import("@sinclair/typebox").TNumber>;
            _sort: import("@sinclair/typebox").TOptional<import("@sinclair/typebox").TString>;
            _order: import("@sinclair/typebox").TOptional<import("@sinclair/typebox").TUnion<[import("@sinclair/typebox").TLiteral<"asc">, import("@sinclair/typebox").TLiteral<"desc">]>>;
            q: import("@sinclair/typebox").TOptional<import("@sinclair/typebox").TString>;
        }>;
    }>;
    responses: import("@sinclair/typebox").TObject<{
        200: import("@sinclair/typebox").TArray<import("@sinclair/typebox").TObject<{
            id: import("@sinclair/typebox").TNumber;
            name: import("@sinclair/typebox").TOptional<import("@sinclair/typebox").TUnion<[import("@sinclair/typebox").TString, import("@sinclair/typebox").TUndefined]>>;
            slug: import("@sinclair/typebox").TOptional<import("@sinclair/typebox").TUnion<[import("@sinclair/typebox").TString, import("@sinclair/typebox").TUndefined]>>;
            description: import("@sinclair/typebox").TOptional<import("@sinclair/typebox").TUnion<[import("@sinclair/typebox").TString, import("@sinclair/typebox").TUndefined]>>;
            postCount: import("@sinclair/typebox").TOptional<import("@sinclair/typebox").TUnion<[import("@sinclair/typebox").TNumber, import("@sinclair/typebox").TUndefined]>>;
            color: import("@sinclair/typebox").TOptional<import("@sinclair/typebox").TUnion<[import("@sinclair/typebox").TString, import("@sinclair/typebox").TUndefined]>>;
            icon: import("@sinclair/typebox").TOptional<import("@sinclair/typebox").TUnion<[import("@sinclair/typebox").TString, import("@sinclair/typebox").TUndefined]>>;
            isActive: import("@sinclair/typebox").TOptional<import("@sinclair/typebox").TUnion<[import("@sinclair/typebox").TBoolean, import("@sinclair/typebox").TUndefined]>>;
            parentId: import("@sinclair/typebox").TOptional<import("@sinclair/typebox").TUnion<[import("@sinclair/typebox").TNull, import("@sinclair/typebox").TUndefined]>>;
            createdAt: import("@sinclair/typebox").TOptional<import("@sinclair/typebox").TUnion<[import("@sinclair/typebox").TString, import("@sinclair/typebox").TUndefined]>>;
            metadata: import("@sinclair/typebox").TOptional<import("@sinclair/typebox").TUnion<[import("@sinclair/typebox").TObject<{
                totalViews: import("@sinclair/typebox").TOptional<import("@sinclair/typebox").TNumber>;
                averageRating: import("@sinclair/typebox").TOptional<import("@sinclair/typebox").TNumber>;
            }>, import("@sinclair/typebox").TUndefined]>>;
        }>>;
    }>;
}>;
export type post__categories = Static<typeof post__categories>;
export declare const post__categories: import("@sinclair/typebox").TObject<{
    method: import("@sinclair/typebox").TLiteral<"POST">;
    path: import("@sinclair/typebox").TLiteral<"/categories">;
    requestFormat: import("@sinclair/typebox").TLiteral<"json">;
    parameters: import("@sinclair/typebox").TObject<{
        body: import("@sinclair/typebox").TObject<{
            id: import("@sinclair/typebox").TNumber;
            name: import("@sinclair/typebox").TOptional<import("@sinclair/typebox").TUnion<[import("@sinclair/typebox").TString, import("@sinclair/typebox").TUndefined]>>;
            slug: import("@sinclair/typebox").TOptional<import("@sinclair/typebox").TUnion<[import("@sinclair/typebox").TString, import("@sinclair/typebox").TUndefined]>>;
            description: import("@sinclair/typebox").TOptional<import("@sinclair/typebox").TUnion<[import("@sinclair/typebox").TString, import("@sinclair/typebox").TUndefined]>>;
            postCount: import("@sinclair/typebox").TOptional<import("@sinclair/typebox").TUnion<[import("@sinclair/typebox").TNumber, import("@sinclair/typebox").TUndefined]>>;
            color: import("@sinclair/typebox").TOptional<import("@sinclair/typebox").TUnion<[import("@sinclair/typebox").TString, import("@sinclair/typebox").TUndefined]>>;
            icon: import("@sinclair/typebox").TOptional<import("@sinclair/typebox").TUnion<[import("@sinclair/typebox").TString, import("@sinclair/typebox").TUndefined]>>;
            isActive: import("@sinclair/typebox").TOptional<import("@sinclair/typebox").TUnion<[import("@sinclair/typebox").TBoolean, import("@sinclair/typebox").TUndefined]>>;
            parentId: import("@sinclair/typebox").TOptional<import("@sinclair/typebox").TUnion<[import("@sinclair/typebox").TNull, import("@sinclair/typebox").TUndefined]>>;
            createdAt: import("@sinclair/typebox").TOptional<import("@sinclair/typebox").TUnion<[import("@sinclair/typebox").TString, import("@sinclair/typebox").TUndefined]>>;
            metadata: import("@sinclair/typebox").TOptional<import("@sinclair/typebox").TUnion<[import("@sinclair/typebox").TObject<{
                totalViews: import("@sinclair/typebox").TOptional<import("@sinclair/typebox").TNumber>;
                averageRating: import("@sinclair/typebox").TOptional<import("@sinclair/typebox").TNumber>;
            }>, import("@sinclair/typebox").TUndefined]>>;
        }>;
    }>;
    responses: import("@sinclair/typebox").TObject<{
        201: import("@sinclair/typebox").TObject<{
            id: import("@sinclair/typebox").TNumber;
            name: import("@sinclair/typebox").TOptional<import("@sinclair/typebox").TUnion<[import("@sinclair/typebox").TString, import("@sinclair/typebox").TUndefined]>>;
            slug: import("@sinclair/typebox").TOptional<import("@sinclair/typebox").TUnion<[import("@sinclair/typebox").TString, import("@sinclair/typebox").TUndefined]>>;
            description: import("@sinclair/typebox").TOptional<import("@sinclair/typebox").TUnion<[import("@sinclair/typebox").TString, import("@sinclair/typebox").TUndefined]>>;
            postCount: import("@sinclair/typebox").TOptional<import("@sinclair/typebox").TUnion<[import("@sinclair/typebox").TNumber, import("@sinclair/typebox").TUndefined]>>;
            color: import("@sinclair/typebox").TOptional<import("@sinclair/typebox").TUnion<[import("@sinclair/typebox").TString, import("@sinclair/typebox").TUndefined]>>;
            icon: import("@sinclair/typebox").TOptional<import("@sinclair/typebox").TUnion<[import("@sinclair/typebox").TString, import("@sinclair/typebox").TUndefined]>>;
            isActive: import("@sinclair/typebox").TOptional<import("@sinclair/typebox").TUnion<[import("@sinclair/typebox").TBoolean, import("@sinclair/typebox").TUndefined]>>;
            parentId: import("@sinclair/typebox").TOptional<import("@sinclair/typebox").TUnion<[import("@sinclair/typebox").TNull, import("@sinclair/typebox").TUndefined]>>;
            createdAt: import("@sinclair/typebox").TOptional<import("@sinclair/typebox").TUnion<[import("@sinclair/typebox").TString, import("@sinclair/typebox").TUndefined]>>;
            metadata: import("@sinclair/typebox").TOptional<import("@sinclair/typebox").TUnion<[import("@sinclair/typebox").TObject<{
                totalViews: import("@sinclair/typebox").TOptional<import("@sinclair/typebox").TNumber>;
                averageRating: import("@sinclair/typebox").TOptional<import("@sinclair/typebox").TNumber>;
            }>, import("@sinclair/typebox").TUndefined]>>;
        }>;
        400: import("@sinclair/typebox").TUnknown;
    }>;
}>;
export type get__categories_Id = Static<typeof get__categories_Id>;
export declare const get__categories_Id: import("@sinclair/typebox").TObject<{
    method: import("@sinclair/typebox").TLiteral<"GET">;
    path: import("@sinclair/typebox").TLiteral<"/categories/{id}">;
    requestFormat: import("@sinclair/typebox").TLiteral<"json">;
    parameters: import("@sinclair/typebox").TObject<{
        path: import("@sinclair/typebox").TObject<{
            id: import("@sinclair/typebox").TNumber;
        }>;
    }>;
    responses: import("@sinclair/typebox").TObject<{
        200: import("@sinclair/typebox").TObject<{
            id: import("@sinclair/typebox").TNumber;
            name: import("@sinclair/typebox").TOptional<import("@sinclair/typebox").TUnion<[import("@sinclair/typebox").TString, import("@sinclair/typebox").TUndefined]>>;
            slug: import("@sinclair/typebox").TOptional<import("@sinclair/typebox").TUnion<[import("@sinclair/typebox").TString, import("@sinclair/typebox").TUndefined]>>;
            description: import("@sinclair/typebox").TOptional<import("@sinclair/typebox").TUnion<[import("@sinclair/typebox").TString, import("@sinclair/typebox").TUndefined]>>;
            postCount: import("@sinclair/typebox").TOptional<import("@sinclair/typebox").TUnion<[import("@sinclair/typebox").TNumber, import("@sinclair/typebox").TUndefined]>>;
            color: import("@sinclair/typebox").TOptional<import("@sinclair/typebox").TUnion<[import("@sinclair/typebox").TString, import("@sinclair/typebox").TUndefined]>>;
            icon: import("@sinclair/typebox").TOptional<import("@sinclair/typebox").TUnion<[import("@sinclair/typebox").TString, import("@sinclair/typebox").TUndefined]>>;
            isActive: import("@sinclair/typebox").TOptional<import("@sinclair/typebox").TUnion<[import("@sinclair/typebox").TBoolean, import("@sinclair/typebox").TUndefined]>>;
            parentId: import("@sinclair/typebox").TOptional<import("@sinclair/typebox").TUnion<[import("@sinclair/typebox").TNull, import("@sinclair/typebox").TUndefined]>>;
            createdAt: import("@sinclair/typebox").TOptional<import("@sinclair/typebox").TUnion<[import("@sinclair/typebox").TString, import("@sinclair/typebox").TUndefined]>>;
            metadata: import("@sinclair/typebox").TOptional<import("@sinclair/typebox").TUnion<[import("@sinclair/typebox").TObject<{
                totalViews: import("@sinclair/typebox").TOptional<import("@sinclair/typebox").TNumber>;
                averageRating: import("@sinclair/typebox").TOptional<import("@sinclair/typebox").TNumber>;
            }>, import("@sinclair/typebox").TUndefined]>>;
        }>;
        404: import("@sinclair/typebox").TUnknown;
    }>;
}>;
export type put__categories_Id = Static<typeof put__categories_Id>;
export declare const put__categories_Id: import("@sinclair/typebox").TObject<{
    method: import("@sinclair/typebox").TLiteral<"PUT">;
    path: import("@sinclair/typebox").TLiteral<"/categories/{id}">;
    requestFormat: import("@sinclair/typebox").TLiteral<"json">;
    parameters: import("@sinclair/typebox").TObject<{
        path: import("@sinclair/typebox").TObject<{
            id: import("@sinclair/typebox").TNumber;
        }>;
        body: import("@sinclair/typebox").TObject<{
            id: import("@sinclair/typebox").TNumber;
            name: import("@sinclair/typebox").TOptional<import("@sinclair/typebox").TUnion<[import("@sinclair/typebox").TString, import("@sinclair/typebox").TUndefined]>>;
            slug: import("@sinclair/typebox").TOptional<import("@sinclair/typebox").TUnion<[import("@sinclair/typebox").TString, import("@sinclair/typebox").TUndefined]>>;
            description: import("@sinclair/typebox").TOptional<import("@sinclair/typebox").TUnion<[import("@sinclair/typebox").TString, import("@sinclair/typebox").TUndefined]>>;
            postCount: import("@sinclair/typebox").TOptional<import("@sinclair/typebox").TUnion<[import("@sinclair/typebox").TNumber, import("@sinclair/typebox").TUndefined]>>;
            color: import("@sinclair/typebox").TOptional<import("@sinclair/typebox").TUnion<[import("@sinclair/typebox").TString, import("@sinclair/typebox").TUndefined]>>;
            icon: import("@sinclair/typebox").TOptional<import("@sinclair/typebox").TUnion<[import("@sinclair/typebox").TString, import("@sinclair/typebox").TUndefined]>>;
            isActive: import("@sinclair/typebox").TOptional<import("@sinclair/typebox").TUnion<[import("@sinclair/typebox").TBoolean, import("@sinclair/typebox").TUndefined]>>;
            parentId: import("@sinclair/typebox").TOptional<import("@sinclair/typebox").TUnion<[import("@sinclair/typebox").TNull, import("@sinclair/typebox").TUndefined]>>;
            createdAt: import("@sinclair/typebox").TOptional<import("@sinclair/typebox").TUnion<[import("@sinclair/typebox").TString, import("@sinclair/typebox").TUndefined]>>;
            metadata: import("@sinclair/typebox").TOptional<import("@sinclair/typebox").TUnion<[import("@sinclair/typebox").TObject<{
                totalViews: import("@sinclair/typebox").TOptional<import("@sinclair/typebox").TNumber>;
                averageRating: import("@sinclair/typebox").TOptional<import("@sinclair/typebox").TNumber>;
            }>, import("@sinclair/typebox").TUndefined]>>;
        }>;
    }>;
    responses: import("@sinclair/typebox").TObject<{
        200: import("@sinclair/typebox").TObject<{
            id: import("@sinclair/typebox").TNumber;
            name: import("@sinclair/typebox").TOptional<import("@sinclair/typebox").TUnion<[import("@sinclair/typebox").TString, import("@sinclair/typebox").TUndefined]>>;
            slug: import("@sinclair/typebox").TOptional<import("@sinclair/typebox").TUnion<[import("@sinclair/typebox").TString, import("@sinclair/typebox").TUndefined]>>;
            description: import("@sinclair/typebox").TOptional<import("@sinclair/typebox").TUnion<[import("@sinclair/typebox").TString, import("@sinclair/typebox").TUndefined]>>;
            postCount: import("@sinclair/typebox").TOptional<import("@sinclair/typebox").TUnion<[import("@sinclair/typebox").TNumber, import("@sinclair/typebox").TUndefined]>>;
            color: import("@sinclair/typebox").TOptional<import("@sinclair/typebox").TUnion<[import("@sinclair/typebox").TString, import("@sinclair/typebox").TUndefined]>>;
            icon: import("@sinclair/typebox").TOptional<import("@sinclair/typebox").TUnion<[import("@sinclair/typebox").TString, import("@sinclair/typebox").TUndefined]>>;
            isActive: import("@sinclair/typebox").TOptional<import("@sinclair/typebox").TUnion<[import("@sinclair/typebox").TBoolean, import("@sinclair/typebox").TUndefined]>>;
            parentId: import("@sinclair/typebox").TOptional<import("@sinclair/typebox").TUnion<[import("@sinclair/typebox").TNull, import("@sinclair/typebox").TUndefined]>>;
            createdAt: import("@sinclair/typebox").TOptional<import("@sinclair/typebox").TUnion<[import("@sinclair/typebox").TString, import("@sinclair/typebox").TUndefined]>>;
            metadata: import("@sinclair/typebox").TOptional<import("@sinclair/typebox").TUnion<[import("@sinclair/typebox").TObject<{
                totalViews: import("@sinclair/typebox").TOptional<import("@sinclair/typebox").TNumber>;
                averageRating: import("@sinclair/typebox").TOptional<import("@sinclair/typebox").TNumber>;
            }>, import("@sinclair/typebox").TUndefined]>>;
        }>;
        400: import("@sinclair/typebox").TUnknown;
        404: import("@sinclair/typebox").TUnknown;
    }>;
}>;
export type patch__categories_Id = Static<typeof patch__categories_Id>;
export declare const patch__categories_Id: import("@sinclair/typebox").TObject<{
    method: import("@sinclair/typebox").TLiteral<"PATCH">;
    path: import("@sinclair/typebox").TLiteral<"/categories/{id}">;
    requestFormat: import("@sinclair/typebox").TLiteral<"json">;
    parameters: import("@sinclair/typebox").TObject<{
        path: import("@sinclair/typebox").TObject<{
            id: import("@sinclair/typebox").TNumber;
        }>;
        body: import("@sinclair/typebox").TObject<{
            id: import("@sinclair/typebox").TNumber;
            name: import("@sinclair/typebox").TOptional<import("@sinclair/typebox").TUnion<[import("@sinclair/typebox").TString, import("@sinclair/typebox").TUndefined]>>;
            slug: import("@sinclair/typebox").TOptional<import("@sinclair/typebox").TUnion<[import("@sinclair/typebox").TString, import("@sinclair/typebox").TUndefined]>>;
            description: import("@sinclair/typebox").TOptional<import("@sinclair/typebox").TUnion<[import("@sinclair/typebox").TString, import("@sinclair/typebox").TUndefined]>>;
            postCount: import("@sinclair/typebox").TOptional<import("@sinclair/typebox").TUnion<[import("@sinclair/typebox").TNumber, import("@sinclair/typebox").TUndefined]>>;
            color: import("@sinclair/typebox").TOptional<import("@sinclair/typebox").TUnion<[import("@sinclair/typebox").TString, import("@sinclair/typebox").TUndefined]>>;
            icon: import("@sinclair/typebox").TOptional<import("@sinclair/typebox").TUnion<[import("@sinclair/typebox").TString, import("@sinclair/typebox").TUndefined]>>;
            isActive: import("@sinclair/typebox").TOptional<import("@sinclair/typebox").TUnion<[import("@sinclair/typebox").TBoolean, import("@sinclair/typebox").TUndefined]>>;
            parentId: import("@sinclair/typebox").TOptional<import("@sinclair/typebox").TUnion<[import("@sinclair/typebox").TNull, import("@sinclair/typebox").TUndefined]>>;
            createdAt: import("@sinclair/typebox").TOptional<import("@sinclair/typebox").TUnion<[import("@sinclair/typebox").TString, import("@sinclair/typebox").TUndefined]>>;
            metadata: import("@sinclair/typebox").TOptional<import("@sinclair/typebox").TUnion<[import("@sinclair/typebox").TObject<{
                totalViews: import("@sinclair/typebox").TOptional<import("@sinclair/typebox").TNumber>;
                averageRating: import("@sinclair/typebox").TOptional<import("@sinclair/typebox").TNumber>;
            }>, import("@sinclair/typebox").TUndefined]>>;
        }>;
    }>;
    responses: import("@sinclair/typebox").TObject<{
        200: import("@sinclair/typebox").TObject<{
            id: import("@sinclair/typebox").TNumber;
            name: import("@sinclair/typebox").TOptional<import("@sinclair/typebox").TUnion<[import("@sinclair/typebox").TString, import("@sinclair/typebox").TUndefined]>>;
            slug: import("@sinclair/typebox").TOptional<import("@sinclair/typebox").TUnion<[import("@sinclair/typebox").TString, import("@sinclair/typebox").TUndefined]>>;
            description: import("@sinclair/typebox").TOptional<import("@sinclair/typebox").TUnion<[import("@sinclair/typebox").TString, import("@sinclair/typebox").TUndefined]>>;
            postCount: import("@sinclair/typebox").TOptional<import("@sinclair/typebox").TUnion<[import("@sinclair/typebox").TNumber, import("@sinclair/typebox").TUndefined]>>;
            color: import("@sinclair/typebox").TOptional<import("@sinclair/typebox").TUnion<[import("@sinclair/typebox").TString, import("@sinclair/typebox").TUndefined]>>;
            icon: import("@sinclair/typebox").TOptional<import("@sinclair/typebox").TUnion<[import("@sinclair/typebox").TString, import("@sinclair/typebox").TUndefined]>>;
            isActive: import("@sinclair/typebox").TOptional<import("@sinclair/typebox").TUnion<[import("@sinclair/typebox").TBoolean, import("@sinclair/typebox").TUndefined]>>;
            parentId: import("@sinclair/typebox").TOptional<import("@sinclair/typebox").TUnion<[import("@sinclair/typebox").TNull, import("@sinclair/typebox").TUndefined]>>;
            createdAt: import("@sinclair/typebox").TOptional<import("@sinclair/typebox").TUnion<[import("@sinclair/typebox").TString, import("@sinclair/typebox").TUndefined]>>;
            metadata: import("@sinclair/typebox").TOptional<import("@sinclair/typebox").TUnion<[import("@sinclair/typebox").TObject<{
                totalViews: import("@sinclair/typebox").TOptional<import("@sinclair/typebox").TNumber>;
                averageRating: import("@sinclair/typebox").TOptional<import("@sinclair/typebox").TNumber>;
            }>, import("@sinclair/typebox").TUndefined]>>;
        }>;
        400: import("@sinclair/typebox").TUnknown;
        404: import("@sinclair/typebox").TUnknown;
    }>;
}>;
export type delete__categories_Id = Static<typeof delete__categories_Id>;
export declare const delete__categories_Id: import("@sinclair/typebox").TObject<{
    method: import("@sinclair/typebox").TLiteral<"DELETE">;
    path: import("@sinclair/typebox").TLiteral<"/categories/{id}">;
    requestFormat: import("@sinclair/typebox").TLiteral<"json">;
    parameters: import("@sinclair/typebox").TObject<{
        path: import("@sinclair/typebox").TObject<{
            id: import("@sinclair/typebox").TNumber;
        }>;
    }>;
    responses: import("@sinclair/typebox").TObject<{
        200: import("@sinclair/typebox").TUnknown;
        404: import("@sinclair/typebox").TUnknown;
    }>;
}>;
export type get__products = Static<typeof get__products>;
export declare const get__products: import("@sinclair/typebox").TObject<{
    method: import("@sinclair/typebox").TLiteral<"GET">;
    path: import("@sinclair/typebox").TLiteral<"/products">;
    requestFormat: import("@sinclair/typebox").TLiteral<"json">;
    parameters: import("@sinclair/typebox").TObject<{
        query: import("@sinclair/typebox").TObject<{
            _page: import("@sinclair/typebox").TOptional<import("@sinclair/typebox").TNumber>;
            _limit: import("@sinclair/typebox").TOptional<import("@sinclair/typebox").TNumber>;
            _sort: import("@sinclair/typebox").TOptional<import("@sinclair/typebox").TString>;
            _order: import("@sinclair/typebox").TOptional<import("@sinclair/typebox").TUnion<[import("@sinclair/typebox").TLiteral<"asc">, import("@sinclair/typebox").TLiteral<"desc">]>>;
            q: import("@sinclair/typebox").TOptional<import("@sinclair/typebox").TString>;
        }>;
    }>;
    responses: import("@sinclair/typebox").TObject<{
        200: import("@sinclair/typebox").TArray<import("@sinclair/typebox").TObject<{
            id: import("@sinclair/typebox").TNumber;
            name: import("@sinclair/typebox").TOptional<import("@sinclair/typebox").TUnion<[import("@sinclair/typebox").TString, import("@sinclair/typebox").TUndefined]>>;
            description: import("@sinclair/typebox").TOptional<import("@sinclair/typebox").TUnion<[import("@sinclair/typebox").TString, import("@sinclair/typebox").TUndefined]>>;
            shortDescription: import("@sinclair/typebox").TOptional<import("@sinclair/typebox").TUnion<[import("@sinclair/typebox").TString, import("@sinclair/typebox").TUndefined]>>;
            price: import("@sinclair/typebox").TOptional<import("@sinclair/typebox").TUnion<[import("@sinclair/typebox").TNumber, import("@sinclair/typebox").TUndefined]>>;
            originalPrice: import("@sinclair/typebox").TOptional<import("@sinclair/typebox").TUnion<[import("@sinclair/typebox").TNumber, import("@sinclair/typebox").TUndefined]>>;
            currency: import("@sinclair/typebox").TOptional<import("@sinclair/typebox").TUnion<[import("@sinclair/typebox").TString, import("@sinclair/typebox").TUndefined]>>;
            categoryId: import("@sinclair/typebox").TOptional<import("@sinclair/typebox").TUnion<[import("@sinclair/typebox").TNumber, import("@sinclair/typebox").TUndefined]>>;
            brand: import("@sinclair/typebox").TOptional<import("@sinclair/typebox").TUnion<[import("@sinclair/typebox").TString, import("@sinclair/typebox").TUndefined]>>;
            model: import("@sinclair/typebox").TOptional<import("@sinclair/typebox").TUnion<[import("@sinclair/typebox").TString, import("@sinclair/typebox").TUndefined]>>;
            sku: import("@sinclair/typebox").TOptional<import("@sinclair/typebox").TUnion<[import("@sinclair/typebox").TString, import("@sinclair/typebox").TUndefined]>>;
            barcode: import("@sinclair/typebox").TOptional<import("@sinclair/typebox").TUnion<[import("@sinclair/typebox").TString, import("@sinclair/typebox").TUndefined]>>;
            inventory: import("@sinclair/typebox").TOptional<import("@sinclair/typebox").TUnion<[import("@sinclair/typebox").TObject<{
                inStock: import("@sinclair/typebox").TOptional<import("@sinclair/typebox").TNumber>;
                reserved: import("@sinclair/typebox").TOptional<import("@sinclair/typebox").TNumber>;
                available: import("@sinclair/typebox").TOptional<import("@sinclair/typebox").TNumber>;
                lowStockThreshold: import("@sinclair/typebox").TOptional<import("@sinclair/typebox").TNumber>;
            }>, import("@sinclair/typebox").TUndefined]>>;
            images: import("@sinclair/typebox").TOptional<import("@sinclair/typebox").TUnion<[import("@sinclair/typebox").TArray<import("@sinclair/typebox").TString>, import("@sinclair/typebox").TUndefined]>>;
            specifications: import("@sinclair/typebox").TOptional<import("@sinclair/typebox").TUnion<[import("@sinclair/typebox").TObject<{
                batteryLife: import("@sinclair/typebox").TOptional<import("@sinclair/typebox").TString>;
                chargingTime: import("@sinclair/typebox").TOptional<import("@sinclair/typebox").TString>;
                connectivity: import("@sinclair/typebox").TOptional<import("@sinclair/typebox").TString>;
                weight: import("@sinclair/typebox").TOptional<import("@sinclair/typebox").TString>;
                dimensions: import("@sinclair/typebox").TOptional<import("@sinclair/typebox").TString>;
                colors: import("@sinclair/typebox").TOptional<import("@sinclair/typebox").TArray<import("@sinclair/typebox").TString>>;
                warranty: import("@sinclair/typebox").TOptional<import("@sinclair/typebox").TString>;
            }>, import("@sinclair/typebox").TUndefined]>>;
            features: import("@sinclair/typebox").TOptional<import("@sinclair/typebox").TUnion<[import("@sinclair/typebox").TArray<import("@sinclair/typebox").TString>, import("@sinclair/typebox").TUndefined]>>;
            ratings: import("@sinclair/typebox").TOptional<import("@sinclair/typebox").TUnion<[import("@sinclair/typebox").TObject<{
                average: import("@sinclair/typebox").TOptional<import("@sinclair/typebox").TNumber>;
                count: import("@sinclair/typebox").TOptional<import("@sinclair/typebox").TNumber>;
                breakdown: import("@sinclair/typebox").TOptional<import("@sinclair/typebox").TObject<{
                    1: import("@sinclair/typebox").TOptional<import("@sinclair/typebox").TNumber>;
                    2: import("@sinclair/typebox").TOptional<import("@sinclair/typebox").TNumber>;
                    3: import("@sinclair/typebox").TOptional<import("@sinclair/typebox").TNumber>;
                    4: import("@sinclair/typebox").TOptional<import("@sinclair/typebox").TNumber>;
                    5: import("@sinclair/typebox").TOptional<import("@sinclair/typebox").TNumber>;
                }>>;
            }>, import("@sinclair/typebox").TUndefined]>>;
            tags: import("@sinclair/typebox").TOptional<import("@sinclair/typebox").TUnion<[import("@sinclair/typebox").TArray<import("@sinclair/typebox").TString>, import("@sinclair/typebox").TUndefined]>>;
            isActive: import("@sinclair/typebox").TOptional<import("@sinclair/typebox").TUnion<[import("@sinclair/typebox").TBoolean, import("@sinclair/typebox").TUndefined]>>;
            isFeatured: import("@sinclair/typebox").TOptional<import("@sinclair/typebox").TUnion<[import("@sinclair/typebox").TBoolean, import("@sinclair/typebox").TUndefined]>>;
            createdAt: import("@sinclair/typebox").TOptional<import("@sinclair/typebox").TUnion<[import("@sinclair/typebox").TString, import("@sinclair/typebox").TUndefined]>>;
            updatedAt: import("@sinclair/typebox").TOptional<import("@sinclair/typebox").TUnion<[import("@sinclair/typebox").TString, import("@sinclair/typebox").TUndefined]>>;
        }>>;
    }>;
}>;
export type post__products = Static<typeof post__products>;
export declare const post__products: import("@sinclair/typebox").TObject<{
    method: import("@sinclair/typebox").TLiteral<"POST">;
    path: import("@sinclair/typebox").TLiteral<"/products">;
    requestFormat: import("@sinclair/typebox").TLiteral<"json">;
    parameters: import("@sinclair/typebox").TObject<{
        body: import("@sinclair/typebox").TObject<{
            id: import("@sinclair/typebox").TNumber;
            name: import("@sinclair/typebox").TOptional<import("@sinclair/typebox").TUnion<[import("@sinclair/typebox").TString, import("@sinclair/typebox").TUndefined]>>;
            description: import("@sinclair/typebox").TOptional<import("@sinclair/typebox").TUnion<[import("@sinclair/typebox").TString, import("@sinclair/typebox").TUndefined]>>;
            shortDescription: import("@sinclair/typebox").TOptional<import("@sinclair/typebox").TUnion<[import("@sinclair/typebox").TString, import("@sinclair/typebox").TUndefined]>>;
            price: import("@sinclair/typebox").TOptional<import("@sinclair/typebox").TUnion<[import("@sinclair/typebox").TNumber, import("@sinclair/typebox").TUndefined]>>;
            originalPrice: import("@sinclair/typebox").TOptional<import("@sinclair/typebox").TUnion<[import("@sinclair/typebox").TNumber, import("@sinclair/typebox").TUndefined]>>;
            currency: import("@sinclair/typebox").TOptional<import("@sinclair/typebox").TUnion<[import("@sinclair/typebox").TString, import("@sinclair/typebox").TUndefined]>>;
            categoryId: import("@sinclair/typebox").TOptional<import("@sinclair/typebox").TUnion<[import("@sinclair/typebox").TNumber, import("@sinclair/typebox").TUndefined]>>;
            brand: import("@sinclair/typebox").TOptional<import("@sinclair/typebox").TUnion<[import("@sinclair/typebox").TString, import("@sinclair/typebox").TUndefined]>>;
            model: import("@sinclair/typebox").TOptional<import("@sinclair/typebox").TUnion<[import("@sinclair/typebox").TString, import("@sinclair/typebox").TUndefined]>>;
            sku: import("@sinclair/typebox").TOptional<import("@sinclair/typebox").TUnion<[import("@sinclair/typebox").TString, import("@sinclair/typebox").TUndefined]>>;
            barcode: import("@sinclair/typebox").TOptional<import("@sinclair/typebox").TUnion<[import("@sinclair/typebox").TString, import("@sinclair/typebox").TUndefined]>>;
            inventory: import("@sinclair/typebox").TOptional<import("@sinclair/typebox").TUnion<[import("@sinclair/typebox").TObject<{
                inStock: import("@sinclair/typebox").TOptional<import("@sinclair/typebox").TNumber>;
                reserved: import("@sinclair/typebox").TOptional<import("@sinclair/typebox").TNumber>;
                available: import("@sinclair/typebox").TOptional<import("@sinclair/typebox").TNumber>;
                lowStockThreshold: import("@sinclair/typebox").TOptional<import("@sinclair/typebox").TNumber>;
            }>, import("@sinclair/typebox").TUndefined]>>;
            images: import("@sinclair/typebox").TOptional<import("@sinclair/typebox").TUnion<[import("@sinclair/typebox").TArray<import("@sinclair/typebox").TString>, import("@sinclair/typebox").TUndefined]>>;
            specifications: import("@sinclair/typebox").TOptional<import("@sinclair/typebox").TUnion<[import("@sinclair/typebox").TObject<{
                batteryLife: import("@sinclair/typebox").TOptional<import("@sinclair/typebox").TString>;
                chargingTime: import("@sinclair/typebox").TOptional<import("@sinclair/typebox").TString>;
                connectivity: import("@sinclair/typebox").TOptional<import("@sinclair/typebox").TString>;
                weight: import("@sinclair/typebox").TOptional<import("@sinclair/typebox").TString>;
                dimensions: import("@sinclair/typebox").TOptional<import("@sinclair/typebox").TString>;
                colors: import("@sinclair/typebox").TOptional<import("@sinclair/typebox").TArray<import("@sinclair/typebox").TString>>;
                warranty: import("@sinclair/typebox").TOptional<import("@sinclair/typebox").TString>;
            }>, import("@sinclair/typebox").TUndefined]>>;
            features: import("@sinclair/typebox").TOptional<import("@sinclair/typebox").TUnion<[import("@sinclair/typebox").TArray<import("@sinclair/typebox").TString>, import("@sinclair/typebox").TUndefined]>>;
            ratings: import("@sinclair/typebox").TOptional<import("@sinclair/typebox").TUnion<[import("@sinclair/typebox").TObject<{
                average: import("@sinclair/typebox").TOptional<import("@sinclair/typebox").TNumber>;
                count: import("@sinclair/typebox").TOptional<import("@sinclair/typebox").TNumber>;
                breakdown: import("@sinclair/typebox").TOptional<import("@sinclair/typebox").TObject<{
                    1: import("@sinclair/typebox").TOptional<import("@sinclair/typebox").TNumber>;
                    2: import("@sinclair/typebox").TOptional<import("@sinclair/typebox").TNumber>;
                    3: import("@sinclair/typebox").TOptional<import("@sinclair/typebox").TNumber>;
                    4: import("@sinclair/typebox").TOptional<import("@sinclair/typebox").TNumber>;
                    5: import("@sinclair/typebox").TOptional<import("@sinclair/typebox").TNumber>;
                }>>;
            }>, import("@sinclair/typebox").TUndefined]>>;
            tags: import("@sinclair/typebox").TOptional<import("@sinclair/typebox").TUnion<[import("@sinclair/typebox").TArray<import("@sinclair/typebox").TString>, import("@sinclair/typebox").TUndefined]>>;
            isActive: import("@sinclair/typebox").TOptional<import("@sinclair/typebox").TUnion<[import("@sinclair/typebox").TBoolean, import("@sinclair/typebox").TUndefined]>>;
            isFeatured: import("@sinclair/typebox").TOptional<import("@sinclair/typebox").TUnion<[import("@sinclair/typebox").TBoolean, import("@sinclair/typebox").TUndefined]>>;
            createdAt: import("@sinclair/typebox").TOptional<import("@sinclair/typebox").TUnion<[import("@sinclair/typebox").TString, import("@sinclair/typebox").TUndefined]>>;
            updatedAt: import("@sinclair/typebox").TOptional<import("@sinclair/typebox").TUnion<[import("@sinclair/typebox").TString, import("@sinclair/typebox").TUndefined]>>;
        }>;
    }>;
    responses: import("@sinclair/typebox").TObject<{
        201: import("@sinclair/typebox").TObject<{
            id: import("@sinclair/typebox").TNumber;
            name: import("@sinclair/typebox").TOptional<import("@sinclair/typebox").TUnion<[import("@sinclair/typebox").TString, import("@sinclair/typebox").TUndefined]>>;
            description: import("@sinclair/typebox").TOptional<import("@sinclair/typebox").TUnion<[import("@sinclair/typebox").TString, import("@sinclair/typebox").TUndefined]>>;
            shortDescription: import("@sinclair/typebox").TOptional<import("@sinclair/typebox").TUnion<[import("@sinclair/typebox").TString, import("@sinclair/typebox").TUndefined]>>;
            price: import("@sinclair/typebox").TOptional<import("@sinclair/typebox").TUnion<[import("@sinclair/typebox").TNumber, import("@sinclair/typebox").TUndefined]>>;
            originalPrice: import("@sinclair/typebox").TOptional<import("@sinclair/typebox").TUnion<[import("@sinclair/typebox").TNumber, import("@sinclair/typebox").TUndefined]>>;
            currency: import("@sinclair/typebox").TOptional<import("@sinclair/typebox").TUnion<[import("@sinclair/typebox").TString, import("@sinclair/typebox").TUndefined]>>;
            categoryId: import("@sinclair/typebox").TOptional<import("@sinclair/typebox").TUnion<[import("@sinclair/typebox").TNumber, import("@sinclair/typebox").TUndefined]>>;
            brand: import("@sinclair/typebox").TOptional<import("@sinclair/typebox").TUnion<[import("@sinclair/typebox").TString, import("@sinclair/typebox").TUndefined]>>;
            model: import("@sinclair/typebox").TOptional<import("@sinclair/typebox").TUnion<[import("@sinclair/typebox").TString, import("@sinclair/typebox").TUndefined]>>;
            sku: import("@sinclair/typebox").TOptional<import("@sinclair/typebox").TUnion<[import("@sinclair/typebox").TString, import("@sinclair/typebox").TUndefined]>>;
            barcode: import("@sinclair/typebox").TOptional<import("@sinclair/typebox").TUnion<[import("@sinclair/typebox").TString, import("@sinclair/typebox").TUndefined]>>;
            inventory: import("@sinclair/typebox").TOptional<import("@sinclair/typebox").TUnion<[import("@sinclair/typebox").TObject<{
                inStock: import("@sinclair/typebox").TOptional<import("@sinclair/typebox").TNumber>;
                reserved: import("@sinclair/typebox").TOptional<import("@sinclair/typebox").TNumber>;
                available: import("@sinclair/typebox").TOptional<import("@sinclair/typebox").TNumber>;
                lowStockThreshold: import("@sinclair/typebox").TOptional<import("@sinclair/typebox").TNumber>;
            }>, import("@sinclair/typebox").TUndefined]>>;
            images: import("@sinclair/typebox").TOptional<import("@sinclair/typebox").TUnion<[import("@sinclair/typebox").TArray<import("@sinclair/typebox").TString>, import("@sinclair/typebox").TUndefined]>>;
            specifications: import("@sinclair/typebox").TOptional<import("@sinclair/typebox").TUnion<[import("@sinclair/typebox").TObject<{
                batteryLife: import("@sinclair/typebox").TOptional<import("@sinclair/typebox").TString>;
                chargingTime: import("@sinclair/typebox").TOptional<import("@sinclair/typebox").TString>;
                connectivity: import("@sinclair/typebox").TOptional<import("@sinclair/typebox").TString>;
                weight: import("@sinclair/typebox").TOptional<import("@sinclair/typebox").TString>;
                dimensions: import("@sinclair/typebox").TOptional<import("@sinclair/typebox").TString>;
                colors: import("@sinclair/typebox").TOptional<import("@sinclair/typebox").TArray<import("@sinclair/typebox").TString>>;
                warranty: import("@sinclair/typebox").TOptional<import("@sinclair/typebox").TString>;
            }>, import("@sinclair/typebox").TUndefined]>>;
            features: import("@sinclair/typebox").TOptional<import("@sinclair/typebox").TUnion<[import("@sinclair/typebox").TArray<import("@sinclair/typebox").TString>, import("@sinclair/typebox").TUndefined]>>;
            ratings: import("@sinclair/typebox").TOptional<import("@sinclair/typebox").TUnion<[import("@sinclair/typebox").TObject<{
                average: import("@sinclair/typebox").TOptional<import("@sinclair/typebox").TNumber>;
                count: import("@sinclair/typebox").TOptional<import("@sinclair/typebox").TNumber>;
                breakdown: import("@sinclair/typebox").TOptional<import("@sinclair/typebox").TObject<{
                    1: import("@sinclair/typebox").TOptional<import("@sinclair/typebox").TNumber>;
                    2: import("@sinclair/typebox").TOptional<import("@sinclair/typebox").TNumber>;
                    3: import("@sinclair/typebox").TOptional<import("@sinclair/typebox").TNumber>;
                    4: import("@sinclair/typebox").TOptional<import("@sinclair/typebox").TNumber>;
                    5: import("@sinclair/typebox").TOptional<import("@sinclair/typebox").TNumber>;
                }>>;
            }>, import("@sinclair/typebox").TUndefined]>>;
            tags: import("@sinclair/typebox").TOptional<import("@sinclair/typebox").TUnion<[import("@sinclair/typebox").TArray<import("@sinclair/typebox").TString>, import("@sinclair/typebox").TUndefined]>>;
            isActive: import("@sinclair/typebox").TOptional<import("@sinclair/typebox").TUnion<[import("@sinclair/typebox").TBoolean, import("@sinclair/typebox").TUndefined]>>;
            isFeatured: import("@sinclair/typebox").TOptional<import("@sinclair/typebox").TUnion<[import("@sinclair/typebox").TBoolean, import("@sinclair/typebox").TUndefined]>>;
            createdAt: import("@sinclair/typebox").TOptional<import("@sinclair/typebox").TUnion<[import("@sinclair/typebox").TString, import("@sinclair/typebox").TUndefined]>>;
            updatedAt: import("@sinclair/typebox").TOptional<import("@sinclair/typebox").TUnion<[import("@sinclair/typebox").TString, import("@sinclair/typebox").TUndefined]>>;
        }>;
        400: import("@sinclair/typebox").TUnknown;
    }>;
}>;
export type get__products_Id = Static<typeof get__products_Id>;
export declare const get__products_Id: import("@sinclair/typebox").TObject<{
    method: import("@sinclair/typebox").TLiteral<"GET">;
    path: import("@sinclair/typebox").TLiteral<"/products/{id}">;
    requestFormat: import("@sinclair/typebox").TLiteral<"json">;
    parameters: import("@sinclair/typebox").TObject<{
        path: import("@sinclair/typebox").TObject<{
            id: import("@sinclair/typebox").TNumber;
        }>;
    }>;
    responses: import("@sinclair/typebox").TObject<{
        200: import("@sinclair/typebox").TObject<{
            id: import("@sinclair/typebox").TNumber;
            name: import("@sinclair/typebox").TOptional<import("@sinclair/typebox").TUnion<[import("@sinclair/typebox").TString, import("@sinclair/typebox").TUndefined]>>;
            description: import("@sinclair/typebox").TOptional<import("@sinclair/typebox").TUnion<[import("@sinclair/typebox").TString, import("@sinclair/typebox").TUndefined]>>;
            shortDescription: import("@sinclair/typebox").TOptional<import("@sinclair/typebox").TUnion<[import("@sinclair/typebox").TString, import("@sinclair/typebox").TUndefined]>>;
            price: import("@sinclair/typebox").TOptional<import("@sinclair/typebox").TUnion<[import("@sinclair/typebox").TNumber, import("@sinclair/typebox").TUndefined]>>;
            originalPrice: import("@sinclair/typebox").TOptional<import("@sinclair/typebox").TUnion<[import("@sinclair/typebox").TNumber, import("@sinclair/typebox").TUndefined]>>;
            currency: import("@sinclair/typebox").TOptional<import("@sinclair/typebox").TUnion<[import("@sinclair/typebox").TString, import("@sinclair/typebox").TUndefined]>>;
            categoryId: import("@sinclair/typebox").TOptional<import("@sinclair/typebox").TUnion<[import("@sinclair/typebox").TNumber, import("@sinclair/typebox").TUndefined]>>;
            brand: import("@sinclair/typebox").TOptional<import("@sinclair/typebox").TUnion<[import("@sinclair/typebox").TString, import("@sinclair/typebox").TUndefined]>>;
            model: import("@sinclair/typebox").TOptional<import("@sinclair/typebox").TUnion<[import("@sinclair/typebox").TString, import("@sinclair/typebox").TUndefined]>>;
            sku: import("@sinclair/typebox").TOptional<import("@sinclair/typebox").TUnion<[import("@sinclair/typebox").TString, import("@sinclair/typebox").TUndefined]>>;
            barcode: import("@sinclair/typebox").TOptional<import("@sinclair/typebox").TUnion<[import("@sinclair/typebox").TString, import("@sinclair/typebox").TUndefined]>>;
            inventory: import("@sinclair/typebox").TOptional<import("@sinclair/typebox").TUnion<[import("@sinclair/typebox").TObject<{
                inStock: import("@sinclair/typebox").TOptional<import("@sinclair/typebox").TNumber>;
                reserved: import("@sinclair/typebox").TOptional<import("@sinclair/typebox").TNumber>;
                available: import("@sinclair/typebox").TOptional<import("@sinclair/typebox").TNumber>;
                lowStockThreshold: import("@sinclair/typebox").TOptional<import("@sinclair/typebox").TNumber>;
            }>, import("@sinclair/typebox").TUndefined]>>;
            images: import("@sinclair/typebox").TOptional<import("@sinclair/typebox").TUnion<[import("@sinclair/typebox").TArray<import("@sinclair/typebox").TString>, import("@sinclair/typebox").TUndefined]>>;
            specifications: import("@sinclair/typebox").TOptional<import("@sinclair/typebox").TUnion<[import("@sinclair/typebox").TObject<{
                batteryLife: import("@sinclair/typebox").TOptional<import("@sinclair/typebox").TString>;
                chargingTime: import("@sinclair/typebox").TOptional<import("@sinclair/typebox").TString>;
                connectivity: import("@sinclair/typebox").TOptional<import("@sinclair/typebox").TString>;
                weight: import("@sinclair/typebox").TOptional<import("@sinclair/typebox").TString>;
                dimensions: import("@sinclair/typebox").TOptional<import("@sinclair/typebox").TString>;
                colors: import("@sinclair/typebox").TOptional<import("@sinclair/typebox").TArray<import("@sinclair/typebox").TString>>;
                warranty: import("@sinclair/typebox").TOptional<import("@sinclair/typebox").TString>;
            }>, import("@sinclair/typebox").TUndefined]>>;
            features: import("@sinclair/typebox").TOptional<import("@sinclair/typebox").TUnion<[import("@sinclair/typebox").TArray<import("@sinclair/typebox").TString>, import("@sinclair/typebox").TUndefined]>>;
            ratings: import("@sinclair/typebox").TOptional<import("@sinclair/typebox").TUnion<[import("@sinclair/typebox").TObject<{
                average: import("@sinclair/typebox").TOptional<import("@sinclair/typebox").TNumber>;
                count: import("@sinclair/typebox").TOptional<import("@sinclair/typebox").TNumber>;
                breakdown: import("@sinclair/typebox").TOptional<import("@sinclair/typebox").TObject<{
                    1: import("@sinclair/typebox").TOptional<import("@sinclair/typebox").TNumber>;
                    2: import("@sinclair/typebox").TOptional<import("@sinclair/typebox").TNumber>;
                    3: import("@sinclair/typebox").TOptional<import("@sinclair/typebox").TNumber>;
                    4: import("@sinclair/typebox").TOptional<import("@sinclair/typebox").TNumber>;
                    5: import("@sinclair/typebox").TOptional<import("@sinclair/typebox").TNumber>;
                }>>;
            }>, import("@sinclair/typebox").TUndefined]>>;
            tags: import("@sinclair/typebox").TOptional<import("@sinclair/typebox").TUnion<[import("@sinclair/typebox").TArray<import("@sinclair/typebox").TString>, import("@sinclair/typebox").TUndefined]>>;
            isActive: import("@sinclair/typebox").TOptional<import("@sinclair/typebox").TUnion<[import("@sinclair/typebox").TBoolean, import("@sinclair/typebox").TUndefined]>>;
            isFeatured: import("@sinclair/typebox").TOptional<import("@sinclair/typebox").TUnion<[import("@sinclair/typebox").TBoolean, import("@sinclair/typebox").TUndefined]>>;
            createdAt: import("@sinclair/typebox").TOptional<import("@sinclair/typebox").TUnion<[import("@sinclair/typebox").TString, import("@sinclair/typebox").TUndefined]>>;
            updatedAt: import("@sinclair/typebox").TOptional<import("@sinclair/typebox").TUnion<[import("@sinclair/typebox").TString, import("@sinclair/typebox").TUndefined]>>;
        }>;
        404: import("@sinclair/typebox").TUnknown;
    }>;
}>;
export type put__products_Id = Static<typeof put__products_Id>;
export declare const put__products_Id: import("@sinclair/typebox").TObject<{
    method: import("@sinclair/typebox").TLiteral<"PUT">;
    path: import("@sinclair/typebox").TLiteral<"/products/{id}">;
    requestFormat: import("@sinclair/typebox").TLiteral<"json">;
    parameters: import("@sinclair/typebox").TObject<{
        path: import("@sinclair/typebox").TObject<{
            id: import("@sinclair/typebox").TNumber;
        }>;
        body: import("@sinclair/typebox").TObject<{
            id: import("@sinclair/typebox").TNumber;
            name: import("@sinclair/typebox").TOptional<import("@sinclair/typebox").TUnion<[import("@sinclair/typebox").TString, import("@sinclair/typebox").TUndefined]>>;
            description: import("@sinclair/typebox").TOptional<import("@sinclair/typebox").TUnion<[import("@sinclair/typebox").TString, import("@sinclair/typebox").TUndefined]>>;
            shortDescription: import("@sinclair/typebox").TOptional<import("@sinclair/typebox").TUnion<[import("@sinclair/typebox").TString, import("@sinclair/typebox").TUndefined]>>;
            price: import("@sinclair/typebox").TOptional<import("@sinclair/typebox").TUnion<[import("@sinclair/typebox").TNumber, import("@sinclair/typebox").TUndefined]>>;
            originalPrice: import("@sinclair/typebox").TOptional<import("@sinclair/typebox").TUnion<[import("@sinclair/typebox").TNumber, import("@sinclair/typebox").TUndefined]>>;
            currency: import("@sinclair/typebox").TOptional<import("@sinclair/typebox").TUnion<[import("@sinclair/typebox").TString, import("@sinclair/typebox").TUndefined]>>;
            categoryId: import("@sinclair/typebox").TOptional<import("@sinclair/typebox").TUnion<[import("@sinclair/typebox").TNumber, import("@sinclair/typebox").TUndefined]>>;
            brand: import("@sinclair/typebox").TOptional<import("@sinclair/typebox").TUnion<[import("@sinclair/typebox").TString, import("@sinclair/typebox").TUndefined]>>;
            model: import("@sinclair/typebox").TOptional<import("@sinclair/typebox").TUnion<[import("@sinclair/typebox").TString, import("@sinclair/typebox").TUndefined]>>;
            sku: import("@sinclair/typebox").TOptional<import("@sinclair/typebox").TUnion<[import("@sinclair/typebox").TString, import("@sinclair/typebox").TUndefined]>>;
            barcode: import("@sinclair/typebox").TOptional<import("@sinclair/typebox").TUnion<[import("@sinclair/typebox").TString, import("@sinclair/typebox").TUndefined]>>;
            inventory: import("@sinclair/typebox").TOptional<import("@sinclair/typebox").TUnion<[import("@sinclair/typebox").TObject<{
                inStock: import("@sinclair/typebox").TOptional<import("@sinclair/typebox").TNumber>;
                reserved: import("@sinclair/typebox").TOptional<import("@sinclair/typebox").TNumber>;
                available: import("@sinclair/typebox").TOptional<import("@sinclair/typebox").TNumber>;
                lowStockThreshold: import("@sinclair/typebox").TOptional<import("@sinclair/typebox").TNumber>;
            }>, import("@sinclair/typebox").TUndefined]>>;
            images: import("@sinclair/typebox").TOptional<import("@sinclair/typebox").TUnion<[import("@sinclair/typebox").TArray<import("@sinclair/typebox").TString>, import("@sinclair/typebox").TUndefined]>>;
            specifications: import("@sinclair/typebox").TOptional<import("@sinclair/typebox").TUnion<[import("@sinclair/typebox").TObject<{
                batteryLife: import("@sinclair/typebox").TOptional<import("@sinclair/typebox").TString>;
                chargingTime: import("@sinclair/typebox").TOptional<import("@sinclair/typebox").TString>;
                connectivity: import("@sinclair/typebox").TOptional<import("@sinclair/typebox").TString>;
                weight: import("@sinclair/typebox").TOptional<import("@sinclair/typebox").TString>;
                dimensions: import("@sinclair/typebox").TOptional<import("@sinclair/typebox").TString>;
                colors: import("@sinclair/typebox").TOptional<import("@sinclair/typebox").TArray<import("@sinclair/typebox").TString>>;
                warranty: import("@sinclair/typebox").TOptional<import("@sinclair/typebox").TString>;
            }>, import("@sinclair/typebox").TUndefined]>>;
            features: import("@sinclair/typebox").TOptional<import("@sinclair/typebox").TUnion<[import("@sinclair/typebox").TArray<import("@sinclair/typebox").TString>, import("@sinclair/typebox").TUndefined]>>;
            ratings: import("@sinclair/typebox").TOptional<import("@sinclair/typebox").TUnion<[import("@sinclair/typebox").TObject<{
                average: import("@sinclair/typebox").TOptional<import("@sinclair/typebox").TNumber>;
                count: import("@sinclair/typebox").TOptional<import("@sinclair/typebox").TNumber>;
                breakdown: import("@sinclair/typebox").TOptional<import("@sinclair/typebox").TObject<{
                    1: import("@sinclair/typebox").TOptional<import("@sinclair/typebox").TNumber>;
                    2: import("@sinclair/typebox").TOptional<import("@sinclair/typebox").TNumber>;
                    3: import("@sinclair/typebox").TOptional<import("@sinclair/typebox").TNumber>;
                    4: import("@sinclair/typebox").TOptional<import("@sinclair/typebox").TNumber>;
                    5: import("@sinclair/typebox").TOptional<import("@sinclair/typebox").TNumber>;
                }>>;
            }>, import("@sinclair/typebox").TUndefined]>>;
            tags: import("@sinclair/typebox").TOptional<import("@sinclair/typebox").TUnion<[import("@sinclair/typebox").TArray<import("@sinclair/typebox").TString>, import("@sinclair/typebox").TUndefined]>>;
            isActive: import("@sinclair/typebox").TOptional<import("@sinclair/typebox").TUnion<[import("@sinclair/typebox").TBoolean, import("@sinclair/typebox").TUndefined]>>;
            isFeatured: import("@sinclair/typebox").TOptional<import("@sinclair/typebox").TUnion<[import("@sinclair/typebox").TBoolean, import("@sinclair/typebox").TUndefined]>>;
            createdAt: import("@sinclair/typebox").TOptional<import("@sinclair/typebox").TUnion<[import("@sinclair/typebox").TString, import("@sinclair/typebox").TUndefined]>>;
            updatedAt: import("@sinclair/typebox").TOptional<import("@sinclair/typebox").TUnion<[import("@sinclair/typebox").TString, import("@sinclair/typebox").TUndefined]>>;
        }>;
    }>;
    responses: import("@sinclair/typebox").TObject<{
        200: import("@sinclair/typebox").TObject<{
            id: import("@sinclair/typebox").TNumber;
            name: import("@sinclair/typebox").TOptional<import("@sinclair/typebox").TUnion<[import("@sinclair/typebox").TString, import("@sinclair/typebox").TUndefined]>>;
            description: import("@sinclair/typebox").TOptional<import("@sinclair/typebox").TUnion<[import("@sinclair/typebox").TString, import("@sinclair/typebox").TUndefined]>>;
            shortDescription: import("@sinclair/typebox").TOptional<import("@sinclair/typebox").TUnion<[import("@sinclair/typebox").TString, import("@sinclair/typebox").TUndefined]>>;
            price: import("@sinclair/typebox").TOptional<import("@sinclair/typebox").TUnion<[import("@sinclair/typebox").TNumber, import("@sinclair/typebox").TUndefined]>>;
            originalPrice: import("@sinclair/typebox").TOptional<import("@sinclair/typebox").TUnion<[import("@sinclair/typebox").TNumber, import("@sinclair/typebox").TUndefined]>>;
            currency: import("@sinclair/typebox").TOptional<import("@sinclair/typebox").TUnion<[import("@sinclair/typebox").TString, import("@sinclair/typebox").TUndefined]>>;
            categoryId: import("@sinclair/typebox").TOptional<import("@sinclair/typebox").TUnion<[import("@sinclair/typebox").TNumber, import("@sinclair/typebox").TUndefined]>>;
            brand: import("@sinclair/typebox").TOptional<import("@sinclair/typebox").TUnion<[import("@sinclair/typebox").TString, import("@sinclair/typebox").TUndefined]>>;
            model: import("@sinclair/typebox").TOptional<import("@sinclair/typebox").TUnion<[import("@sinclair/typebox").TString, import("@sinclair/typebox").TUndefined]>>;
            sku: import("@sinclair/typebox").TOptional<import("@sinclair/typebox").TUnion<[import("@sinclair/typebox").TString, import("@sinclair/typebox").TUndefined]>>;
            barcode: import("@sinclair/typebox").TOptional<import("@sinclair/typebox").TUnion<[import("@sinclair/typebox").TString, import("@sinclair/typebox").TUndefined]>>;
            inventory: import("@sinclair/typebox").TOptional<import("@sinclair/typebox").TUnion<[import("@sinclair/typebox").TObject<{
                inStock: import("@sinclair/typebox").TOptional<import("@sinclair/typebox").TNumber>;
                reserved: import("@sinclair/typebox").TOptional<import("@sinclair/typebox").TNumber>;
                available: import("@sinclair/typebox").TOptional<import("@sinclair/typebox").TNumber>;
                lowStockThreshold: import("@sinclair/typebox").TOptional<import("@sinclair/typebox").TNumber>;
            }>, import("@sinclair/typebox").TUndefined]>>;
            images: import("@sinclair/typebox").TOptional<import("@sinclair/typebox").TUnion<[import("@sinclair/typebox").TArray<import("@sinclair/typebox").TString>, import("@sinclair/typebox").TUndefined]>>;
            specifications: import("@sinclair/typebox").TOptional<import("@sinclair/typebox").TUnion<[import("@sinclair/typebox").TObject<{
                batteryLife: import("@sinclair/typebox").TOptional<import("@sinclair/typebox").TString>;
                chargingTime: import("@sinclair/typebox").TOptional<import("@sinclair/typebox").TString>;
                connectivity: import("@sinclair/typebox").TOptional<import("@sinclair/typebox").TString>;
                weight: import("@sinclair/typebox").TOptional<import("@sinclair/typebox").TString>;
                dimensions: import("@sinclair/typebox").TOptional<import("@sinclair/typebox").TString>;
                colors: import("@sinclair/typebox").TOptional<import("@sinclair/typebox").TArray<import("@sinclair/typebox").TString>>;
                warranty: import("@sinclair/typebox").TOptional<import("@sinclair/typebox").TString>;
            }>, import("@sinclair/typebox").TUndefined]>>;
            features: import("@sinclair/typebox").TOptional<import("@sinclair/typebox").TUnion<[import("@sinclair/typebox").TArray<import("@sinclair/typebox").TString>, import("@sinclair/typebox").TUndefined]>>;
            ratings: import("@sinclair/typebox").TOptional<import("@sinclair/typebox").TUnion<[import("@sinclair/typebox").TObject<{
                average: import("@sinclair/typebox").TOptional<import("@sinclair/typebox").TNumber>;
                count: import("@sinclair/typebox").TOptional<import("@sinclair/typebox").TNumber>;
                breakdown: import("@sinclair/typebox").TOptional<import("@sinclair/typebox").TObject<{
                    1: import("@sinclair/typebox").TOptional<import("@sinclair/typebox").TNumber>;
                    2: import("@sinclair/typebox").TOptional<import("@sinclair/typebox").TNumber>;
                    3: import("@sinclair/typebox").TOptional<import("@sinclair/typebox").TNumber>;
                    4: import("@sinclair/typebox").TOptional<import("@sinclair/typebox").TNumber>;
                    5: import("@sinclair/typebox").TOptional<import("@sinclair/typebox").TNumber>;
                }>>;
            }>, import("@sinclair/typebox").TUndefined]>>;
            tags: import("@sinclair/typebox").TOptional<import("@sinclair/typebox").TUnion<[import("@sinclair/typebox").TArray<import("@sinclair/typebox").TString>, import("@sinclair/typebox").TUndefined]>>;
            isActive: import("@sinclair/typebox").TOptional<import("@sinclair/typebox").TUnion<[import("@sinclair/typebox").TBoolean, import("@sinclair/typebox").TUndefined]>>;
            isFeatured: import("@sinclair/typebox").TOptional<import("@sinclair/typebox").TUnion<[import("@sinclair/typebox").TBoolean, import("@sinclair/typebox").TUndefined]>>;
            createdAt: import("@sinclair/typebox").TOptional<import("@sinclair/typebox").TUnion<[import("@sinclair/typebox").TString, import("@sinclair/typebox").TUndefined]>>;
            updatedAt: import("@sinclair/typebox").TOptional<import("@sinclair/typebox").TUnion<[import("@sinclair/typebox").TString, import("@sinclair/typebox").TUndefined]>>;
        }>;
        400: import("@sinclair/typebox").TUnknown;
        404: import("@sinclair/typebox").TUnknown;
    }>;
}>;
export type patch__products_Id = Static<typeof patch__products_Id>;
export declare const patch__products_Id: import("@sinclair/typebox").TObject<{
    method: import("@sinclair/typebox").TLiteral<"PATCH">;
    path: import("@sinclair/typebox").TLiteral<"/products/{id}">;
    requestFormat: import("@sinclair/typebox").TLiteral<"json">;
    parameters: import("@sinclair/typebox").TObject<{
        path: import("@sinclair/typebox").TObject<{
            id: import("@sinclair/typebox").TNumber;
        }>;
        body: import("@sinclair/typebox").TObject<{
            id: import("@sinclair/typebox").TNumber;
            name: import("@sinclair/typebox").TOptional<import("@sinclair/typebox").TUnion<[import("@sinclair/typebox").TString, import("@sinclair/typebox").TUndefined]>>;
            description: import("@sinclair/typebox").TOptional<import("@sinclair/typebox").TUnion<[import("@sinclair/typebox").TString, import("@sinclair/typebox").TUndefined]>>;
            shortDescription: import("@sinclair/typebox").TOptional<import("@sinclair/typebox").TUnion<[import("@sinclair/typebox").TString, import("@sinclair/typebox").TUndefined]>>;
            price: import("@sinclair/typebox").TOptional<import("@sinclair/typebox").TUnion<[import("@sinclair/typebox").TNumber, import("@sinclair/typebox").TUndefined]>>;
            originalPrice: import("@sinclair/typebox").TOptional<import("@sinclair/typebox").TUnion<[import("@sinclair/typebox").TNumber, import("@sinclair/typebox").TUndefined]>>;
            currency: import("@sinclair/typebox").TOptional<import("@sinclair/typebox").TUnion<[import("@sinclair/typebox").TString, import("@sinclair/typebox").TUndefined]>>;
            categoryId: import("@sinclair/typebox").TOptional<import("@sinclair/typebox").TUnion<[import("@sinclair/typebox").TNumber, import("@sinclair/typebox").TUndefined]>>;
            brand: import("@sinclair/typebox").TOptional<import("@sinclair/typebox").TUnion<[import("@sinclair/typebox").TString, import("@sinclair/typebox").TUndefined]>>;
            model: import("@sinclair/typebox").TOptional<import("@sinclair/typebox").TUnion<[import("@sinclair/typebox").TString, import("@sinclair/typebox").TUndefined]>>;
            sku: import("@sinclair/typebox").TOptional<import("@sinclair/typebox").TUnion<[import("@sinclair/typebox").TString, import("@sinclair/typebox").TUndefined]>>;
            barcode: import("@sinclair/typebox").TOptional<import("@sinclair/typebox").TUnion<[import("@sinclair/typebox").TString, import("@sinclair/typebox").TUndefined]>>;
            inventory: import("@sinclair/typebox").TOptional<import("@sinclair/typebox").TUnion<[import("@sinclair/typebox").TObject<{
                inStock: import("@sinclair/typebox").TOptional<import("@sinclair/typebox").TNumber>;
                reserved: import("@sinclair/typebox").TOptional<import("@sinclair/typebox").TNumber>;
                available: import("@sinclair/typebox").TOptional<import("@sinclair/typebox").TNumber>;
                lowStockThreshold: import("@sinclair/typebox").TOptional<import("@sinclair/typebox").TNumber>;
            }>, import("@sinclair/typebox").TUndefined]>>;
            images: import("@sinclair/typebox").TOptional<import("@sinclair/typebox").TUnion<[import("@sinclair/typebox").TArray<import("@sinclair/typebox").TString>, import("@sinclair/typebox").TUndefined]>>;
            specifications: import("@sinclair/typebox").TOptional<import("@sinclair/typebox").TUnion<[import("@sinclair/typebox").TObject<{
                batteryLife: import("@sinclair/typebox").TOptional<import("@sinclair/typebox").TString>;
                chargingTime: import("@sinclair/typebox").TOptional<import("@sinclair/typebox").TString>;
                connectivity: import("@sinclair/typebox").TOptional<import("@sinclair/typebox").TString>;
                weight: import("@sinclair/typebox").TOptional<import("@sinclair/typebox").TString>;
                dimensions: import("@sinclair/typebox").TOptional<import("@sinclair/typebox").TString>;
                colors: import("@sinclair/typebox").TOptional<import("@sinclair/typebox").TArray<import("@sinclair/typebox").TString>>;
                warranty: import("@sinclair/typebox").TOptional<import("@sinclair/typebox").TString>;
            }>, import("@sinclair/typebox").TUndefined]>>;
            features: import("@sinclair/typebox").TOptional<import("@sinclair/typebox").TUnion<[import("@sinclair/typebox").TArray<import("@sinclair/typebox").TString>, import("@sinclair/typebox").TUndefined]>>;
            ratings: import("@sinclair/typebox").TOptional<import("@sinclair/typebox").TUnion<[import("@sinclair/typebox").TObject<{
                average: import("@sinclair/typebox").TOptional<import("@sinclair/typebox").TNumber>;
                count: import("@sinclair/typebox").TOptional<import("@sinclair/typebox").TNumber>;
                breakdown: import("@sinclair/typebox").TOptional<import("@sinclair/typebox").TObject<{
                    1: import("@sinclair/typebox").TOptional<import("@sinclair/typebox").TNumber>;
                    2: import("@sinclair/typebox").TOptional<import("@sinclair/typebox").TNumber>;
                    3: import("@sinclair/typebox").TOptional<import("@sinclair/typebox").TNumber>;
                    4: import("@sinclair/typebox").TOptional<import("@sinclair/typebox").TNumber>;
                    5: import("@sinclair/typebox").TOptional<import("@sinclair/typebox").TNumber>;
                }>>;
            }>, import("@sinclair/typebox").TUndefined]>>;
            tags: import("@sinclair/typebox").TOptional<import("@sinclair/typebox").TUnion<[import("@sinclair/typebox").TArray<import("@sinclair/typebox").TString>, import("@sinclair/typebox").TUndefined]>>;
            isActive: import("@sinclair/typebox").TOptional<import("@sinclair/typebox").TUnion<[import("@sinclair/typebox").TBoolean, import("@sinclair/typebox").TUndefined]>>;
            isFeatured: import("@sinclair/typebox").TOptional<import("@sinclair/typebox").TUnion<[import("@sinclair/typebox").TBoolean, import("@sinclair/typebox").TUndefined]>>;
            createdAt: import("@sinclair/typebox").TOptional<import("@sinclair/typebox").TUnion<[import("@sinclair/typebox").TString, import("@sinclair/typebox").TUndefined]>>;
            updatedAt: import("@sinclair/typebox").TOptional<import("@sinclair/typebox").TUnion<[import("@sinclair/typebox").TString, import("@sinclair/typebox").TUndefined]>>;
        }>;
    }>;
    responses: import("@sinclair/typebox").TObject<{
        200: import("@sinclair/typebox").TObject<{
            id: import("@sinclair/typebox").TNumber;
            name: import("@sinclair/typebox").TOptional<import("@sinclair/typebox").TUnion<[import("@sinclair/typebox").TString, import("@sinclair/typebox").TUndefined]>>;
            description: import("@sinclair/typebox").TOptional<import("@sinclair/typebox").TUnion<[import("@sinclair/typebox").TString, import("@sinclair/typebox").TUndefined]>>;
            shortDescription: import("@sinclair/typebox").TOptional<import("@sinclair/typebox").TUnion<[import("@sinclair/typebox").TString, import("@sinclair/typebox").TUndefined]>>;
            price: import("@sinclair/typebox").TOptional<import("@sinclair/typebox").TUnion<[import("@sinclair/typebox").TNumber, import("@sinclair/typebox").TUndefined]>>;
            originalPrice: import("@sinclair/typebox").TOptional<import("@sinclair/typebox").TUnion<[import("@sinclair/typebox").TNumber, import("@sinclair/typebox").TUndefined]>>;
            currency: import("@sinclair/typebox").TOptional<import("@sinclair/typebox").TUnion<[import("@sinclair/typebox").TString, import("@sinclair/typebox").TUndefined]>>;
            categoryId: import("@sinclair/typebox").TOptional<import("@sinclair/typebox").TUnion<[import("@sinclair/typebox").TNumber, import("@sinclair/typebox").TUndefined]>>;
            brand: import("@sinclair/typebox").TOptional<import("@sinclair/typebox").TUnion<[import("@sinclair/typebox").TString, import("@sinclair/typebox").TUndefined]>>;
            model: import("@sinclair/typebox").TOptional<import("@sinclair/typebox").TUnion<[import("@sinclair/typebox").TString, import("@sinclair/typebox").TUndefined]>>;
            sku: import("@sinclair/typebox").TOptional<import("@sinclair/typebox").TUnion<[import("@sinclair/typebox").TString, import("@sinclair/typebox").TUndefined]>>;
            barcode: import("@sinclair/typebox").TOptional<import("@sinclair/typebox").TUnion<[import("@sinclair/typebox").TString, import("@sinclair/typebox").TUndefined]>>;
            inventory: import("@sinclair/typebox").TOptional<import("@sinclair/typebox").TUnion<[import("@sinclair/typebox").TObject<{
                inStock: import("@sinclair/typebox").TOptional<import("@sinclair/typebox").TNumber>;
                reserved: import("@sinclair/typebox").TOptional<import("@sinclair/typebox").TNumber>;
                available: import("@sinclair/typebox").TOptional<import("@sinclair/typebox").TNumber>;
                lowStockThreshold: import("@sinclair/typebox").TOptional<import("@sinclair/typebox").TNumber>;
            }>, import("@sinclair/typebox").TUndefined]>>;
            images: import("@sinclair/typebox").TOptional<import("@sinclair/typebox").TUnion<[import("@sinclair/typebox").TArray<import("@sinclair/typebox").TString>, import("@sinclair/typebox").TUndefined]>>;
            specifications: import("@sinclair/typebox").TOptional<import("@sinclair/typebox").TUnion<[import("@sinclair/typebox").TObject<{
                batteryLife: import("@sinclair/typebox").TOptional<import("@sinclair/typebox").TString>;
                chargingTime: import("@sinclair/typebox").TOptional<import("@sinclair/typebox").TString>;
                connectivity: import("@sinclair/typebox").TOptional<import("@sinclair/typebox").TString>;
                weight: import("@sinclair/typebox").TOptional<import("@sinclair/typebox").TString>;
                dimensions: import("@sinclair/typebox").TOptional<import("@sinclair/typebox").TString>;
                colors: import("@sinclair/typebox").TOptional<import("@sinclair/typebox").TArray<import("@sinclair/typebox").TString>>;
                warranty: import("@sinclair/typebox").TOptional<import("@sinclair/typebox").TString>;
            }>, import("@sinclair/typebox").TUndefined]>>;
            features: import("@sinclair/typebox").TOptional<import("@sinclair/typebox").TUnion<[import("@sinclair/typebox").TArray<import("@sinclair/typebox").TString>, import("@sinclair/typebox").TUndefined]>>;
            ratings: import("@sinclair/typebox").TOptional<import("@sinclair/typebox").TUnion<[import("@sinclair/typebox").TObject<{
                average: import("@sinclair/typebox").TOptional<import("@sinclair/typebox").TNumber>;
                count: import("@sinclair/typebox").TOptional<import("@sinclair/typebox").TNumber>;
                breakdown: import("@sinclair/typebox").TOptional<import("@sinclair/typebox").TObject<{
                    1: import("@sinclair/typebox").TOptional<import("@sinclair/typebox").TNumber>;
                    2: import("@sinclair/typebox").TOptional<import("@sinclair/typebox").TNumber>;
                    3: import("@sinclair/typebox").TOptional<import("@sinclair/typebox").TNumber>;
                    4: import("@sinclair/typebox").TOptional<import("@sinclair/typebox").TNumber>;
                    5: import("@sinclair/typebox").TOptional<import("@sinclair/typebox").TNumber>;
                }>>;
            }>, import("@sinclair/typebox").TUndefined]>>;
            tags: import("@sinclair/typebox").TOptional<import("@sinclair/typebox").TUnion<[import("@sinclair/typebox").TArray<import("@sinclair/typebox").TString>, import("@sinclair/typebox").TUndefined]>>;
            isActive: import("@sinclair/typebox").TOptional<import("@sinclair/typebox").TUnion<[import("@sinclair/typebox").TBoolean, import("@sinclair/typebox").TUndefined]>>;
            isFeatured: import("@sinclair/typebox").TOptional<import("@sinclair/typebox").TUnion<[import("@sinclair/typebox").TBoolean, import("@sinclair/typebox").TUndefined]>>;
            createdAt: import("@sinclair/typebox").TOptional<import("@sinclair/typebox").TUnion<[import("@sinclair/typebox").TString, import("@sinclair/typebox").TUndefined]>>;
            updatedAt: import("@sinclair/typebox").TOptional<import("@sinclair/typebox").TUnion<[import("@sinclair/typebox").TString, import("@sinclair/typebox").TUndefined]>>;
        }>;
        400: import("@sinclair/typebox").TUnknown;
        404: import("@sinclair/typebox").TUnknown;
    }>;
}>;
export type delete__products_Id = Static<typeof delete__products_Id>;
export declare const delete__products_Id: import("@sinclair/typebox").TObject<{
    method: import("@sinclair/typebox").TLiteral<"DELETE">;
    path: import("@sinclair/typebox").TLiteral<"/products/{id}">;
    requestFormat: import("@sinclair/typebox").TLiteral<"json">;
    parameters: import("@sinclair/typebox").TObject<{
        path: import("@sinclair/typebox").TObject<{
            id: import("@sinclair/typebox").TNumber;
        }>;
    }>;
    responses: import("@sinclair/typebox").TObject<{
        200: import("@sinclair/typebox").TUnknown;
        404: import("@sinclair/typebox").TUnknown;
    }>;
}>;
export type get__orders = Static<typeof get__orders>;
export declare const get__orders: import("@sinclair/typebox").TObject<{
    method: import("@sinclair/typebox").TLiteral<"GET">;
    path: import("@sinclair/typebox").TLiteral<"/orders">;
    requestFormat: import("@sinclair/typebox").TLiteral<"json">;
    parameters: import("@sinclair/typebox").TObject<{
        query: import("@sinclair/typebox").TObject<{
            _page: import("@sinclair/typebox").TOptional<import("@sinclair/typebox").TNumber>;
            _limit: import("@sinclair/typebox").TOptional<import("@sinclair/typebox").TNumber>;
            _sort: import("@sinclair/typebox").TOptional<import("@sinclair/typebox").TString>;
            _order: import("@sinclair/typebox").TOptional<import("@sinclair/typebox").TUnion<[import("@sinclair/typebox").TLiteral<"asc">, import("@sinclair/typebox").TLiteral<"desc">]>>;
            q: import("@sinclair/typebox").TOptional<import("@sinclair/typebox").TString>;
        }>;
    }>;
    responses: import("@sinclair/typebox").TObject<{
        200: import("@sinclair/typebox").TArray<import("@sinclair/typebox").TObject<{
            id: import("@sinclair/typebox").TNumber;
            userId: import("@sinclair/typebox").TOptional<import("@sinclair/typebox").TUnion<[import("@sinclair/typebox").TNumber, import("@sinclair/typebox").TUndefined]>>;
            orderNumber: import("@sinclair/typebox").TOptional<import("@sinclair/typebox").TUnion<[import("@sinclair/typebox").TString, import("@sinclair/typebox").TUndefined]>>;
            items: import("@sinclair/typebox").TOptional<import("@sinclair/typebox").TUnion<[import("@sinclair/typebox").TArray<import("@sinclair/typebox").TObject<{
                productId: import("@sinclair/typebox").TOptional<import("@sinclair/typebox").TNumber>;
                productName: import("@sinclair/typebox").TOptional<import("@sinclair/typebox").TString>;
                quantity: import("@sinclair/typebox").TOptional<import("@sinclair/typebox").TNumber>;
                unitPrice: import("@sinclair/typebox").TOptional<import("@sinclair/typebox").TNumber>;
                totalPrice: import("@sinclair/typebox").TOptional<import("@sinclair/typebox").TNumber>;
                sku: import("@sinclair/typebox").TOptional<import("@sinclair/typebox").TString>;
            }>>, import("@sinclair/typebox").TUndefined]>>;
            status: import("@sinclair/typebox").TOptional<import("@sinclair/typebox").TUnion<[import("@sinclair/typebox").TString, import("@sinclair/typebox").TUndefined]>>;
            paymentStatus: import("@sinclair/typebox").TOptional<import("@sinclair/typebox").TUnion<[import("@sinclair/typebox").TString, import("@sinclair/typebox").TUndefined]>>;
            shippingMethod: import("@sinclair/typebox").TOptional<import("@sinclair/typebox").TUnion<[import("@sinclair/typebox").TString, import("@sinclair/typebox").TUndefined]>>;
            trackingNumber: import("@sinclair/typebox").TOptional<import("@sinclair/typebox").TUnion<[import("@sinclair/typebox").TString, import("@sinclair/typebox").TUndefined]>>;
            addresses: import("@sinclair/typebox").TOptional<import("@sinclair/typebox").TUnion<[import("@sinclair/typebox").TObject<{
                shipping: import("@sinclair/typebox").TOptional<import("@sinclair/typebox").TObject<{
                    name: import("@sinclair/typebox").TOptional<import("@sinclair/typebox").TString>;
                    street: import("@sinclair/typebox").TOptional<import("@sinclair/typebox").TString>;
                    apartment: import("@sinclair/typebox").TOptional<import("@sinclair/typebox").TString>;
                    city: import("@sinclair/typebox").TOptional<import("@sinclair/typebox").TString>;
                    state: import("@sinclair/typebox").TOptional<import("@sinclair/typebox").TString>;
                    zipCode: import("@sinclair/typebox").TOptional<import("@sinclair/typebox").TString>;
                    country: import("@sinclair/typebox").TOptional<import("@sinclair/typebox").TString>;
                    phone: import("@sinclair/typebox").TOptional<import("@sinclair/typebox").TString>;
                }>>;
                billing: import("@sinclair/typebox").TOptional<import("@sinclair/typebox").TObject<{
                    name: import("@sinclair/typebox").TOptional<import("@sinclair/typebox").TString>;
                    street: import("@sinclair/typebox").TOptional<import("@sinclair/typebox").TString>;
                    apartment: import("@sinclair/typebox").TOptional<import("@sinclair/typebox").TString>;
                    city: import("@sinclair/typebox").TOptional<import("@sinclair/typebox").TString>;
                    state: import("@sinclair/typebox").TOptional<import("@sinclair/typebox").TString>;
                    zipCode: import("@sinclair/typebox").TOptional<import("@sinclair/typebox").TString>;
                    country: import("@sinclair/typebox").TOptional<import("@sinclair/typebox").TString>;
                    phone: import("@sinclair/typebox").TOptional<import("@sinclair/typebox").TString>;
                }>>;
            }>, import("@sinclair/typebox").TUndefined]>>;
            totals: import("@sinclair/typebox").TOptional<import("@sinclair/typebox").TUnion<[import("@sinclair/typebox").TObject<{
                subtotal: import("@sinclair/typebox").TOptional<import("@sinclair/typebox").TNumber>;
                tax: import("@sinclair/typebox").TOptional<import("@sinclair/typebox").TNumber>;
                shipping: import("@sinclair/typebox").TOptional<import("@sinclair/typebox").TNumber>;
                discount: import("@sinclair/typebox").TOptional<import("@sinclair/typebox").TNumber>;
                total: import("@sinclair/typebox").TOptional<import("@sinclair/typebox").TNumber>;
            }>, import("@sinclair/typebox").TUndefined]>>;
            timeline: import("@sinclair/typebox").TOptional<import("@sinclair/typebox").TUnion<[import("@sinclair/typebox").TArray<import("@sinclair/typebox").TObject<{
                status: import("@sinclair/typebox").TOptional<import("@sinclair/typebox").TString>;
                timestamp: import("@sinclair/typebox").TOptional<import("@sinclair/typebox").TString>;
                note: import("@sinclair/typebox").TOptional<import("@sinclair/typebox").TString>;
            }>>, import("@sinclair/typebox").TUndefined]>>;
            createdAt: import("@sinclair/typebox").TOptional<import("@sinclair/typebox").TUnion<[import("@sinclair/typebox").TString, import("@sinclair/typebox").TUndefined]>>;
            updatedAt: import("@sinclair/typebox").TOptional<import("@sinclair/typebox").TUnion<[import("@sinclair/typebox").TString, import("@sinclair/typebox").TUndefined]>>;
        }>>;
    }>;
}>;
export type post__orders = Static<typeof post__orders>;
export declare const post__orders: import("@sinclair/typebox").TObject<{
    method: import("@sinclair/typebox").TLiteral<"POST">;
    path: import("@sinclair/typebox").TLiteral<"/orders">;
    requestFormat: import("@sinclair/typebox").TLiteral<"json">;
    parameters: import("@sinclair/typebox").TObject<{
        body: import("@sinclair/typebox").TObject<{
            id: import("@sinclair/typebox").TNumber;
            userId: import("@sinclair/typebox").TOptional<import("@sinclair/typebox").TUnion<[import("@sinclair/typebox").TNumber, import("@sinclair/typebox").TUndefined]>>;
            orderNumber: import("@sinclair/typebox").TOptional<import("@sinclair/typebox").TUnion<[import("@sinclair/typebox").TString, import("@sinclair/typebox").TUndefined]>>;
            items: import("@sinclair/typebox").TOptional<import("@sinclair/typebox").TUnion<[import("@sinclair/typebox").TArray<import("@sinclair/typebox").TObject<{
                productId: import("@sinclair/typebox").TOptional<import("@sinclair/typebox").TNumber>;
                productName: import("@sinclair/typebox").TOptional<import("@sinclair/typebox").TString>;
                quantity: import("@sinclair/typebox").TOptional<import("@sinclair/typebox").TNumber>;
                unitPrice: import("@sinclair/typebox").TOptional<import("@sinclair/typebox").TNumber>;
                totalPrice: import("@sinclair/typebox").TOptional<import("@sinclair/typebox").TNumber>;
                sku: import("@sinclair/typebox").TOptional<import("@sinclair/typebox").TString>;
            }>>, import("@sinclair/typebox").TUndefined]>>;
            status: import("@sinclair/typebox").TOptional<import("@sinclair/typebox").TUnion<[import("@sinclair/typebox").TString, import("@sinclair/typebox").TUndefined]>>;
            paymentStatus: import("@sinclair/typebox").TOptional<import("@sinclair/typebox").TUnion<[import("@sinclair/typebox").TString, import("@sinclair/typebox").TUndefined]>>;
            shippingMethod: import("@sinclair/typebox").TOptional<import("@sinclair/typebox").TUnion<[import("@sinclair/typebox").TString, import("@sinclair/typebox").TUndefined]>>;
            trackingNumber: import("@sinclair/typebox").TOptional<import("@sinclair/typebox").TUnion<[import("@sinclair/typebox").TString, import("@sinclair/typebox").TUndefined]>>;
            addresses: import("@sinclair/typebox").TOptional<import("@sinclair/typebox").TUnion<[import("@sinclair/typebox").TObject<{
                shipping: import("@sinclair/typebox").TOptional<import("@sinclair/typebox").TObject<{
                    name: import("@sinclair/typebox").TOptional<import("@sinclair/typebox").TString>;
                    street: import("@sinclair/typebox").TOptional<import("@sinclair/typebox").TString>;
                    apartment: import("@sinclair/typebox").TOptional<import("@sinclair/typebox").TString>;
                    city: import("@sinclair/typebox").TOptional<import("@sinclair/typebox").TString>;
                    state: import("@sinclair/typebox").TOptional<import("@sinclair/typebox").TString>;
                    zipCode: import("@sinclair/typebox").TOptional<import("@sinclair/typebox").TString>;
                    country: import("@sinclair/typebox").TOptional<import("@sinclair/typebox").TString>;
                    phone: import("@sinclair/typebox").TOptional<import("@sinclair/typebox").TString>;
                }>>;
                billing: import("@sinclair/typebox").TOptional<import("@sinclair/typebox").TObject<{
                    name: import("@sinclair/typebox").TOptional<import("@sinclair/typebox").TString>;
                    street: import("@sinclair/typebox").TOptional<import("@sinclair/typebox").TString>;
                    apartment: import("@sinclair/typebox").TOptional<import("@sinclair/typebox").TString>;
                    city: import("@sinclair/typebox").TOptional<import("@sinclair/typebox").TString>;
                    state: import("@sinclair/typebox").TOptional<import("@sinclair/typebox").TString>;
                    zipCode: import("@sinclair/typebox").TOptional<import("@sinclair/typebox").TString>;
                    country: import("@sinclair/typebox").TOptional<import("@sinclair/typebox").TString>;
                    phone: import("@sinclair/typebox").TOptional<import("@sinclair/typebox").TString>;
                }>>;
            }>, import("@sinclair/typebox").TUndefined]>>;
            totals: import("@sinclair/typebox").TOptional<import("@sinclair/typebox").TUnion<[import("@sinclair/typebox").TObject<{
                subtotal: import("@sinclair/typebox").TOptional<import("@sinclair/typebox").TNumber>;
                tax: import("@sinclair/typebox").TOptional<import("@sinclair/typebox").TNumber>;
                shipping: import("@sinclair/typebox").TOptional<import("@sinclair/typebox").TNumber>;
                discount: import("@sinclair/typebox").TOptional<import("@sinclair/typebox").TNumber>;
                total: import("@sinclair/typebox").TOptional<import("@sinclair/typebox").TNumber>;
            }>, import("@sinclair/typebox").TUndefined]>>;
            timeline: import("@sinclair/typebox").TOptional<import("@sinclair/typebox").TUnion<[import("@sinclair/typebox").TArray<import("@sinclair/typebox").TObject<{
                status: import("@sinclair/typebox").TOptional<import("@sinclair/typebox").TString>;
                timestamp: import("@sinclair/typebox").TOptional<import("@sinclair/typebox").TString>;
                note: import("@sinclair/typebox").TOptional<import("@sinclair/typebox").TString>;
            }>>, import("@sinclair/typebox").TUndefined]>>;
            createdAt: import("@sinclair/typebox").TOptional<import("@sinclair/typebox").TUnion<[import("@sinclair/typebox").TString, import("@sinclair/typebox").TUndefined]>>;
            updatedAt: import("@sinclair/typebox").TOptional<import("@sinclair/typebox").TUnion<[import("@sinclair/typebox").TString, import("@sinclair/typebox").TUndefined]>>;
        }>;
    }>;
    responses: import("@sinclair/typebox").TObject<{
        201: import("@sinclair/typebox").TObject<{
            id: import("@sinclair/typebox").TNumber;
            userId: import("@sinclair/typebox").TOptional<import("@sinclair/typebox").TUnion<[import("@sinclair/typebox").TNumber, import("@sinclair/typebox").TUndefined]>>;
            orderNumber: import("@sinclair/typebox").TOptional<import("@sinclair/typebox").TUnion<[import("@sinclair/typebox").TString, import("@sinclair/typebox").TUndefined]>>;
            items: import("@sinclair/typebox").TOptional<import("@sinclair/typebox").TUnion<[import("@sinclair/typebox").TArray<import("@sinclair/typebox").TObject<{
                productId: import("@sinclair/typebox").TOptional<import("@sinclair/typebox").TNumber>;
                productName: import("@sinclair/typebox").TOptional<import("@sinclair/typebox").TString>;
                quantity: import("@sinclair/typebox").TOptional<import("@sinclair/typebox").TNumber>;
                unitPrice: import("@sinclair/typebox").TOptional<import("@sinclair/typebox").TNumber>;
                totalPrice: import("@sinclair/typebox").TOptional<import("@sinclair/typebox").TNumber>;
                sku: import("@sinclair/typebox").TOptional<import("@sinclair/typebox").TString>;
            }>>, import("@sinclair/typebox").TUndefined]>>;
            status: import("@sinclair/typebox").TOptional<import("@sinclair/typebox").TUnion<[import("@sinclair/typebox").TString, import("@sinclair/typebox").TUndefined]>>;
            paymentStatus: import("@sinclair/typebox").TOptional<import("@sinclair/typebox").TUnion<[import("@sinclair/typebox").TString, import("@sinclair/typebox").TUndefined]>>;
            shippingMethod: import("@sinclair/typebox").TOptional<import("@sinclair/typebox").TUnion<[import("@sinclair/typebox").TString, import("@sinclair/typebox").TUndefined]>>;
            trackingNumber: import("@sinclair/typebox").TOptional<import("@sinclair/typebox").TUnion<[import("@sinclair/typebox").TString, import("@sinclair/typebox").TUndefined]>>;
            addresses: import("@sinclair/typebox").TOptional<import("@sinclair/typebox").TUnion<[import("@sinclair/typebox").TObject<{
                shipping: import("@sinclair/typebox").TOptional<import("@sinclair/typebox").TObject<{
                    name: import("@sinclair/typebox").TOptional<import("@sinclair/typebox").TString>;
                    street: import("@sinclair/typebox").TOptional<import("@sinclair/typebox").TString>;
                    apartment: import("@sinclair/typebox").TOptional<import("@sinclair/typebox").TString>;
                    city: import("@sinclair/typebox").TOptional<import("@sinclair/typebox").TString>;
                    state: import("@sinclair/typebox").TOptional<import("@sinclair/typebox").TString>;
                    zipCode: import("@sinclair/typebox").TOptional<import("@sinclair/typebox").TString>;
                    country: import("@sinclair/typebox").TOptional<import("@sinclair/typebox").TString>;
                    phone: import("@sinclair/typebox").TOptional<import("@sinclair/typebox").TString>;
                }>>;
                billing: import("@sinclair/typebox").TOptional<import("@sinclair/typebox").TObject<{
                    name: import("@sinclair/typebox").TOptional<import("@sinclair/typebox").TString>;
                    street: import("@sinclair/typebox").TOptional<import("@sinclair/typebox").TString>;
                    apartment: import("@sinclair/typebox").TOptional<import("@sinclair/typebox").TString>;
                    city: import("@sinclair/typebox").TOptional<import("@sinclair/typebox").TString>;
                    state: import("@sinclair/typebox").TOptional<import("@sinclair/typebox").TString>;
                    zipCode: import("@sinclair/typebox").TOptional<import("@sinclair/typebox").TString>;
                    country: import("@sinclair/typebox").TOptional<import("@sinclair/typebox").TString>;
                    phone: import("@sinclair/typebox").TOptional<import("@sinclair/typebox").TString>;
                }>>;
            }>, import("@sinclair/typebox").TUndefined]>>;
            totals: import("@sinclair/typebox").TOptional<import("@sinclair/typebox").TUnion<[import("@sinclair/typebox").TObject<{
                subtotal: import("@sinclair/typebox").TOptional<import("@sinclair/typebox").TNumber>;
                tax: import("@sinclair/typebox").TOptional<import("@sinclair/typebox").TNumber>;
                shipping: import("@sinclair/typebox").TOptional<import("@sinclair/typebox").TNumber>;
                discount: import("@sinclair/typebox").TOptional<import("@sinclair/typebox").TNumber>;
                total: import("@sinclair/typebox").TOptional<import("@sinclair/typebox").TNumber>;
            }>, import("@sinclair/typebox").TUndefined]>>;
            timeline: import("@sinclair/typebox").TOptional<import("@sinclair/typebox").TUnion<[import("@sinclair/typebox").TArray<import("@sinclair/typebox").TObject<{
                status: import("@sinclair/typebox").TOptional<import("@sinclair/typebox").TString>;
                timestamp: import("@sinclair/typebox").TOptional<import("@sinclair/typebox").TString>;
                note: import("@sinclair/typebox").TOptional<import("@sinclair/typebox").TString>;
            }>>, import("@sinclair/typebox").TUndefined]>>;
            createdAt: import("@sinclair/typebox").TOptional<import("@sinclair/typebox").TUnion<[import("@sinclair/typebox").TString, import("@sinclair/typebox").TUndefined]>>;
            updatedAt: import("@sinclair/typebox").TOptional<import("@sinclair/typebox").TUnion<[import("@sinclair/typebox").TString, import("@sinclair/typebox").TUndefined]>>;
        }>;
        400: import("@sinclair/typebox").TUnknown;
    }>;
}>;
export type get__orders_Id = Static<typeof get__orders_Id>;
export declare const get__orders_Id: import("@sinclair/typebox").TObject<{
    method: import("@sinclair/typebox").TLiteral<"GET">;
    path: import("@sinclair/typebox").TLiteral<"/orders/{id}">;
    requestFormat: import("@sinclair/typebox").TLiteral<"json">;
    parameters: import("@sinclair/typebox").TObject<{
        path: import("@sinclair/typebox").TObject<{
            id: import("@sinclair/typebox").TNumber;
        }>;
    }>;
    responses: import("@sinclair/typebox").TObject<{
        200: import("@sinclair/typebox").TObject<{
            id: import("@sinclair/typebox").TNumber;
            userId: import("@sinclair/typebox").TOptional<import("@sinclair/typebox").TUnion<[import("@sinclair/typebox").TNumber, import("@sinclair/typebox").TUndefined]>>;
            orderNumber: import("@sinclair/typebox").TOptional<import("@sinclair/typebox").TUnion<[import("@sinclair/typebox").TString, import("@sinclair/typebox").TUndefined]>>;
            items: import("@sinclair/typebox").TOptional<import("@sinclair/typebox").TUnion<[import("@sinclair/typebox").TArray<import("@sinclair/typebox").TObject<{
                productId: import("@sinclair/typebox").TOptional<import("@sinclair/typebox").TNumber>;
                productName: import("@sinclair/typebox").TOptional<import("@sinclair/typebox").TString>;
                quantity: import("@sinclair/typebox").TOptional<import("@sinclair/typebox").TNumber>;
                unitPrice: import("@sinclair/typebox").TOptional<import("@sinclair/typebox").TNumber>;
                totalPrice: import("@sinclair/typebox").TOptional<import("@sinclair/typebox").TNumber>;
                sku: import("@sinclair/typebox").TOptional<import("@sinclair/typebox").TString>;
            }>>, import("@sinclair/typebox").TUndefined]>>;
            status: import("@sinclair/typebox").TOptional<import("@sinclair/typebox").TUnion<[import("@sinclair/typebox").TString, import("@sinclair/typebox").TUndefined]>>;
            paymentStatus: import("@sinclair/typebox").TOptional<import("@sinclair/typebox").TUnion<[import("@sinclair/typebox").TString, import("@sinclair/typebox").TUndefined]>>;
            shippingMethod: import("@sinclair/typebox").TOptional<import("@sinclair/typebox").TUnion<[import("@sinclair/typebox").TString, import("@sinclair/typebox").TUndefined]>>;
            trackingNumber: import("@sinclair/typebox").TOptional<import("@sinclair/typebox").TUnion<[import("@sinclair/typebox").TString, import("@sinclair/typebox").TUndefined]>>;
            addresses: import("@sinclair/typebox").TOptional<import("@sinclair/typebox").TUnion<[import("@sinclair/typebox").TObject<{
                shipping: import("@sinclair/typebox").TOptional<import("@sinclair/typebox").TObject<{
                    name: import("@sinclair/typebox").TOptional<import("@sinclair/typebox").TString>;
                    street: import("@sinclair/typebox").TOptional<import("@sinclair/typebox").TString>;
                    apartment: import("@sinclair/typebox").TOptional<import("@sinclair/typebox").TString>;
                    city: import("@sinclair/typebox").TOptional<import("@sinclair/typebox").TString>;
                    state: import("@sinclair/typebox").TOptional<import("@sinclair/typebox").TString>;
                    zipCode: import("@sinclair/typebox").TOptional<import("@sinclair/typebox").TString>;
                    country: import("@sinclair/typebox").TOptional<import("@sinclair/typebox").TString>;
                    phone: import("@sinclair/typebox").TOptional<import("@sinclair/typebox").TString>;
                }>>;
                billing: import("@sinclair/typebox").TOptional<import("@sinclair/typebox").TObject<{
                    name: import("@sinclair/typebox").TOptional<import("@sinclair/typebox").TString>;
                    street: import("@sinclair/typebox").TOptional<import("@sinclair/typebox").TString>;
                    apartment: import("@sinclair/typebox").TOptional<import("@sinclair/typebox").TString>;
                    city: import("@sinclair/typebox").TOptional<import("@sinclair/typebox").TString>;
                    state: import("@sinclair/typebox").TOptional<import("@sinclair/typebox").TString>;
                    zipCode: import("@sinclair/typebox").TOptional<import("@sinclair/typebox").TString>;
                    country: import("@sinclair/typebox").TOptional<import("@sinclair/typebox").TString>;
                    phone: import("@sinclair/typebox").TOptional<import("@sinclair/typebox").TString>;
                }>>;
            }>, import("@sinclair/typebox").TUndefined]>>;
            totals: import("@sinclair/typebox").TOptional<import("@sinclair/typebox").TUnion<[import("@sinclair/typebox").TObject<{
                subtotal: import("@sinclair/typebox").TOptional<import("@sinclair/typebox").TNumber>;
                tax: import("@sinclair/typebox").TOptional<import("@sinclair/typebox").TNumber>;
                shipping: import("@sinclair/typebox").TOptional<import("@sinclair/typebox").TNumber>;
                discount: import("@sinclair/typebox").TOptional<import("@sinclair/typebox").TNumber>;
                total: import("@sinclair/typebox").TOptional<import("@sinclair/typebox").TNumber>;
            }>, import("@sinclair/typebox").TUndefined]>>;
            timeline: import("@sinclair/typebox").TOptional<import("@sinclair/typebox").TUnion<[import("@sinclair/typebox").TArray<import("@sinclair/typebox").TObject<{
                status: import("@sinclair/typebox").TOptional<import("@sinclair/typebox").TString>;
                timestamp: import("@sinclair/typebox").TOptional<import("@sinclair/typebox").TString>;
                note: import("@sinclair/typebox").TOptional<import("@sinclair/typebox").TString>;
            }>>, import("@sinclair/typebox").TUndefined]>>;
            createdAt: import("@sinclair/typebox").TOptional<import("@sinclair/typebox").TUnion<[import("@sinclair/typebox").TString, import("@sinclair/typebox").TUndefined]>>;
            updatedAt: import("@sinclair/typebox").TOptional<import("@sinclair/typebox").TUnion<[import("@sinclair/typebox").TString, import("@sinclair/typebox").TUndefined]>>;
        }>;
        404: import("@sinclair/typebox").TUnknown;
    }>;
}>;
export type put__orders_Id = Static<typeof put__orders_Id>;
export declare const put__orders_Id: import("@sinclair/typebox").TObject<{
    method: import("@sinclair/typebox").TLiteral<"PUT">;
    path: import("@sinclair/typebox").TLiteral<"/orders/{id}">;
    requestFormat: import("@sinclair/typebox").TLiteral<"json">;
    parameters: import("@sinclair/typebox").TObject<{
        path: import("@sinclair/typebox").TObject<{
            id: import("@sinclair/typebox").TNumber;
        }>;
        body: import("@sinclair/typebox").TObject<{
            id: import("@sinclair/typebox").TNumber;
            userId: import("@sinclair/typebox").TOptional<import("@sinclair/typebox").TUnion<[import("@sinclair/typebox").TNumber, import("@sinclair/typebox").TUndefined]>>;
            orderNumber: import("@sinclair/typebox").TOptional<import("@sinclair/typebox").TUnion<[import("@sinclair/typebox").TString, import("@sinclair/typebox").TUndefined]>>;
            items: import("@sinclair/typebox").TOptional<import("@sinclair/typebox").TUnion<[import("@sinclair/typebox").TArray<import("@sinclair/typebox").TObject<{
                productId: import("@sinclair/typebox").TOptional<import("@sinclair/typebox").TNumber>;
                productName: import("@sinclair/typebox").TOptional<import("@sinclair/typebox").TString>;
                quantity: import("@sinclair/typebox").TOptional<import("@sinclair/typebox").TNumber>;
                unitPrice: import("@sinclair/typebox").TOptional<import("@sinclair/typebox").TNumber>;
                totalPrice: import("@sinclair/typebox").TOptional<import("@sinclair/typebox").TNumber>;
                sku: import("@sinclair/typebox").TOptional<import("@sinclair/typebox").TString>;
            }>>, import("@sinclair/typebox").TUndefined]>>;
            status: import("@sinclair/typebox").TOptional<import("@sinclair/typebox").TUnion<[import("@sinclair/typebox").TString, import("@sinclair/typebox").TUndefined]>>;
            paymentStatus: import("@sinclair/typebox").TOptional<import("@sinclair/typebox").TUnion<[import("@sinclair/typebox").TString, import("@sinclair/typebox").TUndefined]>>;
            shippingMethod: import("@sinclair/typebox").TOptional<import("@sinclair/typebox").TUnion<[import("@sinclair/typebox").TString, import("@sinclair/typebox").TUndefined]>>;
            trackingNumber: import("@sinclair/typebox").TOptional<import("@sinclair/typebox").TUnion<[import("@sinclair/typebox").TString, import("@sinclair/typebox").TUndefined]>>;
            addresses: import("@sinclair/typebox").TOptional<import("@sinclair/typebox").TUnion<[import("@sinclair/typebox").TObject<{
                shipping: import("@sinclair/typebox").TOptional<import("@sinclair/typebox").TObject<{
                    name: import("@sinclair/typebox").TOptional<import("@sinclair/typebox").TString>;
                    street: import("@sinclair/typebox").TOptional<import("@sinclair/typebox").TString>;
                    apartment: import("@sinclair/typebox").TOptional<import("@sinclair/typebox").TString>;
                    city: import("@sinclair/typebox").TOptional<import("@sinclair/typebox").TString>;
                    state: import("@sinclair/typebox").TOptional<import("@sinclair/typebox").TString>;
                    zipCode: import("@sinclair/typebox").TOptional<import("@sinclair/typebox").TString>;
                    country: import("@sinclair/typebox").TOptional<import("@sinclair/typebox").TString>;
                    phone: import("@sinclair/typebox").TOptional<import("@sinclair/typebox").TString>;
                }>>;
                billing: import("@sinclair/typebox").TOptional<import("@sinclair/typebox").TObject<{
                    name: import("@sinclair/typebox").TOptional<import("@sinclair/typebox").TString>;
                    street: import("@sinclair/typebox").TOptional<import("@sinclair/typebox").TString>;
                    apartment: import("@sinclair/typebox").TOptional<import("@sinclair/typebox").TString>;
                    city: import("@sinclair/typebox").TOptional<import("@sinclair/typebox").TString>;
                    state: import("@sinclair/typebox").TOptional<import("@sinclair/typebox").TString>;
                    zipCode: import("@sinclair/typebox").TOptional<import("@sinclair/typebox").TString>;
                    country: import("@sinclair/typebox").TOptional<import("@sinclair/typebox").TString>;
                    phone: import("@sinclair/typebox").TOptional<import("@sinclair/typebox").TString>;
                }>>;
            }>, import("@sinclair/typebox").TUndefined]>>;
            totals: import("@sinclair/typebox").TOptional<import("@sinclair/typebox").TUnion<[import("@sinclair/typebox").TObject<{
                subtotal: import("@sinclair/typebox").TOptional<import("@sinclair/typebox").TNumber>;
                tax: import("@sinclair/typebox").TOptional<import("@sinclair/typebox").TNumber>;
                shipping: import("@sinclair/typebox").TOptional<import("@sinclair/typebox").TNumber>;
                discount: import("@sinclair/typebox").TOptional<import("@sinclair/typebox").TNumber>;
                total: import("@sinclair/typebox").TOptional<import("@sinclair/typebox").TNumber>;
            }>, import("@sinclair/typebox").TUndefined]>>;
            timeline: import("@sinclair/typebox").TOptional<import("@sinclair/typebox").TUnion<[import("@sinclair/typebox").TArray<import("@sinclair/typebox").TObject<{
                status: import("@sinclair/typebox").TOptional<import("@sinclair/typebox").TString>;
                timestamp: import("@sinclair/typebox").TOptional<import("@sinclair/typebox").TString>;
                note: import("@sinclair/typebox").TOptional<import("@sinclair/typebox").TString>;
            }>>, import("@sinclair/typebox").TUndefined]>>;
            createdAt: import("@sinclair/typebox").TOptional<import("@sinclair/typebox").TUnion<[import("@sinclair/typebox").TString, import("@sinclair/typebox").TUndefined]>>;
            updatedAt: import("@sinclair/typebox").TOptional<import("@sinclair/typebox").TUnion<[import("@sinclair/typebox").TString, import("@sinclair/typebox").TUndefined]>>;
        }>;
    }>;
    responses: import("@sinclair/typebox").TObject<{
        200: import("@sinclair/typebox").TObject<{
            id: import("@sinclair/typebox").TNumber;
            userId: import("@sinclair/typebox").TOptional<import("@sinclair/typebox").TUnion<[import("@sinclair/typebox").TNumber, import("@sinclair/typebox").TUndefined]>>;
            orderNumber: import("@sinclair/typebox").TOptional<import("@sinclair/typebox").TUnion<[import("@sinclair/typebox").TString, import("@sinclair/typebox").TUndefined]>>;
            items: import("@sinclair/typebox").TOptional<import("@sinclair/typebox").TUnion<[import("@sinclair/typebox").TArray<import("@sinclair/typebox").TObject<{
                productId: import("@sinclair/typebox").TOptional<import("@sinclair/typebox").TNumber>;
                productName: import("@sinclair/typebox").TOptional<import("@sinclair/typebox").TString>;
                quantity: import("@sinclair/typebox").TOptional<import("@sinclair/typebox").TNumber>;
                unitPrice: import("@sinclair/typebox").TOptional<import("@sinclair/typebox").TNumber>;
                totalPrice: import("@sinclair/typebox").TOptional<import("@sinclair/typebox").TNumber>;
                sku: import("@sinclair/typebox").TOptional<import("@sinclair/typebox").TString>;
            }>>, import("@sinclair/typebox").TUndefined]>>;
            status: import("@sinclair/typebox").TOptional<import("@sinclair/typebox").TUnion<[import("@sinclair/typebox").TString, import("@sinclair/typebox").TUndefined]>>;
            paymentStatus: import("@sinclair/typebox").TOptional<import("@sinclair/typebox").TUnion<[import("@sinclair/typebox").TString, import("@sinclair/typebox").TUndefined]>>;
            shippingMethod: import("@sinclair/typebox").TOptional<import("@sinclair/typebox").TUnion<[import("@sinclair/typebox").TString, import("@sinclair/typebox").TUndefined]>>;
            trackingNumber: import("@sinclair/typebox").TOptional<import("@sinclair/typebox").TUnion<[import("@sinclair/typebox").TString, import("@sinclair/typebox").TUndefined]>>;
            addresses: import("@sinclair/typebox").TOptional<import("@sinclair/typebox").TUnion<[import("@sinclair/typebox").TObject<{
                shipping: import("@sinclair/typebox").TOptional<import("@sinclair/typebox").TObject<{
                    name: import("@sinclair/typebox").TOptional<import("@sinclair/typebox").TString>;
                    street: import("@sinclair/typebox").TOptional<import("@sinclair/typebox").TString>;
                    apartment: import("@sinclair/typebox").TOptional<import("@sinclair/typebox").TString>;
                    city: import("@sinclair/typebox").TOptional<import("@sinclair/typebox").TString>;
                    state: import("@sinclair/typebox").TOptional<import("@sinclair/typebox").TString>;
                    zipCode: import("@sinclair/typebox").TOptional<import("@sinclair/typebox").TString>;
                    country: import("@sinclair/typebox").TOptional<import("@sinclair/typebox").TString>;
                    phone: import("@sinclair/typebox").TOptional<import("@sinclair/typebox").TString>;
                }>>;
                billing: import("@sinclair/typebox").TOptional<import("@sinclair/typebox").TObject<{
                    name: import("@sinclair/typebox").TOptional<import("@sinclair/typebox").TString>;
                    street: import("@sinclair/typebox").TOptional<import("@sinclair/typebox").TString>;
                    apartment: import("@sinclair/typebox").TOptional<import("@sinclair/typebox").TString>;
                    city: import("@sinclair/typebox").TOptional<import("@sinclair/typebox").TString>;
                    state: import("@sinclair/typebox").TOptional<import("@sinclair/typebox").TString>;
                    zipCode: import("@sinclair/typebox").TOptional<import("@sinclair/typebox").TString>;
                    country: import("@sinclair/typebox").TOptional<import("@sinclair/typebox").TString>;
                    phone: import("@sinclair/typebox").TOptional<import("@sinclair/typebox").TString>;
                }>>;
            }>, import("@sinclair/typebox").TUndefined]>>;
            totals: import("@sinclair/typebox").TOptional<import("@sinclair/typebox").TUnion<[import("@sinclair/typebox").TObject<{
                subtotal: import("@sinclair/typebox").TOptional<import("@sinclair/typebox").TNumber>;
                tax: import("@sinclair/typebox").TOptional<import("@sinclair/typebox").TNumber>;
                shipping: import("@sinclair/typebox").TOptional<import("@sinclair/typebox").TNumber>;
                discount: import("@sinclair/typebox").TOptional<import("@sinclair/typebox").TNumber>;
                total: import("@sinclair/typebox").TOptional<import("@sinclair/typebox").TNumber>;
            }>, import("@sinclair/typebox").TUndefined]>>;
            timeline: import("@sinclair/typebox").TOptional<import("@sinclair/typebox").TUnion<[import("@sinclair/typebox").TArray<import("@sinclair/typebox").TObject<{
                status: import("@sinclair/typebox").TOptional<import("@sinclair/typebox").TString>;
                timestamp: import("@sinclair/typebox").TOptional<import("@sinclair/typebox").TString>;
                note: import("@sinclair/typebox").TOptional<import("@sinclair/typebox").TString>;
            }>>, import("@sinclair/typebox").TUndefined]>>;
            createdAt: import("@sinclair/typebox").TOptional<import("@sinclair/typebox").TUnion<[import("@sinclair/typebox").TString, import("@sinclair/typebox").TUndefined]>>;
            updatedAt: import("@sinclair/typebox").TOptional<import("@sinclair/typebox").TUnion<[import("@sinclair/typebox").TString, import("@sinclair/typebox").TUndefined]>>;
        }>;
        400: import("@sinclair/typebox").TUnknown;
        404: import("@sinclair/typebox").TUnknown;
    }>;
}>;
export type patch__orders_Id = Static<typeof patch__orders_Id>;
export declare const patch__orders_Id: import("@sinclair/typebox").TObject<{
    method: import("@sinclair/typebox").TLiteral<"PATCH">;
    path: import("@sinclair/typebox").TLiteral<"/orders/{id}">;
    requestFormat: import("@sinclair/typebox").TLiteral<"json">;
    parameters: import("@sinclair/typebox").TObject<{
        path: import("@sinclair/typebox").TObject<{
            id: import("@sinclair/typebox").TNumber;
        }>;
        body: import("@sinclair/typebox").TObject<{
            id: import("@sinclair/typebox").TNumber;
            userId: import("@sinclair/typebox").TOptional<import("@sinclair/typebox").TUnion<[import("@sinclair/typebox").TNumber, import("@sinclair/typebox").TUndefined]>>;
            orderNumber: import("@sinclair/typebox").TOptional<import("@sinclair/typebox").TUnion<[import("@sinclair/typebox").TString, import("@sinclair/typebox").TUndefined]>>;
            items: import("@sinclair/typebox").TOptional<import("@sinclair/typebox").TUnion<[import("@sinclair/typebox").TArray<import("@sinclair/typebox").TObject<{
                productId: import("@sinclair/typebox").TOptional<import("@sinclair/typebox").TNumber>;
                productName: import("@sinclair/typebox").TOptional<import("@sinclair/typebox").TString>;
                quantity: import("@sinclair/typebox").TOptional<import("@sinclair/typebox").TNumber>;
                unitPrice: import("@sinclair/typebox").TOptional<import("@sinclair/typebox").TNumber>;
                totalPrice: import("@sinclair/typebox").TOptional<import("@sinclair/typebox").TNumber>;
                sku: import("@sinclair/typebox").TOptional<import("@sinclair/typebox").TString>;
            }>>, import("@sinclair/typebox").TUndefined]>>;
            status: import("@sinclair/typebox").TOptional<import("@sinclair/typebox").TUnion<[import("@sinclair/typebox").TString, import("@sinclair/typebox").TUndefined]>>;
            paymentStatus: import("@sinclair/typebox").TOptional<import("@sinclair/typebox").TUnion<[import("@sinclair/typebox").TString, import("@sinclair/typebox").TUndefined]>>;
            shippingMethod: import("@sinclair/typebox").TOptional<import("@sinclair/typebox").TUnion<[import("@sinclair/typebox").TString, import("@sinclair/typebox").TUndefined]>>;
            trackingNumber: import("@sinclair/typebox").TOptional<import("@sinclair/typebox").TUnion<[import("@sinclair/typebox").TString, import("@sinclair/typebox").TUndefined]>>;
            addresses: import("@sinclair/typebox").TOptional<import("@sinclair/typebox").TUnion<[import("@sinclair/typebox").TObject<{
                shipping: import("@sinclair/typebox").TOptional<import("@sinclair/typebox").TObject<{
                    name: import("@sinclair/typebox").TOptional<import("@sinclair/typebox").TString>;
                    street: import("@sinclair/typebox").TOptional<import("@sinclair/typebox").TString>;
                    apartment: import("@sinclair/typebox").TOptional<import("@sinclair/typebox").TString>;
                    city: import("@sinclair/typebox").TOptional<import("@sinclair/typebox").TString>;
                    state: import("@sinclair/typebox").TOptional<import("@sinclair/typebox").TString>;
                    zipCode: import("@sinclair/typebox").TOptional<import("@sinclair/typebox").TString>;
                    country: import("@sinclair/typebox").TOptional<import("@sinclair/typebox").TString>;
                    phone: import("@sinclair/typebox").TOptional<import("@sinclair/typebox").TString>;
                }>>;
                billing: import("@sinclair/typebox").TOptional<import("@sinclair/typebox").TObject<{
                    name: import("@sinclair/typebox").TOptional<import("@sinclair/typebox").TString>;
                    street: import("@sinclair/typebox").TOptional<import("@sinclair/typebox").TString>;
                    apartment: import("@sinclair/typebox").TOptional<import("@sinclair/typebox").TString>;
                    city: import("@sinclair/typebox").TOptional<import("@sinclair/typebox").TString>;
                    state: import("@sinclair/typebox").TOptional<import("@sinclair/typebox").TString>;
                    zipCode: import("@sinclair/typebox").TOptional<import("@sinclair/typebox").TString>;
                    country: import("@sinclair/typebox").TOptional<import("@sinclair/typebox").TString>;
                    phone: import("@sinclair/typebox").TOptional<import("@sinclair/typebox").TString>;
                }>>;
            }>, import("@sinclair/typebox").TUndefined]>>;
            totals: import("@sinclair/typebox").TOptional<import("@sinclair/typebox").TUnion<[import("@sinclair/typebox").TObject<{
                subtotal: import("@sinclair/typebox").TOptional<import("@sinclair/typebox").TNumber>;
                tax: import("@sinclair/typebox").TOptional<import("@sinclair/typebox").TNumber>;
                shipping: import("@sinclair/typebox").TOptional<import("@sinclair/typebox").TNumber>;
                discount: import("@sinclair/typebox").TOptional<import("@sinclair/typebox").TNumber>;
                total: import("@sinclair/typebox").TOptional<import("@sinclair/typebox").TNumber>;
            }>, import("@sinclair/typebox").TUndefined]>>;
            timeline: import("@sinclair/typebox").TOptional<import("@sinclair/typebox").TUnion<[import("@sinclair/typebox").TArray<import("@sinclair/typebox").TObject<{
                status: import("@sinclair/typebox").TOptional<import("@sinclair/typebox").TString>;
                timestamp: import("@sinclair/typebox").TOptional<import("@sinclair/typebox").TString>;
                note: import("@sinclair/typebox").TOptional<import("@sinclair/typebox").TString>;
            }>>, import("@sinclair/typebox").TUndefined]>>;
            createdAt: import("@sinclair/typebox").TOptional<import("@sinclair/typebox").TUnion<[import("@sinclair/typebox").TString, import("@sinclair/typebox").TUndefined]>>;
            updatedAt: import("@sinclair/typebox").TOptional<import("@sinclair/typebox").TUnion<[import("@sinclair/typebox").TString, import("@sinclair/typebox").TUndefined]>>;
        }>;
    }>;
    responses: import("@sinclair/typebox").TObject<{
        200: import("@sinclair/typebox").TObject<{
            id: import("@sinclair/typebox").TNumber;
            userId: import("@sinclair/typebox").TOptional<import("@sinclair/typebox").TUnion<[import("@sinclair/typebox").TNumber, import("@sinclair/typebox").TUndefined]>>;
            orderNumber: import("@sinclair/typebox").TOptional<import("@sinclair/typebox").TUnion<[import("@sinclair/typebox").TString, import("@sinclair/typebox").TUndefined]>>;
            items: import("@sinclair/typebox").TOptional<import("@sinclair/typebox").TUnion<[import("@sinclair/typebox").TArray<import("@sinclair/typebox").TObject<{
                productId: import("@sinclair/typebox").TOptional<import("@sinclair/typebox").TNumber>;
                productName: import("@sinclair/typebox").TOptional<import("@sinclair/typebox").TString>;
                quantity: import("@sinclair/typebox").TOptional<import("@sinclair/typebox").TNumber>;
                unitPrice: import("@sinclair/typebox").TOptional<import("@sinclair/typebox").TNumber>;
                totalPrice: import("@sinclair/typebox").TOptional<import("@sinclair/typebox").TNumber>;
                sku: import("@sinclair/typebox").TOptional<import("@sinclair/typebox").TString>;
            }>>, import("@sinclair/typebox").TUndefined]>>;
            status: import("@sinclair/typebox").TOptional<import("@sinclair/typebox").TUnion<[import("@sinclair/typebox").TString, import("@sinclair/typebox").TUndefined]>>;
            paymentStatus: import("@sinclair/typebox").TOptional<import("@sinclair/typebox").TUnion<[import("@sinclair/typebox").TString, import("@sinclair/typebox").TUndefined]>>;
            shippingMethod: import("@sinclair/typebox").TOptional<import("@sinclair/typebox").TUnion<[import("@sinclair/typebox").TString, import("@sinclair/typebox").TUndefined]>>;
            trackingNumber: import("@sinclair/typebox").TOptional<import("@sinclair/typebox").TUnion<[import("@sinclair/typebox").TString, import("@sinclair/typebox").TUndefined]>>;
            addresses: import("@sinclair/typebox").TOptional<import("@sinclair/typebox").TUnion<[import("@sinclair/typebox").TObject<{
                shipping: import("@sinclair/typebox").TOptional<import("@sinclair/typebox").TObject<{
                    name: import("@sinclair/typebox").TOptional<import("@sinclair/typebox").TString>;
                    street: import("@sinclair/typebox").TOptional<import("@sinclair/typebox").TString>;
                    apartment: import("@sinclair/typebox").TOptional<import("@sinclair/typebox").TString>;
                    city: import("@sinclair/typebox").TOptional<import("@sinclair/typebox").TString>;
                    state: import("@sinclair/typebox").TOptional<import("@sinclair/typebox").TString>;
                    zipCode: import("@sinclair/typebox").TOptional<import("@sinclair/typebox").TString>;
                    country: import("@sinclair/typebox").TOptional<import("@sinclair/typebox").TString>;
                    phone: import("@sinclair/typebox").TOptional<import("@sinclair/typebox").TString>;
                }>>;
                billing: import("@sinclair/typebox").TOptional<import("@sinclair/typebox").TObject<{
                    name: import("@sinclair/typebox").TOptional<import("@sinclair/typebox").TString>;
                    street: import("@sinclair/typebox").TOptional<import("@sinclair/typebox").TString>;
                    apartment: import("@sinclair/typebox").TOptional<import("@sinclair/typebox").TString>;
                    city: import("@sinclair/typebox").TOptional<import("@sinclair/typebox").TString>;
                    state: import("@sinclair/typebox").TOptional<import("@sinclair/typebox").TString>;
                    zipCode: import("@sinclair/typebox").TOptional<import("@sinclair/typebox").TString>;
                    country: import("@sinclair/typebox").TOptional<import("@sinclair/typebox").TString>;
                    phone: import("@sinclair/typebox").TOptional<import("@sinclair/typebox").TString>;
                }>>;
            }>, import("@sinclair/typebox").TUndefined]>>;
            totals: import("@sinclair/typebox").TOptional<import("@sinclair/typebox").TUnion<[import("@sinclair/typebox").TObject<{
                subtotal: import("@sinclair/typebox").TOptional<import("@sinclair/typebox").TNumber>;
                tax: import("@sinclair/typebox").TOptional<import("@sinclair/typebox").TNumber>;
                shipping: import("@sinclair/typebox").TOptional<import("@sinclair/typebox").TNumber>;
                discount: import("@sinclair/typebox").TOptional<import("@sinclair/typebox").TNumber>;
                total: import("@sinclair/typebox").TOptional<import("@sinclair/typebox").TNumber>;
            }>, import("@sinclair/typebox").TUndefined]>>;
            timeline: import("@sinclair/typebox").TOptional<import("@sinclair/typebox").TUnion<[import("@sinclair/typebox").TArray<import("@sinclair/typebox").TObject<{
                status: import("@sinclair/typebox").TOptional<import("@sinclair/typebox").TString>;
                timestamp: import("@sinclair/typebox").TOptional<import("@sinclair/typebox").TString>;
                note: import("@sinclair/typebox").TOptional<import("@sinclair/typebox").TString>;
            }>>, import("@sinclair/typebox").TUndefined]>>;
            createdAt: import("@sinclair/typebox").TOptional<import("@sinclair/typebox").TUnion<[import("@sinclair/typebox").TString, import("@sinclair/typebox").TUndefined]>>;
            updatedAt: import("@sinclair/typebox").TOptional<import("@sinclair/typebox").TUnion<[import("@sinclair/typebox").TString, import("@sinclair/typebox").TUndefined]>>;
        }>;
        400: import("@sinclair/typebox").TUnknown;
        404: import("@sinclair/typebox").TUnknown;
    }>;
}>;
export type delete__orders_Id = Static<typeof delete__orders_Id>;
export declare const delete__orders_Id: import("@sinclair/typebox").TObject<{
    method: import("@sinclair/typebox").TLiteral<"DELETE">;
    path: import("@sinclair/typebox").TLiteral<"/orders/{id}">;
    requestFormat: import("@sinclair/typebox").TLiteral<"json">;
    parameters: import("@sinclair/typebox").TObject<{
        path: import("@sinclair/typebox").TObject<{
            id: import("@sinclair/typebox").TNumber;
        }>;
    }>;
    responses: import("@sinclair/typebox").TObject<{
        200: import("@sinclair/typebox").TUnknown;
        404: import("@sinclair/typebox").TUnknown;
    }>;
}>;
export type get__analytics = Static<typeof get__analytics>;
export declare const get__analytics: import("@sinclair/typebox").TObject<{
    method: import("@sinclair/typebox").TLiteral<"GET">;
    path: import("@sinclair/typebox").TLiteral<"/analytics">;
    requestFormat: import("@sinclair/typebox").TLiteral<"json">;
    parameters: import("@sinclair/typebox").TObject<{
        query: import("@sinclair/typebox").TObject<{
            _page: import("@sinclair/typebox").TOptional<import("@sinclair/typebox").TNumber>;
            _limit: import("@sinclair/typebox").TOptional<import("@sinclair/typebox").TNumber>;
            _sort: import("@sinclair/typebox").TOptional<import("@sinclair/typebox").TString>;
            _order: import("@sinclair/typebox").TOptional<import("@sinclair/typebox").TUnion<[import("@sinclair/typebox").TLiteral<"asc">, import("@sinclair/typebox").TLiteral<"desc">]>>;
            q: import("@sinclair/typebox").TOptional<import("@sinclair/typebox").TString>;
        }>;
    }>;
    responses: import("@sinclair/typebox").TObject<{
        200: import("@sinclair/typebox").TArray<import("@sinclair/typebox").TObject<{
            id: import("@sinclair/typebox").TNumber;
            date: import("@sinclair/typebox").TOptional<import("@sinclair/typebox").TUnion<[import("@sinclair/typebox").TString, import("@sinclair/typebox").TUndefined]>>;
            period: import("@sinclair/typebox").TOptional<import("@sinclair/typebox").TUnion<[import("@sinclair/typebox").TString, import("@sinclair/typebox").TUndefined]>>;
            metrics: import("@sinclair/typebox").TOptional<import("@sinclair/typebox").TUnion<[import("@sinclair/typebox").TObject<{
                users: import("@sinclair/typebox").TOptional<import("@sinclair/typebox").TObject<{
                    total: import("@sinclair/typebox").TOptional<import("@sinclair/typebox").TNumber>;
                    new: import("@sinclair/typebox").TOptional<import("@sinclair/typebox").TNumber>;
                    returning: import("@sinclair/typebox").TOptional<import("@sinclair/typebox").TNumber>;
                    active: import("@sinclair/typebox").TOptional<import("@sinclair/typebox").TNumber>;
                }>>;
                traffic: import("@sinclair/typebox").TOptional<import("@sinclair/typebox").TObject<{
                    pageViews: import("@sinclair/typebox").TOptional<import("@sinclair/typebox").TNumber>;
                    uniqueViews: import("@sinclair/typebox").TOptional<import("@sinclair/typebox").TNumber>;
                    bounceRate: import("@sinclair/typebox").TOptional<import("@sinclair/typebox").TNumber>;
                    avgSessionDuration: import("@sinclair/typebox").TOptional<import("@sinclair/typebox").TNumber>;
                    topPages: import("@sinclair/typebox").TOptional<import("@sinclair/typebox").TArray<import("@sinclair/typebox").TObject<{
                        path: import("@sinclair/typebox").TOptional<import("@sinclair/typebox").TString>;
                        views: import("@sinclair/typebox").TOptional<import("@sinclair/typebox").TNumber>;
                    }>>>;
                }>>;
                performance: import("@sinclair/typebox").TOptional<import("@sinclair/typebox").TObject<{
                    avgLoadTime: import("@sinclair/typebox").TOptional<import("@sinclair/typebox").TNumber>;
                    apiCalls: import("@sinclair/typebox").TOptional<import("@sinclair/typebox").TNumber>;
                    cacheHitRate: import("@sinclair/typebox").TOptional<import("@sinclair/typebox").TNumber>;
                    errorRate: import("@sinclair/typebox").TOptional<import("@sinclair/typebox").TNumber>;
                }>>;
                business: import("@sinclair/typebox").TOptional<import("@sinclair/typebox").TObject<{
                    orders: import("@sinclair/typebox").TOptional<import("@sinclair/typebox").TNumber>;
                    revenue: import("@sinclair/typebox").TOptional<import("@sinclair/typebox").TNumber>;
                    conversionRate: import("@sinclair/typebox").TOptional<import("@sinclair/typebox").TNumber>;
                    avgOrderValue: import("@sinclair/typebox").TOptional<import("@sinclair/typebox").TNumber>;
                }>>;
            }>, import("@sinclair/typebox").TUndefined]>>;
        }>>;
    }>;
}>;
export type post__analytics = Static<typeof post__analytics>;
export declare const post__analytics: import("@sinclair/typebox").TObject<{
    method: import("@sinclair/typebox").TLiteral<"POST">;
    path: import("@sinclair/typebox").TLiteral<"/analytics">;
    requestFormat: import("@sinclair/typebox").TLiteral<"json">;
    parameters: import("@sinclair/typebox").TObject<{
        body: import("@sinclair/typebox").TObject<{
            id: import("@sinclair/typebox").TNumber;
            date: import("@sinclair/typebox").TOptional<import("@sinclair/typebox").TUnion<[import("@sinclair/typebox").TString, import("@sinclair/typebox").TUndefined]>>;
            period: import("@sinclair/typebox").TOptional<import("@sinclair/typebox").TUnion<[import("@sinclair/typebox").TString, import("@sinclair/typebox").TUndefined]>>;
            metrics: import("@sinclair/typebox").TOptional<import("@sinclair/typebox").TUnion<[import("@sinclair/typebox").TObject<{
                users: import("@sinclair/typebox").TOptional<import("@sinclair/typebox").TObject<{
                    total: import("@sinclair/typebox").TOptional<import("@sinclair/typebox").TNumber>;
                    new: import("@sinclair/typebox").TOptional<import("@sinclair/typebox").TNumber>;
                    returning: import("@sinclair/typebox").TOptional<import("@sinclair/typebox").TNumber>;
                    active: import("@sinclair/typebox").TOptional<import("@sinclair/typebox").TNumber>;
                }>>;
                traffic: import("@sinclair/typebox").TOptional<import("@sinclair/typebox").TObject<{
                    pageViews: import("@sinclair/typebox").TOptional<import("@sinclair/typebox").TNumber>;
                    uniqueViews: import("@sinclair/typebox").TOptional<import("@sinclair/typebox").TNumber>;
                    bounceRate: import("@sinclair/typebox").TOptional<import("@sinclair/typebox").TNumber>;
                    avgSessionDuration: import("@sinclair/typebox").TOptional<import("@sinclair/typebox").TNumber>;
                    topPages: import("@sinclair/typebox").TOptional<import("@sinclair/typebox").TArray<import("@sinclair/typebox").TObject<{
                        path: import("@sinclair/typebox").TOptional<import("@sinclair/typebox").TString>;
                        views: import("@sinclair/typebox").TOptional<import("@sinclair/typebox").TNumber>;
                    }>>>;
                }>>;
                performance: import("@sinclair/typebox").TOptional<import("@sinclair/typebox").TObject<{
                    avgLoadTime: import("@sinclair/typebox").TOptional<import("@sinclair/typebox").TNumber>;
                    apiCalls: import("@sinclair/typebox").TOptional<import("@sinclair/typebox").TNumber>;
                    cacheHitRate: import("@sinclair/typebox").TOptional<import("@sinclair/typebox").TNumber>;
                    errorRate: import("@sinclair/typebox").TOptional<import("@sinclair/typebox").TNumber>;
                }>>;
                business: import("@sinclair/typebox").TOptional<import("@sinclair/typebox").TObject<{
                    orders: import("@sinclair/typebox").TOptional<import("@sinclair/typebox").TNumber>;
                    revenue: import("@sinclair/typebox").TOptional<import("@sinclair/typebox").TNumber>;
                    conversionRate: import("@sinclair/typebox").TOptional<import("@sinclair/typebox").TNumber>;
                    avgOrderValue: import("@sinclair/typebox").TOptional<import("@sinclair/typebox").TNumber>;
                }>>;
            }>, import("@sinclair/typebox").TUndefined]>>;
        }>;
    }>;
    responses: import("@sinclair/typebox").TObject<{
        201: import("@sinclair/typebox").TObject<{
            id: import("@sinclair/typebox").TNumber;
            date: import("@sinclair/typebox").TOptional<import("@sinclair/typebox").TUnion<[import("@sinclair/typebox").TString, import("@sinclair/typebox").TUndefined]>>;
            period: import("@sinclair/typebox").TOptional<import("@sinclair/typebox").TUnion<[import("@sinclair/typebox").TString, import("@sinclair/typebox").TUndefined]>>;
            metrics: import("@sinclair/typebox").TOptional<import("@sinclair/typebox").TUnion<[import("@sinclair/typebox").TObject<{
                users: import("@sinclair/typebox").TOptional<import("@sinclair/typebox").TObject<{
                    total: import("@sinclair/typebox").TOptional<import("@sinclair/typebox").TNumber>;
                    new: import("@sinclair/typebox").TOptional<import("@sinclair/typebox").TNumber>;
                    returning: import("@sinclair/typebox").TOptional<import("@sinclair/typebox").TNumber>;
                    active: import("@sinclair/typebox").TOptional<import("@sinclair/typebox").TNumber>;
                }>>;
                traffic: import("@sinclair/typebox").TOptional<import("@sinclair/typebox").TObject<{
                    pageViews: import("@sinclair/typebox").TOptional<import("@sinclair/typebox").TNumber>;
                    uniqueViews: import("@sinclair/typebox").TOptional<import("@sinclair/typebox").TNumber>;
                    bounceRate: import("@sinclair/typebox").TOptional<import("@sinclair/typebox").TNumber>;
                    avgSessionDuration: import("@sinclair/typebox").TOptional<import("@sinclair/typebox").TNumber>;
                    topPages: import("@sinclair/typebox").TOptional<import("@sinclair/typebox").TArray<import("@sinclair/typebox").TObject<{
                        path: import("@sinclair/typebox").TOptional<import("@sinclair/typebox").TString>;
                        views: import("@sinclair/typebox").TOptional<import("@sinclair/typebox").TNumber>;
                    }>>>;
                }>>;
                performance: import("@sinclair/typebox").TOptional<import("@sinclair/typebox").TObject<{
                    avgLoadTime: import("@sinclair/typebox").TOptional<import("@sinclair/typebox").TNumber>;
                    apiCalls: import("@sinclair/typebox").TOptional<import("@sinclair/typebox").TNumber>;
                    cacheHitRate: import("@sinclair/typebox").TOptional<import("@sinclair/typebox").TNumber>;
                    errorRate: import("@sinclair/typebox").TOptional<import("@sinclair/typebox").TNumber>;
                }>>;
                business: import("@sinclair/typebox").TOptional<import("@sinclair/typebox").TObject<{
                    orders: import("@sinclair/typebox").TOptional<import("@sinclair/typebox").TNumber>;
                    revenue: import("@sinclair/typebox").TOptional<import("@sinclair/typebox").TNumber>;
                    conversionRate: import("@sinclair/typebox").TOptional<import("@sinclair/typebox").TNumber>;
                    avgOrderValue: import("@sinclair/typebox").TOptional<import("@sinclair/typebox").TNumber>;
                }>>;
            }>, import("@sinclair/typebox").TUndefined]>>;
        }>;
        400: import("@sinclair/typebox").TUnknown;
    }>;
}>;
export type get__analytics_Id = Static<typeof get__analytics_Id>;
export declare const get__analytics_Id: import("@sinclair/typebox").TObject<{
    method: import("@sinclair/typebox").TLiteral<"GET">;
    path: import("@sinclair/typebox").TLiteral<"/analytics/{id}">;
    requestFormat: import("@sinclair/typebox").TLiteral<"json">;
    parameters: import("@sinclair/typebox").TObject<{
        path: import("@sinclair/typebox").TObject<{
            id: import("@sinclair/typebox").TNumber;
        }>;
    }>;
    responses: import("@sinclair/typebox").TObject<{
        200: import("@sinclair/typebox").TObject<{
            id: import("@sinclair/typebox").TNumber;
            date: import("@sinclair/typebox").TOptional<import("@sinclair/typebox").TUnion<[import("@sinclair/typebox").TString, import("@sinclair/typebox").TUndefined]>>;
            period: import("@sinclair/typebox").TOptional<import("@sinclair/typebox").TUnion<[import("@sinclair/typebox").TString, import("@sinclair/typebox").TUndefined]>>;
            metrics: import("@sinclair/typebox").TOptional<import("@sinclair/typebox").TUnion<[import("@sinclair/typebox").TObject<{
                users: import("@sinclair/typebox").TOptional<import("@sinclair/typebox").TObject<{
                    total: import("@sinclair/typebox").TOptional<import("@sinclair/typebox").TNumber>;
                    new: import("@sinclair/typebox").TOptional<import("@sinclair/typebox").TNumber>;
                    returning: import("@sinclair/typebox").TOptional<import("@sinclair/typebox").TNumber>;
                    active: import("@sinclair/typebox").TOptional<import("@sinclair/typebox").TNumber>;
                }>>;
                traffic: import("@sinclair/typebox").TOptional<import("@sinclair/typebox").TObject<{
                    pageViews: import("@sinclair/typebox").TOptional<import("@sinclair/typebox").TNumber>;
                    uniqueViews: import("@sinclair/typebox").TOptional<import("@sinclair/typebox").TNumber>;
                    bounceRate: import("@sinclair/typebox").TOptional<import("@sinclair/typebox").TNumber>;
                    avgSessionDuration: import("@sinclair/typebox").TOptional<import("@sinclair/typebox").TNumber>;
                    topPages: import("@sinclair/typebox").TOptional<import("@sinclair/typebox").TArray<import("@sinclair/typebox").TObject<{
                        path: import("@sinclair/typebox").TOptional<import("@sinclair/typebox").TString>;
                        views: import("@sinclair/typebox").TOptional<import("@sinclair/typebox").TNumber>;
                    }>>>;
                }>>;
                performance: import("@sinclair/typebox").TOptional<import("@sinclair/typebox").TObject<{
                    avgLoadTime: import("@sinclair/typebox").TOptional<import("@sinclair/typebox").TNumber>;
                    apiCalls: import("@sinclair/typebox").TOptional<import("@sinclair/typebox").TNumber>;
                    cacheHitRate: import("@sinclair/typebox").TOptional<import("@sinclair/typebox").TNumber>;
                    errorRate: import("@sinclair/typebox").TOptional<import("@sinclair/typebox").TNumber>;
                }>>;
                business: import("@sinclair/typebox").TOptional<import("@sinclair/typebox").TObject<{
                    orders: import("@sinclair/typebox").TOptional<import("@sinclair/typebox").TNumber>;
                    revenue: import("@sinclair/typebox").TOptional<import("@sinclair/typebox").TNumber>;
                    conversionRate: import("@sinclair/typebox").TOptional<import("@sinclair/typebox").TNumber>;
                    avgOrderValue: import("@sinclair/typebox").TOptional<import("@sinclair/typebox").TNumber>;
                }>>;
            }>, import("@sinclair/typebox").TUndefined]>>;
        }>;
        404: import("@sinclair/typebox").TUnknown;
    }>;
}>;
export type put__analytics_Id = Static<typeof put__analytics_Id>;
export declare const put__analytics_Id: import("@sinclair/typebox").TObject<{
    method: import("@sinclair/typebox").TLiteral<"PUT">;
    path: import("@sinclair/typebox").TLiteral<"/analytics/{id}">;
    requestFormat: import("@sinclair/typebox").TLiteral<"json">;
    parameters: import("@sinclair/typebox").TObject<{
        path: import("@sinclair/typebox").TObject<{
            id: import("@sinclair/typebox").TNumber;
        }>;
        body: import("@sinclair/typebox").TObject<{
            id: import("@sinclair/typebox").TNumber;
            date: import("@sinclair/typebox").TOptional<import("@sinclair/typebox").TUnion<[import("@sinclair/typebox").TString, import("@sinclair/typebox").TUndefined]>>;
            period: import("@sinclair/typebox").TOptional<import("@sinclair/typebox").TUnion<[import("@sinclair/typebox").TString, import("@sinclair/typebox").TUndefined]>>;
            metrics: import("@sinclair/typebox").TOptional<import("@sinclair/typebox").TUnion<[import("@sinclair/typebox").TObject<{
                users: import("@sinclair/typebox").TOptional<import("@sinclair/typebox").TObject<{
                    total: import("@sinclair/typebox").TOptional<import("@sinclair/typebox").TNumber>;
                    new: import("@sinclair/typebox").TOptional<import("@sinclair/typebox").TNumber>;
                    returning: import("@sinclair/typebox").TOptional<import("@sinclair/typebox").TNumber>;
                    active: import("@sinclair/typebox").TOptional<import("@sinclair/typebox").TNumber>;
                }>>;
                traffic: import("@sinclair/typebox").TOptional<import("@sinclair/typebox").TObject<{
                    pageViews: import("@sinclair/typebox").TOptional<import("@sinclair/typebox").TNumber>;
                    uniqueViews: import("@sinclair/typebox").TOptional<import("@sinclair/typebox").TNumber>;
                    bounceRate: import("@sinclair/typebox").TOptional<import("@sinclair/typebox").TNumber>;
                    avgSessionDuration: import("@sinclair/typebox").TOptional<import("@sinclair/typebox").TNumber>;
                    topPages: import("@sinclair/typebox").TOptional<import("@sinclair/typebox").TArray<import("@sinclair/typebox").TObject<{
                        path: import("@sinclair/typebox").TOptional<import("@sinclair/typebox").TString>;
                        views: import("@sinclair/typebox").TOptional<import("@sinclair/typebox").TNumber>;
                    }>>>;
                }>>;
                performance: import("@sinclair/typebox").TOptional<import("@sinclair/typebox").TObject<{
                    avgLoadTime: import("@sinclair/typebox").TOptional<import("@sinclair/typebox").TNumber>;
                    apiCalls: import("@sinclair/typebox").TOptional<import("@sinclair/typebox").TNumber>;
                    cacheHitRate: import("@sinclair/typebox").TOptional<import("@sinclair/typebox").TNumber>;
                    errorRate: import("@sinclair/typebox").TOptional<import("@sinclair/typebox").TNumber>;
                }>>;
                business: import("@sinclair/typebox").TOptional<import("@sinclair/typebox").TObject<{
                    orders: import("@sinclair/typebox").TOptional<import("@sinclair/typebox").TNumber>;
                    revenue: import("@sinclair/typebox").TOptional<import("@sinclair/typebox").TNumber>;
                    conversionRate: import("@sinclair/typebox").TOptional<import("@sinclair/typebox").TNumber>;
                    avgOrderValue: import("@sinclair/typebox").TOptional<import("@sinclair/typebox").TNumber>;
                }>>;
            }>, import("@sinclair/typebox").TUndefined]>>;
        }>;
    }>;
    responses: import("@sinclair/typebox").TObject<{
        200: import("@sinclair/typebox").TObject<{
            id: import("@sinclair/typebox").TNumber;
            date: import("@sinclair/typebox").TOptional<import("@sinclair/typebox").TUnion<[import("@sinclair/typebox").TString, import("@sinclair/typebox").TUndefined]>>;
            period: import("@sinclair/typebox").TOptional<import("@sinclair/typebox").TUnion<[import("@sinclair/typebox").TString, import("@sinclair/typebox").TUndefined]>>;
            metrics: import("@sinclair/typebox").TOptional<import("@sinclair/typebox").TUnion<[import("@sinclair/typebox").TObject<{
                users: import("@sinclair/typebox").TOptional<import("@sinclair/typebox").TObject<{
                    total: import("@sinclair/typebox").TOptional<import("@sinclair/typebox").TNumber>;
                    new: import("@sinclair/typebox").TOptional<import("@sinclair/typebox").TNumber>;
                    returning: import("@sinclair/typebox").TOptional<import("@sinclair/typebox").TNumber>;
                    active: import("@sinclair/typebox").TOptional<import("@sinclair/typebox").TNumber>;
                }>>;
                traffic: import("@sinclair/typebox").TOptional<import("@sinclair/typebox").TObject<{
                    pageViews: import("@sinclair/typebox").TOptional<import("@sinclair/typebox").TNumber>;
                    uniqueViews: import("@sinclair/typebox").TOptional<import("@sinclair/typebox").TNumber>;
                    bounceRate: import("@sinclair/typebox").TOptional<import("@sinclair/typebox").TNumber>;
                    avgSessionDuration: import("@sinclair/typebox").TOptional<import("@sinclair/typebox").TNumber>;
                    topPages: import("@sinclair/typebox").TOptional<import("@sinclair/typebox").TArray<import("@sinclair/typebox").TObject<{
                        path: import("@sinclair/typebox").TOptional<import("@sinclair/typebox").TString>;
                        views: import("@sinclair/typebox").TOptional<import("@sinclair/typebox").TNumber>;
                    }>>>;
                }>>;
                performance: import("@sinclair/typebox").TOptional<import("@sinclair/typebox").TObject<{
                    avgLoadTime: import("@sinclair/typebox").TOptional<import("@sinclair/typebox").TNumber>;
                    apiCalls: import("@sinclair/typebox").TOptional<import("@sinclair/typebox").TNumber>;
                    cacheHitRate: import("@sinclair/typebox").TOptional<import("@sinclair/typebox").TNumber>;
                    errorRate: import("@sinclair/typebox").TOptional<import("@sinclair/typebox").TNumber>;
                }>>;
                business: import("@sinclair/typebox").TOptional<import("@sinclair/typebox").TObject<{
                    orders: import("@sinclair/typebox").TOptional<import("@sinclair/typebox").TNumber>;
                    revenue: import("@sinclair/typebox").TOptional<import("@sinclair/typebox").TNumber>;
                    conversionRate: import("@sinclair/typebox").TOptional<import("@sinclair/typebox").TNumber>;
                    avgOrderValue: import("@sinclair/typebox").TOptional<import("@sinclair/typebox").TNumber>;
                }>>;
            }>, import("@sinclair/typebox").TUndefined]>>;
        }>;
        400: import("@sinclair/typebox").TUnknown;
        404: import("@sinclair/typebox").TUnknown;
    }>;
}>;
export type patch__analytics_Id = Static<typeof patch__analytics_Id>;
export declare const patch__analytics_Id: import("@sinclair/typebox").TObject<{
    method: import("@sinclair/typebox").TLiteral<"PATCH">;
    path: import("@sinclair/typebox").TLiteral<"/analytics/{id}">;
    requestFormat: import("@sinclair/typebox").TLiteral<"json">;
    parameters: import("@sinclair/typebox").TObject<{
        path: import("@sinclair/typebox").TObject<{
            id: import("@sinclair/typebox").TNumber;
        }>;
        body: import("@sinclair/typebox").TObject<{
            id: import("@sinclair/typebox").TNumber;
            date: import("@sinclair/typebox").TOptional<import("@sinclair/typebox").TUnion<[import("@sinclair/typebox").TString, import("@sinclair/typebox").TUndefined]>>;
            period: import("@sinclair/typebox").TOptional<import("@sinclair/typebox").TUnion<[import("@sinclair/typebox").TString, import("@sinclair/typebox").TUndefined]>>;
            metrics: import("@sinclair/typebox").TOptional<import("@sinclair/typebox").TUnion<[import("@sinclair/typebox").TObject<{
                users: import("@sinclair/typebox").TOptional<import("@sinclair/typebox").TObject<{
                    total: import("@sinclair/typebox").TOptional<import("@sinclair/typebox").TNumber>;
                    new: import("@sinclair/typebox").TOptional<import("@sinclair/typebox").TNumber>;
                    returning: import("@sinclair/typebox").TOptional<import("@sinclair/typebox").TNumber>;
                    active: import("@sinclair/typebox").TOptional<import("@sinclair/typebox").TNumber>;
                }>>;
                traffic: import("@sinclair/typebox").TOptional<import("@sinclair/typebox").TObject<{
                    pageViews: import("@sinclair/typebox").TOptional<import("@sinclair/typebox").TNumber>;
                    uniqueViews: import("@sinclair/typebox").TOptional<import("@sinclair/typebox").TNumber>;
                    bounceRate: import("@sinclair/typebox").TOptional<import("@sinclair/typebox").TNumber>;
                    avgSessionDuration: import("@sinclair/typebox").TOptional<import("@sinclair/typebox").TNumber>;
                    topPages: import("@sinclair/typebox").TOptional<import("@sinclair/typebox").TArray<import("@sinclair/typebox").TObject<{
                        path: import("@sinclair/typebox").TOptional<import("@sinclair/typebox").TString>;
                        views: import("@sinclair/typebox").TOptional<import("@sinclair/typebox").TNumber>;
                    }>>>;
                }>>;
                performance: import("@sinclair/typebox").TOptional<import("@sinclair/typebox").TObject<{
                    avgLoadTime: import("@sinclair/typebox").TOptional<import("@sinclair/typebox").TNumber>;
                    apiCalls: import("@sinclair/typebox").TOptional<import("@sinclair/typebox").TNumber>;
                    cacheHitRate: import("@sinclair/typebox").TOptional<import("@sinclair/typebox").TNumber>;
                    errorRate: import("@sinclair/typebox").TOptional<import("@sinclair/typebox").TNumber>;
                }>>;
                business: import("@sinclair/typebox").TOptional<import("@sinclair/typebox").TObject<{
                    orders: import("@sinclair/typebox").TOptional<import("@sinclair/typebox").TNumber>;
                    revenue: import("@sinclair/typebox").TOptional<import("@sinclair/typebox").TNumber>;
                    conversionRate: import("@sinclair/typebox").TOptional<import("@sinclair/typebox").TNumber>;
                    avgOrderValue: import("@sinclair/typebox").TOptional<import("@sinclair/typebox").TNumber>;
                }>>;
            }>, import("@sinclair/typebox").TUndefined]>>;
        }>;
    }>;
    responses: import("@sinclair/typebox").TObject<{
        200: import("@sinclair/typebox").TObject<{
            id: import("@sinclair/typebox").TNumber;
            date: import("@sinclair/typebox").TOptional<import("@sinclair/typebox").TUnion<[import("@sinclair/typebox").TString, import("@sinclair/typebox").TUndefined]>>;
            period: import("@sinclair/typebox").TOptional<import("@sinclair/typebox").TUnion<[import("@sinclair/typebox").TString, import("@sinclair/typebox").TUndefined]>>;
            metrics: import("@sinclair/typebox").TOptional<import("@sinclair/typebox").TUnion<[import("@sinclair/typebox").TObject<{
                users: import("@sinclair/typebox").TOptional<import("@sinclair/typebox").TObject<{
                    total: import("@sinclair/typebox").TOptional<import("@sinclair/typebox").TNumber>;
                    new: import("@sinclair/typebox").TOptional<import("@sinclair/typebox").TNumber>;
                    returning: import("@sinclair/typebox").TOptional<import("@sinclair/typebox").TNumber>;
                    active: import("@sinclair/typebox").TOptional<import("@sinclair/typebox").TNumber>;
                }>>;
                traffic: import("@sinclair/typebox").TOptional<import("@sinclair/typebox").TObject<{
                    pageViews: import("@sinclair/typebox").TOptional<import("@sinclair/typebox").TNumber>;
                    uniqueViews: import("@sinclair/typebox").TOptional<import("@sinclair/typebox").TNumber>;
                    bounceRate: import("@sinclair/typebox").TOptional<import("@sinclair/typebox").TNumber>;
                    avgSessionDuration: import("@sinclair/typebox").TOptional<import("@sinclair/typebox").TNumber>;
                    topPages: import("@sinclair/typebox").TOptional<import("@sinclair/typebox").TArray<import("@sinclair/typebox").TObject<{
                        path: import("@sinclair/typebox").TOptional<import("@sinclair/typebox").TString>;
                        views: import("@sinclair/typebox").TOptional<import("@sinclair/typebox").TNumber>;
                    }>>>;
                }>>;
                performance: import("@sinclair/typebox").TOptional<import("@sinclair/typebox").TObject<{
                    avgLoadTime: import("@sinclair/typebox").TOptional<import("@sinclair/typebox").TNumber>;
                    apiCalls: import("@sinclair/typebox").TOptional<import("@sinclair/typebox").TNumber>;
                    cacheHitRate: import("@sinclair/typebox").TOptional<import("@sinclair/typebox").TNumber>;
                    errorRate: import("@sinclair/typebox").TOptional<import("@sinclair/typebox").TNumber>;
                }>>;
                business: import("@sinclair/typebox").TOptional<import("@sinclair/typebox").TObject<{
                    orders: import("@sinclair/typebox").TOptional<import("@sinclair/typebox").TNumber>;
                    revenue: import("@sinclair/typebox").TOptional<import("@sinclair/typebox").TNumber>;
                    conversionRate: import("@sinclair/typebox").TOptional<import("@sinclair/typebox").TNumber>;
                    avgOrderValue: import("@sinclair/typebox").TOptional<import("@sinclair/typebox").TNumber>;
                }>>;
            }>, import("@sinclair/typebox").TUndefined]>>;
        }>;
        400: import("@sinclair/typebox").TUnknown;
        404: import("@sinclair/typebox").TUnknown;
    }>;
}>;
export type delete__analytics_Id = Static<typeof delete__analytics_Id>;
export declare const delete__analytics_Id: import("@sinclair/typebox").TObject<{
    method: import("@sinclair/typebox").TLiteral<"DELETE">;
    path: import("@sinclair/typebox").TLiteral<"/analytics/{id}">;
    requestFormat: import("@sinclair/typebox").TLiteral<"json">;
    parameters: import("@sinclair/typebox").TObject<{
        path: import("@sinclair/typebox").TObject<{
            id: import("@sinclair/typebox").TNumber;
        }>;
    }>;
    responses: import("@sinclair/typebox").TObject<{
        200: import("@sinclair/typebox").TUnknown;
        404: import("@sinclair/typebox").TUnknown;
    }>;
}>;
export type get__notifications = Static<typeof get__notifications>;
export declare const get__notifications: import("@sinclair/typebox").TObject<{
    method: import("@sinclair/typebox").TLiteral<"GET">;
    path: import("@sinclair/typebox").TLiteral<"/notifications">;
    requestFormat: import("@sinclair/typebox").TLiteral<"json">;
    parameters: import("@sinclair/typebox").TObject<{
        query: import("@sinclair/typebox").TObject<{
            _page: import("@sinclair/typebox").TOptional<import("@sinclair/typebox").TNumber>;
            _limit: import("@sinclair/typebox").TOptional<import("@sinclair/typebox").TNumber>;
            _sort: import("@sinclair/typebox").TOptional<import("@sinclair/typebox").TString>;
            _order: import("@sinclair/typebox").TOptional<import("@sinclair/typebox").TUnion<[import("@sinclair/typebox").TLiteral<"asc">, import("@sinclair/typebox").TLiteral<"desc">]>>;
            q: import("@sinclair/typebox").TOptional<import("@sinclair/typebox").TString>;
        }>;
    }>;
    responses: import("@sinclair/typebox").TObject<{
        200: import("@sinclair/typebox").TArray<import("@sinclair/typebox").TObject<{
            id: import("@sinclair/typebox").TNumber;
            userId: import("@sinclair/typebox").TOptional<import("@sinclair/typebox").TUnion<[import("@sinclair/typebox").TNumber, import("@sinclair/typebox").TUndefined]>>;
            type: import("@sinclair/typebox").TOptional<import("@sinclair/typebox").TUnion<[import("@sinclair/typebox").TString, import("@sinclair/typebox").TUndefined]>>;
            title: import("@sinclair/typebox").TOptional<import("@sinclair/typebox").TUnion<[import("@sinclair/typebox").TString, import("@sinclair/typebox").TUndefined]>>;
            message: import("@sinclair/typebox").TOptional<import("@sinclair/typebox").TUnion<[import("@sinclair/typebox").TString, import("@sinclair/typebox").TUndefined]>>;
            data: import("@sinclair/typebox").TOptional<import("@sinclair/typebox").TUnion<[import("@sinclair/typebox").TObject<{
                orderId: import("@sinclair/typebox").TOptional<import("@sinclair/typebox").TNumber>;
                trackingNumber: import("@sinclair/typebox").TOptional<import("@sinclair/typebox").TString>;
            }>, import("@sinclair/typebox").TUndefined]>>;
            isRead: import("@sinclair/typebox").TOptional<import("@sinclair/typebox").TUnion<[import("@sinclair/typebox").TBoolean, import("@sinclair/typebox").TUndefined]>>;
            priority: import("@sinclair/typebox").TOptional<import("@sinclair/typebox").TUnion<[import("@sinclair/typebox").TString, import("@sinclair/typebox").TUndefined]>>;
            createdAt: import("@sinclair/typebox").TOptional<import("@sinclair/typebox").TUnion<[import("@sinclair/typebox").TString, import("@sinclair/typebox").TUndefined]>>;
        }>>;
    }>;
}>;
export type post__notifications = Static<typeof post__notifications>;
export declare const post__notifications: import("@sinclair/typebox").TObject<{
    method: import("@sinclair/typebox").TLiteral<"POST">;
    path: import("@sinclair/typebox").TLiteral<"/notifications">;
    requestFormat: import("@sinclair/typebox").TLiteral<"json">;
    parameters: import("@sinclair/typebox").TObject<{
        body: import("@sinclair/typebox").TObject<{
            id: import("@sinclair/typebox").TNumber;
            userId: import("@sinclair/typebox").TOptional<import("@sinclair/typebox").TUnion<[import("@sinclair/typebox").TNumber, import("@sinclair/typebox").TUndefined]>>;
            type: import("@sinclair/typebox").TOptional<import("@sinclair/typebox").TUnion<[import("@sinclair/typebox").TString, import("@sinclair/typebox").TUndefined]>>;
            title: import("@sinclair/typebox").TOptional<import("@sinclair/typebox").TUnion<[import("@sinclair/typebox").TString, import("@sinclair/typebox").TUndefined]>>;
            message: import("@sinclair/typebox").TOptional<import("@sinclair/typebox").TUnion<[import("@sinclair/typebox").TString, import("@sinclair/typebox").TUndefined]>>;
            data: import("@sinclair/typebox").TOptional<import("@sinclair/typebox").TUnion<[import("@sinclair/typebox").TObject<{
                orderId: import("@sinclair/typebox").TOptional<import("@sinclair/typebox").TNumber>;
                trackingNumber: import("@sinclair/typebox").TOptional<import("@sinclair/typebox").TString>;
            }>, import("@sinclair/typebox").TUndefined]>>;
            isRead: import("@sinclair/typebox").TOptional<import("@sinclair/typebox").TUnion<[import("@sinclair/typebox").TBoolean, import("@sinclair/typebox").TUndefined]>>;
            priority: import("@sinclair/typebox").TOptional<import("@sinclair/typebox").TUnion<[import("@sinclair/typebox").TString, import("@sinclair/typebox").TUndefined]>>;
            createdAt: import("@sinclair/typebox").TOptional<import("@sinclair/typebox").TUnion<[import("@sinclair/typebox").TString, import("@sinclair/typebox").TUndefined]>>;
        }>;
    }>;
    responses: import("@sinclair/typebox").TObject<{
        201: import("@sinclair/typebox").TObject<{
            id: import("@sinclair/typebox").TNumber;
            userId: import("@sinclair/typebox").TOptional<import("@sinclair/typebox").TUnion<[import("@sinclair/typebox").TNumber, import("@sinclair/typebox").TUndefined]>>;
            type: import("@sinclair/typebox").TOptional<import("@sinclair/typebox").TUnion<[import("@sinclair/typebox").TString, import("@sinclair/typebox").TUndefined]>>;
            title: import("@sinclair/typebox").TOptional<import("@sinclair/typebox").TUnion<[import("@sinclair/typebox").TString, import("@sinclair/typebox").TUndefined]>>;
            message: import("@sinclair/typebox").TOptional<import("@sinclair/typebox").TUnion<[import("@sinclair/typebox").TString, import("@sinclair/typebox").TUndefined]>>;
            data: import("@sinclair/typebox").TOptional<import("@sinclair/typebox").TUnion<[import("@sinclair/typebox").TObject<{
                orderId: import("@sinclair/typebox").TOptional<import("@sinclair/typebox").TNumber>;
                trackingNumber: import("@sinclair/typebox").TOptional<import("@sinclair/typebox").TString>;
            }>, import("@sinclair/typebox").TUndefined]>>;
            isRead: import("@sinclair/typebox").TOptional<import("@sinclair/typebox").TUnion<[import("@sinclair/typebox").TBoolean, import("@sinclair/typebox").TUndefined]>>;
            priority: import("@sinclair/typebox").TOptional<import("@sinclair/typebox").TUnion<[import("@sinclair/typebox").TString, import("@sinclair/typebox").TUndefined]>>;
            createdAt: import("@sinclair/typebox").TOptional<import("@sinclair/typebox").TUnion<[import("@sinclair/typebox").TString, import("@sinclair/typebox").TUndefined]>>;
        }>;
        400: import("@sinclair/typebox").TUnknown;
    }>;
}>;
export type get__notifications_Id = Static<typeof get__notifications_Id>;
export declare const get__notifications_Id: import("@sinclair/typebox").TObject<{
    method: import("@sinclair/typebox").TLiteral<"GET">;
    path: import("@sinclair/typebox").TLiteral<"/notifications/{id}">;
    requestFormat: import("@sinclair/typebox").TLiteral<"json">;
    parameters: import("@sinclair/typebox").TObject<{
        path: import("@sinclair/typebox").TObject<{
            id: import("@sinclair/typebox").TNumber;
        }>;
    }>;
    responses: import("@sinclair/typebox").TObject<{
        200: import("@sinclair/typebox").TObject<{
            id: import("@sinclair/typebox").TNumber;
            userId: import("@sinclair/typebox").TOptional<import("@sinclair/typebox").TUnion<[import("@sinclair/typebox").TNumber, import("@sinclair/typebox").TUndefined]>>;
            type: import("@sinclair/typebox").TOptional<import("@sinclair/typebox").TUnion<[import("@sinclair/typebox").TString, import("@sinclair/typebox").TUndefined]>>;
            title: import("@sinclair/typebox").TOptional<import("@sinclair/typebox").TUnion<[import("@sinclair/typebox").TString, import("@sinclair/typebox").TUndefined]>>;
            message: import("@sinclair/typebox").TOptional<import("@sinclair/typebox").TUnion<[import("@sinclair/typebox").TString, import("@sinclair/typebox").TUndefined]>>;
            data: import("@sinclair/typebox").TOptional<import("@sinclair/typebox").TUnion<[import("@sinclair/typebox").TObject<{
                orderId: import("@sinclair/typebox").TOptional<import("@sinclair/typebox").TNumber>;
                trackingNumber: import("@sinclair/typebox").TOptional<import("@sinclair/typebox").TString>;
            }>, import("@sinclair/typebox").TUndefined]>>;
            isRead: import("@sinclair/typebox").TOptional<import("@sinclair/typebox").TUnion<[import("@sinclair/typebox").TBoolean, import("@sinclair/typebox").TUndefined]>>;
            priority: import("@sinclair/typebox").TOptional<import("@sinclair/typebox").TUnion<[import("@sinclair/typebox").TString, import("@sinclair/typebox").TUndefined]>>;
            createdAt: import("@sinclair/typebox").TOptional<import("@sinclair/typebox").TUnion<[import("@sinclair/typebox").TString, import("@sinclair/typebox").TUndefined]>>;
        }>;
        404: import("@sinclair/typebox").TUnknown;
    }>;
}>;
export type put__notifications_Id = Static<typeof put__notifications_Id>;
export declare const put__notifications_Id: import("@sinclair/typebox").TObject<{
    method: import("@sinclair/typebox").TLiteral<"PUT">;
    path: import("@sinclair/typebox").TLiteral<"/notifications/{id}">;
    requestFormat: import("@sinclair/typebox").TLiteral<"json">;
    parameters: import("@sinclair/typebox").TObject<{
        path: import("@sinclair/typebox").TObject<{
            id: import("@sinclair/typebox").TNumber;
        }>;
        body: import("@sinclair/typebox").TObject<{
            id: import("@sinclair/typebox").TNumber;
            userId: import("@sinclair/typebox").TOptional<import("@sinclair/typebox").TUnion<[import("@sinclair/typebox").TNumber, import("@sinclair/typebox").TUndefined]>>;
            type: import("@sinclair/typebox").TOptional<import("@sinclair/typebox").TUnion<[import("@sinclair/typebox").TString, import("@sinclair/typebox").TUndefined]>>;
            title: import("@sinclair/typebox").TOptional<import("@sinclair/typebox").TUnion<[import("@sinclair/typebox").TString, import("@sinclair/typebox").TUndefined]>>;
            message: import("@sinclair/typebox").TOptional<import("@sinclair/typebox").TUnion<[import("@sinclair/typebox").TString, import("@sinclair/typebox").TUndefined]>>;
            data: import("@sinclair/typebox").TOptional<import("@sinclair/typebox").TUnion<[import("@sinclair/typebox").TObject<{
                orderId: import("@sinclair/typebox").TOptional<import("@sinclair/typebox").TNumber>;
                trackingNumber: import("@sinclair/typebox").TOptional<import("@sinclair/typebox").TString>;
            }>, import("@sinclair/typebox").TUndefined]>>;
            isRead: import("@sinclair/typebox").TOptional<import("@sinclair/typebox").TUnion<[import("@sinclair/typebox").TBoolean, import("@sinclair/typebox").TUndefined]>>;
            priority: import("@sinclair/typebox").TOptional<import("@sinclair/typebox").TUnion<[import("@sinclair/typebox").TString, import("@sinclair/typebox").TUndefined]>>;
            createdAt: import("@sinclair/typebox").TOptional<import("@sinclair/typebox").TUnion<[import("@sinclair/typebox").TString, import("@sinclair/typebox").TUndefined]>>;
        }>;
    }>;
    responses: import("@sinclair/typebox").TObject<{
        200: import("@sinclair/typebox").TObject<{
            id: import("@sinclair/typebox").TNumber;
            userId: import("@sinclair/typebox").TOptional<import("@sinclair/typebox").TUnion<[import("@sinclair/typebox").TNumber, import("@sinclair/typebox").TUndefined]>>;
            type: import("@sinclair/typebox").TOptional<import("@sinclair/typebox").TUnion<[import("@sinclair/typebox").TString, import("@sinclair/typebox").TUndefined]>>;
            title: import("@sinclair/typebox").TOptional<import("@sinclair/typebox").TUnion<[import("@sinclair/typebox").TString, import("@sinclair/typebox").TUndefined]>>;
            message: import("@sinclair/typebox").TOptional<import("@sinclair/typebox").TUnion<[import("@sinclair/typebox").TString, import("@sinclair/typebox").TUndefined]>>;
            data: import("@sinclair/typebox").TOptional<import("@sinclair/typebox").TUnion<[import("@sinclair/typebox").TObject<{
                orderId: import("@sinclair/typebox").TOptional<import("@sinclair/typebox").TNumber>;
                trackingNumber: import("@sinclair/typebox").TOptional<import("@sinclair/typebox").TString>;
            }>, import("@sinclair/typebox").TUndefined]>>;
            isRead: import("@sinclair/typebox").TOptional<import("@sinclair/typebox").TUnion<[import("@sinclair/typebox").TBoolean, import("@sinclair/typebox").TUndefined]>>;
            priority: import("@sinclair/typebox").TOptional<import("@sinclair/typebox").TUnion<[import("@sinclair/typebox").TString, import("@sinclair/typebox").TUndefined]>>;
            createdAt: import("@sinclair/typebox").TOptional<import("@sinclair/typebox").TUnion<[import("@sinclair/typebox").TString, import("@sinclair/typebox").TUndefined]>>;
        }>;
        400: import("@sinclair/typebox").TUnknown;
        404: import("@sinclair/typebox").TUnknown;
    }>;
}>;
export type patch__notifications_Id = Static<typeof patch__notifications_Id>;
export declare const patch__notifications_Id: import("@sinclair/typebox").TObject<{
    method: import("@sinclair/typebox").TLiteral<"PATCH">;
    path: import("@sinclair/typebox").TLiteral<"/notifications/{id}">;
    requestFormat: import("@sinclair/typebox").TLiteral<"json">;
    parameters: import("@sinclair/typebox").TObject<{
        path: import("@sinclair/typebox").TObject<{
            id: import("@sinclair/typebox").TNumber;
        }>;
        body: import("@sinclair/typebox").TObject<{
            id: import("@sinclair/typebox").TNumber;
            userId: import("@sinclair/typebox").TOptional<import("@sinclair/typebox").TUnion<[import("@sinclair/typebox").TNumber, import("@sinclair/typebox").TUndefined]>>;
            type: import("@sinclair/typebox").TOptional<import("@sinclair/typebox").TUnion<[import("@sinclair/typebox").TString, import("@sinclair/typebox").TUndefined]>>;
            title: import("@sinclair/typebox").TOptional<import("@sinclair/typebox").TUnion<[import("@sinclair/typebox").TString, import("@sinclair/typebox").TUndefined]>>;
            message: import("@sinclair/typebox").TOptional<import("@sinclair/typebox").TUnion<[import("@sinclair/typebox").TString, import("@sinclair/typebox").TUndefined]>>;
            data: import("@sinclair/typebox").TOptional<import("@sinclair/typebox").TUnion<[import("@sinclair/typebox").TObject<{
                orderId: import("@sinclair/typebox").TOptional<import("@sinclair/typebox").TNumber>;
                trackingNumber: import("@sinclair/typebox").TOptional<import("@sinclair/typebox").TString>;
            }>, import("@sinclair/typebox").TUndefined]>>;
            isRead: import("@sinclair/typebox").TOptional<import("@sinclair/typebox").TUnion<[import("@sinclair/typebox").TBoolean, import("@sinclair/typebox").TUndefined]>>;
            priority: import("@sinclair/typebox").TOptional<import("@sinclair/typebox").TUnion<[import("@sinclair/typebox").TString, import("@sinclair/typebox").TUndefined]>>;
            createdAt: import("@sinclair/typebox").TOptional<import("@sinclair/typebox").TUnion<[import("@sinclair/typebox").TString, import("@sinclair/typebox").TUndefined]>>;
        }>;
    }>;
    responses: import("@sinclair/typebox").TObject<{
        200: import("@sinclair/typebox").TObject<{
            id: import("@sinclair/typebox").TNumber;
            userId: import("@sinclair/typebox").TOptional<import("@sinclair/typebox").TUnion<[import("@sinclair/typebox").TNumber, import("@sinclair/typebox").TUndefined]>>;
            type: import("@sinclair/typebox").TOptional<import("@sinclair/typebox").TUnion<[import("@sinclair/typebox").TString, import("@sinclair/typebox").TUndefined]>>;
            title: import("@sinclair/typebox").TOptional<import("@sinclair/typebox").TUnion<[import("@sinclair/typebox").TString, import("@sinclair/typebox").TUndefined]>>;
            message: import("@sinclair/typebox").TOptional<import("@sinclair/typebox").TUnion<[import("@sinclair/typebox").TString, import("@sinclair/typebox").TUndefined]>>;
            data: import("@sinclair/typebox").TOptional<import("@sinclair/typebox").TUnion<[import("@sinclair/typebox").TObject<{
                orderId: import("@sinclair/typebox").TOptional<import("@sinclair/typebox").TNumber>;
                trackingNumber: import("@sinclair/typebox").TOptional<import("@sinclair/typebox").TString>;
            }>, import("@sinclair/typebox").TUndefined]>>;
            isRead: import("@sinclair/typebox").TOptional<import("@sinclair/typebox").TUnion<[import("@sinclair/typebox").TBoolean, import("@sinclair/typebox").TUndefined]>>;
            priority: import("@sinclair/typebox").TOptional<import("@sinclair/typebox").TUnion<[import("@sinclair/typebox").TString, import("@sinclair/typebox").TUndefined]>>;
            createdAt: import("@sinclair/typebox").TOptional<import("@sinclair/typebox").TUnion<[import("@sinclair/typebox").TString, import("@sinclair/typebox").TUndefined]>>;
        }>;
        400: import("@sinclair/typebox").TUnknown;
        404: import("@sinclair/typebox").TUnknown;
    }>;
}>;
export type delete__notifications_Id = Static<typeof delete__notifications_Id>;
export declare const delete__notifications_Id: import("@sinclair/typebox").TObject<{
    method: import("@sinclair/typebox").TLiteral<"DELETE">;
    path: import("@sinclair/typebox").TLiteral<"/notifications/{id}">;
    requestFormat: import("@sinclair/typebox").TLiteral<"json">;
    parameters: import("@sinclair/typebox").TObject<{
        path: import("@sinclair/typebox").TObject<{
            id: import("@sinclair/typebox").TNumber;
        }>;
    }>;
    responses: import("@sinclair/typebox").TObject<{
        200: import("@sinclair/typebox").TUnknown;
        404: import("@sinclair/typebox").TUnknown;
    }>;
}>;
export type get_ = Static<typeof get_>;
export declare const get_: import("@sinclair/typebox").TObject<{
    method: import("@sinclair/typebox").TLiteral<"GET">;
    path: import("@sinclair/typebox").TLiteral<"">;
    requestFormat: import("@sinclair/typebox").TLiteral<"json">;
    parameters: import("@sinclair/typebox").TNever;
    responses: import("@sinclair/typebox").TObject<{
        200: import("@sinclair/typebox").TRecord<import("@sinclair/typebox").TString, import("@sinclair/typebox").TUnknown>;
    }>;
}>;
export type get__users__id_posts = Static<typeof get__users__id_posts>;
export declare const get__users__id_posts: import("@sinclair/typebox").TObject<{
    method: import("@sinclair/typebox").TLiteral<"GET">;
    path: import("@sinclair/typebox").TLiteral<"/users/:id/posts">;
    requestFormat: import("@sinclair/typebox").TLiteral<"json">;
    parameters: import("@sinclair/typebox").TNever;
    responses: import("@sinclair/typebox").TObject<{
        200: import("@sinclair/typebox").TRecord<import("@sinclair/typebox").TString, import("@sinclair/typebox").TUnknown>;
    }>;
}>;
export type get__users__id_comments = Static<typeof get__users__id_comments>;
export declare const get__users__id_comments: import("@sinclair/typebox").TObject<{
    method: import("@sinclair/typebox").TLiteral<"GET">;
    path: import("@sinclair/typebox").TLiteral<"/users/:id/comments">;
    requestFormat: import("@sinclair/typebox").TLiteral<"json">;
    parameters: import("@sinclair/typebox").TNever;
    responses: import("@sinclair/typebox").TObject<{
        200: import("@sinclair/typebox").TRecord<import("@sinclair/typebox").TString, import("@sinclair/typebox").TUnknown>;
    }>;
}>;
export type get__users__id_orders = Static<typeof get__users__id_orders>;
export declare const get__users__id_orders: import("@sinclair/typebox").TObject<{
    method: import("@sinclair/typebox").TLiteral<"GET">;
    path: import("@sinclair/typebox").TLiteral<"/users/:id/orders">;
    requestFormat: import("@sinclair/typebox").TLiteral<"json">;
    parameters: import("@sinclair/typebox").TNever;
    responses: import("@sinclair/typebox").TObject<{
        200: import("@sinclair/typebox").TRecord<import("@sinclair/typebox").TString, import("@sinclair/typebox").TUnknown>;
    }>;
}>;
export type get__users__id_notifications = Static<typeof get__users__id_notifications>;
export declare const get__users__id_notifications: import("@sinclair/typebox").TObject<{
    method: import("@sinclair/typebox").TLiteral<"GET">;
    path: import("@sinclair/typebox").TLiteral<"/users/:id/notifications">;
    requestFormat: import("@sinclair/typebox").TLiteral<"json">;
    parameters: import("@sinclair/typebox").TNever;
    responses: import("@sinclair/typebox").TObject<{
        200: import("@sinclair/typebox").TRecord<import("@sinclair/typebox").TString, import("@sinclair/typebox").TUnknown>;
    }>;
}>;
export type get__posts__id_comments = Static<typeof get__posts__id_comments>;
export declare const get__posts__id_comments: import("@sinclair/typebox").TObject<{
    method: import("@sinclair/typebox").TLiteral<"GET">;
    path: import("@sinclair/typebox").TLiteral<"/posts/:id/comments">;
    requestFormat: import("@sinclair/typebox").TLiteral<"json">;
    parameters: import("@sinclair/typebox").TNever;
    responses: import("@sinclair/typebox").TObject<{
        200: import("@sinclair/typebox").TRecord<import("@sinclair/typebox").TString, import("@sinclair/typebox").TUnknown>;
    }>;
}>;
export type get__categories__id_posts = Static<typeof get__categories__id_posts>;
export declare const get__categories__id_posts: import("@sinclair/typebox").TObject<{
    method: import("@sinclair/typebox").TLiteral<"GET">;
    path: import("@sinclair/typebox").TLiteral<"/categories/:id/posts">;
    requestFormat: import("@sinclair/typebox").TLiteral<"json">;
    parameters: import("@sinclair/typebox").TNever;
    responses: import("@sinclair/typebox").TObject<{
        200: import("@sinclair/typebox").TRecord<import("@sinclair/typebox").TString, import("@sinclair/typebox").TUnknown>;
    }>;
}>;
export type get__orders__id_items = Static<typeof get__orders__id_items>;
export declare const get__orders__id_items: import("@sinclair/typebox").TObject<{
    method: import("@sinclair/typebox").TLiteral<"GET">;
    path: import("@sinclair/typebox").TLiteral<"/orders/:id/items">;
    requestFormat: import("@sinclair/typebox").TLiteral<"json">;
    parameters: import("@sinclair/typebox").TNever;
    responses: import("@sinclair/typebox").TObject<{
        200: import("@sinclair/typebox").TRecord<import("@sinclair/typebox").TString, import("@sinclair/typebox").TUnknown>;
    }>;
}>;
export type get__products_search = Static<typeof get__products_search>;
export declare const get__products_search: import("@sinclair/typebox").TObject<{
    method: import("@sinclair/typebox").TLiteral<"GET">;
    path: import("@sinclair/typebox").TLiteral<"/products/search">;
    requestFormat: import("@sinclair/typebox").TLiteral<"json">;
    parameters: import("@sinclair/typebox").TNever;
    responses: import("@sinclair/typebox").TObject<{
        200: import("@sinclair/typebox").TRecord<import("@sinclair/typebox").TString, import("@sinclair/typebox").TUnknown>;
    }>;
}>;
export type get__posts_search = Static<typeof get__posts_search>;
export declare const get__posts_search: import("@sinclair/typebox").TObject<{
    method: import("@sinclair/typebox").TLiteral<"GET">;
    path: import("@sinclair/typebox").TLiteral<"/posts/search">;
    requestFormat: import("@sinclair/typebox").TLiteral<"json">;
    parameters: import("@sinclair/typebox").TNever;
    responses: import("@sinclair/typebox").TObject<{
        200: import("@sinclair/typebox").TRecord<import("@sinclair/typebox").TString, import("@sinclair/typebox").TUnknown>;
    }>;
}>;
export type get__users_search = Static<typeof get__users_search>;
export declare const get__users_search: import("@sinclair/typebox").TObject<{
    method: import("@sinclair/typebox").TLiteral<"GET">;
    path: import("@sinclair/typebox").TLiteral<"/users/search">;
    requestFormat: import("@sinclair/typebox").TLiteral<"json">;
    parameters: import("@sinclair/typebox").TNever;
    responses: import("@sinclair/typebox").TObject<{
        200: import("@sinclair/typebox").TRecord<import("@sinclair/typebox").TString, import("@sinclair/typebox").TUnknown>;
    }>;
}>;
export type get__featured_posts = Static<typeof get__featured_posts>;
export declare const get__featured_posts: import("@sinclair/typebox").TObject<{
    method: import("@sinclair/typebox").TLiteral<"GET">;
    path: import("@sinclair/typebox").TLiteral<"/featured/posts">;
    requestFormat: import("@sinclair/typebox").TLiteral<"json">;
    parameters: import("@sinclair/typebox").TNever;
    responses: import("@sinclair/typebox").TObject<{
        200: import("@sinclair/typebox").TRecord<import("@sinclair/typebox").TString, import("@sinclair/typebox").TUnknown>;
    }>;
}>;
export type get__published_posts = Static<typeof get__published_posts>;
export declare const get__published_posts: import("@sinclair/typebox").TObject<{
    method: import("@sinclair/typebox").TLiteral<"GET">;
    path: import("@sinclair/typebox").TLiteral<"/published/posts">;
    requestFormat: import("@sinclair/typebox").TLiteral<"json">;
    parameters: import("@sinclair/typebox").TNever;
    responses: import("@sinclair/typebox").TObject<{
        200: import("@sinclair/typebox").TRecord<import("@sinclair/typebox").TString, import("@sinclair/typebox").TUnknown>;
    }>;
}>;
export type get__stats_analytics = Static<typeof get__stats_analytics>;
export declare const get__stats_analytics: import("@sinclair/typebox").TObject<{
    method: import("@sinclair/typebox").TLiteral<"GET">;
    path: import("@sinclair/typebox").TLiteral<"/stats/analytics">;
    requestFormat: import("@sinclair/typebox").TLiteral<"json">;
    parameters: import("@sinclair/typebox").TNever;
    responses: import("@sinclair/typebox").TObject<{
        200: import("@sinclair/typebox").TRecord<import("@sinclair/typebox").TString, import("@sinclair/typebox").TUnknown>;
    }>;
}>;
export type get__stats_daily__date = Static<typeof get__stats_daily__date>;
export declare const get__stats_daily__date: import("@sinclair/typebox").TObject<{
    method: import("@sinclair/typebox").TLiteral<"GET">;
    path: import("@sinclair/typebox").TLiteral<"/stats/daily/:date">;
    requestFormat: import("@sinclair/typebox").TLiteral<"json">;
    parameters: import("@sinclair/typebox").TNever;
    responses: import("@sinclair/typebox").TObject<{
        200: import("@sinclair/typebox").TRecord<import("@sinclair/typebox").TString, import("@sinclair/typebox").TUnknown>;
    }>;
}>;
export type get__inventory_lowStock = Static<typeof get__inventory_lowStock>;
export declare const get__inventory_lowStock: import("@sinclair/typebox").TObject<{
    method: import("@sinclair/typebox").TLiteral<"GET">;
    path: import("@sinclair/typebox").TLiteral<"/inventory/low-stock">;
    requestFormat: import("@sinclair/typebox").TLiteral<"json">;
    parameters: import("@sinclair/typebox").TNever;
    responses: import("@sinclair/typebox").TObject<{
        200: import("@sinclair/typebox").TRecord<import("@sinclair/typebox").TString, import("@sinclair/typebox").TUnknown>;
    }>;
}>;
export type get__orders_byStatus__status = Static<typeof get__orders_byStatus__status>;
export declare const get__orders_byStatus__status: import("@sinclair/typebox").TObject<{
    method: import("@sinclair/typebox").TLiteral<"GET">;
    path: import("@sinclair/typebox").TLiteral<"/orders/by-status/:status">;
    requestFormat: import("@sinclair/typebox").TLiteral<"json">;
    parameters: import("@sinclair/typebox").TNever;
    responses: import("@sinclair/typebox").TObject<{
        200: import("@sinclair/typebox").TRecord<import("@sinclair/typebox").TString, import("@sinclair/typebox").TUnknown>;
    }>;
}>;
export type get__bulk_users = Static<typeof get__bulk_users>;
export declare const get__bulk_users: import("@sinclair/typebox").TObject<{
    method: import("@sinclair/typebox").TLiteral<"GET">;
    path: import("@sinclair/typebox").TLiteral<"/bulk/users">;
    requestFormat: import("@sinclair/typebox").TLiteral<"json">;
    parameters: import("@sinclair/typebox").TNever;
    responses: import("@sinclair/typebox").TObject<{
        200: import("@sinclair/typebox").TRecord<import("@sinclair/typebox").TString, import("@sinclair/typebox").TUnknown>;
    }>;
}>;
export type get__bulk_posts = Static<typeof get__bulk_posts>;
export declare const get__bulk_posts: import("@sinclair/typebox").TObject<{
    method: import("@sinclair/typebox").TLiteral<"GET">;
    path: import("@sinclair/typebox").TLiteral<"/bulk/posts">;
    requestFormat: import("@sinclair/typebox").TLiteral<"json">;
    parameters: import("@sinclair/typebox").TNever;
    responses: import("@sinclair/typebox").TObject<{
        200: import("@sinclair/typebox").TRecord<import("@sinclair/typebox").TString, import("@sinclair/typebox").TUnknown>;
    }>;
}>;
export type get__bulk_products = Static<typeof get__bulk_products>;
export declare const get__bulk_products: import("@sinclair/typebox").TObject<{
    method: import("@sinclair/typebox").TLiteral<"GET">;
    path: import("@sinclair/typebox").TLiteral<"/bulk/products">;
    requestFormat: import("@sinclair/typebox").TLiteral<"json">;
    parameters: import("@sinclair/typebox").TNever;
    responses: import("@sinclair/typebox").TObject<{
        200: import("@sinclair/typebox").TRecord<import("@sinclair/typebox").TString, import("@sinclair/typebox").TUnknown>;
    }>;
}>;
export declare const EndpointByMethod: {
    get: {
        "/users": import("@sinclair/typebox").TObject<{
            method: import("@sinclair/typebox").TLiteral<"GET">;
            path: import("@sinclair/typebox").TLiteral<"/users">;
            requestFormat: import("@sinclair/typebox").TLiteral<"json">;
            parameters: import("@sinclair/typebox").TObject<{
                query: import("@sinclair/typebox").TObject<{
                    _page: import("@sinclair/typebox").TOptional<import("@sinclair/typebox").TNumber>;
                    _limit: import("@sinclair/typebox").TOptional<import("@sinclair/typebox").TNumber>;
                    _sort: import("@sinclair/typebox").TOptional<import("@sinclair/typebox").TString>;
                    _order: import("@sinclair/typebox").TOptional<import("@sinclair/typebox").TUnion<[import("@sinclair/typebox").TLiteral<"asc">, import("@sinclair/typebox").TLiteral<"desc">]>>;
                    q: import("@sinclair/typebox").TOptional<import("@sinclair/typebox").TString>;
                }>;
            }>;
            responses: import("@sinclair/typebox").TObject<{
                200: import("@sinclair/typebox").TArray<import("@sinclair/typebox").TObject<{
                    id: import("@sinclair/typebox").TNumber;
                    username: import("@sinclair/typebox").TOptional<import("@sinclair/typebox").TUnion<[import("@sinclair/typebox").TString, import("@sinclair/typebox").TUndefined]>>;
                    email: import("@sinclair/typebox").TOptional<import("@sinclair/typebox").TUnion<[import("@sinclair/typebox").TString, import("@sinclair/typebox").TUndefined]>>;
                    profile: import("@sinclair/typebox").TOptional<import("@sinclair/typebox").TUnion<[import("@sinclair/typebox").TObject<{
                        firstName: import("@sinclair/typebox").TOptional<import("@sinclair/typebox").TString>;
                        lastName: import("@sinclair/typebox").TOptional<import("@sinclair/typebox").TString>;
                        avatar: import("@sinclair/typebox").TOptional<import("@sinclair/typebox").TString>;
                        bio: import("@sinclair/typebox").TOptional<import("@sinclair/typebox").TString>;
                        location: import("@sinclair/typebox").TOptional<import("@sinclair/typebox").TString>;
                        website: import("@sinclair/typebox").TOptional<import("@sinclair/typebox").TString>;
                    }>, import("@sinclair/typebox").TUndefined]>>;
                    preferences: import("@sinclair/typebox").TOptional<import("@sinclair/typebox").TUnion<[import("@sinclair/typebox").TObject<{
                        theme: import("@sinclair/typebox").TOptional<import("@sinclair/typebox").TString>;
                        notifications: import("@sinclair/typebox").TOptional<import("@sinclair/typebox").TBoolean>;
                        language: import("@sinclair/typebox").TOptional<import("@sinclair/typebox").TString>;
                        timezone: import("@sinclair/typebox").TOptional<import("@sinclair/typebox").TString>;
                        emailNotifications: import("@sinclair/typebox").TOptional<import("@sinclair/typebox").TObject<{
                            marketing: import("@sinclair/typebox").TOptional<import("@sinclair/typebox").TBoolean>;
                            security: import("@sinclair/typebox").TOptional<import("@sinclair/typebox").TBoolean>;
                            updates: import("@sinclair/typebox").TOptional<import("@sinclair/typebox").TBoolean>;
                        }>>;
                    }>, import("@sinclair/typebox").TUndefined]>>;
                    createdAt: import("@sinclair/typebox").TOptional<import("@sinclair/typebox").TUnion<[import("@sinclair/typebox").TString, import("@sinclair/typebox").TUndefined]>>;
                    lastLogin: import("@sinclair/typebox").TOptional<import("@sinclair/typebox").TUnion<[import("@sinclair/typebox").TString, import("@sinclair/typebox").TUndefined]>>;
                    isActive: import("@sinclair/typebox").TOptional<import("@sinclair/typebox").TUnion<[import("@sinclair/typebox").TBoolean, import("@sinclair/typebox").TUndefined]>>;
                    role: import("@sinclair/typebox").TOptional<import("@sinclair/typebox").TUnion<[import("@sinclair/typebox").TString, import("@sinclair/typebox").TUndefined]>>;
                    stats: import("@sinclair/typebox").TOptional<import("@sinclair/typebox").TUnion<[import("@sinclair/typebox").TObject<{
                        postsCreated: import("@sinclair/typebox").TOptional<import("@sinclair/typebox").TNumber>;
                        commentsPosted: import("@sinclair/typebox").TOptional<import("@sinclair/typebox").TNumber>;
                        loginCount: import("@sinclair/typebox").TOptional<import("@sinclair/typebox").TNumber>;
                    }>, import("@sinclair/typebox").TUndefined]>>;
                }>>;
            }>;
        }>;
        "/users/{id}": import("@sinclair/typebox").TObject<{
            method: import("@sinclair/typebox").TLiteral<"GET">;
            path: import("@sinclair/typebox").TLiteral<"/users/{id}">;
            requestFormat: import("@sinclair/typebox").TLiteral<"json">;
            parameters: import("@sinclair/typebox").TObject<{
                path: import("@sinclair/typebox").TObject<{
                    id: import("@sinclair/typebox").TNumber;
                }>;
            }>;
            responses: import("@sinclair/typebox").TObject<{
                200: import("@sinclair/typebox").TObject<{
                    id: import("@sinclair/typebox").TNumber;
                    username: import("@sinclair/typebox").TOptional<import("@sinclair/typebox").TUnion<[import("@sinclair/typebox").TString, import("@sinclair/typebox").TUndefined]>>;
                    email: import("@sinclair/typebox").TOptional<import("@sinclair/typebox").TUnion<[import("@sinclair/typebox").TString, import("@sinclair/typebox").TUndefined]>>;
                    profile: import("@sinclair/typebox").TOptional<import("@sinclair/typebox").TUnion<[import("@sinclair/typebox").TObject<{
                        firstName: import("@sinclair/typebox").TOptional<import("@sinclair/typebox").TString>;
                        lastName: import("@sinclair/typebox").TOptional<import("@sinclair/typebox").TString>;
                        avatar: import("@sinclair/typebox").TOptional<import("@sinclair/typebox").TString>;
                        bio: import("@sinclair/typebox").TOptional<import("@sinclair/typebox").TString>;
                        location: import("@sinclair/typebox").TOptional<import("@sinclair/typebox").TString>;
                        website: import("@sinclair/typebox").TOptional<import("@sinclair/typebox").TString>;
                    }>, import("@sinclair/typebox").TUndefined]>>;
                    preferences: import("@sinclair/typebox").TOptional<import("@sinclair/typebox").TUnion<[import("@sinclair/typebox").TObject<{
                        theme: import("@sinclair/typebox").TOptional<import("@sinclair/typebox").TString>;
                        notifications: import("@sinclair/typebox").TOptional<import("@sinclair/typebox").TBoolean>;
                        language: import("@sinclair/typebox").TOptional<import("@sinclair/typebox").TString>;
                        timezone: import("@sinclair/typebox").TOptional<import("@sinclair/typebox").TString>;
                        emailNotifications: import("@sinclair/typebox").TOptional<import("@sinclair/typebox").TObject<{
                            marketing: import("@sinclair/typebox").TOptional<import("@sinclair/typebox").TBoolean>;
                            security: import("@sinclair/typebox").TOptional<import("@sinclair/typebox").TBoolean>;
                            updates: import("@sinclair/typebox").TOptional<import("@sinclair/typebox").TBoolean>;
                        }>>;
                    }>, import("@sinclair/typebox").TUndefined]>>;
                    createdAt: import("@sinclair/typebox").TOptional<import("@sinclair/typebox").TUnion<[import("@sinclair/typebox").TString, import("@sinclair/typebox").TUndefined]>>;
                    lastLogin: import("@sinclair/typebox").TOptional<import("@sinclair/typebox").TUnion<[import("@sinclair/typebox").TString, import("@sinclair/typebox").TUndefined]>>;
                    isActive: import("@sinclair/typebox").TOptional<import("@sinclair/typebox").TUnion<[import("@sinclair/typebox").TBoolean, import("@sinclair/typebox").TUndefined]>>;
                    role: import("@sinclair/typebox").TOptional<import("@sinclair/typebox").TUnion<[import("@sinclair/typebox").TString, import("@sinclair/typebox").TUndefined]>>;
                    stats: import("@sinclair/typebox").TOptional<import("@sinclair/typebox").TUnion<[import("@sinclair/typebox").TObject<{
                        postsCreated: import("@sinclair/typebox").TOptional<import("@sinclair/typebox").TNumber>;
                        commentsPosted: import("@sinclair/typebox").TOptional<import("@sinclair/typebox").TNumber>;
                        loginCount: import("@sinclair/typebox").TOptional<import("@sinclair/typebox").TNumber>;
                    }>, import("@sinclair/typebox").TUndefined]>>;
                }>;
                404: import("@sinclair/typebox").TUnknown;
            }>;
        }>;
        "/posts": import("@sinclair/typebox").TObject<{
            method: import("@sinclair/typebox").TLiteral<"GET">;
            path: import("@sinclair/typebox").TLiteral<"/posts">;
            requestFormat: import("@sinclair/typebox").TLiteral<"json">;
            parameters: import("@sinclair/typebox").TObject<{
                query: import("@sinclair/typebox").TObject<{
                    _page: import("@sinclair/typebox").TOptional<import("@sinclair/typebox").TNumber>;
                    _limit: import("@sinclair/typebox").TOptional<import("@sinclair/typebox").TNumber>;
                    _sort: import("@sinclair/typebox").TOptional<import("@sinclair/typebox").TString>;
                    _order: import("@sinclair/typebox").TOptional<import("@sinclair/typebox").TUnion<[import("@sinclair/typebox").TLiteral<"asc">, import("@sinclair/typebox").TLiteral<"desc">]>>;
                    q: import("@sinclair/typebox").TOptional<import("@sinclair/typebox").TString>;
                }>;
            }>;
            responses: import("@sinclair/typebox").TObject<{
                200: import("@sinclair/typebox").TArray<import("@sinclair/typebox").TObject<{
                    id: import("@sinclair/typebox").TNumber;
                    title: import("@sinclair/typebox").TOptional<import("@sinclair/typebox").TUnion<[import("@sinclair/typebox").TString, import("@sinclair/typebox").TUndefined]>>;
                    content: import("@sinclair/typebox").TOptional<import("@sinclair/typebox").TUnion<[import("@sinclair/typebox").TString, import("@sinclair/typebox").TUndefined]>>;
                    excerpt: import("@sinclair/typebox").TOptional<import("@sinclair/typebox").TUnion<[import("@sinclair/typebox").TString, import("@sinclair/typebox").TUndefined]>>;
                    authorId: import("@sinclair/typebox").TOptional<import("@sinclair/typebox").TUnion<[import("@sinclair/typebox").TNumber, import("@sinclair/typebox").TUndefined]>>;
                    categoryId: import("@sinclair/typebox").TOptional<import("@sinclair/typebox").TUnion<[import("@sinclair/typebox").TNumber, import("@sinclair/typebox").TUndefined]>>;
                    tags: import("@sinclair/typebox").TOptional<import("@sinclair/typebox").TUnion<[import("@sinclair/typebox").TArray<import("@sinclair/typebox").TString>, import("@sinclair/typebox").TUndefined]>>;
                    status: import("@sinclair/typebox").TOptional<import("@sinclair/typebox").TUnion<[import("@sinclair/typebox").TString, import("@sinclair/typebox").TUndefined]>>;
                    featured: import("@sinclair/typebox").TOptional<import("@sinclair/typebox").TUnion<[import("@sinclair/typebox").TBoolean, import("@sinclair/typebox").TUndefined]>>;
                    metadata: import("@sinclair/typebox").TOptional<import("@sinclair/typebox").TUnion<[import("@sinclair/typebox").TObject<{
                        views: import("@sinclair/typebox").TOptional<import("@sinclair/typebox").TNumber>;
                        likes: import("@sinclair/typebox").TOptional<import("@sinclair/typebox").TNumber>;
                        comments: import("@sinclair/typebox").TOptional<import("@sinclair/typebox").TNumber>;
                        shares: import("@sinclair/typebox").TOptional<import("@sinclair/typebox").TNumber>;
                        bookmarks: import("@sinclair/typebox").TOptional<import("@sinclair/typebox").TNumber>;
                        readTime: import("@sinclair/typebox").TOptional<import("@sinclair/typebox").TNumber>;
                    }>, import("@sinclair/typebox").TUndefined]>>;
                    seo: import("@sinclair/typebox").TOptional<import("@sinclair/typebox").TUnion<[import("@sinclair/typebox").TObject<{
                        slug: import("@sinclair/typebox").TOptional<import("@sinclair/typebox").TString>;
                        metaTitle: import("@sinclair/typebox").TOptional<import("@sinclair/typebox").TString>;
                        metaDescription: import("@sinclair/typebox").TOptional<import("@sinclair/typebox").TString>;
                        keywords: import("@sinclair/typebox").TOptional<import("@sinclair/typebox").TArray<import("@sinclair/typebox").TString>>;
                    }>, import("@sinclair/typebox").TUndefined]>>;
                    createdAt: import("@sinclair/typebox").TOptional<import("@sinclair/typebox").TUnion<[import("@sinclair/typebox").TString, import("@sinclair/typebox").TUndefined]>>;
                    updatedAt: import("@sinclair/typebox").TOptional<import("@sinclair/typebox").TUnion<[import("@sinclair/typebox").TString, import("@sinclair/typebox").TUndefined]>>;
                    publishedAt: import("@sinclair/typebox").TOptional<import("@sinclair/typebox").TUnion<[import("@sinclair/typebox").TString, import("@sinclair/typebox").TUndefined]>>;
                }>>;
            }>;
        }>;
        "/posts/{id}": import("@sinclair/typebox").TObject<{
            method: import("@sinclair/typebox").TLiteral<"GET">;
            path: import("@sinclair/typebox").TLiteral<"/posts/{id}">;
            requestFormat: import("@sinclair/typebox").TLiteral<"json">;
            parameters: import("@sinclair/typebox").TObject<{
                path: import("@sinclair/typebox").TObject<{
                    id: import("@sinclair/typebox").TNumber;
                }>;
            }>;
            responses: import("@sinclair/typebox").TObject<{
                200: import("@sinclair/typebox").TObject<{
                    id: import("@sinclair/typebox").TNumber;
                    title: import("@sinclair/typebox").TOptional<import("@sinclair/typebox").TUnion<[import("@sinclair/typebox").TString, import("@sinclair/typebox").TUndefined]>>;
                    content: import("@sinclair/typebox").TOptional<import("@sinclair/typebox").TUnion<[import("@sinclair/typebox").TString, import("@sinclair/typebox").TUndefined]>>;
                    excerpt: import("@sinclair/typebox").TOptional<import("@sinclair/typebox").TUnion<[import("@sinclair/typebox").TString, import("@sinclair/typebox").TUndefined]>>;
                    authorId: import("@sinclair/typebox").TOptional<import("@sinclair/typebox").TUnion<[import("@sinclair/typebox").TNumber, import("@sinclair/typebox").TUndefined]>>;
                    categoryId: import("@sinclair/typebox").TOptional<import("@sinclair/typebox").TUnion<[import("@sinclair/typebox").TNumber, import("@sinclair/typebox").TUndefined]>>;
                    tags: import("@sinclair/typebox").TOptional<import("@sinclair/typebox").TUnion<[import("@sinclair/typebox").TArray<import("@sinclair/typebox").TString>, import("@sinclair/typebox").TUndefined]>>;
                    status: import("@sinclair/typebox").TOptional<import("@sinclair/typebox").TUnion<[import("@sinclair/typebox").TString, import("@sinclair/typebox").TUndefined]>>;
                    featured: import("@sinclair/typebox").TOptional<import("@sinclair/typebox").TUnion<[import("@sinclair/typebox").TBoolean, import("@sinclair/typebox").TUndefined]>>;
                    metadata: import("@sinclair/typebox").TOptional<import("@sinclair/typebox").TUnion<[import("@sinclair/typebox").TObject<{
                        views: import("@sinclair/typebox").TOptional<import("@sinclair/typebox").TNumber>;
                        likes: import("@sinclair/typebox").TOptional<import("@sinclair/typebox").TNumber>;
                        comments: import("@sinclair/typebox").TOptional<import("@sinclair/typebox").TNumber>;
                        shares: import("@sinclair/typebox").TOptional<import("@sinclair/typebox").TNumber>;
                        bookmarks: import("@sinclair/typebox").TOptional<import("@sinclair/typebox").TNumber>;
                        readTime: import("@sinclair/typebox").TOptional<import("@sinclair/typebox").TNumber>;
                    }>, import("@sinclair/typebox").TUndefined]>>;
                    seo: import("@sinclair/typebox").TOptional<import("@sinclair/typebox").TUnion<[import("@sinclair/typebox").TObject<{
                        slug: import("@sinclair/typebox").TOptional<import("@sinclair/typebox").TString>;
                        metaTitle: import("@sinclair/typebox").TOptional<import("@sinclair/typebox").TString>;
                        metaDescription: import("@sinclair/typebox").TOptional<import("@sinclair/typebox").TString>;
                        keywords: import("@sinclair/typebox").TOptional<import("@sinclair/typebox").TArray<import("@sinclair/typebox").TString>>;
                    }>, import("@sinclair/typebox").TUndefined]>>;
                    createdAt: import("@sinclair/typebox").TOptional<import("@sinclair/typebox").TUnion<[import("@sinclair/typebox").TString, import("@sinclair/typebox").TUndefined]>>;
                    updatedAt: import("@sinclair/typebox").TOptional<import("@sinclair/typebox").TUnion<[import("@sinclair/typebox").TString, import("@sinclair/typebox").TUndefined]>>;
                    publishedAt: import("@sinclair/typebox").TOptional<import("@sinclair/typebox").TUnion<[import("@sinclair/typebox").TString, import("@sinclair/typebox").TUndefined]>>;
                }>;
                404: import("@sinclair/typebox").TUnknown;
            }>;
        }>;
        "/comments": import("@sinclair/typebox").TObject<{
            method: import("@sinclair/typebox").TLiteral<"GET">;
            path: import("@sinclair/typebox").TLiteral<"/comments">;
            requestFormat: import("@sinclair/typebox").TLiteral<"json">;
            parameters: import("@sinclair/typebox").TObject<{
                query: import("@sinclair/typebox").TObject<{
                    _page: import("@sinclair/typebox").TOptional<import("@sinclair/typebox").TNumber>;
                    _limit: import("@sinclair/typebox").TOptional<import("@sinclair/typebox").TNumber>;
                    _sort: import("@sinclair/typebox").TOptional<import("@sinclair/typebox").TString>;
                    _order: import("@sinclair/typebox").TOptional<import("@sinclair/typebox").TUnion<[import("@sinclair/typebox").TLiteral<"asc">, import("@sinclair/typebox").TLiteral<"desc">]>>;
                    q: import("@sinclair/typebox").TOptional<import("@sinclair/typebox").TString>;
                }>;
            }>;
            responses: import("@sinclair/typebox").TObject<{
                200: import("@sinclair/typebox").TArray<import("@sinclair/typebox").TObject<{
                    id: import("@sinclair/typebox").TNumber;
                    postId: import("@sinclair/typebox").TOptional<import("@sinclair/typebox").TUnion<[import("@sinclair/typebox").TNumber, import("@sinclair/typebox").TUndefined]>>;
                    authorId: import("@sinclair/typebox").TOptional<import("@sinclair/typebox").TUnion<[import("@sinclair/typebox").TNumber, import("@sinclair/typebox").TUndefined]>>;
                    content: import("@sinclair/typebox").TOptional<import("@sinclair/typebox").TUnion<[import("@sinclair/typebox").TString, import("@sinclair/typebox").TUndefined]>>;
                    parentId: import("@sinclair/typebox").TOptional<import("@sinclair/typebox").TUnion<[import("@sinclair/typebox").TNull, import("@sinclair/typebox").TUndefined]>>;
                    likes: import("@sinclair/typebox").TOptional<import("@sinclair/typebox").TUnion<[import("@sinclair/typebox").TNumber, import("@sinclair/typebox").TUndefined]>>;
                    isApproved: import("@sinclair/typebox").TOptional<import("@sinclair/typebox").TUnion<[import("@sinclair/typebox").TBoolean, import("@sinclair/typebox").TUndefined]>>;
                    isEdited: import("@sinclair/typebox").TOptional<import("@sinclair/typebox").TUnion<[import("@sinclair/typebox").TBoolean, import("@sinclair/typebox").TUndefined]>>;
                    createdAt: import("@sinclair/typebox").TOptional<import("@sinclair/typebox").TUnion<[import("@sinclair/typebox").TString, import("@sinclair/typebox").TUndefined]>>;
                    updatedAt: import("@sinclair/typebox").TOptional<import("@sinclair/typebox").TUnion<[import("@sinclair/typebox").TString, import("@sinclair/typebox").TUndefined]>>;
                }>>;
            }>;
        }>;
        "/comments/{id}": import("@sinclair/typebox").TObject<{
            method: import("@sinclair/typebox").TLiteral<"GET">;
            path: import("@sinclair/typebox").TLiteral<"/comments/{id}">;
            requestFormat: import("@sinclair/typebox").TLiteral<"json">;
            parameters: import("@sinclair/typebox").TObject<{
                path: import("@sinclair/typebox").TObject<{
                    id: import("@sinclair/typebox").TNumber;
                }>;
            }>;
            responses: import("@sinclair/typebox").TObject<{
                200: import("@sinclair/typebox").TObject<{
                    id: import("@sinclair/typebox").TNumber;
                    postId: import("@sinclair/typebox").TOptional<import("@sinclair/typebox").TUnion<[import("@sinclair/typebox").TNumber, import("@sinclair/typebox").TUndefined]>>;
                    authorId: import("@sinclair/typebox").TOptional<import("@sinclair/typebox").TUnion<[import("@sinclair/typebox").TNumber, import("@sinclair/typebox").TUndefined]>>;
                    content: import("@sinclair/typebox").TOptional<import("@sinclair/typebox").TUnion<[import("@sinclair/typebox").TString, import("@sinclair/typebox").TUndefined]>>;
                    parentId: import("@sinclair/typebox").TOptional<import("@sinclair/typebox").TUnion<[import("@sinclair/typebox").TNull, import("@sinclair/typebox").TUndefined]>>;
                    likes: import("@sinclair/typebox").TOptional<import("@sinclair/typebox").TUnion<[import("@sinclair/typebox").TNumber, import("@sinclair/typebox").TUndefined]>>;
                    isApproved: import("@sinclair/typebox").TOptional<import("@sinclair/typebox").TUnion<[import("@sinclair/typebox").TBoolean, import("@sinclair/typebox").TUndefined]>>;
                    isEdited: import("@sinclair/typebox").TOptional<import("@sinclair/typebox").TUnion<[import("@sinclair/typebox").TBoolean, import("@sinclair/typebox").TUndefined]>>;
                    createdAt: import("@sinclair/typebox").TOptional<import("@sinclair/typebox").TUnion<[import("@sinclair/typebox").TString, import("@sinclair/typebox").TUndefined]>>;
                    updatedAt: import("@sinclair/typebox").TOptional<import("@sinclair/typebox").TUnion<[import("@sinclair/typebox").TString, import("@sinclair/typebox").TUndefined]>>;
                }>;
                404: import("@sinclair/typebox").TUnknown;
            }>;
        }>;
        "/categories": import("@sinclair/typebox").TObject<{
            method: import("@sinclair/typebox").TLiteral<"GET">;
            path: import("@sinclair/typebox").TLiteral<"/categories">;
            requestFormat: import("@sinclair/typebox").TLiteral<"json">;
            parameters: import("@sinclair/typebox").TObject<{
                query: import("@sinclair/typebox").TObject<{
                    _page: import("@sinclair/typebox").TOptional<import("@sinclair/typebox").TNumber>;
                    _limit: import("@sinclair/typebox").TOptional<import("@sinclair/typebox").TNumber>;
                    _sort: import("@sinclair/typebox").TOptional<import("@sinclair/typebox").TString>;
                    _order: import("@sinclair/typebox").TOptional<import("@sinclair/typebox").TUnion<[import("@sinclair/typebox").TLiteral<"asc">, import("@sinclair/typebox").TLiteral<"desc">]>>;
                    q: import("@sinclair/typebox").TOptional<import("@sinclair/typebox").TString>;
                }>;
            }>;
            responses: import("@sinclair/typebox").TObject<{
                200: import("@sinclair/typebox").TArray<import("@sinclair/typebox").TObject<{
                    id: import("@sinclair/typebox").TNumber;
                    name: import("@sinclair/typebox").TOptional<import("@sinclair/typebox").TUnion<[import("@sinclair/typebox").TString, import("@sinclair/typebox").TUndefined]>>;
                    slug: import("@sinclair/typebox").TOptional<import("@sinclair/typebox").TUnion<[import("@sinclair/typebox").TString, import("@sinclair/typebox").TUndefined]>>;
                    description: import("@sinclair/typebox").TOptional<import("@sinclair/typebox").TUnion<[import("@sinclair/typebox").TString, import("@sinclair/typebox").TUndefined]>>;
                    postCount: import("@sinclair/typebox").TOptional<import("@sinclair/typebox").TUnion<[import("@sinclair/typebox").TNumber, import("@sinclair/typebox").TUndefined]>>;
                    color: import("@sinclair/typebox").TOptional<import("@sinclair/typebox").TUnion<[import("@sinclair/typebox").TString, import("@sinclair/typebox").TUndefined]>>;
                    icon: import("@sinclair/typebox").TOptional<import("@sinclair/typebox").TUnion<[import("@sinclair/typebox").TString, import("@sinclair/typebox").TUndefined]>>;
                    isActive: import("@sinclair/typebox").TOptional<import("@sinclair/typebox").TUnion<[import("@sinclair/typebox").TBoolean, import("@sinclair/typebox").TUndefined]>>;
                    parentId: import("@sinclair/typebox").TOptional<import("@sinclair/typebox").TUnion<[import("@sinclair/typebox").TNull, import("@sinclair/typebox").TUndefined]>>;
                    createdAt: import("@sinclair/typebox").TOptional<import("@sinclair/typebox").TUnion<[import("@sinclair/typebox").TString, import("@sinclair/typebox").TUndefined]>>;
                    metadata: import("@sinclair/typebox").TOptional<import("@sinclair/typebox").TUnion<[import("@sinclair/typebox").TObject<{
                        totalViews: import("@sinclair/typebox").TOptional<import("@sinclair/typebox").TNumber>;
                        averageRating: import("@sinclair/typebox").TOptional<import("@sinclair/typebox").TNumber>;
                    }>, import("@sinclair/typebox").TUndefined]>>;
                }>>;
            }>;
        }>;
        "/categories/{id}": import("@sinclair/typebox").TObject<{
            method: import("@sinclair/typebox").TLiteral<"GET">;
            path: import("@sinclair/typebox").TLiteral<"/categories/{id}">;
            requestFormat: import("@sinclair/typebox").TLiteral<"json">;
            parameters: import("@sinclair/typebox").TObject<{
                path: import("@sinclair/typebox").TObject<{
                    id: import("@sinclair/typebox").TNumber;
                }>;
            }>;
            responses: import("@sinclair/typebox").TObject<{
                200: import("@sinclair/typebox").TObject<{
                    id: import("@sinclair/typebox").TNumber;
                    name: import("@sinclair/typebox").TOptional<import("@sinclair/typebox").TUnion<[import("@sinclair/typebox").TString, import("@sinclair/typebox").TUndefined]>>;
                    slug: import("@sinclair/typebox").TOptional<import("@sinclair/typebox").TUnion<[import("@sinclair/typebox").TString, import("@sinclair/typebox").TUndefined]>>;
                    description: import("@sinclair/typebox").TOptional<import("@sinclair/typebox").TUnion<[import("@sinclair/typebox").TString, import("@sinclair/typebox").TUndefined]>>;
                    postCount: import("@sinclair/typebox").TOptional<import("@sinclair/typebox").TUnion<[import("@sinclair/typebox").TNumber, import("@sinclair/typebox").TUndefined]>>;
                    color: import("@sinclair/typebox").TOptional<import("@sinclair/typebox").TUnion<[import("@sinclair/typebox").TString, import("@sinclair/typebox").TUndefined]>>;
                    icon: import("@sinclair/typebox").TOptional<import("@sinclair/typebox").TUnion<[import("@sinclair/typebox").TString, import("@sinclair/typebox").TUndefined]>>;
                    isActive: import("@sinclair/typebox").TOptional<import("@sinclair/typebox").TUnion<[import("@sinclair/typebox").TBoolean, import("@sinclair/typebox").TUndefined]>>;
                    parentId: import("@sinclair/typebox").TOptional<import("@sinclair/typebox").TUnion<[import("@sinclair/typebox").TNull, import("@sinclair/typebox").TUndefined]>>;
                    createdAt: import("@sinclair/typebox").TOptional<import("@sinclair/typebox").TUnion<[import("@sinclair/typebox").TString, import("@sinclair/typebox").TUndefined]>>;
                    metadata: import("@sinclair/typebox").TOptional<import("@sinclair/typebox").TUnion<[import("@sinclair/typebox").TObject<{
                        totalViews: import("@sinclair/typebox").TOptional<import("@sinclair/typebox").TNumber>;
                        averageRating: import("@sinclair/typebox").TOptional<import("@sinclair/typebox").TNumber>;
                    }>, import("@sinclair/typebox").TUndefined]>>;
                }>;
                404: import("@sinclair/typebox").TUnknown;
            }>;
        }>;
        "/products": import("@sinclair/typebox").TObject<{
            method: import("@sinclair/typebox").TLiteral<"GET">;
            path: import("@sinclair/typebox").TLiteral<"/products">;
            requestFormat: import("@sinclair/typebox").TLiteral<"json">;
            parameters: import("@sinclair/typebox").TObject<{
                query: import("@sinclair/typebox").TObject<{
                    _page: import("@sinclair/typebox").TOptional<import("@sinclair/typebox").TNumber>;
                    _limit: import("@sinclair/typebox").TOptional<import("@sinclair/typebox").TNumber>;
                    _sort: import("@sinclair/typebox").TOptional<import("@sinclair/typebox").TString>;
                    _order: import("@sinclair/typebox").TOptional<import("@sinclair/typebox").TUnion<[import("@sinclair/typebox").TLiteral<"asc">, import("@sinclair/typebox").TLiteral<"desc">]>>;
                    q: import("@sinclair/typebox").TOptional<import("@sinclair/typebox").TString>;
                }>;
            }>;
            responses: import("@sinclair/typebox").TObject<{
                200: import("@sinclair/typebox").TArray<import("@sinclair/typebox").TObject<{
                    id: import("@sinclair/typebox").TNumber;
                    name: import("@sinclair/typebox").TOptional<import("@sinclair/typebox").TUnion<[import("@sinclair/typebox").TString, import("@sinclair/typebox").TUndefined]>>;
                    description: import("@sinclair/typebox").TOptional<import("@sinclair/typebox").TUnion<[import("@sinclair/typebox").TString, import("@sinclair/typebox").TUndefined]>>;
                    shortDescription: import("@sinclair/typebox").TOptional<import("@sinclair/typebox").TUnion<[import("@sinclair/typebox").TString, import("@sinclair/typebox").TUndefined]>>;
                    price: import("@sinclair/typebox").TOptional<import("@sinclair/typebox").TUnion<[import("@sinclair/typebox").TNumber, import("@sinclair/typebox").TUndefined]>>;
                    originalPrice: import("@sinclair/typebox").TOptional<import("@sinclair/typebox").TUnion<[import("@sinclair/typebox").TNumber, import("@sinclair/typebox").TUndefined]>>;
                    currency: import("@sinclair/typebox").TOptional<import("@sinclair/typebox").TUnion<[import("@sinclair/typebox").TString, import("@sinclair/typebox").TUndefined]>>;
                    categoryId: import("@sinclair/typebox").TOptional<import("@sinclair/typebox").TUnion<[import("@sinclair/typebox").TNumber, import("@sinclair/typebox").TUndefined]>>;
                    brand: import("@sinclair/typebox").TOptional<import("@sinclair/typebox").TUnion<[import("@sinclair/typebox").TString, import("@sinclair/typebox").TUndefined]>>;
                    model: import("@sinclair/typebox").TOptional<import("@sinclair/typebox").TUnion<[import("@sinclair/typebox").TString, import("@sinclair/typebox").TUndefined]>>;
                    sku: import("@sinclair/typebox").TOptional<import("@sinclair/typebox").TUnion<[import("@sinclair/typebox").TString, import("@sinclair/typebox").TUndefined]>>;
                    barcode: import("@sinclair/typebox").TOptional<import("@sinclair/typebox").TUnion<[import("@sinclair/typebox").TString, import("@sinclair/typebox").TUndefined]>>;
                    inventory: import("@sinclair/typebox").TOptional<import("@sinclair/typebox").TUnion<[import("@sinclair/typebox").TObject<{
                        inStock: import("@sinclair/typebox").TOptional<import("@sinclair/typebox").TNumber>;
                        reserved: import("@sinclair/typebox").TOptional<import("@sinclair/typebox").TNumber>;
                        available: import("@sinclair/typebox").TOptional<import("@sinclair/typebox").TNumber>;
                        lowStockThreshold: import("@sinclair/typebox").TOptional<import("@sinclair/typebox").TNumber>;
                    }>, import("@sinclair/typebox").TUndefined]>>;
                    images: import("@sinclair/typebox").TOptional<import("@sinclair/typebox").TUnion<[import("@sinclair/typebox").TArray<import("@sinclair/typebox").TString>, import("@sinclair/typebox").TUndefined]>>;
                    specifications: import("@sinclair/typebox").TOptional<import("@sinclair/typebox").TUnion<[import("@sinclair/typebox").TObject<{
                        batteryLife: import("@sinclair/typebox").TOptional<import("@sinclair/typebox").TString>;
                        chargingTime: import("@sinclair/typebox").TOptional<import("@sinclair/typebox").TString>;
                        connectivity: import("@sinclair/typebox").TOptional<import("@sinclair/typebox").TString>;
                        weight: import("@sinclair/typebox").TOptional<import("@sinclair/typebox").TString>;
                        dimensions: import("@sinclair/typebox").TOptional<import("@sinclair/typebox").TString>;
                        colors: import("@sinclair/typebox").TOptional<import("@sinclair/typebox").TArray<import("@sinclair/typebox").TString>>;
                        warranty: import("@sinclair/typebox").TOptional<import("@sinclair/typebox").TString>;
                    }>, import("@sinclair/typebox").TUndefined]>>;
                    features: import("@sinclair/typebox").TOptional<import("@sinclair/typebox").TUnion<[import("@sinclair/typebox").TArray<import("@sinclair/typebox").TString>, import("@sinclair/typebox").TUndefined]>>;
                    ratings: import("@sinclair/typebox").TOptional<import("@sinclair/typebox").TUnion<[import("@sinclair/typebox").TObject<{
                        average: import("@sinclair/typebox").TOptional<import("@sinclair/typebox").TNumber>;
                        count: import("@sinclair/typebox").TOptional<import("@sinclair/typebox").TNumber>;
                        breakdown: import("@sinclair/typebox").TOptional<import("@sinclair/typebox").TObject<{
                            1: import("@sinclair/typebox").TOptional<import("@sinclair/typebox").TNumber>;
                            2: import("@sinclair/typebox").TOptional<import("@sinclair/typebox").TNumber>;
                            3: import("@sinclair/typebox").TOptional<import("@sinclair/typebox").TNumber>;
                            4: import("@sinclair/typebox").TOptional<import("@sinclair/typebox").TNumber>;
                            5: import("@sinclair/typebox").TOptional<import("@sinclair/typebox").TNumber>;
                        }>>;
                    }>, import("@sinclair/typebox").TUndefined]>>;
                    tags: import("@sinclair/typebox").TOptional<import("@sinclair/typebox").TUnion<[import("@sinclair/typebox").TArray<import("@sinclair/typebox").TString>, import("@sinclair/typebox").TUndefined]>>;
                    isActive: import("@sinclair/typebox").TOptional<import("@sinclair/typebox").TUnion<[import("@sinclair/typebox").TBoolean, import("@sinclair/typebox").TUndefined]>>;
                    isFeatured: import("@sinclair/typebox").TOptional<import("@sinclair/typebox").TUnion<[import("@sinclair/typebox").TBoolean, import("@sinclair/typebox").TUndefined]>>;
                    createdAt: import("@sinclair/typebox").TOptional<import("@sinclair/typebox").TUnion<[import("@sinclair/typebox").TString, import("@sinclair/typebox").TUndefined]>>;
                    updatedAt: import("@sinclair/typebox").TOptional<import("@sinclair/typebox").TUnion<[import("@sinclair/typebox").TString, import("@sinclair/typebox").TUndefined]>>;
                }>>;
            }>;
        }>;
        "/products/{id}": import("@sinclair/typebox").TObject<{
            method: import("@sinclair/typebox").TLiteral<"GET">;
            path: import("@sinclair/typebox").TLiteral<"/products/{id}">;
            requestFormat: import("@sinclair/typebox").TLiteral<"json">;
            parameters: import("@sinclair/typebox").TObject<{
                path: import("@sinclair/typebox").TObject<{
                    id: import("@sinclair/typebox").TNumber;
                }>;
            }>;
            responses: import("@sinclair/typebox").TObject<{
                200: import("@sinclair/typebox").TObject<{
                    id: import("@sinclair/typebox").TNumber;
                    name: import("@sinclair/typebox").TOptional<import("@sinclair/typebox").TUnion<[import("@sinclair/typebox").TString, import("@sinclair/typebox").TUndefined]>>;
                    description: import("@sinclair/typebox").TOptional<import("@sinclair/typebox").TUnion<[import("@sinclair/typebox").TString, import("@sinclair/typebox").TUndefined]>>;
                    shortDescription: import("@sinclair/typebox").TOptional<import("@sinclair/typebox").TUnion<[import("@sinclair/typebox").TString, import("@sinclair/typebox").TUndefined]>>;
                    price: import("@sinclair/typebox").TOptional<import("@sinclair/typebox").TUnion<[import("@sinclair/typebox").TNumber, import("@sinclair/typebox").TUndefined]>>;
                    originalPrice: import("@sinclair/typebox").TOptional<import("@sinclair/typebox").TUnion<[import("@sinclair/typebox").TNumber, import("@sinclair/typebox").TUndefined]>>;
                    currency: import("@sinclair/typebox").TOptional<import("@sinclair/typebox").TUnion<[import("@sinclair/typebox").TString, import("@sinclair/typebox").TUndefined]>>;
                    categoryId: import("@sinclair/typebox").TOptional<import("@sinclair/typebox").TUnion<[import("@sinclair/typebox").TNumber, import("@sinclair/typebox").TUndefined]>>;
                    brand: import("@sinclair/typebox").TOptional<import("@sinclair/typebox").TUnion<[import("@sinclair/typebox").TString, import("@sinclair/typebox").TUndefined]>>;
                    model: import("@sinclair/typebox").TOptional<import("@sinclair/typebox").TUnion<[import("@sinclair/typebox").TString, import("@sinclair/typebox").TUndefined]>>;
                    sku: import("@sinclair/typebox").TOptional<import("@sinclair/typebox").TUnion<[import("@sinclair/typebox").TString, import("@sinclair/typebox").TUndefined]>>;
                    barcode: import("@sinclair/typebox").TOptional<import("@sinclair/typebox").TUnion<[import("@sinclair/typebox").TString, import("@sinclair/typebox").TUndefined]>>;
                    inventory: import("@sinclair/typebox").TOptional<import("@sinclair/typebox").TUnion<[import("@sinclair/typebox").TObject<{
                        inStock: import("@sinclair/typebox").TOptional<import("@sinclair/typebox").TNumber>;
                        reserved: import("@sinclair/typebox").TOptional<import("@sinclair/typebox").TNumber>;
                        available: import("@sinclair/typebox").TOptional<import("@sinclair/typebox").TNumber>;
                        lowStockThreshold: import("@sinclair/typebox").TOptional<import("@sinclair/typebox").TNumber>;
                    }>, import("@sinclair/typebox").TUndefined]>>;
                    images: import("@sinclair/typebox").TOptional<import("@sinclair/typebox").TUnion<[import("@sinclair/typebox").TArray<import("@sinclair/typebox").TString>, import("@sinclair/typebox").TUndefined]>>;
                    specifications: import("@sinclair/typebox").TOptional<import("@sinclair/typebox").TUnion<[import("@sinclair/typebox").TObject<{
                        batteryLife: import("@sinclair/typebox").TOptional<import("@sinclair/typebox").TString>;
                        chargingTime: import("@sinclair/typebox").TOptional<import("@sinclair/typebox").TString>;
                        connectivity: import("@sinclair/typebox").TOptional<import("@sinclair/typebox").TString>;
                        weight: import("@sinclair/typebox").TOptional<import("@sinclair/typebox").TString>;
                        dimensions: import("@sinclair/typebox").TOptional<import("@sinclair/typebox").TString>;
                        colors: import("@sinclair/typebox").TOptional<import("@sinclair/typebox").TArray<import("@sinclair/typebox").TString>>;
                        warranty: import("@sinclair/typebox").TOptional<import("@sinclair/typebox").TString>;
                    }>, import("@sinclair/typebox").TUndefined]>>;
                    features: import("@sinclair/typebox").TOptional<import("@sinclair/typebox").TUnion<[import("@sinclair/typebox").TArray<import("@sinclair/typebox").TString>, import("@sinclair/typebox").TUndefined]>>;
                    ratings: import("@sinclair/typebox").TOptional<import("@sinclair/typebox").TUnion<[import("@sinclair/typebox").TObject<{
                        average: import("@sinclair/typebox").TOptional<import("@sinclair/typebox").TNumber>;
                        count: import("@sinclair/typebox").TOptional<import("@sinclair/typebox").TNumber>;
                        breakdown: import("@sinclair/typebox").TOptional<import("@sinclair/typebox").TObject<{
                            1: import("@sinclair/typebox").TOptional<import("@sinclair/typebox").TNumber>;
                            2: import("@sinclair/typebox").TOptional<import("@sinclair/typebox").TNumber>;
                            3: import("@sinclair/typebox").TOptional<import("@sinclair/typebox").TNumber>;
                            4: import("@sinclair/typebox").TOptional<import("@sinclair/typebox").TNumber>;
                            5: import("@sinclair/typebox").TOptional<import("@sinclair/typebox").TNumber>;
                        }>>;
                    }>, import("@sinclair/typebox").TUndefined]>>;
                    tags: import("@sinclair/typebox").TOptional<import("@sinclair/typebox").TUnion<[import("@sinclair/typebox").TArray<import("@sinclair/typebox").TString>, import("@sinclair/typebox").TUndefined]>>;
                    isActive: import("@sinclair/typebox").TOptional<import("@sinclair/typebox").TUnion<[import("@sinclair/typebox").TBoolean, import("@sinclair/typebox").TUndefined]>>;
                    isFeatured: import("@sinclair/typebox").TOptional<import("@sinclair/typebox").TUnion<[import("@sinclair/typebox").TBoolean, import("@sinclair/typebox").TUndefined]>>;
                    createdAt: import("@sinclair/typebox").TOptional<import("@sinclair/typebox").TUnion<[import("@sinclair/typebox").TString, import("@sinclair/typebox").TUndefined]>>;
                    updatedAt: import("@sinclair/typebox").TOptional<import("@sinclair/typebox").TUnion<[import("@sinclair/typebox").TString, import("@sinclair/typebox").TUndefined]>>;
                }>;
                404: import("@sinclair/typebox").TUnknown;
            }>;
        }>;
        "/orders": import("@sinclair/typebox").TObject<{
            method: import("@sinclair/typebox").TLiteral<"GET">;
            path: import("@sinclair/typebox").TLiteral<"/orders">;
            requestFormat: import("@sinclair/typebox").TLiteral<"json">;
            parameters: import("@sinclair/typebox").TObject<{
                query: import("@sinclair/typebox").TObject<{
                    _page: import("@sinclair/typebox").TOptional<import("@sinclair/typebox").TNumber>;
                    _limit: import("@sinclair/typebox").TOptional<import("@sinclair/typebox").TNumber>;
                    _sort: import("@sinclair/typebox").TOptional<import("@sinclair/typebox").TString>;
                    _order: import("@sinclair/typebox").TOptional<import("@sinclair/typebox").TUnion<[import("@sinclair/typebox").TLiteral<"asc">, import("@sinclair/typebox").TLiteral<"desc">]>>;
                    q: import("@sinclair/typebox").TOptional<import("@sinclair/typebox").TString>;
                }>;
            }>;
            responses: import("@sinclair/typebox").TObject<{
                200: import("@sinclair/typebox").TArray<import("@sinclair/typebox").TObject<{
                    id: import("@sinclair/typebox").TNumber;
                    userId: import("@sinclair/typebox").TOptional<import("@sinclair/typebox").TUnion<[import("@sinclair/typebox").TNumber, import("@sinclair/typebox").TUndefined]>>;
                    orderNumber: import("@sinclair/typebox").TOptional<import("@sinclair/typebox").TUnion<[import("@sinclair/typebox").TString, import("@sinclair/typebox").TUndefined]>>;
                    items: import("@sinclair/typebox").TOptional<import("@sinclair/typebox").TUnion<[import("@sinclair/typebox").TArray<import("@sinclair/typebox").TObject<{
                        productId: import("@sinclair/typebox").TOptional<import("@sinclair/typebox").TNumber>;
                        productName: import("@sinclair/typebox").TOptional<import("@sinclair/typebox").TString>;
                        quantity: import("@sinclair/typebox").TOptional<import("@sinclair/typebox").TNumber>;
                        unitPrice: import("@sinclair/typebox").TOptional<import("@sinclair/typebox").TNumber>;
                        totalPrice: import("@sinclair/typebox").TOptional<import("@sinclair/typebox").TNumber>;
                        sku: import("@sinclair/typebox").TOptional<import("@sinclair/typebox").TString>;
                    }>>, import("@sinclair/typebox").TUndefined]>>;
                    status: import("@sinclair/typebox").TOptional<import("@sinclair/typebox").TUnion<[import("@sinclair/typebox").TString, import("@sinclair/typebox").TUndefined]>>;
                    paymentStatus: import("@sinclair/typebox").TOptional<import("@sinclair/typebox").TUnion<[import("@sinclair/typebox").TString, import("@sinclair/typebox").TUndefined]>>;
                    shippingMethod: import("@sinclair/typebox").TOptional<import("@sinclair/typebox").TUnion<[import("@sinclair/typebox").TString, import("@sinclair/typebox").TUndefined]>>;
                    trackingNumber: import("@sinclair/typebox").TOptional<import("@sinclair/typebox").TUnion<[import("@sinclair/typebox").TString, import("@sinclair/typebox").TUndefined]>>;
                    addresses: import("@sinclair/typebox").TOptional<import("@sinclair/typebox").TUnion<[import("@sinclair/typebox").TObject<{
                        shipping: import("@sinclair/typebox").TOptional<import("@sinclair/typebox").TObject<{
                            name: import("@sinclair/typebox").TOptional<import("@sinclair/typebox").TString>;
                            street: import("@sinclair/typebox").TOptional<import("@sinclair/typebox").TString>;
                            apartment: import("@sinclair/typebox").TOptional<import("@sinclair/typebox").TString>;
                            city: import("@sinclair/typebox").TOptional<import("@sinclair/typebox").TString>;
                            state: import("@sinclair/typebox").TOptional<import("@sinclair/typebox").TString>;
                            zipCode: import("@sinclair/typebox").TOptional<import("@sinclair/typebox").TString>;
                            country: import("@sinclair/typebox").TOptional<import("@sinclair/typebox").TString>;
                            phone: import("@sinclair/typebox").TOptional<import("@sinclair/typebox").TString>;
                        }>>;
                        billing: import("@sinclair/typebox").TOptional<import("@sinclair/typebox").TObject<{
                            name: import("@sinclair/typebox").TOptional<import("@sinclair/typebox").TString>;
                            street: import("@sinclair/typebox").TOptional<import("@sinclair/typebox").TString>;
                            apartment: import("@sinclair/typebox").TOptional<import("@sinclair/typebox").TString>;
                            city: import("@sinclair/typebox").TOptional<import("@sinclair/typebox").TString>;
                            state: import("@sinclair/typebox").TOptional<import("@sinclair/typebox").TString>;
                            zipCode: import("@sinclair/typebox").TOptional<import("@sinclair/typebox").TString>;
                            country: import("@sinclair/typebox").TOptional<import("@sinclair/typebox").TString>;
                            phone: import("@sinclair/typebox").TOptional<import("@sinclair/typebox").TString>;
                        }>>;
                    }>, import("@sinclair/typebox").TUndefined]>>;
                    totals: import("@sinclair/typebox").TOptional<import("@sinclair/typebox").TUnion<[import("@sinclair/typebox").TObject<{
                        subtotal: import("@sinclair/typebox").TOptional<import("@sinclair/typebox").TNumber>;
                        tax: import("@sinclair/typebox").TOptional<import("@sinclair/typebox").TNumber>;
                        shipping: import("@sinclair/typebox").TOptional<import("@sinclair/typebox").TNumber>;
                        discount: import("@sinclair/typebox").TOptional<import("@sinclair/typebox").TNumber>;
                        total: import("@sinclair/typebox").TOptional<import("@sinclair/typebox").TNumber>;
                    }>, import("@sinclair/typebox").TUndefined]>>;
                    timeline: import("@sinclair/typebox").TOptional<import("@sinclair/typebox").TUnion<[import("@sinclair/typebox").TArray<import("@sinclair/typebox").TObject<{
                        status: import("@sinclair/typebox").TOptional<import("@sinclair/typebox").TString>;
                        timestamp: import("@sinclair/typebox").TOptional<import("@sinclair/typebox").TString>;
                        note: import("@sinclair/typebox").TOptional<import("@sinclair/typebox").TString>;
                    }>>, import("@sinclair/typebox").TUndefined]>>;
                    createdAt: import("@sinclair/typebox").TOptional<import("@sinclair/typebox").TUnion<[import("@sinclair/typebox").TString, import("@sinclair/typebox").TUndefined]>>;
                    updatedAt: import("@sinclair/typebox").TOptional<import("@sinclair/typebox").TUnion<[import("@sinclair/typebox").TString, import("@sinclair/typebox").TUndefined]>>;
                }>>;
            }>;
        }>;
        "/orders/{id}": import("@sinclair/typebox").TObject<{
            method: import("@sinclair/typebox").TLiteral<"GET">;
            path: import("@sinclair/typebox").TLiteral<"/orders/{id}">;
            requestFormat: import("@sinclair/typebox").TLiteral<"json">;
            parameters: import("@sinclair/typebox").TObject<{
                path: import("@sinclair/typebox").TObject<{
                    id: import("@sinclair/typebox").TNumber;
                }>;
            }>;
            responses: import("@sinclair/typebox").TObject<{
                200: import("@sinclair/typebox").TObject<{
                    id: import("@sinclair/typebox").TNumber;
                    userId: import("@sinclair/typebox").TOptional<import("@sinclair/typebox").TUnion<[import("@sinclair/typebox").TNumber, import("@sinclair/typebox").TUndefined]>>;
                    orderNumber: import("@sinclair/typebox").TOptional<import("@sinclair/typebox").TUnion<[import("@sinclair/typebox").TString, import("@sinclair/typebox").TUndefined]>>;
                    items: import("@sinclair/typebox").TOptional<import("@sinclair/typebox").TUnion<[import("@sinclair/typebox").TArray<import("@sinclair/typebox").TObject<{
                        productId: import("@sinclair/typebox").TOptional<import("@sinclair/typebox").TNumber>;
                        productName: import("@sinclair/typebox").TOptional<import("@sinclair/typebox").TString>;
                        quantity: import("@sinclair/typebox").TOptional<import("@sinclair/typebox").TNumber>;
                        unitPrice: import("@sinclair/typebox").TOptional<import("@sinclair/typebox").TNumber>;
                        totalPrice: import("@sinclair/typebox").TOptional<import("@sinclair/typebox").TNumber>;
                        sku: import("@sinclair/typebox").TOptional<import("@sinclair/typebox").TString>;
                    }>>, import("@sinclair/typebox").TUndefined]>>;
                    status: import("@sinclair/typebox").TOptional<import("@sinclair/typebox").TUnion<[import("@sinclair/typebox").TString, import("@sinclair/typebox").TUndefined]>>;
                    paymentStatus: import("@sinclair/typebox").TOptional<import("@sinclair/typebox").TUnion<[import("@sinclair/typebox").TString, import("@sinclair/typebox").TUndefined]>>;
                    shippingMethod: import("@sinclair/typebox").TOptional<import("@sinclair/typebox").TUnion<[import("@sinclair/typebox").TString, import("@sinclair/typebox").TUndefined]>>;
                    trackingNumber: import("@sinclair/typebox").TOptional<import("@sinclair/typebox").TUnion<[import("@sinclair/typebox").TString, import("@sinclair/typebox").TUndefined]>>;
                    addresses: import("@sinclair/typebox").TOptional<import("@sinclair/typebox").TUnion<[import("@sinclair/typebox").TObject<{
                        shipping: import("@sinclair/typebox").TOptional<import("@sinclair/typebox").TObject<{
                            name: import("@sinclair/typebox").TOptional<import("@sinclair/typebox").TString>;
                            street: import("@sinclair/typebox").TOptional<import("@sinclair/typebox").TString>;
                            apartment: import("@sinclair/typebox").TOptional<import("@sinclair/typebox").TString>;
                            city: import("@sinclair/typebox").TOptional<import("@sinclair/typebox").TString>;
                            state: import("@sinclair/typebox").TOptional<import("@sinclair/typebox").TString>;
                            zipCode: import("@sinclair/typebox").TOptional<import("@sinclair/typebox").TString>;
                            country: import("@sinclair/typebox").TOptional<import("@sinclair/typebox").TString>;
                            phone: import("@sinclair/typebox").TOptional<import("@sinclair/typebox").TString>;
                        }>>;
                        billing: import("@sinclair/typebox").TOptional<import("@sinclair/typebox").TObject<{
                            name: import("@sinclair/typebox").TOptional<import("@sinclair/typebox").TString>;
                            street: import("@sinclair/typebox").TOptional<import("@sinclair/typebox").TString>;
                            apartment: import("@sinclair/typebox").TOptional<import("@sinclair/typebox").TString>;
                            city: import("@sinclair/typebox").TOptional<import("@sinclair/typebox").TString>;
                            state: import("@sinclair/typebox").TOptional<import("@sinclair/typebox").TString>;
                            zipCode: import("@sinclair/typebox").TOptional<import("@sinclair/typebox").TString>;
                            country: import("@sinclair/typebox").TOptional<import("@sinclair/typebox").TString>;
                            phone: import("@sinclair/typebox").TOptional<import("@sinclair/typebox").TString>;
                        }>>;
                    }>, import("@sinclair/typebox").TUndefined]>>;
                    totals: import("@sinclair/typebox").TOptional<import("@sinclair/typebox").TUnion<[import("@sinclair/typebox").TObject<{
                        subtotal: import("@sinclair/typebox").TOptional<import("@sinclair/typebox").TNumber>;
                        tax: import("@sinclair/typebox").TOptional<import("@sinclair/typebox").TNumber>;
                        shipping: import("@sinclair/typebox").TOptional<import("@sinclair/typebox").TNumber>;
                        discount: import("@sinclair/typebox").TOptional<import("@sinclair/typebox").TNumber>;
                        total: import("@sinclair/typebox").TOptional<import("@sinclair/typebox").TNumber>;
                    }>, import("@sinclair/typebox").TUndefined]>>;
                    timeline: import("@sinclair/typebox").TOptional<import("@sinclair/typebox").TUnion<[import("@sinclair/typebox").TArray<import("@sinclair/typebox").TObject<{
                        status: import("@sinclair/typebox").TOptional<import("@sinclair/typebox").TString>;
                        timestamp: import("@sinclair/typebox").TOptional<import("@sinclair/typebox").TString>;
                        note: import("@sinclair/typebox").TOptional<import("@sinclair/typebox").TString>;
                    }>>, import("@sinclair/typebox").TUndefined]>>;
                    createdAt: import("@sinclair/typebox").TOptional<import("@sinclair/typebox").TUnion<[import("@sinclair/typebox").TString, import("@sinclair/typebox").TUndefined]>>;
                    updatedAt: import("@sinclair/typebox").TOptional<import("@sinclair/typebox").TUnion<[import("@sinclair/typebox").TString, import("@sinclair/typebox").TUndefined]>>;
                }>;
                404: import("@sinclair/typebox").TUnknown;
            }>;
        }>;
        "/analytics": import("@sinclair/typebox").TObject<{
            method: import("@sinclair/typebox").TLiteral<"GET">;
            path: import("@sinclair/typebox").TLiteral<"/analytics">;
            requestFormat: import("@sinclair/typebox").TLiteral<"json">;
            parameters: import("@sinclair/typebox").TObject<{
                query: import("@sinclair/typebox").TObject<{
                    _page: import("@sinclair/typebox").TOptional<import("@sinclair/typebox").TNumber>;
                    _limit: import("@sinclair/typebox").TOptional<import("@sinclair/typebox").TNumber>;
                    _sort: import("@sinclair/typebox").TOptional<import("@sinclair/typebox").TString>;
                    _order: import("@sinclair/typebox").TOptional<import("@sinclair/typebox").TUnion<[import("@sinclair/typebox").TLiteral<"asc">, import("@sinclair/typebox").TLiteral<"desc">]>>;
                    q: import("@sinclair/typebox").TOptional<import("@sinclair/typebox").TString>;
                }>;
            }>;
            responses: import("@sinclair/typebox").TObject<{
                200: import("@sinclair/typebox").TArray<import("@sinclair/typebox").TObject<{
                    id: import("@sinclair/typebox").TNumber;
                    date: import("@sinclair/typebox").TOptional<import("@sinclair/typebox").TUnion<[import("@sinclair/typebox").TString, import("@sinclair/typebox").TUndefined]>>;
                    period: import("@sinclair/typebox").TOptional<import("@sinclair/typebox").TUnion<[import("@sinclair/typebox").TString, import("@sinclair/typebox").TUndefined]>>;
                    metrics: import("@sinclair/typebox").TOptional<import("@sinclair/typebox").TUnion<[import("@sinclair/typebox").TObject<{
                        users: import("@sinclair/typebox").TOptional<import("@sinclair/typebox").TObject<{
                            total: import("@sinclair/typebox").TOptional<import("@sinclair/typebox").TNumber>;
                            new: import("@sinclair/typebox").TOptional<import("@sinclair/typebox").TNumber>;
                            returning: import("@sinclair/typebox").TOptional<import("@sinclair/typebox").TNumber>;
                            active: import("@sinclair/typebox").TOptional<import("@sinclair/typebox").TNumber>;
                        }>>;
                        traffic: import("@sinclair/typebox").TOptional<import("@sinclair/typebox").TObject<{
                            pageViews: import("@sinclair/typebox").TOptional<import("@sinclair/typebox").TNumber>;
                            uniqueViews: import("@sinclair/typebox").TOptional<import("@sinclair/typebox").TNumber>;
                            bounceRate: import("@sinclair/typebox").TOptional<import("@sinclair/typebox").TNumber>;
                            avgSessionDuration: import("@sinclair/typebox").TOptional<import("@sinclair/typebox").TNumber>;
                            topPages: import("@sinclair/typebox").TOptional<import("@sinclair/typebox").TArray<import("@sinclair/typebox").TObject<{
                                path: import("@sinclair/typebox").TOptional<import("@sinclair/typebox").TString>;
                                views: import("@sinclair/typebox").TOptional<import("@sinclair/typebox").TNumber>;
                            }>>>;
                        }>>;
                        performance: import("@sinclair/typebox").TOptional<import("@sinclair/typebox").TObject<{
                            avgLoadTime: import("@sinclair/typebox").TOptional<import("@sinclair/typebox").TNumber>;
                            apiCalls: import("@sinclair/typebox").TOptional<import("@sinclair/typebox").TNumber>;
                            cacheHitRate: import("@sinclair/typebox").TOptional<import("@sinclair/typebox").TNumber>;
                            errorRate: import("@sinclair/typebox").TOptional<import("@sinclair/typebox").TNumber>;
                        }>>;
                        business: import("@sinclair/typebox").TOptional<import("@sinclair/typebox").TObject<{
                            orders: import("@sinclair/typebox").TOptional<import("@sinclair/typebox").TNumber>;
                            revenue: import("@sinclair/typebox").TOptional<import("@sinclair/typebox").TNumber>;
                            conversionRate: import("@sinclair/typebox").TOptional<import("@sinclair/typebox").TNumber>;
                            avgOrderValue: import("@sinclair/typebox").TOptional<import("@sinclair/typebox").TNumber>;
                        }>>;
                    }>, import("@sinclair/typebox").TUndefined]>>;
                }>>;
            }>;
        }>;
        "/analytics/{id}": import("@sinclair/typebox").TObject<{
            method: import("@sinclair/typebox").TLiteral<"GET">;
            path: import("@sinclair/typebox").TLiteral<"/analytics/{id}">;
            requestFormat: import("@sinclair/typebox").TLiteral<"json">;
            parameters: import("@sinclair/typebox").TObject<{
                path: import("@sinclair/typebox").TObject<{
                    id: import("@sinclair/typebox").TNumber;
                }>;
            }>;
            responses: import("@sinclair/typebox").TObject<{
                200: import("@sinclair/typebox").TObject<{
                    id: import("@sinclair/typebox").TNumber;
                    date: import("@sinclair/typebox").TOptional<import("@sinclair/typebox").TUnion<[import("@sinclair/typebox").TString, import("@sinclair/typebox").TUndefined]>>;
                    period: import("@sinclair/typebox").TOptional<import("@sinclair/typebox").TUnion<[import("@sinclair/typebox").TString, import("@sinclair/typebox").TUndefined]>>;
                    metrics: import("@sinclair/typebox").TOptional<import("@sinclair/typebox").TUnion<[import("@sinclair/typebox").TObject<{
                        users: import("@sinclair/typebox").TOptional<import("@sinclair/typebox").TObject<{
                            total: import("@sinclair/typebox").TOptional<import("@sinclair/typebox").TNumber>;
                            new: import("@sinclair/typebox").TOptional<import("@sinclair/typebox").TNumber>;
                            returning: import("@sinclair/typebox").TOptional<import("@sinclair/typebox").TNumber>;
                            active: import("@sinclair/typebox").TOptional<import("@sinclair/typebox").TNumber>;
                        }>>;
                        traffic: import("@sinclair/typebox").TOptional<import("@sinclair/typebox").TObject<{
                            pageViews: import("@sinclair/typebox").TOptional<import("@sinclair/typebox").TNumber>;
                            uniqueViews: import("@sinclair/typebox").TOptional<import("@sinclair/typebox").TNumber>;
                            bounceRate: import("@sinclair/typebox").TOptional<import("@sinclair/typebox").TNumber>;
                            avgSessionDuration: import("@sinclair/typebox").TOptional<import("@sinclair/typebox").TNumber>;
                            topPages: import("@sinclair/typebox").TOptional<import("@sinclair/typebox").TArray<import("@sinclair/typebox").TObject<{
                                path: import("@sinclair/typebox").TOptional<import("@sinclair/typebox").TString>;
                                views: import("@sinclair/typebox").TOptional<import("@sinclair/typebox").TNumber>;
                            }>>>;
                        }>>;
                        performance: import("@sinclair/typebox").TOptional<import("@sinclair/typebox").TObject<{
                            avgLoadTime: import("@sinclair/typebox").TOptional<import("@sinclair/typebox").TNumber>;
                            apiCalls: import("@sinclair/typebox").TOptional<import("@sinclair/typebox").TNumber>;
                            cacheHitRate: import("@sinclair/typebox").TOptional<import("@sinclair/typebox").TNumber>;
                            errorRate: import("@sinclair/typebox").TOptional<import("@sinclair/typebox").TNumber>;
                        }>>;
                        business: import("@sinclair/typebox").TOptional<import("@sinclair/typebox").TObject<{
                            orders: import("@sinclair/typebox").TOptional<import("@sinclair/typebox").TNumber>;
                            revenue: import("@sinclair/typebox").TOptional<import("@sinclair/typebox").TNumber>;
                            conversionRate: import("@sinclair/typebox").TOptional<import("@sinclair/typebox").TNumber>;
                            avgOrderValue: import("@sinclair/typebox").TOptional<import("@sinclair/typebox").TNumber>;
                        }>>;
                    }>, import("@sinclair/typebox").TUndefined]>>;
                }>;
                404: import("@sinclair/typebox").TUnknown;
            }>;
        }>;
        "/notifications": import("@sinclair/typebox").TObject<{
            method: import("@sinclair/typebox").TLiteral<"GET">;
            path: import("@sinclair/typebox").TLiteral<"/notifications">;
            requestFormat: import("@sinclair/typebox").TLiteral<"json">;
            parameters: import("@sinclair/typebox").TObject<{
                query: import("@sinclair/typebox").TObject<{
                    _page: import("@sinclair/typebox").TOptional<import("@sinclair/typebox").TNumber>;
                    _limit: import("@sinclair/typebox").TOptional<import("@sinclair/typebox").TNumber>;
                    _sort: import("@sinclair/typebox").TOptional<import("@sinclair/typebox").TString>;
                    _order: import("@sinclair/typebox").TOptional<import("@sinclair/typebox").TUnion<[import("@sinclair/typebox").TLiteral<"asc">, import("@sinclair/typebox").TLiteral<"desc">]>>;
                    q: import("@sinclair/typebox").TOptional<import("@sinclair/typebox").TString>;
                }>;
            }>;
            responses: import("@sinclair/typebox").TObject<{
                200: import("@sinclair/typebox").TArray<import("@sinclair/typebox").TObject<{
                    id: import("@sinclair/typebox").TNumber;
                    userId: import("@sinclair/typebox").TOptional<import("@sinclair/typebox").TUnion<[import("@sinclair/typebox").TNumber, import("@sinclair/typebox").TUndefined]>>;
                    type: import("@sinclair/typebox").TOptional<import("@sinclair/typebox").TUnion<[import("@sinclair/typebox").TString, import("@sinclair/typebox").TUndefined]>>;
                    title: import("@sinclair/typebox").TOptional<import("@sinclair/typebox").TUnion<[import("@sinclair/typebox").TString, import("@sinclair/typebox").TUndefined]>>;
                    message: import("@sinclair/typebox").TOptional<import("@sinclair/typebox").TUnion<[import("@sinclair/typebox").TString, import("@sinclair/typebox").TUndefined]>>;
                    data: import("@sinclair/typebox").TOptional<import("@sinclair/typebox").TUnion<[import("@sinclair/typebox").TObject<{
                        orderId: import("@sinclair/typebox").TOptional<import("@sinclair/typebox").TNumber>;
                        trackingNumber: import("@sinclair/typebox").TOptional<import("@sinclair/typebox").TString>;
                    }>, import("@sinclair/typebox").TUndefined]>>;
                    isRead: import("@sinclair/typebox").TOptional<import("@sinclair/typebox").TUnion<[import("@sinclair/typebox").TBoolean, import("@sinclair/typebox").TUndefined]>>;
                    priority: import("@sinclair/typebox").TOptional<import("@sinclair/typebox").TUnion<[import("@sinclair/typebox").TString, import("@sinclair/typebox").TUndefined]>>;
                    createdAt: import("@sinclair/typebox").TOptional<import("@sinclair/typebox").TUnion<[import("@sinclair/typebox").TString, import("@sinclair/typebox").TUndefined]>>;
                }>>;
            }>;
        }>;
        "/notifications/{id}": import("@sinclair/typebox").TObject<{
            method: import("@sinclair/typebox").TLiteral<"GET">;
            path: import("@sinclair/typebox").TLiteral<"/notifications/{id}">;
            requestFormat: import("@sinclair/typebox").TLiteral<"json">;
            parameters: import("@sinclair/typebox").TObject<{
                path: import("@sinclair/typebox").TObject<{
                    id: import("@sinclair/typebox").TNumber;
                }>;
            }>;
            responses: import("@sinclair/typebox").TObject<{
                200: import("@sinclair/typebox").TObject<{
                    id: import("@sinclair/typebox").TNumber;
                    userId: import("@sinclair/typebox").TOptional<import("@sinclair/typebox").TUnion<[import("@sinclair/typebox").TNumber, import("@sinclair/typebox").TUndefined]>>;
                    type: import("@sinclair/typebox").TOptional<import("@sinclair/typebox").TUnion<[import("@sinclair/typebox").TString, import("@sinclair/typebox").TUndefined]>>;
                    title: import("@sinclair/typebox").TOptional<import("@sinclair/typebox").TUnion<[import("@sinclair/typebox").TString, import("@sinclair/typebox").TUndefined]>>;
                    message: import("@sinclair/typebox").TOptional<import("@sinclair/typebox").TUnion<[import("@sinclair/typebox").TString, import("@sinclair/typebox").TUndefined]>>;
                    data: import("@sinclair/typebox").TOptional<import("@sinclair/typebox").TUnion<[import("@sinclair/typebox").TObject<{
                        orderId: import("@sinclair/typebox").TOptional<import("@sinclair/typebox").TNumber>;
                        trackingNumber: import("@sinclair/typebox").TOptional<import("@sinclair/typebox").TString>;
                    }>, import("@sinclair/typebox").TUndefined]>>;
                    isRead: import("@sinclair/typebox").TOptional<import("@sinclair/typebox").TUnion<[import("@sinclair/typebox").TBoolean, import("@sinclair/typebox").TUndefined]>>;
                    priority: import("@sinclair/typebox").TOptional<import("@sinclair/typebox").TUnion<[import("@sinclair/typebox").TString, import("@sinclair/typebox").TUndefined]>>;
                    createdAt: import("@sinclair/typebox").TOptional<import("@sinclair/typebox").TUnion<[import("@sinclair/typebox").TString, import("@sinclair/typebox").TUndefined]>>;
                }>;
                404: import("@sinclair/typebox").TUnknown;
            }>;
        }>;
        "": import("@sinclair/typebox").TObject<{
            method: import("@sinclair/typebox").TLiteral<"GET">;
            path: import("@sinclair/typebox").TLiteral<"">;
            requestFormat: import("@sinclair/typebox").TLiteral<"json">;
            parameters: import("@sinclair/typebox").TNever;
            responses: import("@sinclair/typebox").TObject<{
                200: import("@sinclair/typebox").TRecord<import("@sinclair/typebox").TString, import("@sinclair/typebox").TUnknown>;
            }>;
        }>;
        "/users/:id/posts": import("@sinclair/typebox").TObject<{
            method: import("@sinclair/typebox").TLiteral<"GET">;
            path: import("@sinclair/typebox").TLiteral<"/users/:id/posts">;
            requestFormat: import("@sinclair/typebox").TLiteral<"json">;
            parameters: import("@sinclair/typebox").TNever;
            responses: import("@sinclair/typebox").TObject<{
                200: import("@sinclair/typebox").TRecord<import("@sinclair/typebox").TString, import("@sinclair/typebox").TUnknown>;
            }>;
        }>;
        "/users/:id/comments": import("@sinclair/typebox").TObject<{
            method: import("@sinclair/typebox").TLiteral<"GET">;
            path: import("@sinclair/typebox").TLiteral<"/users/:id/comments">;
            requestFormat: import("@sinclair/typebox").TLiteral<"json">;
            parameters: import("@sinclair/typebox").TNever;
            responses: import("@sinclair/typebox").TObject<{
                200: import("@sinclair/typebox").TRecord<import("@sinclair/typebox").TString, import("@sinclair/typebox").TUnknown>;
            }>;
        }>;
        "/users/:id/orders": import("@sinclair/typebox").TObject<{
            method: import("@sinclair/typebox").TLiteral<"GET">;
            path: import("@sinclair/typebox").TLiteral<"/users/:id/orders">;
            requestFormat: import("@sinclair/typebox").TLiteral<"json">;
            parameters: import("@sinclair/typebox").TNever;
            responses: import("@sinclair/typebox").TObject<{
                200: import("@sinclair/typebox").TRecord<import("@sinclair/typebox").TString, import("@sinclair/typebox").TUnknown>;
            }>;
        }>;
        "/users/:id/notifications": import("@sinclair/typebox").TObject<{
            method: import("@sinclair/typebox").TLiteral<"GET">;
            path: import("@sinclair/typebox").TLiteral<"/users/:id/notifications">;
            requestFormat: import("@sinclair/typebox").TLiteral<"json">;
            parameters: import("@sinclair/typebox").TNever;
            responses: import("@sinclair/typebox").TObject<{
                200: import("@sinclair/typebox").TRecord<import("@sinclair/typebox").TString, import("@sinclair/typebox").TUnknown>;
            }>;
        }>;
        "/posts/:id/comments": import("@sinclair/typebox").TObject<{
            method: import("@sinclair/typebox").TLiteral<"GET">;
            path: import("@sinclair/typebox").TLiteral<"/posts/:id/comments">;
            requestFormat: import("@sinclair/typebox").TLiteral<"json">;
            parameters: import("@sinclair/typebox").TNever;
            responses: import("@sinclair/typebox").TObject<{
                200: import("@sinclair/typebox").TRecord<import("@sinclair/typebox").TString, import("@sinclair/typebox").TUnknown>;
            }>;
        }>;
        "/categories/:id/posts": import("@sinclair/typebox").TObject<{
            method: import("@sinclair/typebox").TLiteral<"GET">;
            path: import("@sinclair/typebox").TLiteral<"/categories/:id/posts">;
            requestFormat: import("@sinclair/typebox").TLiteral<"json">;
            parameters: import("@sinclair/typebox").TNever;
            responses: import("@sinclair/typebox").TObject<{
                200: import("@sinclair/typebox").TRecord<import("@sinclair/typebox").TString, import("@sinclair/typebox").TUnknown>;
            }>;
        }>;
        "/orders/:id/items": import("@sinclair/typebox").TObject<{
            method: import("@sinclair/typebox").TLiteral<"GET">;
            path: import("@sinclair/typebox").TLiteral<"/orders/:id/items">;
            requestFormat: import("@sinclair/typebox").TLiteral<"json">;
            parameters: import("@sinclair/typebox").TNever;
            responses: import("@sinclair/typebox").TObject<{
                200: import("@sinclair/typebox").TRecord<import("@sinclair/typebox").TString, import("@sinclair/typebox").TUnknown>;
            }>;
        }>;
        "/products/search": import("@sinclair/typebox").TObject<{
            method: import("@sinclair/typebox").TLiteral<"GET">;
            path: import("@sinclair/typebox").TLiteral<"/products/search">;
            requestFormat: import("@sinclair/typebox").TLiteral<"json">;
            parameters: import("@sinclair/typebox").TNever;
            responses: import("@sinclair/typebox").TObject<{
                200: import("@sinclair/typebox").TRecord<import("@sinclair/typebox").TString, import("@sinclair/typebox").TUnknown>;
            }>;
        }>;
        "/posts/search": import("@sinclair/typebox").TObject<{
            method: import("@sinclair/typebox").TLiteral<"GET">;
            path: import("@sinclair/typebox").TLiteral<"/posts/search">;
            requestFormat: import("@sinclair/typebox").TLiteral<"json">;
            parameters: import("@sinclair/typebox").TNever;
            responses: import("@sinclair/typebox").TObject<{
                200: import("@sinclair/typebox").TRecord<import("@sinclair/typebox").TString, import("@sinclair/typebox").TUnknown>;
            }>;
        }>;
        "/users/search": import("@sinclair/typebox").TObject<{
            method: import("@sinclair/typebox").TLiteral<"GET">;
            path: import("@sinclair/typebox").TLiteral<"/users/search">;
            requestFormat: import("@sinclair/typebox").TLiteral<"json">;
            parameters: import("@sinclair/typebox").TNever;
            responses: import("@sinclair/typebox").TObject<{
                200: import("@sinclair/typebox").TRecord<import("@sinclair/typebox").TString, import("@sinclair/typebox").TUnknown>;
            }>;
        }>;
        "/featured/posts": import("@sinclair/typebox").TObject<{
            method: import("@sinclair/typebox").TLiteral<"GET">;
            path: import("@sinclair/typebox").TLiteral<"/featured/posts">;
            requestFormat: import("@sinclair/typebox").TLiteral<"json">;
            parameters: import("@sinclair/typebox").TNever;
            responses: import("@sinclair/typebox").TObject<{
                200: import("@sinclair/typebox").TRecord<import("@sinclair/typebox").TString, import("@sinclair/typebox").TUnknown>;
            }>;
        }>;
        "/published/posts": import("@sinclair/typebox").TObject<{
            method: import("@sinclair/typebox").TLiteral<"GET">;
            path: import("@sinclair/typebox").TLiteral<"/published/posts">;
            requestFormat: import("@sinclair/typebox").TLiteral<"json">;
            parameters: import("@sinclair/typebox").TNever;
            responses: import("@sinclair/typebox").TObject<{
                200: import("@sinclair/typebox").TRecord<import("@sinclair/typebox").TString, import("@sinclair/typebox").TUnknown>;
            }>;
        }>;
        "/stats/analytics": import("@sinclair/typebox").TObject<{
            method: import("@sinclair/typebox").TLiteral<"GET">;
            path: import("@sinclair/typebox").TLiteral<"/stats/analytics">;
            requestFormat: import("@sinclair/typebox").TLiteral<"json">;
            parameters: import("@sinclair/typebox").TNever;
            responses: import("@sinclair/typebox").TObject<{
                200: import("@sinclair/typebox").TRecord<import("@sinclair/typebox").TString, import("@sinclair/typebox").TUnknown>;
            }>;
        }>;
        "/stats/daily/:date": import("@sinclair/typebox").TObject<{
            method: import("@sinclair/typebox").TLiteral<"GET">;
            path: import("@sinclair/typebox").TLiteral<"/stats/daily/:date">;
            requestFormat: import("@sinclair/typebox").TLiteral<"json">;
            parameters: import("@sinclair/typebox").TNever;
            responses: import("@sinclair/typebox").TObject<{
                200: import("@sinclair/typebox").TRecord<import("@sinclair/typebox").TString, import("@sinclair/typebox").TUnknown>;
            }>;
        }>;
        "/inventory/low-stock": import("@sinclair/typebox").TObject<{
            method: import("@sinclair/typebox").TLiteral<"GET">;
            path: import("@sinclair/typebox").TLiteral<"/inventory/low-stock">;
            requestFormat: import("@sinclair/typebox").TLiteral<"json">;
            parameters: import("@sinclair/typebox").TNever;
            responses: import("@sinclair/typebox").TObject<{
                200: import("@sinclair/typebox").TRecord<import("@sinclair/typebox").TString, import("@sinclair/typebox").TUnknown>;
            }>;
        }>;
        "/orders/by-status/:status": import("@sinclair/typebox").TObject<{
            method: import("@sinclair/typebox").TLiteral<"GET">;
            path: import("@sinclair/typebox").TLiteral<"/orders/by-status/:status">;
            requestFormat: import("@sinclair/typebox").TLiteral<"json">;
            parameters: import("@sinclair/typebox").TNever;
            responses: import("@sinclair/typebox").TObject<{
                200: import("@sinclair/typebox").TRecord<import("@sinclair/typebox").TString, import("@sinclair/typebox").TUnknown>;
            }>;
        }>;
        "/bulk/users": import("@sinclair/typebox").TObject<{
            method: import("@sinclair/typebox").TLiteral<"GET">;
            path: import("@sinclair/typebox").TLiteral<"/bulk/users">;
            requestFormat: import("@sinclair/typebox").TLiteral<"json">;
            parameters: import("@sinclair/typebox").TNever;
            responses: import("@sinclair/typebox").TObject<{
                200: import("@sinclair/typebox").TRecord<import("@sinclair/typebox").TString, import("@sinclair/typebox").TUnknown>;
            }>;
        }>;
        "/bulk/posts": import("@sinclair/typebox").TObject<{
            method: import("@sinclair/typebox").TLiteral<"GET">;
            path: import("@sinclair/typebox").TLiteral<"/bulk/posts">;
            requestFormat: import("@sinclair/typebox").TLiteral<"json">;
            parameters: import("@sinclair/typebox").TNever;
            responses: import("@sinclair/typebox").TObject<{
                200: import("@sinclair/typebox").TRecord<import("@sinclair/typebox").TString, import("@sinclair/typebox").TUnknown>;
            }>;
        }>;
        "/bulk/products": import("@sinclair/typebox").TObject<{
            method: import("@sinclair/typebox").TLiteral<"GET">;
            path: import("@sinclair/typebox").TLiteral<"/bulk/products">;
            requestFormat: import("@sinclair/typebox").TLiteral<"json">;
            parameters: import("@sinclair/typebox").TNever;
            responses: import("@sinclair/typebox").TObject<{
                200: import("@sinclair/typebox").TRecord<import("@sinclair/typebox").TString, import("@sinclair/typebox").TUnknown>;
            }>;
        }>;
    };
    post: {
        "/users": import("@sinclair/typebox").TObject<{
            method: import("@sinclair/typebox").TLiteral<"POST">;
            path: import("@sinclair/typebox").TLiteral<"/users">;
            requestFormat: import("@sinclair/typebox").TLiteral<"json">;
            parameters: import("@sinclair/typebox").TObject<{
                body: import("@sinclair/typebox").TObject<{
                    id: import("@sinclair/typebox").TNumber;
                    username: import("@sinclair/typebox").TOptional<import("@sinclair/typebox").TUnion<[import("@sinclair/typebox").TString, import("@sinclair/typebox").TUndefined]>>;
                    email: import("@sinclair/typebox").TOptional<import("@sinclair/typebox").TUnion<[import("@sinclair/typebox").TString, import("@sinclair/typebox").TUndefined]>>;
                    profile: import("@sinclair/typebox").TOptional<import("@sinclair/typebox").TUnion<[import("@sinclair/typebox").TObject<{
                        firstName: import("@sinclair/typebox").TOptional<import("@sinclair/typebox").TString>;
                        lastName: import("@sinclair/typebox").TOptional<import("@sinclair/typebox").TString>;
                        avatar: import("@sinclair/typebox").TOptional<import("@sinclair/typebox").TString>;
                        bio: import("@sinclair/typebox").TOptional<import("@sinclair/typebox").TString>;
                        location: import("@sinclair/typebox").TOptional<import("@sinclair/typebox").TString>;
                        website: import("@sinclair/typebox").TOptional<import("@sinclair/typebox").TString>;
                    }>, import("@sinclair/typebox").TUndefined]>>;
                    preferences: import("@sinclair/typebox").TOptional<import("@sinclair/typebox").TUnion<[import("@sinclair/typebox").TObject<{
                        theme: import("@sinclair/typebox").TOptional<import("@sinclair/typebox").TString>;
                        notifications: import("@sinclair/typebox").TOptional<import("@sinclair/typebox").TBoolean>;
                        language: import("@sinclair/typebox").TOptional<import("@sinclair/typebox").TString>;
                        timezone: import("@sinclair/typebox").TOptional<import("@sinclair/typebox").TString>;
                        emailNotifications: import("@sinclair/typebox").TOptional<import("@sinclair/typebox").TObject<{
                            marketing: import("@sinclair/typebox").TOptional<import("@sinclair/typebox").TBoolean>;
                            security: import("@sinclair/typebox").TOptional<import("@sinclair/typebox").TBoolean>;
                            updates: import("@sinclair/typebox").TOptional<import("@sinclair/typebox").TBoolean>;
                        }>>;
                    }>, import("@sinclair/typebox").TUndefined]>>;
                    createdAt: import("@sinclair/typebox").TOptional<import("@sinclair/typebox").TUnion<[import("@sinclair/typebox").TString, import("@sinclair/typebox").TUndefined]>>;
                    lastLogin: import("@sinclair/typebox").TOptional<import("@sinclair/typebox").TUnion<[import("@sinclair/typebox").TString, import("@sinclair/typebox").TUndefined]>>;
                    isActive: import("@sinclair/typebox").TOptional<import("@sinclair/typebox").TUnion<[import("@sinclair/typebox").TBoolean, import("@sinclair/typebox").TUndefined]>>;
                    role: import("@sinclair/typebox").TOptional<import("@sinclair/typebox").TUnion<[import("@sinclair/typebox").TString, import("@sinclair/typebox").TUndefined]>>;
                    stats: import("@sinclair/typebox").TOptional<import("@sinclair/typebox").TUnion<[import("@sinclair/typebox").TObject<{
                        postsCreated: import("@sinclair/typebox").TOptional<import("@sinclair/typebox").TNumber>;
                        commentsPosted: import("@sinclair/typebox").TOptional<import("@sinclair/typebox").TNumber>;
                        loginCount: import("@sinclair/typebox").TOptional<import("@sinclair/typebox").TNumber>;
                    }>, import("@sinclair/typebox").TUndefined]>>;
                }>;
            }>;
            responses: import("@sinclair/typebox").TObject<{
                201: import("@sinclair/typebox").TObject<{
                    id: import("@sinclair/typebox").TNumber;
                    username: import("@sinclair/typebox").TOptional<import("@sinclair/typebox").TUnion<[import("@sinclair/typebox").TString, import("@sinclair/typebox").TUndefined]>>;
                    email: import("@sinclair/typebox").TOptional<import("@sinclair/typebox").TUnion<[import("@sinclair/typebox").TString, import("@sinclair/typebox").TUndefined]>>;
                    profile: import("@sinclair/typebox").TOptional<import("@sinclair/typebox").TUnion<[import("@sinclair/typebox").TObject<{
                        firstName: import("@sinclair/typebox").TOptional<import("@sinclair/typebox").TString>;
                        lastName: import("@sinclair/typebox").TOptional<import("@sinclair/typebox").TString>;
                        avatar: import("@sinclair/typebox").TOptional<import("@sinclair/typebox").TString>;
                        bio: import("@sinclair/typebox").TOptional<import("@sinclair/typebox").TString>;
                        location: import("@sinclair/typebox").TOptional<import("@sinclair/typebox").TString>;
                        website: import("@sinclair/typebox").TOptional<import("@sinclair/typebox").TString>;
                    }>, import("@sinclair/typebox").TUndefined]>>;
                    preferences: import("@sinclair/typebox").TOptional<import("@sinclair/typebox").TUnion<[import("@sinclair/typebox").TObject<{
                        theme: import("@sinclair/typebox").TOptional<import("@sinclair/typebox").TString>;
                        notifications: import("@sinclair/typebox").TOptional<import("@sinclair/typebox").TBoolean>;
                        language: import("@sinclair/typebox").TOptional<import("@sinclair/typebox").TString>;
                        timezone: import("@sinclair/typebox").TOptional<import("@sinclair/typebox").TString>;
                        emailNotifications: import("@sinclair/typebox").TOptional<import("@sinclair/typebox").TObject<{
                            marketing: import("@sinclair/typebox").TOptional<import("@sinclair/typebox").TBoolean>;
                            security: import("@sinclair/typebox").TOptional<import("@sinclair/typebox").TBoolean>;
                            updates: import("@sinclair/typebox").TOptional<import("@sinclair/typebox").TBoolean>;
                        }>>;
                    }>, import("@sinclair/typebox").TUndefined]>>;
                    createdAt: import("@sinclair/typebox").TOptional<import("@sinclair/typebox").TUnion<[import("@sinclair/typebox").TString, import("@sinclair/typebox").TUndefined]>>;
                    lastLogin: import("@sinclair/typebox").TOptional<import("@sinclair/typebox").TUnion<[import("@sinclair/typebox").TString, import("@sinclair/typebox").TUndefined]>>;
                    isActive: import("@sinclair/typebox").TOptional<import("@sinclair/typebox").TUnion<[import("@sinclair/typebox").TBoolean, import("@sinclair/typebox").TUndefined]>>;
                    role: import("@sinclair/typebox").TOptional<import("@sinclair/typebox").TUnion<[import("@sinclair/typebox").TString, import("@sinclair/typebox").TUndefined]>>;
                    stats: import("@sinclair/typebox").TOptional<import("@sinclair/typebox").TUnion<[import("@sinclair/typebox").TObject<{
                        postsCreated: import("@sinclair/typebox").TOptional<import("@sinclair/typebox").TNumber>;
                        commentsPosted: import("@sinclair/typebox").TOptional<import("@sinclair/typebox").TNumber>;
                        loginCount: import("@sinclair/typebox").TOptional<import("@sinclair/typebox").TNumber>;
                    }>, import("@sinclair/typebox").TUndefined]>>;
                }>;
                400: import("@sinclair/typebox").TUnknown;
            }>;
        }>;
        "/posts": import("@sinclair/typebox").TObject<{
            method: import("@sinclair/typebox").TLiteral<"POST">;
            path: import("@sinclair/typebox").TLiteral<"/posts">;
            requestFormat: import("@sinclair/typebox").TLiteral<"json">;
            parameters: import("@sinclair/typebox").TObject<{
                body: import("@sinclair/typebox").TObject<{
                    id: import("@sinclair/typebox").TNumber;
                    title: import("@sinclair/typebox").TOptional<import("@sinclair/typebox").TUnion<[import("@sinclair/typebox").TString, import("@sinclair/typebox").TUndefined]>>;
                    content: import("@sinclair/typebox").TOptional<import("@sinclair/typebox").TUnion<[import("@sinclair/typebox").TString, import("@sinclair/typebox").TUndefined]>>;
                    excerpt: import("@sinclair/typebox").TOptional<import("@sinclair/typebox").TUnion<[import("@sinclair/typebox").TString, import("@sinclair/typebox").TUndefined]>>;
                    authorId: import("@sinclair/typebox").TOptional<import("@sinclair/typebox").TUnion<[import("@sinclair/typebox").TNumber, import("@sinclair/typebox").TUndefined]>>;
                    categoryId: import("@sinclair/typebox").TOptional<import("@sinclair/typebox").TUnion<[import("@sinclair/typebox").TNumber, import("@sinclair/typebox").TUndefined]>>;
                    tags: import("@sinclair/typebox").TOptional<import("@sinclair/typebox").TUnion<[import("@sinclair/typebox").TArray<import("@sinclair/typebox").TString>, import("@sinclair/typebox").TUndefined]>>;
                    status: import("@sinclair/typebox").TOptional<import("@sinclair/typebox").TUnion<[import("@sinclair/typebox").TString, import("@sinclair/typebox").TUndefined]>>;
                    featured: import("@sinclair/typebox").TOptional<import("@sinclair/typebox").TUnion<[import("@sinclair/typebox").TBoolean, import("@sinclair/typebox").TUndefined]>>;
                    metadata: import("@sinclair/typebox").TOptional<import("@sinclair/typebox").TUnion<[import("@sinclair/typebox").TObject<{
                        views: import("@sinclair/typebox").TOptional<import("@sinclair/typebox").TNumber>;
                        likes: import("@sinclair/typebox").TOptional<import("@sinclair/typebox").TNumber>;
                        comments: import("@sinclair/typebox").TOptional<import("@sinclair/typebox").TNumber>;
                        shares: import("@sinclair/typebox").TOptional<import("@sinclair/typebox").TNumber>;
                        bookmarks: import("@sinclair/typebox").TOptional<import("@sinclair/typebox").TNumber>;
                        readTime: import("@sinclair/typebox").TOptional<import("@sinclair/typebox").TNumber>;
                    }>, import("@sinclair/typebox").TUndefined]>>;
                    seo: import("@sinclair/typebox").TOptional<import("@sinclair/typebox").TUnion<[import("@sinclair/typebox").TObject<{
                        slug: import("@sinclair/typebox").TOptional<import("@sinclair/typebox").TString>;
                        metaTitle: import("@sinclair/typebox").TOptional<import("@sinclair/typebox").TString>;
                        metaDescription: import("@sinclair/typebox").TOptional<import("@sinclair/typebox").TString>;
                        keywords: import("@sinclair/typebox").TOptional<import("@sinclair/typebox").TArray<import("@sinclair/typebox").TString>>;
                    }>, import("@sinclair/typebox").TUndefined]>>;
                    createdAt: import("@sinclair/typebox").TOptional<import("@sinclair/typebox").TUnion<[import("@sinclair/typebox").TString, import("@sinclair/typebox").TUndefined]>>;
                    updatedAt: import("@sinclair/typebox").TOptional<import("@sinclair/typebox").TUnion<[import("@sinclair/typebox").TString, import("@sinclair/typebox").TUndefined]>>;
                    publishedAt: import("@sinclair/typebox").TOptional<import("@sinclair/typebox").TUnion<[import("@sinclair/typebox").TString, import("@sinclair/typebox").TUndefined]>>;
                }>;
            }>;
            responses: import("@sinclair/typebox").TObject<{
                201: import("@sinclair/typebox").TObject<{
                    id: import("@sinclair/typebox").TNumber;
                    title: import("@sinclair/typebox").TOptional<import("@sinclair/typebox").TUnion<[import("@sinclair/typebox").TString, import("@sinclair/typebox").TUndefined]>>;
                    content: import("@sinclair/typebox").TOptional<import("@sinclair/typebox").TUnion<[import("@sinclair/typebox").TString, import("@sinclair/typebox").TUndefined]>>;
                    excerpt: import("@sinclair/typebox").TOptional<import("@sinclair/typebox").TUnion<[import("@sinclair/typebox").TString, import("@sinclair/typebox").TUndefined]>>;
                    authorId: import("@sinclair/typebox").TOptional<import("@sinclair/typebox").TUnion<[import("@sinclair/typebox").TNumber, import("@sinclair/typebox").TUndefined]>>;
                    categoryId: import("@sinclair/typebox").TOptional<import("@sinclair/typebox").TUnion<[import("@sinclair/typebox").TNumber, import("@sinclair/typebox").TUndefined]>>;
                    tags: import("@sinclair/typebox").TOptional<import("@sinclair/typebox").TUnion<[import("@sinclair/typebox").TArray<import("@sinclair/typebox").TString>, import("@sinclair/typebox").TUndefined]>>;
                    status: import("@sinclair/typebox").TOptional<import("@sinclair/typebox").TUnion<[import("@sinclair/typebox").TString, import("@sinclair/typebox").TUndefined]>>;
                    featured: import("@sinclair/typebox").TOptional<import("@sinclair/typebox").TUnion<[import("@sinclair/typebox").TBoolean, import("@sinclair/typebox").TUndefined]>>;
                    metadata: import("@sinclair/typebox").TOptional<import("@sinclair/typebox").TUnion<[import("@sinclair/typebox").TObject<{
                        views: import("@sinclair/typebox").TOptional<import("@sinclair/typebox").TNumber>;
                        likes: import("@sinclair/typebox").TOptional<import("@sinclair/typebox").TNumber>;
                        comments: import("@sinclair/typebox").TOptional<import("@sinclair/typebox").TNumber>;
                        shares: import("@sinclair/typebox").TOptional<import("@sinclair/typebox").TNumber>;
                        bookmarks: import("@sinclair/typebox").TOptional<import("@sinclair/typebox").TNumber>;
                        readTime: import("@sinclair/typebox").TOptional<import("@sinclair/typebox").TNumber>;
                    }>, import("@sinclair/typebox").TUndefined]>>;
                    seo: import("@sinclair/typebox").TOptional<import("@sinclair/typebox").TUnion<[import("@sinclair/typebox").TObject<{
                        slug: import("@sinclair/typebox").TOptional<import("@sinclair/typebox").TString>;
                        metaTitle: import("@sinclair/typebox").TOptional<import("@sinclair/typebox").TString>;
                        metaDescription: import("@sinclair/typebox").TOptional<import("@sinclair/typebox").TString>;
                        keywords: import("@sinclair/typebox").TOptional<import("@sinclair/typebox").TArray<import("@sinclair/typebox").TString>>;
                    }>, import("@sinclair/typebox").TUndefined]>>;
                    createdAt: import("@sinclair/typebox").TOptional<import("@sinclair/typebox").TUnion<[import("@sinclair/typebox").TString, import("@sinclair/typebox").TUndefined]>>;
                    updatedAt: import("@sinclair/typebox").TOptional<import("@sinclair/typebox").TUnion<[import("@sinclair/typebox").TString, import("@sinclair/typebox").TUndefined]>>;
                    publishedAt: import("@sinclair/typebox").TOptional<import("@sinclair/typebox").TUnion<[import("@sinclair/typebox").TString, import("@sinclair/typebox").TUndefined]>>;
                }>;
                400: import("@sinclair/typebox").TUnknown;
            }>;
        }>;
        "/comments": import("@sinclair/typebox").TObject<{
            method: import("@sinclair/typebox").TLiteral<"POST">;
            path: import("@sinclair/typebox").TLiteral<"/comments">;
            requestFormat: import("@sinclair/typebox").TLiteral<"json">;
            parameters: import("@sinclair/typebox").TObject<{
                body: import("@sinclair/typebox").TObject<{
                    id: import("@sinclair/typebox").TNumber;
                    postId: import("@sinclair/typebox").TOptional<import("@sinclair/typebox").TUnion<[import("@sinclair/typebox").TNumber, import("@sinclair/typebox").TUndefined]>>;
                    authorId: import("@sinclair/typebox").TOptional<import("@sinclair/typebox").TUnion<[import("@sinclair/typebox").TNumber, import("@sinclair/typebox").TUndefined]>>;
                    content: import("@sinclair/typebox").TOptional<import("@sinclair/typebox").TUnion<[import("@sinclair/typebox").TString, import("@sinclair/typebox").TUndefined]>>;
                    parentId: import("@sinclair/typebox").TOptional<import("@sinclair/typebox").TUnion<[import("@sinclair/typebox").TNull, import("@sinclair/typebox").TUndefined]>>;
                    likes: import("@sinclair/typebox").TOptional<import("@sinclair/typebox").TUnion<[import("@sinclair/typebox").TNumber, import("@sinclair/typebox").TUndefined]>>;
                    isApproved: import("@sinclair/typebox").TOptional<import("@sinclair/typebox").TUnion<[import("@sinclair/typebox").TBoolean, import("@sinclair/typebox").TUndefined]>>;
                    isEdited: import("@sinclair/typebox").TOptional<import("@sinclair/typebox").TUnion<[import("@sinclair/typebox").TBoolean, import("@sinclair/typebox").TUndefined]>>;
                    createdAt: import("@sinclair/typebox").TOptional<import("@sinclair/typebox").TUnion<[import("@sinclair/typebox").TString, import("@sinclair/typebox").TUndefined]>>;
                    updatedAt: import("@sinclair/typebox").TOptional<import("@sinclair/typebox").TUnion<[import("@sinclair/typebox").TString, import("@sinclair/typebox").TUndefined]>>;
                }>;
            }>;
            responses: import("@sinclair/typebox").TObject<{
                201: import("@sinclair/typebox").TObject<{
                    id: import("@sinclair/typebox").TNumber;
                    postId: import("@sinclair/typebox").TOptional<import("@sinclair/typebox").TUnion<[import("@sinclair/typebox").TNumber, import("@sinclair/typebox").TUndefined]>>;
                    authorId: import("@sinclair/typebox").TOptional<import("@sinclair/typebox").TUnion<[import("@sinclair/typebox").TNumber, import("@sinclair/typebox").TUndefined]>>;
                    content: import("@sinclair/typebox").TOptional<import("@sinclair/typebox").TUnion<[import("@sinclair/typebox").TString, import("@sinclair/typebox").TUndefined]>>;
                    parentId: import("@sinclair/typebox").TOptional<import("@sinclair/typebox").TUnion<[import("@sinclair/typebox").TNull, import("@sinclair/typebox").TUndefined]>>;
                    likes: import("@sinclair/typebox").TOptional<import("@sinclair/typebox").TUnion<[import("@sinclair/typebox").TNumber, import("@sinclair/typebox").TUndefined]>>;
                    isApproved: import("@sinclair/typebox").TOptional<import("@sinclair/typebox").TUnion<[import("@sinclair/typebox").TBoolean, import("@sinclair/typebox").TUndefined]>>;
                    isEdited: import("@sinclair/typebox").TOptional<import("@sinclair/typebox").TUnion<[import("@sinclair/typebox").TBoolean, import("@sinclair/typebox").TUndefined]>>;
                    createdAt: import("@sinclair/typebox").TOptional<import("@sinclair/typebox").TUnion<[import("@sinclair/typebox").TString, import("@sinclair/typebox").TUndefined]>>;
                    updatedAt: import("@sinclair/typebox").TOptional<import("@sinclair/typebox").TUnion<[import("@sinclair/typebox").TString, import("@sinclair/typebox").TUndefined]>>;
                }>;
                400: import("@sinclair/typebox").TUnknown;
            }>;
        }>;
        "/categories": import("@sinclair/typebox").TObject<{
            method: import("@sinclair/typebox").TLiteral<"POST">;
            path: import("@sinclair/typebox").TLiteral<"/categories">;
            requestFormat: import("@sinclair/typebox").TLiteral<"json">;
            parameters: import("@sinclair/typebox").TObject<{
                body: import("@sinclair/typebox").TObject<{
                    id: import("@sinclair/typebox").TNumber;
                    name: import("@sinclair/typebox").TOptional<import("@sinclair/typebox").TUnion<[import("@sinclair/typebox").TString, import("@sinclair/typebox").TUndefined]>>;
                    slug: import("@sinclair/typebox").TOptional<import("@sinclair/typebox").TUnion<[import("@sinclair/typebox").TString, import("@sinclair/typebox").TUndefined]>>;
                    description: import("@sinclair/typebox").TOptional<import("@sinclair/typebox").TUnion<[import("@sinclair/typebox").TString, import("@sinclair/typebox").TUndefined]>>;
                    postCount: import("@sinclair/typebox").TOptional<import("@sinclair/typebox").TUnion<[import("@sinclair/typebox").TNumber, import("@sinclair/typebox").TUndefined]>>;
                    color: import("@sinclair/typebox").TOptional<import("@sinclair/typebox").TUnion<[import("@sinclair/typebox").TString, import("@sinclair/typebox").TUndefined]>>;
                    icon: import("@sinclair/typebox").TOptional<import("@sinclair/typebox").TUnion<[import("@sinclair/typebox").TString, import("@sinclair/typebox").TUndefined]>>;
                    isActive: import("@sinclair/typebox").TOptional<import("@sinclair/typebox").TUnion<[import("@sinclair/typebox").TBoolean, import("@sinclair/typebox").TUndefined]>>;
                    parentId: import("@sinclair/typebox").TOptional<import("@sinclair/typebox").TUnion<[import("@sinclair/typebox").TNull, import("@sinclair/typebox").TUndefined]>>;
                    createdAt: import("@sinclair/typebox").TOptional<import("@sinclair/typebox").TUnion<[import("@sinclair/typebox").TString, import("@sinclair/typebox").TUndefined]>>;
                    metadata: import("@sinclair/typebox").TOptional<import("@sinclair/typebox").TUnion<[import("@sinclair/typebox").TObject<{
                        totalViews: import("@sinclair/typebox").TOptional<import("@sinclair/typebox").TNumber>;
                        averageRating: import("@sinclair/typebox").TOptional<import("@sinclair/typebox").TNumber>;
                    }>, import("@sinclair/typebox").TUndefined]>>;
                }>;
            }>;
            responses: import("@sinclair/typebox").TObject<{
                201: import("@sinclair/typebox").TObject<{
                    id: import("@sinclair/typebox").TNumber;
                    name: import("@sinclair/typebox").TOptional<import("@sinclair/typebox").TUnion<[import("@sinclair/typebox").TString, import("@sinclair/typebox").TUndefined]>>;
                    slug: import("@sinclair/typebox").TOptional<import("@sinclair/typebox").TUnion<[import("@sinclair/typebox").TString, import("@sinclair/typebox").TUndefined]>>;
                    description: import("@sinclair/typebox").TOptional<import("@sinclair/typebox").TUnion<[import("@sinclair/typebox").TString, import("@sinclair/typebox").TUndefined]>>;
                    postCount: import("@sinclair/typebox").TOptional<import("@sinclair/typebox").TUnion<[import("@sinclair/typebox").TNumber, import("@sinclair/typebox").TUndefined]>>;
                    color: import("@sinclair/typebox").TOptional<import("@sinclair/typebox").TUnion<[import("@sinclair/typebox").TString, import("@sinclair/typebox").TUndefined]>>;
                    icon: import("@sinclair/typebox").TOptional<import("@sinclair/typebox").TUnion<[import("@sinclair/typebox").TString, import("@sinclair/typebox").TUndefined]>>;
                    isActive: import("@sinclair/typebox").TOptional<import("@sinclair/typebox").TUnion<[import("@sinclair/typebox").TBoolean, import("@sinclair/typebox").TUndefined]>>;
                    parentId: import("@sinclair/typebox").TOptional<import("@sinclair/typebox").TUnion<[import("@sinclair/typebox").TNull, import("@sinclair/typebox").TUndefined]>>;
                    createdAt: import("@sinclair/typebox").TOptional<import("@sinclair/typebox").TUnion<[import("@sinclair/typebox").TString, import("@sinclair/typebox").TUndefined]>>;
                    metadata: import("@sinclair/typebox").TOptional<import("@sinclair/typebox").TUnion<[import("@sinclair/typebox").TObject<{
                        totalViews: import("@sinclair/typebox").TOptional<import("@sinclair/typebox").TNumber>;
                        averageRating: import("@sinclair/typebox").TOptional<import("@sinclair/typebox").TNumber>;
                    }>, import("@sinclair/typebox").TUndefined]>>;
                }>;
                400: import("@sinclair/typebox").TUnknown;
            }>;
        }>;
        "/products": import("@sinclair/typebox").TObject<{
            method: import("@sinclair/typebox").TLiteral<"POST">;
            path: import("@sinclair/typebox").TLiteral<"/products">;
            requestFormat: import("@sinclair/typebox").TLiteral<"json">;
            parameters: import("@sinclair/typebox").TObject<{
                body: import("@sinclair/typebox").TObject<{
                    id: import("@sinclair/typebox").TNumber;
                    name: import("@sinclair/typebox").TOptional<import("@sinclair/typebox").TUnion<[import("@sinclair/typebox").TString, import("@sinclair/typebox").TUndefined]>>;
                    description: import("@sinclair/typebox").TOptional<import("@sinclair/typebox").TUnion<[import("@sinclair/typebox").TString, import("@sinclair/typebox").TUndefined]>>;
                    shortDescription: import("@sinclair/typebox").TOptional<import("@sinclair/typebox").TUnion<[import("@sinclair/typebox").TString, import("@sinclair/typebox").TUndefined]>>;
                    price: import("@sinclair/typebox").TOptional<import("@sinclair/typebox").TUnion<[import("@sinclair/typebox").TNumber, import("@sinclair/typebox").TUndefined]>>;
                    originalPrice: import("@sinclair/typebox").TOptional<import("@sinclair/typebox").TUnion<[import("@sinclair/typebox").TNumber, import("@sinclair/typebox").TUndefined]>>;
                    currency: import("@sinclair/typebox").TOptional<import("@sinclair/typebox").TUnion<[import("@sinclair/typebox").TString, import("@sinclair/typebox").TUndefined]>>;
                    categoryId: import("@sinclair/typebox").TOptional<import("@sinclair/typebox").TUnion<[import("@sinclair/typebox").TNumber, import("@sinclair/typebox").TUndefined]>>;
                    brand: import("@sinclair/typebox").TOptional<import("@sinclair/typebox").TUnion<[import("@sinclair/typebox").TString, import("@sinclair/typebox").TUndefined]>>;
                    model: import("@sinclair/typebox").TOptional<import("@sinclair/typebox").TUnion<[import("@sinclair/typebox").TString, import("@sinclair/typebox").TUndefined]>>;
                    sku: import("@sinclair/typebox").TOptional<import("@sinclair/typebox").TUnion<[import("@sinclair/typebox").TString, import("@sinclair/typebox").TUndefined]>>;
                    barcode: import("@sinclair/typebox").TOptional<import("@sinclair/typebox").TUnion<[import("@sinclair/typebox").TString, import("@sinclair/typebox").TUndefined]>>;
                    inventory: import("@sinclair/typebox").TOptional<import("@sinclair/typebox").TUnion<[import("@sinclair/typebox").TObject<{
                        inStock: import("@sinclair/typebox").TOptional<import("@sinclair/typebox").TNumber>;
                        reserved: import("@sinclair/typebox").TOptional<import("@sinclair/typebox").TNumber>;
                        available: import("@sinclair/typebox").TOptional<import("@sinclair/typebox").TNumber>;
                        lowStockThreshold: import("@sinclair/typebox").TOptional<import("@sinclair/typebox").TNumber>;
                    }>, import("@sinclair/typebox").TUndefined]>>;
                    images: import("@sinclair/typebox").TOptional<import("@sinclair/typebox").TUnion<[import("@sinclair/typebox").TArray<import("@sinclair/typebox").TString>, import("@sinclair/typebox").TUndefined]>>;
                    specifications: import("@sinclair/typebox").TOptional<import("@sinclair/typebox").TUnion<[import("@sinclair/typebox").TObject<{
                        batteryLife: import("@sinclair/typebox").TOptional<import("@sinclair/typebox").TString>;
                        chargingTime: import("@sinclair/typebox").TOptional<import("@sinclair/typebox").TString>;
                        connectivity: import("@sinclair/typebox").TOptional<import("@sinclair/typebox").TString>;
                        weight: import("@sinclair/typebox").TOptional<import("@sinclair/typebox").TString>;
                        dimensions: import("@sinclair/typebox").TOptional<import("@sinclair/typebox").TString>;
                        colors: import("@sinclair/typebox").TOptional<import("@sinclair/typebox").TArray<import("@sinclair/typebox").TString>>;
                        warranty: import("@sinclair/typebox").TOptional<import("@sinclair/typebox").TString>;
                    }>, import("@sinclair/typebox").TUndefined]>>;
                    features: import("@sinclair/typebox").TOptional<import("@sinclair/typebox").TUnion<[import("@sinclair/typebox").TArray<import("@sinclair/typebox").TString>, import("@sinclair/typebox").TUndefined]>>;
                    ratings: import("@sinclair/typebox").TOptional<import("@sinclair/typebox").TUnion<[import("@sinclair/typebox").TObject<{
                        average: import("@sinclair/typebox").TOptional<import("@sinclair/typebox").TNumber>;
                        count: import("@sinclair/typebox").TOptional<import("@sinclair/typebox").TNumber>;
                        breakdown: import("@sinclair/typebox").TOptional<import("@sinclair/typebox").TObject<{
                            1: import("@sinclair/typebox").TOptional<import("@sinclair/typebox").TNumber>;
                            2: import("@sinclair/typebox").TOptional<import("@sinclair/typebox").TNumber>;
                            3: import("@sinclair/typebox").TOptional<import("@sinclair/typebox").TNumber>;
                            4: import("@sinclair/typebox").TOptional<import("@sinclair/typebox").TNumber>;
                            5: import("@sinclair/typebox").TOptional<import("@sinclair/typebox").TNumber>;
                        }>>;
                    }>, import("@sinclair/typebox").TUndefined]>>;
                    tags: import("@sinclair/typebox").TOptional<import("@sinclair/typebox").TUnion<[import("@sinclair/typebox").TArray<import("@sinclair/typebox").TString>, import("@sinclair/typebox").TUndefined]>>;
                    isActive: import("@sinclair/typebox").TOptional<import("@sinclair/typebox").TUnion<[import("@sinclair/typebox").TBoolean, import("@sinclair/typebox").TUndefined]>>;
                    isFeatured: import("@sinclair/typebox").TOptional<import("@sinclair/typebox").TUnion<[import("@sinclair/typebox").TBoolean, import("@sinclair/typebox").TUndefined]>>;
                    createdAt: import("@sinclair/typebox").TOptional<import("@sinclair/typebox").TUnion<[import("@sinclair/typebox").TString, import("@sinclair/typebox").TUndefined]>>;
                    updatedAt: import("@sinclair/typebox").TOptional<import("@sinclair/typebox").TUnion<[import("@sinclair/typebox").TString, import("@sinclair/typebox").TUndefined]>>;
                }>;
            }>;
            responses: import("@sinclair/typebox").TObject<{
                201: import("@sinclair/typebox").TObject<{
                    id: import("@sinclair/typebox").TNumber;
                    name: import("@sinclair/typebox").TOptional<import("@sinclair/typebox").TUnion<[import("@sinclair/typebox").TString, import("@sinclair/typebox").TUndefined]>>;
                    description: import("@sinclair/typebox").TOptional<import("@sinclair/typebox").TUnion<[import("@sinclair/typebox").TString, import("@sinclair/typebox").TUndefined]>>;
                    shortDescription: import("@sinclair/typebox").TOptional<import("@sinclair/typebox").TUnion<[import("@sinclair/typebox").TString, import("@sinclair/typebox").TUndefined]>>;
                    price: import("@sinclair/typebox").TOptional<import("@sinclair/typebox").TUnion<[import("@sinclair/typebox").TNumber, import("@sinclair/typebox").TUndefined]>>;
                    originalPrice: import("@sinclair/typebox").TOptional<import("@sinclair/typebox").TUnion<[import("@sinclair/typebox").TNumber, import("@sinclair/typebox").TUndefined]>>;
                    currency: import("@sinclair/typebox").TOptional<import("@sinclair/typebox").TUnion<[import("@sinclair/typebox").TString, import("@sinclair/typebox").TUndefined]>>;
                    categoryId: import("@sinclair/typebox").TOptional<import("@sinclair/typebox").TUnion<[import("@sinclair/typebox").TNumber, import("@sinclair/typebox").TUndefined]>>;
                    brand: import("@sinclair/typebox").TOptional<import("@sinclair/typebox").TUnion<[import("@sinclair/typebox").TString, import("@sinclair/typebox").TUndefined]>>;
                    model: import("@sinclair/typebox").TOptional<import("@sinclair/typebox").TUnion<[import("@sinclair/typebox").TString, import("@sinclair/typebox").TUndefined]>>;
                    sku: import("@sinclair/typebox").TOptional<import("@sinclair/typebox").TUnion<[import("@sinclair/typebox").TString, import("@sinclair/typebox").TUndefined]>>;
                    barcode: import("@sinclair/typebox").TOptional<import("@sinclair/typebox").TUnion<[import("@sinclair/typebox").TString, import("@sinclair/typebox").TUndefined]>>;
                    inventory: import("@sinclair/typebox").TOptional<import("@sinclair/typebox").TUnion<[import("@sinclair/typebox").TObject<{
                        inStock: import("@sinclair/typebox").TOptional<import("@sinclair/typebox").TNumber>;
                        reserved: import("@sinclair/typebox").TOptional<import("@sinclair/typebox").TNumber>;
                        available: import("@sinclair/typebox").TOptional<import("@sinclair/typebox").TNumber>;
                        lowStockThreshold: import("@sinclair/typebox").TOptional<import("@sinclair/typebox").TNumber>;
                    }>, import("@sinclair/typebox").TUndefined]>>;
                    images: import("@sinclair/typebox").TOptional<import("@sinclair/typebox").TUnion<[import("@sinclair/typebox").TArray<import("@sinclair/typebox").TString>, import("@sinclair/typebox").TUndefined]>>;
                    specifications: import("@sinclair/typebox").TOptional<import("@sinclair/typebox").TUnion<[import("@sinclair/typebox").TObject<{
                        batteryLife: import("@sinclair/typebox").TOptional<import("@sinclair/typebox").TString>;
                        chargingTime: import("@sinclair/typebox").TOptional<import("@sinclair/typebox").TString>;
                        connectivity: import("@sinclair/typebox").TOptional<import("@sinclair/typebox").TString>;
                        weight: import("@sinclair/typebox").TOptional<import("@sinclair/typebox").TString>;
                        dimensions: import("@sinclair/typebox").TOptional<import("@sinclair/typebox").TString>;
                        colors: import("@sinclair/typebox").TOptional<import("@sinclair/typebox").TArray<import("@sinclair/typebox").TString>>;
                        warranty: import("@sinclair/typebox").TOptional<import("@sinclair/typebox").TString>;
                    }>, import("@sinclair/typebox").TUndefined]>>;
                    features: import("@sinclair/typebox").TOptional<import("@sinclair/typebox").TUnion<[import("@sinclair/typebox").TArray<import("@sinclair/typebox").TString>, import("@sinclair/typebox").TUndefined]>>;
                    ratings: import("@sinclair/typebox").TOptional<import("@sinclair/typebox").TUnion<[import("@sinclair/typebox").TObject<{
                        average: import("@sinclair/typebox").TOptional<import("@sinclair/typebox").TNumber>;
                        count: import("@sinclair/typebox").TOptional<import("@sinclair/typebox").TNumber>;
                        breakdown: import("@sinclair/typebox").TOptional<import("@sinclair/typebox").TObject<{
                            1: import("@sinclair/typebox").TOptional<import("@sinclair/typebox").TNumber>;
                            2: import("@sinclair/typebox").TOptional<import("@sinclair/typebox").TNumber>;
                            3: import("@sinclair/typebox").TOptional<import("@sinclair/typebox").TNumber>;
                            4: import("@sinclair/typebox").TOptional<import("@sinclair/typebox").TNumber>;
                            5: import("@sinclair/typebox").TOptional<import("@sinclair/typebox").TNumber>;
                        }>>;
                    }>, import("@sinclair/typebox").TUndefined]>>;
                    tags: import("@sinclair/typebox").TOptional<import("@sinclair/typebox").TUnion<[import("@sinclair/typebox").TArray<import("@sinclair/typebox").TString>, import("@sinclair/typebox").TUndefined]>>;
                    isActive: import("@sinclair/typebox").TOptional<import("@sinclair/typebox").TUnion<[import("@sinclair/typebox").TBoolean, import("@sinclair/typebox").TUndefined]>>;
                    isFeatured: import("@sinclair/typebox").TOptional<import("@sinclair/typebox").TUnion<[import("@sinclair/typebox").TBoolean, import("@sinclair/typebox").TUndefined]>>;
                    createdAt: import("@sinclair/typebox").TOptional<import("@sinclair/typebox").TUnion<[import("@sinclair/typebox").TString, import("@sinclair/typebox").TUndefined]>>;
                    updatedAt: import("@sinclair/typebox").TOptional<import("@sinclair/typebox").TUnion<[import("@sinclair/typebox").TString, import("@sinclair/typebox").TUndefined]>>;
                }>;
                400: import("@sinclair/typebox").TUnknown;
            }>;
        }>;
        "/orders": import("@sinclair/typebox").TObject<{
            method: import("@sinclair/typebox").TLiteral<"POST">;
            path: import("@sinclair/typebox").TLiteral<"/orders">;
            requestFormat: import("@sinclair/typebox").TLiteral<"json">;
            parameters: import("@sinclair/typebox").TObject<{
                body: import("@sinclair/typebox").TObject<{
                    id: import("@sinclair/typebox").TNumber;
                    userId: import("@sinclair/typebox").TOptional<import("@sinclair/typebox").TUnion<[import("@sinclair/typebox").TNumber, import("@sinclair/typebox").TUndefined]>>;
                    orderNumber: import("@sinclair/typebox").TOptional<import("@sinclair/typebox").TUnion<[import("@sinclair/typebox").TString, import("@sinclair/typebox").TUndefined]>>;
                    items: import("@sinclair/typebox").TOptional<import("@sinclair/typebox").TUnion<[import("@sinclair/typebox").TArray<import("@sinclair/typebox").TObject<{
                        productId: import("@sinclair/typebox").TOptional<import("@sinclair/typebox").TNumber>;
                        productName: import("@sinclair/typebox").TOptional<import("@sinclair/typebox").TString>;
                        quantity: import("@sinclair/typebox").TOptional<import("@sinclair/typebox").TNumber>;
                        unitPrice: import("@sinclair/typebox").TOptional<import("@sinclair/typebox").TNumber>;
                        totalPrice: import("@sinclair/typebox").TOptional<import("@sinclair/typebox").TNumber>;
                        sku: import("@sinclair/typebox").TOptional<import("@sinclair/typebox").TString>;
                    }>>, import("@sinclair/typebox").TUndefined]>>;
                    status: import("@sinclair/typebox").TOptional<import("@sinclair/typebox").TUnion<[import("@sinclair/typebox").TString, import("@sinclair/typebox").TUndefined]>>;
                    paymentStatus: import("@sinclair/typebox").TOptional<import("@sinclair/typebox").TUnion<[import("@sinclair/typebox").TString, import("@sinclair/typebox").TUndefined]>>;
                    shippingMethod: import("@sinclair/typebox").TOptional<import("@sinclair/typebox").TUnion<[import("@sinclair/typebox").TString, import("@sinclair/typebox").TUndefined]>>;
                    trackingNumber: import("@sinclair/typebox").TOptional<import("@sinclair/typebox").TUnion<[import("@sinclair/typebox").TString, import("@sinclair/typebox").TUndefined]>>;
                    addresses: import("@sinclair/typebox").TOptional<import("@sinclair/typebox").TUnion<[import("@sinclair/typebox").TObject<{
                        shipping: import("@sinclair/typebox").TOptional<import("@sinclair/typebox").TObject<{
                            name: import("@sinclair/typebox").TOptional<import("@sinclair/typebox").TString>;
                            street: import("@sinclair/typebox").TOptional<import("@sinclair/typebox").TString>;
                            apartment: import("@sinclair/typebox").TOptional<import("@sinclair/typebox").TString>;
                            city: import("@sinclair/typebox").TOptional<import("@sinclair/typebox").TString>;
                            state: import("@sinclair/typebox").TOptional<import("@sinclair/typebox").TString>;
                            zipCode: import("@sinclair/typebox").TOptional<import("@sinclair/typebox").TString>;
                            country: import("@sinclair/typebox").TOptional<import("@sinclair/typebox").TString>;
                            phone: import("@sinclair/typebox").TOptional<import("@sinclair/typebox").TString>;
                        }>>;
                        billing: import("@sinclair/typebox").TOptional<import("@sinclair/typebox").TObject<{
                            name: import("@sinclair/typebox").TOptional<import("@sinclair/typebox").TString>;
                            street: import("@sinclair/typebox").TOptional<import("@sinclair/typebox").TString>;
                            apartment: import("@sinclair/typebox").TOptional<import("@sinclair/typebox").TString>;
                            city: import("@sinclair/typebox").TOptional<import("@sinclair/typebox").TString>;
                            state: import("@sinclair/typebox").TOptional<import("@sinclair/typebox").TString>;
                            zipCode: import("@sinclair/typebox").TOptional<import("@sinclair/typebox").TString>;
                            country: import("@sinclair/typebox").TOptional<import("@sinclair/typebox").TString>;
                            phone: import("@sinclair/typebox").TOptional<import("@sinclair/typebox").TString>;
                        }>>;
                    }>, import("@sinclair/typebox").TUndefined]>>;
                    totals: import("@sinclair/typebox").TOptional<import("@sinclair/typebox").TUnion<[import("@sinclair/typebox").TObject<{
                        subtotal: import("@sinclair/typebox").TOptional<import("@sinclair/typebox").TNumber>;
                        tax: import("@sinclair/typebox").TOptional<import("@sinclair/typebox").TNumber>;
                        shipping: import("@sinclair/typebox").TOptional<import("@sinclair/typebox").TNumber>;
                        discount: import("@sinclair/typebox").TOptional<import("@sinclair/typebox").TNumber>;
                        total: import("@sinclair/typebox").TOptional<import("@sinclair/typebox").TNumber>;
                    }>, import("@sinclair/typebox").TUndefined]>>;
                    timeline: import("@sinclair/typebox").TOptional<import("@sinclair/typebox").TUnion<[import("@sinclair/typebox").TArray<import("@sinclair/typebox").TObject<{
                        status: import("@sinclair/typebox").TOptional<import("@sinclair/typebox").TString>;
                        timestamp: import("@sinclair/typebox").TOptional<import("@sinclair/typebox").TString>;
                        note: import("@sinclair/typebox").TOptional<import("@sinclair/typebox").TString>;
                    }>>, import("@sinclair/typebox").TUndefined]>>;
                    createdAt: import("@sinclair/typebox").TOptional<import("@sinclair/typebox").TUnion<[import("@sinclair/typebox").TString, import("@sinclair/typebox").TUndefined]>>;
                    updatedAt: import("@sinclair/typebox").TOptional<import("@sinclair/typebox").TUnion<[import("@sinclair/typebox").TString, import("@sinclair/typebox").TUndefined]>>;
                }>;
            }>;
            responses: import("@sinclair/typebox").TObject<{
                201: import("@sinclair/typebox").TObject<{
                    id: import("@sinclair/typebox").TNumber;
                    userId: import("@sinclair/typebox").TOptional<import("@sinclair/typebox").TUnion<[import("@sinclair/typebox").TNumber, import("@sinclair/typebox").TUndefined]>>;
                    orderNumber: import("@sinclair/typebox").TOptional<import("@sinclair/typebox").TUnion<[import("@sinclair/typebox").TString, import("@sinclair/typebox").TUndefined]>>;
                    items: import("@sinclair/typebox").TOptional<import("@sinclair/typebox").TUnion<[import("@sinclair/typebox").TArray<import("@sinclair/typebox").TObject<{
                        productId: import("@sinclair/typebox").TOptional<import("@sinclair/typebox").TNumber>;
                        productName: import("@sinclair/typebox").TOptional<import("@sinclair/typebox").TString>;
                        quantity: import("@sinclair/typebox").TOptional<import("@sinclair/typebox").TNumber>;
                        unitPrice: import("@sinclair/typebox").TOptional<import("@sinclair/typebox").TNumber>;
                        totalPrice: import("@sinclair/typebox").TOptional<import("@sinclair/typebox").TNumber>;
                        sku: import("@sinclair/typebox").TOptional<import("@sinclair/typebox").TString>;
                    }>>, import("@sinclair/typebox").TUndefined]>>;
                    status: import("@sinclair/typebox").TOptional<import("@sinclair/typebox").TUnion<[import("@sinclair/typebox").TString, import("@sinclair/typebox").TUndefined]>>;
                    paymentStatus: import("@sinclair/typebox").TOptional<import("@sinclair/typebox").TUnion<[import("@sinclair/typebox").TString, import("@sinclair/typebox").TUndefined]>>;
                    shippingMethod: import("@sinclair/typebox").TOptional<import("@sinclair/typebox").TUnion<[import("@sinclair/typebox").TString, import("@sinclair/typebox").TUndefined]>>;
                    trackingNumber: import("@sinclair/typebox").TOptional<import("@sinclair/typebox").TUnion<[import("@sinclair/typebox").TString, import("@sinclair/typebox").TUndefined]>>;
                    addresses: import("@sinclair/typebox").TOptional<import("@sinclair/typebox").TUnion<[import("@sinclair/typebox").TObject<{
                        shipping: import("@sinclair/typebox").TOptional<import("@sinclair/typebox").TObject<{
                            name: import("@sinclair/typebox").TOptional<import("@sinclair/typebox").TString>;
                            street: import("@sinclair/typebox").TOptional<import("@sinclair/typebox").TString>;
                            apartment: import("@sinclair/typebox").TOptional<import("@sinclair/typebox").TString>;
                            city: import("@sinclair/typebox").TOptional<import("@sinclair/typebox").TString>;
                            state: import("@sinclair/typebox").TOptional<import("@sinclair/typebox").TString>;
                            zipCode: import("@sinclair/typebox").TOptional<import("@sinclair/typebox").TString>;
                            country: import("@sinclair/typebox").TOptional<import("@sinclair/typebox").TString>;
                            phone: import("@sinclair/typebox").TOptional<import("@sinclair/typebox").TString>;
                        }>>;
                        billing: import("@sinclair/typebox").TOptional<import("@sinclair/typebox").TObject<{
                            name: import("@sinclair/typebox").TOptional<import("@sinclair/typebox").TString>;
                            street: import("@sinclair/typebox").TOptional<import("@sinclair/typebox").TString>;
                            apartment: import("@sinclair/typebox").TOptional<import("@sinclair/typebox").TString>;
                            city: import("@sinclair/typebox").TOptional<import("@sinclair/typebox").TString>;
                            state: import("@sinclair/typebox").TOptional<import("@sinclair/typebox").TString>;
                            zipCode: import("@sinclair/typebox").TOptional<import("@sinclair/typebox").TString>;
                            country: import("@sinclair/typebox").TOptional<import("@sinclair/typebox").TString>;
                            phone: import("@sinclair/typebox").TOptional<import("@sinclair/typebox").TString>;
                        }>>;
                    }>, import("@sinclair/typebox").TUndefined]>>;
                    totals: import("@sinclair/typebox").TOptional<import("@sinclair/typebox").TUnion<[import("@sinclair/typebox").TObject<{
                        subtotal: import("@sinclair/typebox").TOptional<import("@sinclair/typebox").TNumber>;
                        tax: import("@sinclair/typebox").TOptional<import("@sinclair/typebox").TNumber>;
                        shipping: import("@sinclair/typebox").TOptional<import("@sinclair/typebox").TNumber>;
                        discount: import("@sinclair/typebox").TOptional<import("@sinclair/typebox").TNumber>;
                        total: import("@sinclair/typebox").TOptional<import("@sinclair/typebox").TNumber>;
                    }>, import("@sinclair/typebox").TUndefined]>>;
                    timeline: import("@sinclair/typebox").TOptional<import("@sinclair/typebox").TUnion<[import("@sinclair/typebox").TArray<import("@sinclair/typebox").TObject<{
                        status: import("@sinclair/typebox").TOptional<import("@sinclair/typebox").TString>;
                        timestamp: import("@sinclair/typebox").TOptional<import("@sinclair/typebox").TString>;
                        note: import("@sinclair/typebox").TOptional<import("@sinclair/typebox").TString>;
                    }>>, import("@sinclair/typebox").TUndefined]>>;
                    createdAt: import("@sinclair/typebox").TOptional<import("@sinclair/typebox").TUnion<[import("@sinclair/typebox").TString, import("@sinclair/typebox").TUndefined]>>;
                    updatedAt: import("@sinclair/typebox").TOptional<import("@sinclair/typebox").TUnion<[import("@sinclair/typebox").TString, import("@sinclair/typebox").TUndefined]>>;
                }>;
                400: import("@sinclair/typebox").TUnknown;
            }>;
        }>;
        "/analytics": import("@sinclair/typebox").TObject<{
            method: import("@sinclair/typebox").TLiteral<"POST">;
            path: import("@sinclair/typebox").TLiteral<"/analytics">;
            requestFormat: import("@sinclair/typebox").TLiteral<"json">;
            parameters: import("@sinclair/typebox").TObject<{
                body: import("@sinclair/typebox").TObject<{
                    id: import("@sinclair/typebox").TNumber;
                    date: import("@sinclair/typebox").TOptional<import("@sinclair/typebox").TUnion<[import("@sinclair/typebox").TString, import("@sinclair/typebox").TUndefined]>>;
                    period: import("@sinclair/typebox").TOptional<import("@sinclair/typebox").TUnion<[import("@sinclair/typebox").TString, import("@sinclair/typebox").TUndefined]>>;
                    metrics: import("@sinclair/typebox").TOptional<import("@sinclair/typebox").TUnion<[import("@sinclair/typebox").TObject<{
                        users: import("@sinclair/typebox").TOptional<import("@sinclair/typebox").TObject<{
                            total: import("@sinclair/typebox").TOptional<import("@sinclair/typebox").TNumber>;
                            new: import("@sinclair/typebox").TOptional<import("@sinclair/typebox").TNumber>;
                            returning: import("@sinclair/typebox").TOptional<import("@sinclair/typebox").TNumber>;
                            active: import("@sinclair/typebox").TOptional<import("@sinclair/typebox").TNumber>;
                        }>>;
                        traffic: import("@sinclair/typebox").TOptional<import("@sinclair/typebox").TObject<{
                            pageViews: import("@sinclair/typebox").TOptional<import("@sinclair/typebox").TNumber>;
                            uniqueViews: import("@sinclair/typebox").TOptional<import("@sinclair/typebox").TNumber>;
                            bounceRate: import("@sinclair/typebox").TOptional<import("@sinclair/typebox").TNumber>;
                            avgSessionDuration: import("@sinclair/typebox").TOptional<import("@sinclair/typebox").TNumber>;
                            topPages: import("@sinclair/typebox").TOptional<import("@sinclair/typebox").TArray<import("@sinclair/typebox").TObject<{
                                path: import("@sinclair/typebox").TOptional<import("@sinclair/typebox").TString>;
                                views: import("@sinclair/typebox").TOptional<import("@sinclair/typebox").TNumber>;
                            }>>>;
                        }>>;
                        performance: import("@sinclair/typebox").TOptional<import("@sinclair/typebox").TObject<{
                            avgLoadTime: import("@sinclair/typebox").TOptional<import("@sinclair/typebox").TNumber>;
                            apiCalls: import("@sinclair/typebox").TOptional<import("@sinclair/typebox").TNumber>;
                            cacheHitRate: import("@sinclair/typebox").TOptional<import("@sinclair/typebox").TNumber>;
                            errorRate: import("@sinclair/typebox").TOptional<import("@sinclair/typebox").TNumber>;
                        }>>;
                        business: import("@sinclair/typebox").TOptional<import("@sinclair/typebox").TObject<{
                            orders: import("@sinclair/typebox").TOptional<import("@sinclair/typebox").TNumber>;
                            revenue: import("@sinclair/typebox").TOptional<import("@sinclair/typebox").TNumber>;
                            conversionRate: import("@sinclair/typebox").TOptional<import("@sinclair/typebox").TNumber>;
                            avgOrderValue: import("@sinclair/typebox").TOptional<import("@sinclair/typebox").TNumber>;
                        }>>;
                    }>, import("@sinclair/typebox").TUndefined]>>;
                }>;
            }>;
            responses: import("@sinclair/typebox").TObject<{
                201: import("@sinclair/typebox").TObject<{
                    id: import("@sinclair/typebox").TNumber;
                    date: import("@sinclair/typebox").TOptional<import("@sinclair/typebox").TUnion<[import("@sinclair/typebox").TString, import("@sinclair/typebox").TUndefined]>>;
                    period: import("@sinclair/typebox").TOptional<import("@sinclair/typebox").TUnion<[import("@sinclair/typebox").TString, import("@sinclair/typebox").TUndefined]>>;
                    metrics: import("@sinclair/typebox").TOptional<import("@sinclair/typebox").TUnion<[import("@sinclair/typebox").TObject<{
                        users: import("@sinclair/typebox").TOptional<import("@sinclair/typebox").TObject<{
                            total: import("@sinclair/typebox").TOptional<import("@sinclair/typebox").TNumber>;
                            new: import("@sinclair/typebox").TOptional<import("@sinclair/typebox").TNumber>;
                            returning: import("@sinclair/typebox").TOptional<import("@sinclair/typebox").TNumber>;
                            active: import("@sinclair/typebox").TOptional<import("@sinclair/typebox").TNumber>;
                        }>>;
                        traffic: import("@sinclair/typebox").TOptional<import("@sinclair/typebox").TObject<{
                            pageViews: import("@sinclair/typebox").TOptional<import("@sinclair/typebox").TNumber>;
                            uniqueViews: import("@sinclair/typebox").TOptional<import("@sinclair/typebox").TNumber>;
                            bounceRate: import("@sinclair/typebox").TOptional<import("@sinclair/typebox").TNumber>;
                            avgSessionDuration: import("@sinclair/typebox").TOptional<import("@sinclair/typebox").TNumber>;
                            topPages: import("@sinclair/typebox").TOptional<import("@sinclair/typebox").TArray<import("@sinclair/typebox").TObject<{
                                path: import("@sinclair/typebox").TOptional<import("@sinclair/typebox").TString>;
                                views: import("@sinclair/typebox").TOptional<import("@sinclair/typebox").TNumber>;
                            }>>>;
                        }>>;
                        performance: import("@sinclair/typebox").TOptional<import("@sinclair/typebox").TObject<{
                            avgLoadTime: import("@sinclair/typebox").TOptional<import("@sinclair/typebox").TNumber>;
                            apiCalls: import("@sinclair/typebox").TOptional<import("@sinclair/typebox").TNumber>;
                            cacheHitRate: import("@sinclair/typebox").TOptional<import("@sinclair/typebox").TNumber>;
                            errorRate: import("@sinclair/typebox").TOptional<import("@sinclair/typebox").TNumber>;
                        }>>;
                        business: import("@sinclair/typebox").TOptional<import("@sinclair/typebox").TObject<{
                            orders: import("@sinclair/typebox").TOptional<import("@sinclair/typebox").TNumber>;
                            revenue: import("@sinclair/typebox").TOptional<import("@sinclair/typebox").TNumber>;
                            conversionRate: import("@sinclair/typebox").TOptional<import("@sinclair/typebox").TNumber>;
                            avgOrderValue: import("@sinclair/typebox").TOptional<import("@sinclair/typebox").TNumber>;
                        }>>;
                    }>, import("@sinclair/typebox").TUndefined]>>;
                }>;
                400: import("@sinclair/typebox").TUnknown;
            }>;
        }>;
        "/notifications": import("@sinclair/typebox").TObject<{
            method: import("@sinclair/typebox").TLiteral<"POST">;
            path: import("@sinclair/typebox").TLiteral<"/notifications">;
            requestFormat: import("@sinclair/typebox").TLiteral<"json">;
            parameters: import("@sinclair/typebox").TObject<{
                body: import("@sinclair/typebox").TObject<{
                    id: import("@sinclair/typebox").TNumber;
                    userId: import("@sinclair/typebox").TOptional<import("@sinclair/typebox").TUnion<[import("@sinclair/typebox").TNumber, import("@sinclair/typebox").TUndefined]>>;
                    type: import("@sinclair/typebox").TOptional<import("@sinclair/typebox").TUnion<[import("@sinclair/typebox").TString, import("@sinclair/typebox").TUndefined]>>;
                    title: import("@sinclair/typebox").TOptional<import("@sinclair/typebox").TUnion<[import("@sinclair/typebox").TString, import("@sinclair/typebox").TUndefined]>>;
                    message: import("@sinclair/typebox").TOptional<import("@sinclair/typebox").TUnion<[import("@sinclair/typebox").TString, import("@sinclair/typebox").TUndefined]>>;
                    data: import("@sinclair/typebox").TOptional<import("@sinclair/typebox").TUnion<[import("@sinclair/typebox").TObject<{
                        orderId: import("@sinclair/typebox").TOptional<import("@sinclair/typebox").TNumber>;
                        trackingNumber: import("@sinclair/typebox").TOptional<import("@sinclair/typebox").TString>;
                    }>, import("@sinclair/typebox").TUndefined]>>;
                    isRead: import("@sinclair/typebox").TOptional<import("@sinclair/typebox").TUnion<[import("@sinclair/typebox").TBoolean, import("@sinclair/typebox").TUndefined]>>;
                    priority: import("@sinclair/typebox").TOptional<import("@sinclair/typebox").TUnion<[import("@sinclair/typebox").TString, import("@sinclair/typebox").TUndefined]>>;
                    createdAt: import("@sinclair/typebox").TOptional<import("@sinclair/typebox").TUnion<[import("@sinclair/typebox").TString, import("@sinclair/typebox").TUndefined]>>;
                }>;
            }>;
            responses: import("@sinclair/typebox").TObject<{
                201: import("@sinclair/typebox").TObject<{
                    id: import("@sinclair/typebox").TNumber;
                    userId: import("@sinclair/typebox").TOptional<import("@sinclair/typebox").TUnion<[import("@sinclair/typebox").TNumber, import("@sinclair/typebox").TUndefined]>>;
                    type: import("@sinclair/typebox").TOptional<import("@sinclair/typebox").TUnion<[import("@sinclair/typebox").TString, import("@sinclair/typebox").TUndefined]>>;
                    title: import("@sinclair/typebox").TOptional<import("@sinclair/typebox").TUnion<[import("@sinclair/typebox").TString, import("@sinclair/typebox").TUndefined]>>;
                    message: import("@sinclair/typebox").TOptional<import("@sinclair/typebox").TUnion<[import("@sinclair/typebox").TString, import("@sinclair/typebox").TUndefined]>>;
                    data: import("@sinclair/typebox").TOptional<import("@sinclair/typebox").TUnion<[import("@sinclair/typebox").TObject<{
                        orderId: import("@sinclair/typebox").TOptional<import("@sinclair/typebox").TNumber>;
                        trackingNumber: import("@sinclair/typebox").TOptional<import("@sinclair/typebox").TString>;
                    }>, import("@sinclair/typebox").TUndefined]>>;
                    isRead: import("@sinclair/typebox").TOptional<import("@sinclair/typebox").TUnion<[import("@sinclair/typebox").TBoolean, import("@sinclair/typebox").TUndefined]>>;
                    priority: import("@sinclair/typebox").TOptional<import("@sinclair/typebox").TUnion<[import("@sinclair/typebox").TString, import("@sinclair/typebox").TUndefined]>>;
                    createdAt: import("@sinclair/typebox").TOptional<import("@sinclair/typebox").TUnion<[import("@sinclair/typebox").TString, import("@sinclair/typebox").TUndefined]>>;
                }>;
                400: import("@sinclair/typebox").TUnknown;
            }>;
        }>;
    };
    put: {
        "/users/{id}": import("@sinclair/typebox").TObject<{
            method: import("@sinclair/typebox").TLiteral<"PUT">;
            path: import("@sinclair/typebox").TLiteral<"/users/{id}">;
            requestFormat: import("@sinclair/typebox").TLiteral<"json">;
            parameters: import("@sinclair/typebox").TObject<{
                path: import("@sinclair/typebox").TObject<{
                    id: import("@sinclair/typebox").TNumber;
                }>;
                body: import("@sinclair/typebox").TObject<{
                    id: import("@sinclair/typebox").TNumber;
                    username: import("@sinclair/typebox").TOptional<import("@sinclair/typebox").TUnion<[import("@sinclair/typebox").TString, import("@sinclair/typebox").TUndefined]>>;
                    email: import("@sinclair/typebox").TOptional<import("@sinclair/typebox").TUnion<[import("@sinclair/typebox").TString, import("@sinclair/typebox").TUndefined]>>;
                    profile: import("@sinclair/typebox").TOptional<import("@sinclair/typebox").TUnion<[import("@sinclair/typebox").TObject<{
                        firstName: import("@sinclair/typebox").TOptional<import("@sinclair/typebox").TString>;
                        lastName: import("@sinclair/typebox").TOptional<import("@sinclair/typebox").TString>;
                        avatar: import("@sinclair/typebox").TOptional<import("@sinclair/typebox").TString>;
                        bio: import("@sinclair/typebox").TOptional<import("@sinclair/typebox").TString>;
                        location: import("@sinclair/typebox").TOptional<import("@sinclair/typebox").TString>;
                        website: import("@sinclair/typebox").TOptional<import("@sinclair/typebox").TString>;
                    }>, import("@sinclair/typebox").TUndefined]>>;
                    preferences: import("@sinclair/typebox").TOptional<import("@sinclair/typebox").TUnion<[import("@sinclair/typebox").TObject<{
                        theme: import("@sinclair/typebox").TOptional<import("@sinclair/typebox").TString>;
                        notifications: import("@sinclair/typebox").TOptional<import("@sinclair/typebox").TBoolean>;
                        language: import("@sinclair/typebox").TOptional<import("@sinclair/typebox").TString>;
                        timezone: import("@sinclair/typebox").TOptional<import("@sinclair/typebox").TString>;
                        emailNotifications: import("@sinclair/typebox").TOptional<import("@sinclair/typebox").TObject<{
                            marketing: import("@sinclair/typebox").TOptional<import("@sinclair/typebox").TBoolean>;
                            security: import("@sinclair/typebox").TOptional<import("@sinclair/typebox").TBoolean>;
                            updates: import("@sinclair/typebox").TOptional<import("@sinclair/typebox").TBoolean>;
                        }>>;
                    }>, import("@sinclair/typebox").TUndefined]>>;
                    createdAt: import("@sinclair/typebox").TOptional<import("@sinclair/typebox").TUnion<[import("@sinclair/typebox").TString, import("@sinclair/typebox").TUndefined]>>;
                    lastLogin: import("@sinclair/typebox").TOptional<import("@sinclair/typebox").TUnion<[import("@sinclair/typebox").TString, import("@sinclair/typebox").TUndefined]>>;
                    isActive: import("@sinclair/typebox").TOptional<import("@sinclair/typebox").TUnion<[import("@sinclair/typebox").TBoolean, import("@sinclair/typebox").TUndefined]>>;
                    role: import("@sinclair/typebox").TOptional<import("@sinclair/typebox").TUnion<[import("@sinclair/typebox").TString, import("@sinclair/typebox").TUndefined]>>;
                    stats: import("@sinclair/typebox").TOptional<import("@sinclair/typebox").TUnion<[import("@sinclair/typebox").TObject<{
                        postsCreated: import("@sinclair/typebox").TOptional<import("@sinclair/typebox").TNumber>;
                        commentsPosted: import("@sinclair/typebox").TOptional<import("@sinclair/typebox").TNumber>;
                        loginCount: import("@sinclair/typebox").TOptional<import("@sinclair/typebox").TNumber>;
                    }>, import("@sinclair/typebox").TUndefined]>>;
                }>;
            }>;
            responses: import("@sinclair/typebox").TObject<{
                200: import("@sinclair/typebox").TObject<{
                    id: import("@sinclair/typebox").TNumber;
                    username: import("@sinclair/typebox").TOptional<import("@sinclair/typebox").TUnion<[import("@sinclair/typebox").TString, import("@sinclair/typebox").TUndefined]>>;
                    email: import("@sinclair/typebox").TOptional<import("@sinclair/typebox").TUnion<[import("@sinclair/typebox").TString, import("@sinclair/typebox").TUndefined]>>;
                    profile: import("@sinclair/typebox").TOptional<import("@sinclair/typebox").TUnion<[import("@sinclair/typebox").TObject<{
                        firstName: import("@sinclair/typebox").TOptional<import("@sinclair/typebox").TString>;
                        lastName: import("@sinclair/typebox").TOptional<import("@sinclair/typebox").TString>;
                        avatar: import("@sinclair/typebox").TOptional<import("@sinclair/typebox").TString>;
                        bio: import("@sinclair/typebox").TOptional<import("@sinclair/typebox").TString>;
                        location: import("@sinclair/typebox").TOptional<import("@sinclair/typebox").TString>;
                        website: import("@sinclair/typebox").TOptional<import("@sinclair/typebox").TString>;
                    }>, import("@sinclair/typebox").TUndefined]>>;
                    preferences: import("@sinclair/typebox").TOptional<import("@sinclair/typebox").TUnion<[import("@sinclair/typebox").TObject<{
                        theme: import("@sinclair/typebox").TOptional<import("@sinclair/typebox").TString>;
                        notifications: import("@sinclair/typebox").TOptional<import("@sinclair/typebox").TBoolean>;
                        language: import("@sinclair/typebox").TOptional<import("@sinclair/typebox").TString>;
                        timezone: import("@sinclair/typebox").TOptional<import("@sinclair/typebox").TString>;
                        emailNotifications: import("@sinclair/typebox").TOptional<import("@sinclair/typebox").TObject<{
                            marketing: import("@sinclair/typebox").TOptional<import("@sinclair/typebox").TBoolean>;
                            security: import("@sinclair/typebox").TOptional<import("@sinclair/typebox").TBoolean>;
                            updates: import("@sinclair/typebox").TOptional<import("@sinclair/typebox").TBoolean>;
                        }>>;
                    }>, import("@sinclair/typebox").TUndefined]>>;
                    createdAt: import("@sinclair/typebox").TOptional<import("@sinclair/typebox").TUnion<[import("@sinclair/typebox").TString, import("@sinclair/typebox").TUndefined]>>;
                    lastLogin: import("@sinclair/typebox").TOptional<import("@sinclair/typebox").TUnion<[import("@sinclair/typebox").TString, import("@sinclair/typebox").TUndefined]>>;
                    isActive: import("@sinclair/typebox").TOptional<import("@sinclair/typebox").TUnion<[import("@sinclair/typebox").TBoolean, import("@sinclair/typebox").TUndefined]>>;
                    role: import("@sinclair/typebox").TOptional<import("@sinclair/typebox").TUnion<[import("@sinclair/typebox").TString, import("@sinclair/typebox").TUndefined]>>;
                    stats: import("@sinclair/typebox").TOptional<import("@sinclair/typebox").TUnion<[import("@sinclair/typebox").TObject<{
                        postsCreated: import("@sinclair/typebox").TOptional<import("@sinclair/typebox").TNumber>;
                        commentsPosted: import("@sinclair/typebox").TOptional<import("@sinclair/typebox").TNumber>;
                        loginCount: import("@sinclair/typebox").TOptional<import("@sinclair/typebox").TNumber>;
                    }>, import("@sinclair/typebox").TUndefined]>>;
                }>;
                400: import("@sinclair/typebox").TUnknown;
                404: import("@sinclair/typebox").TUnknown;
            }>;
        }>;
        "/posts/{id}": import("@sinclair/typebox").TObject<{
            method: import("@sinclair/typebox").TLiteral<"PUT">;
            path: import("@sinclair/typebox").TLiteral<"/posts/{id}">;
            requestFormat: import("@sinclair/typebox").TLiteral<"json">;
            parameters: import("@sinclair/typebox").TObject<{
                path: import("@sinclair/typebox").TObject<{
                    id: import("@sinclair/typebox").TNumber;
                }>;
                body: import("@sinclair/typebox").TObject<{
                    id: import("@sinclair/typebox").TNumber;
                    title: import("@sinclair/typebox").TOptional<import("@sinclair/typebox").TUnion<[import("@sinclair/typebox").TString, import("@sinclair/typebox").TUndefined]>>;
                    content: import("@sinclair/typebox").TOptional<import("@sinclair/typebox").TUnion<[import("@sinclair/typebox").TString, import("@sinclair/typebox").TUndefined]>>;
                    excerpt: import("@sinclair/typebox").TOptional<import("@sinclair/typebox").TUnion<[import("@sinclair/typebox").TString, import("@sinclair/typebox").TUndefined]>>;
                    authorId: import("@sinclair/typebox").TOptional<import("@sinclair/typebox").TUnion<[import("@sinclair/typebox").TNumber, import("@sinclair/typebox").TUndefined]>>;
                    categoryId: import("@sinclair/typebox").TOptional<import("@sinclair/typebox").TUnion<[import("@sinclair/typebox").TNumber, import("@sinclair/typebox").TUndefined]>>;
                    tags: import("@sinclair/typebox").TOptional<import("@sinclair/typebox").TUnion<[import("@sinclair/typebox").TArray<import("@sinclair/typebox").TString>, import("@sinclair/typebox").TUndefined]>>;
                    status: import("@sinclair/typebox").TOptional<import("@sinclair/typebox").TUnion<[import("@sinclair/typebox").TString, import("@sinclair/typebox").TUndefined]>>;
                    featured: import("@sinclair/typebox").TOptional<import("@sinclair/typebox").TUnion<[import("@sinclair/typebox").TBoolean, import("@sinclair/typebox").TUndefined]>>;
                    metadata: import("@sinclair/typebox").TOptional<import("@sinclair/typebox").TUnion<[import("@sinclair/typebox").TObject<{
                        views: import("@sinclair/typebox").TOptional<import("@sinclair/typebox").TNumber>;
                        likes: import("@sinclair/typebox").TOptional<import("@sinclair/typebox").TNumber>;
                        comments: import("@sinclair/typebox").TOptional<import("@sinclair/typebox").TNumber>;
                        shares: import("@sinclair/typebox").TOptional<import("@sinclair/typebox").TNumber>;
                        bookmarks: import("@sinclair/typebox").TOptional<import("@sinclair/typebox").TNumber>;
                        readTime: import("@sinclair/typebox").TOptional<import("@sinclair/typebox").TNumber>;
                    }>, import("@sinclair/typebox").TUndefined]>>;
                    seo: import("@sinclair/typebox").TOptional<import("@sinclair/typebox").TUnion<[import("@sinclair/typebox").TObject<{
                        slug: import("@sinclair/typebox").TOptional<import("@sinclair/typebox").TString>;
                        metaTitle: import("@sinclair/typebox").TOptional<import("@sinclair/typebox").TString>;
                        metaDescription: import("@sinclair/typebox").TOptional<import("@sinclair/typebox").TString>;
                        keywords: import("@sinclair/typebox").TOptional<import("@sinclair/typebox").TArray<import("@sinclair/typebox").TString>>;
                    }>, import("@sinclair/typebox").TUndefined]>>;
                    createdAt: import("@sinclair/typebox").TOptional<import("@sinclair/typebox").TUnion<[import("@sinclair/typebox").TString, import("@sinclair/typebox").TUndefined]>>;
                    updatedAt: import("@sinclair/typebox").TOptional<import("@sinclair/typebox").TUnion<[import("@sinclair/typebox").TString, import("@sinclair/typebox").TUndefined]>>;
                    publishedAt: import("@sinclair/typebox").TOptional<import("@sinclair/typebox").TUnion<[import("@sinclair/typebox").TString, import("@sinclair/typebox").TUndefined]>>;
                }>;
            }>;
            responses: import("@sinclair/typebox").TObject<{
                200: import("@sinclair/typebox").TObject<{
                    id: import("@sinclair/typebox").TNumber;
                    title: import("@sinclair/typebox").TOptional<import("@sinclair/typebox").TUnion<[import("@sinclair/typebox").TString, import("@sinclair/typebox").TUndefined]>>;
                    content: import("@sinclair/typebox").TOptional<import("@sinclair/typebox").TUnion<[import("@sinclair/typebox").TString, import("@sinclair/typebox").TUndefined]>>;
                    excerpt: import("@sinclair/typebox").TOptional<import("@sinclair/typebox").TUnion<[import("@sinclair/typebox").TString, import("@sinclair/typebox").TUndefined]>>;
                    authorId: import("@sinclair/typebox").TOptional<import("@sinclair/typebox").TUnion<[import("@sinclair/typebox").TNumber, import("@sinclair/typebox").TUndefined]>>;
                    categoryId: import("@sinclair/typebox").TOptional<import("@sinclair/typebox").TUnion<[import("@sinclair/typebox").TNumber, import("@sinclair/typebox").TUndefined]>>;
                    tags: import("@sinclair/typebox").TOptional<import("@sinclair/typebox").TUnion<[import("@sinclair/typebox").TArray<import("@sinclair/typebox").TString>, import("@sinclair/typebox").TUndefined]>>;
                    status: import("@sinclair/typebox").TOptional<import("@sinclair/typebox").TUnion<[import("@sinclair/typebox").TString, import("@sinclair/typebox").TUndefined]>>;
                    featured: import("@sinclair/typebox").TOptional<import("@sinclair/typebox").TUnion<[import("@sinclair/typebox").TBoolean, import("@sinclair/typebox").TUndefined]>>;
                    metadata: import("@sinclair/typebox").TOptional<import("@sinclair/typebox").TUnion<[import("@sinclair/typebox").TObject<{
                        views: import("@sinclair/typebox").TOptional<import("@sinclair/typebox").TNumber>;
                        likes: import("@sinclair/typebox").TOptional<import("@sinclair/typebox").TNumber>;
                        comments: import("@sinclair/typebox").TOptional<import("@sinclair/typebox").TNumber>;
                        shares: import("@sinclair/typebox").TOptional<import("@sinclair/typebox").TNumber>;
                        bookmarks: import("@sinclair/typebox").TOptional<import("@sinclair/typebox").TNumber>;
                        readTime: import("@sinclair/typebox").TOptional<import("@sinclair/typebox").TNumber>;
                    }>, import("@sinclair/typebox").TUndefined]>>;
                    seo: import("@sinclair/typebox").TOptional<import("@sinclair/typebox").TUnion<[import("@sinclair/typebox").TObject<{
                        slug: import("@sinclair/typebox").TOptional<import("@sinclair/typebox").TString>;
                        metaTitle: import("@sinclair/typebox").TOptional<import("@sinclair/typebox").TString>;
                        metaDescription: import("@sinclair/typebox").TOptional<import("@sinclair/typebox").TString>;
                        keywords: import("@sinclair/typebox").TOptional<import("@sinclair/typebox").TArray<import("@sinclair/typebox").TString>>;
                    }>, import("@sinclair/typebox").TUndefined]>>;
                    createdAt: import("@sinclair/typebox").TOptional<import("@sinclair/typebox").TUnion<[import("@sinclair/typebox").TString, import("@sinclair/typebox").TUndefined]>>;
                    updatedAt: import("@sinclair/typebox").TOptional<import("@sinclair/typebox").TUnion<[import("@sinclair/typebox").TString, import("@sinclair/typebox").TUndefined]>>;
                    publishedAt: import("@sinclair/typebox").TOptional<import("@sinclair/typebox").TUnion<[import("@sinclair/typebox").TString, import("@sinclair/typebox").TUndefined]>>;
                }>;
                400: import("@sinclair/typebox").TUnknown;
                404: import("@sinclair/typebox").TUnknown;
            }>;
        }>;
        "/comments/{id}": import("@sinclair/typebox").TObject<{
            method: import("@sinclair/typebox").TLiteral<"PUT">;
            path: import("@sinclair/typebox").TLiteral<"/comments/{id}">;
            requestFormat: import("@sinclair/typebox").TLiteral<"json">;
            parameters: import("@sinclair/typebox").TObject<{
                path: import("@sinclair/typebox").TObject<{
                    id: import("@sinclair/typebox").TNumber;
                }>;
                body: import("@sinclair/typebox").TObject<{
                    id: import("@sinclair/typebox").TNumber;
                    postId: import("@sinclair/typebox").TOptional<import("@sinclair/typebox").TUnion<[import("@sinclair/typebox").TNumber, import("@sinclair/typebox").TUndefined]>>;
                    authorId: import("@sinclair/typebox").TOptional<import("@sinclair/typebox").TUnion<[import("@sinclair/typebox").TNumber, import("@sinclair/typebox").TUndefined]>>;
                    content: import("@sinclair/typebox").TOptional<import("@sinclair/typebox").TUnion<[import("@sinclair/typebox").TString, import("@sinclair/typebox").TUndefined]>>;
                    parentId: import("@sinclair/typebox").TOptional<import("@sinclair/typebox").TUnion<[import("@sinclair/typebox").TNull, import("@sinclair/typebox").TUndefined]>>;
                    likes: import("@sinclair/typebox").TOptional<import("@sinclair/typebox").TUnion<[import("@sinclair/typebox").TNumber, import("@sinclair/typebox").TUndefined]>>;
                    isApproved: import("@sinclair/typebox").TOptional<import("@sinclair/typebox").TUnion<[import("@sinclair/typebox").TBoolean, import("@sinclair/typebox").TUndefined]>>;
                    isEdited: import("@sinclair/typebox").TOptional<import("@sinclair/typebox").TUnion<[import("@sinclair/typebox").TBoolean, import("@sinclair/typebox").TUndefined]>>;
                    createdAt: import("@sinclair/typebox").TOptional<import("@sinclair/typebox").TUnion<[import("@sinclair/typebox").TString, import("@sinclair/typebox").TUndefined]>>;
                    updatedAt: import("@sinclair/typebox").TOptional<import("@sinclair/typebox").TUnion<[import("@sinclair/typebox").TString, import("@sinclair/typebox").TUndefined]>>;
                }>;
            }>;
            responses: import("@sinclair/typebox").TObject<{
                200: import("@sinclair/typebox").TObject<{
                    id: import("@sinclair/typebox").TNumber;
                    postId: import("@sinclair/typebox").TOptional<import("@sinclair/typebox").TUnion<[import("@sinclair/typebox").TNumber, import("@sinclair/typebox").TUndefined]>>;
                    authorId: import("@sinclair/typebox").TOptional<import("@sinclair/typebox").TUnion<[import("@sinclair/typebox").TNumber, import("@sinclair/typebox").TUndefined]>>;
                    content: import("@sinclair/typebox").TOptional<import("@sinclair/typebox").TUnion<[import("@sinclair/typebox").TString, import("@sinclair/typebox").TUndefined]>>;
                    parentId: import("@sinclair/typebox").TOptional<import("@sinclair/typebox").TUnion<[import("@sinclair/typebox").TNull, import("@sinclair/typebox").TUndefined]>>;
                    likes: import("@sinclair/typebox").TOptional<import("@sinclair/typebox").TUnion<[import("@sinclair/typebox").TNumber, import("@sinclair/typebox").TUndefined]>>;
                    isApproved: import("@sinclair/typebox").TOptional<import("@sinclair/typebox").TUnion<[import("@sinclair/typebox").TBoolean, import("@sinclair/typebox").TUndefined]>>;
                    isEdited: import("@sinclair/typebox").TOptional<import("@sinclair/typebox").TUnion<[import("@sinclair/typebox").TBoolean, import("@sinclair/typebox").TUndefined]>>;
                    createdAt: import("@sinclair/typebox").TOptional<import("@sinclair/typebox").TUnion<[import("@sinclair/typebox").TString, import("@sinclair/typebox").TUndefined]>>;
                    updatedAt: import("@sinclair/typebox").TOptional<import("@sinclair/typebox").TUnion<[import("@sinclair/typebox").TString, import("@sinclair/typebox").TUndefined]>>;
                }>;
                400: import("@sinclair/typebox").TUnknown;
                404: import("@sinclair/typebox").TUnknown;
            }>;
        }>;
        "/categories/{id}": import("@sinclair/typebox").TObject<{
            method: import("@sinclair/typebox").TLiteral<"PUT">;
            path: import("@sinclair/typebox").TLiteral<"/categories/{id}">;
            requestFormat: import("@sinclair/typebox").TLiteral<"json">;
            parameters: import("@sinclair/typebox").TObject<{
                path: import("@sinclair/typebox").TObject<{
                    id: import("@sinclair/typebox").TNumber;
                }>;
                body: import("@sinclair/typebox").TObject<{
                    id: import("@sinclair/typebox").TNumber;
                    name: import("@sinclair/typebox").TOptional<import("@sinclair/typebox").TUnion<[import("@sinclair/typebox").TString, import("@sinclair/typebox").TUndefined]>>;
                    slug: import("@sinclair/typebox").TOptional<import("@sinclair/typebox").TUnion<[import("@sinclair/typebox").TString, import("@sinclair/typebox").TUndefined]>>;
                    description: import("@sinclair/typebox").TOptional<import("@sinclair/typebox").TUnion<[import("@sinclair/typebox").TString, import("@sinclair/typebox").TUndefined]>>;
                    postCount: import("@sinclair/typebox").TOptional<import("@sinclair/typebox").TUnion<[import("@sinclair/typebox").TNumber, import("@sinclair/typebox").TUndefined]>>;
                    color: import("@sinclair/typebox").TOptional<import("@sinclair/typebox").TUnion<[import("@sinclair/typebox").TString, import("@sinclair/typebox").TUndefined]>>;
                    icon: import("@sinclair/typebox").TOptional<import("@sinclair/typebox").TUnion<[import("@sinclair/typebox").TString, import("@sinclair/typebox").TUndefined]>>;
                    isActive: import("@sinclair/typebox").TOptional<import("@sinclair/typebox").TUnion<[import("@sinclair/typebox").TBoolean, import("@sinclair/typebox").TUndefined]>>;
                    parentId: import("@sinclair/typebox").TOptional<import("@sinclair/typebox").TUnion<[import("@sinclair/typebox").TNull, import("@sinclair/typebox").TUndefined]>>;
                    createdAt: import("@sinclair/typebox").TOptional<import("@sinclair/typebox").TUnion<[import("@sinclair/typebox").TString, import("@sinclair/typebox").TUndefined]>>;
                    metadata: import("@sinclair/typebox").TOptional<import("@sinclair/typebox").TUnion<[import("@sinclair/typebox").TObject<{
                        totalViews: import("@sinclair/typebox").TOptional<import("@sinclair/typebox").TNumber>;
                        averageRating: import("@sinclair/typebox").TOptional<import("@sinclair/typebox").TNumber>;
                    }>, import("@sinclair/typebox").TUndefined]>>;
                }>;
            }>;
            responses: import("@sinclair/typebox").TObject<{
                200: import("@sinclair/typebox").TObject<{
                    id: import("@sinclair/typebox").TNumber;
                    name: import("@sinclair/typebox").TOptional<import("@sinclair/typebox").TUnion<[import("@sinclair/typebox").TString, import("@sinclair/typebox").TUndefined]>>;
                    slug: import("@sinclair/typebox").TOptional<import("@sinclair/typebox").TUnion<[import("@sinclair/typebox").TString, import("@sinclair/typebox").TUndefined]>>;
                    description: import("@sinclair/typebox").TOptional<import("@sinclair/typebox").TUnion<[import("@sinclair/typebox").TString, import("@sinclair/typebox").TUndefined]>>;
                    postCount: import("@sinclair/typebox").TOptional<import("@sinclair/typebox").TUnion<[import("@sinclair/typebox").TNumber, import("@sinclair/typebox").TUndefined]>>;
                    color: import("@sinclair/typebox").TOptional<import("@sinclair/typebox").TUnion<[import("@sinclair/typebox").TString, import("@sinclair/typebox").TUndefined]>>;
                    icon: import("@sinclair/typebox").TOptional<import("@sinclair/typebox").TUnion<[import("@sinclair/typebox").TString, import("@sinclair/typebox").TUndefined]>>;
                    isActive: import("@sinclair/typebox").TOptional<import("@sinclair/typebox").TUnion<[import("@sinclair/typebox").TBoolean, import("@sinclair/typebox").TUndefined]>>;
                    parentId: import("@sinclair/typebox").TOptional<import("@sinclair/typebox").TUnion<[import("@sinclair/typebox").TNull, import("@sinclair/typebox").TUndefined]>>;
                    createdAt: import("@sinclair/typebox").TOptional<import("@sinclair/typebox").TUnion<[import("@sinclair/typebox").TString, import("@sinclair/typebox").TUndefined]>>;
                    metadata: import("@sinclair/typebox").TOptional<import("@sinclair/typebox").TUnion<[import("@sinclair/typebox").TObject<{
                        totalViews: import("@sinclair/typebox").TOptional<import("@sinclair/typebox").TNumber>;
                        averageRating: import("@sinclair/typebox").TOptional<import("@sinclair/typebox").TNumber>;
                    }>, import("@sinclair/typebox").TUndefined]>>;
                }>;
                400: import("@sinclair/typebox").TUnknown;
                404: import("@sinclair/typebox").TUnknown;
            }>;
        }>;
        "/products/{id}": import("@sinclair/typebox").TObject<{
            method: import("@sinclair/typebox").TLiteral<"PUT">;
            path: import("@sinclair/typebox").TLiteral<"/products/{id}">;
            requestFormat: import("@sinclair/typebox").TLiteral<"json">;
            parameters: import("@sinclair/typebox").TObject<{
                path: import("@sinclair/typebox").TObject<{
                    id: import("@sinclair/typebox").TNumber;
                }>;
                body: import("@sinclair/typebox").TObject<{
                    id: import("@sinclair/typebox").TNumber;
                    name: import("@sinclair/typebox").TOptional<import("@sinclair/typebox").TUnion<[import("@sinclair/typebox").TString, import("@sinclair/typebox").TUndefined]>>;
                    description: import("@sinclair/typebox").TOptional<import("@sinclair/typebox").TUnion<[import("@sinclair/typebox").TString, import("@sinclair/typebox").TUndefined]>>;
                    shortDescription: import("@sinclair/typebox").TOptional<import("@sinclair/typebox").TUnion<[import("@sinclair/typebox").TString, import("@sinclair/typebox").TUndefined]>>;
                    price: import("@sinclair/typebox").TOptional<import("@sinclair/typebox").TUnion<[import("@sinclair/typebox").TNumber, import("@sinclair/typebox").TUndefined]>>;
                    originalPrice: import("@sinclair/typebox").TOptional<import("@sinclair/typebox").TUnion<[import("@sinclair/typebox").TNumber, import("@sinclair/typebox").TUndefined]>>;
                    currency: import("@sinclair/typebox").TOptional<import("@sinclair/typebox").TUnion<[import("@sinclair/typebox").TString, import("@sinclair/typebox").TUndefined]>>;
                    categoryId: import("@sinclair/typebox").TOptional<import("@sinclair/typebox").TUnion<[import("@sinclair/typebox").TNumber, import("@sinclair/typebox").TUndefined]>>;
                    brand: import("@sinclair/typebox").TOptional<import("@sinclair/typebox").TUnion<[import("@sinclair/typebox").TString, import("@sinclair/typebox").TUndefined]>>;
                    model: import("@sinclair/typebox").TOptional<import("@sinclair/typebox").TUnion<[import("@sinclair/typebox").TString, import("@sinclair/typebox").TUndefined]>>;
                    sku: import("@sinclair/typebox").TOptional<import("@sinclair/typebox").TUnion<[import("@sinclair/typebox").TString, import("@sinclair/typebox").TUndefined]>>;
                    barcode: import("@sinclair/typebox").TOptional<import("@sinclair/typebox").TUnion<[import("@sinclair/typebox").TString, import("@sinclair/typebox").TUndefined]>>;
                    inventory: import("@sinclair/typebox").TOptional<import("@sinclair/typebox").TUnion<[import("@sinclair/typebox").TObject<{
                        inStock: import("@sinclair/typebox").TOptional<import("@sinclair/typebox").TNumber>;
                        reserved: import("@sinclair/typebox").TOptional<import("@sinclair/typebox").TNumber>;
                        available: import("@sinclair/typebox").TOptional<import("@sinclair/typebox").TNumber>;
                        lowStockThreshold: import("@sinclair/typebox").TOptional<import("@sinclair/typebox").TNumber>;
                    }>, import("@sinclair/typebox").TUndefined]>>;
                    images: import("@sinclair/typebox").TOptional<import("@sinclair/typebox").TUnion<[import("@sinclair/typebox").TArray<import("@sinclair/typebox").TString>, import("@sinclair/typebox").TUndefined]>>;
                    specifications: import("@sinclair/typebox").TOptional<import("@sinclair/typebox").TUnion<[import("@sinclair/typebox").TObject<{
                        batteryLife: import("@sinclair/typebox").TOptional<import("@sinclair/typebox").TString>;
                        chargingTime: import("@sinclair/typebox").TOptional<import("@sinclair/typebox").TString>;
                        connectivity: import("@sinclair/typebox").TOptional<import("@sinclair/typebox").TString>;
                        weight: import("@sinclair/typebox").TOptional<import("@sinclair/typebox").TString>;
                        dimensions: import("@sinclair/typebox").TOptional<import("@sinclair/typebox").TString>;
                        colors: import("@sinclair/typebox").TOptional<import("@sinclair/typebox").TArray<import("@sinclair/typebox").TString>>;
                        warranty: import("@sinclair/typebox").TOptional<import("@sinclair/typebox").TString>;
                    }>, import("@sinclair/typebox").TUndefined]>>;
                    features: import("@sinclair/typebox").TOptional<import("@sinclair/typebox").TUnion<[import("@sinclair/typebox").TArray<import("@sinclair/typebox").TString>, import("@sinclair/typebox").TUndefined]>>;
                    ratings: import("@sinclair/typebox").TOptional<import("@sinclair/typebox").TUnion<[import("@sinclair/typebox").TObject<{
                        average: import("@sinclair/typebox").TOptional<import("@sinclair/typebox").TNumber>;
                        count: import("@sinclair/typebox").TOptional<import("@sinclair/typebox").TNumber>;
                        breakdown: import("@sinclair/typebox").TOptional<import("@sinclair/typebox").TObject<{
                            1: import("@sinclair/typebox").TOptional<import("@sinclair/typebox").TNumber>;
                            2: import("@sinclair/typebox").TOptional<import("@sinclair/typebox").TNumber>;
                            3: import("@sinclair/typebox").TOptional<import("@sinclair/typebox").TNumber>;
                            4: import("@sinclair/typebox").TOptional<import("@sinclair/typebox").TNumber>;
                            5: import("@sinclair/typebox").TOptional<import("@sinclair/typebox").TNumber>;
                        }>>;
                    }>, import("@sinclair/typebox").TUndefined]>>;
                    tags: import("@sinclair/typebox").TOptional<import("@sinclair/typebox").TUnion<[import("@sinclair/typebox").TArray<import("@sinclair/typebox").TString>, import("@sinclair/typebox").TUndefined]>>;
                    isActive: import("@sinclair/typebox").TOptional<import("@sinclair/typebox").TUnion<[import("@sinclair/typebox").TBoolean, import("@sinclair/typebox").TUndefined]>>;
                    isFeatured: import("@sinclair/typebox").TOptional<import("@sinclair/typebox").TUnion<[import("@sinclair/typebox").TBoolean, import("@sinclair/typebox").TUndefined]>>;
                    createdAt: import("@sinclair/typebox").TOptional<import("@sinclair/typebox").TUnion<[import("@sinclair/typebox").TString, import("@sinclair/typebox").TUndefined]>>;
                    updatedAt: import("@sinclair/typebox").TOptional<import("@sinclair/typebox").TUnion<[import("@sinclair/typebox").TString, import("@sinclair/typebox").TUndefined]>>;
                }>;
            }>;
            responses: import("@sinclair/typebox").TObject<{
                200: import("@sinclair/typebox").TObject<{
                    id: import("@sinclair/typebox").TNumber;
                    name: import("@sinclair/typebox").TOptional<import("@sinclair/typebox").TUnion<[import("@sinclair/typebox").TString, import("@sinclair/typebox").TUndefined]>>;
                    description: import("@sinclair/typebox").TOptional<import("@sinclair/typebox").TUnion<[import("@sinclair/typebox").TString, import("@sinclair/typebox").TUndefined]>>;
                    shortDescription: import("@sinclair/typebox").TOptional<import("@sinclair/typebox").TUnion<[import("@sinclair/typebox").TString, import("@sinclair/typebox").TUndefined]>>;
                    price: import("@sinclair/typebox").TOptional<import("@sinclair/typebox").TUnion<[import("@sinclair/typebox").TNumber, import("@sinclair/typebox").TUndefined]>>;
                    originalPrice: import("@sinclair/typebox").TOptional<import("@sinclair/typebox").TUnion<[import("@sinclair/typebox").TNumber, import("@sinclair/typebox").TUndefined]>>;
                    currency: import("@sinclair/typebox").TOptional<import("@sinclair/typebox").TUnion<[import("@sinclair/typebox").TString, import("@sinclair/typebox").TUndefined]>>;
                    categoryId: import("@sinclair/typebox").TOptional<import("@sinclair/typebox").TUnion<[import("@sinclair/typebox").TNumber, import("@sinclair/typebox").TUndefined]>>;
                    brand: import("@sinclair/typebox").TOptional<import("@sinclair/typebox").TUnion<[import("@sinclair/typebox").TString, import("@sinclair/typebox").TUndefined]>>;
                    model: import("@sinclair/typebox").TOptional<import("@sinclair/typebox").TUnion<[import("@sinclair/typebox").TString, import("@sinclair/typebox").TUndefined]>>;
                    sku: import("@sinclair/typebox").TOptional<import("@sinclair/typebox").TUnion<[import("@sinclair/typebox").TString, import("@sinclair/typebox").TUndefined]>>;
                    barcode: import("@sinclair/typebox").TOptional<import("@sinclair/typebox").TUnion<[import("@sinclair/typebox").TString, import("@sinclair/typebox").TUndefined]>>;
                    inventory: import("@sinclair/typebox").TOptional<import("@sinclair/typebox").TUnion<[import("@sinclair/typebox").TObject<{
                        inStock: import("@sinclair/typebox").TOptional<import("@sinclair/typebox").TNumber>;
                        reserved: import("@sinclair/typebox").TOptional<import("@sinclair/typebox").TNumber>;
                        available: import("@sinclair/typebox").TOptional<import("@sinclair/typebox").TNumber>;
                        lowStockThreshold: import("@sinclair/typebox").TOptional<import("@sinclair/typebox").TNumber>;
                    }>, import("@sinclair/typebox").TUndefined]>>;
                    images: import("@sinclair/typebox").TOptional<import("@sinclair/typebox").TUnion<[import("@sinclair/typebox").TArray<import("@sinclair/typebox").TString>, import("@sinclair/typebox").TUndefined]>>;
                    specifications: import("@sinclair/typebox").TOptional<import("@sinclair/typebox").TUnion<[import("@sinclair/typebox").TObject<{
                        batteryLife: import("@sinclair/typebox").TOptional<import("@sinclair/typebox").TString>;
                        chargingTime: import("@sinclair/typebox").TOptional<import("@sinclair/typebox").TString>;
                        connectivity: import("@sinclair/typebox").TOptional<import("@sinclair/typebox").TString>;
                        weight: import("@sinclair/typebox").TOptional<import("@sinclair/typebox").TString>;
                        dimensions: import("@sinclair/typebox").TOptional<import("@sinclair/typebox").TString>;
                        colors: import("@sinclair/typebox").TOptional<import("@sinclair/typebox").TArray<import("@sinclair/typebox").TString>>;
                        warranty: import("@sinclair/typebox").TOptional<import("@sinclair/typebox").TString>;
                    }>, import("@sinclair/typebox").TUndefined]>>;
                    features: import("@sinclair/typebox").TOptional<import("@sinclair/typebox").TUnion<[import("@sinclair/typebox").TArray<import("@sinclair/typebox").TString>, import("@sinclair/typebox").TUndefined]>>;
                    ratings: import("@sinclair/typebox").TOptional<import("@sinclair/typebox").TUnion<[import("@sinclair/typebox").TObject<{
                        average: import("@sinclair/typebox").TOptional<import("@sinclair/typebox").TNumber>;
                        count: import("@sinclair/typebox").TOptional<import("@sinclair/typebox").TNumber>;
                        breakdown: import("@sinclair/typebox").TOptional<import("@sinclair/typebox").TObject<{
                            1: import("@sinclair/typebox").TOptional<import("@sinclair/typebox").TNumber>;
                            2: import("@sinclair/typebox").TOptional<import("@sinclair/typebox").TNumber>;
                            3: import("@sinclair/typebox").TOptional<import("@sinclair/typebox").TNumber>;
                            4: import("@sinclair/typebox").TOptional<import("@sinclair/typebox").TNumber>;
                            5: import("@sinclair/typebox").TOptional<import("@sinclair/typebox").TNumber>;
                        }>>;
                    }>, import("@sinclair/typebox").TUndefined]>>;
                    tags: import("@sinclair/typebox").TOptional<import("@sinclair/typebox").TUnion<[import("@sinclair/typebox").TArray<import("@sinclair/typebox").TString>, import("@sinclair/typebox").TUndefined]>>;
                    isActive: import("@sinclair/typebox").TOptional<import("@sinclair/typebox").TUnion<[import("@sinclair/typebox").TBoolean, import("@sinclair/typebox").TUndefined]>>;
                    isFeatured: import("@sinclair/typebox").TOptional<import("@sinclair/typebox").TUnion<[import("@sinclair/typebox").TBoolean, import("@sinclair/typebox").TUndefined]>>;
                    createdAt: import("@sinclair/typebox").TOptional<import("@sinclair/typebox").TUnion<[import("@sinclair/typebox").TString, import("@sinclair/typebox").TUndefined]>>;
                    updatedAt: import("@sinclair/typebox").TOptional<import("@sinclair/typebox").TUnion<[import("@sinclair/typebox").TString, import("@sinclair/typebox").TUndefined]>>;
                }>;
                400: import("@sinclair/typebox").TUnknown;
                404: import("@sinclair/typebox").TUnknown;
            }>;
        }>;
        "/orders/{id}": import("@sinclair/typebox").TObject<{
            method: import("@sinclair/typebox").TLiteral<"PUT">;
            path: import("@sinclair/typebox").TLiteral<"/orders/{id}">;
            requestFormat: import("@sinclair/typebox").TLiteral<"json">;
            parameters: import("@sinclair/typebox").TObject<{
                path: import("@sinclair/typebox").TObject<{
                    id: import("@sinclair/typebox").TNumber;
                }>;
                body: import("@sinclair/typebox").TObject<{
                    id: import("@sinclair/typebox").TNumber;
                    userId: import("@sinclair/typebox").TOptional<import("@sinclair/typebox").TUnion<[import("@sinclair/typebox").TNumber, import("@sinclair/typebox").TUndefined]>>;
                    orderNumber: import("@sinclair/typebox").TOptional<import("@sinclair/typebox").TUnion<[import("@sinclair/typebox").TString, import("@sinclair/typebox").TUndefined]>>;
                    items: import("@sinclair/typebox").TOptional<import("@sinclair/typebox").TUnion<[import("@sinclair/typebox").TArray<import("@sinclair/typebox").TObject<{
                        productId: import("@sinclair/typebox").TOptional<import("@sinclair/typebox").TNumber>;
                        productName: import("@sinclair/typebox").TOptional<import("@sinclair/typebox").TString>;
                        quantity: import("@sinclair/typebox").TOptional<import("@sinclair/typebox").TNumber>;
                        unitPrice: import("@sinclair/typebox").TOptional<import("@sinclair/typebox").TNumber>;
                        totalPrice: import("@sinclair/typebox").TOptional<import("@sinclair/typebox").TNumber>;
                        sku: import("@sinclair/typebox").TOptional<import("@sinclair/typebox").TString>;
                    }>>, import("@sinclair/typebox").TUndefined]>>;
                    status: import("@sinclair/typebox").TOptional<import("@sinclair/typebox").TUnion<[import("@sinclair/typebox").TString, import("@sinclair/typebox").TUndefined]>>;
                    paymentStatus: import("@sinclair/typebox").TOptional<import("@sinclair/typebox").TUnion<[import("@sinclair/typebox").TString, import("@sinclair/typebox").TUndefined]>>;
                    shippingMethod: import("@sinclair/typebox").TOptional<import("@sinclair/typebox").TUnion<[import("@sinclair/typebox").TString, import("@sinclair/typebox").TUndefined]>>;
                    trackingNumber: import("@sinclair/typebox").TOptional<import("@sinclair/typebox").TUnion<[import("@sinclair/typebox").TString, import("@sinclair/typebox").TUndefined]>>;
                    addresses: import("@sinclair/typebox").TOptional<import("@sinclair/typebox").TUnion<[import("@sinclair/typebox").TObject<{
                        shipping: import("@sinclair/typebox").TOptional<import("@sinclair/typebox").TObject<{
                            name: import("@sinclair/typebox").TOptional<import("@sinclair/typebox").TString>;
                            street: import("@sinclair/typebox").TOptional<import("@sinclair/typebox").TString>;
                            apartment: import("@sinclair/typebox").TOptional<import("@sinclair/typebox").TString>;
                            city: import("@sinclair/typebox").TOptional<import("@sinclair/typebox").TString>;
                            state: import("@sinclair/typebox").TOptional<import("@sinclair/typebox").TString>;
                            zipCode: import("@sinclair/typebox").TOptional<import("@sinclair/typebox").TString>;
                            country: import("@sinclair/typebox").TOptional<import("@sinclair/typebox").TString>;
                            phone: import("@sinclair/typebox").TOptional<import("@sinclair/typebox").TString>;
                        }>>;
                        billing: import("@sinclair/typebox").TOptional<import("@sinclair/typebox").TObject<{
                            name: import("@sinclair/typebox").TOptional<import("@sinclair/typebox").TString>;
                            street: import("@sinclair/typebox").TOptional<import("@sinclair/typebox").TString>;
                            apartment: import("@sinclair/typebox").TOptional<import("@sinclair/typebox").TString>;
                            city: import("@sinclair/typebox").TOptional<import("@sinclair/typebox").TString>;
                            state: import("@sinclair/typebox").TOptional<import("@sinclair/typebox").TString>;
                            zipCode: import("@sinclair/typebox").TOptional<import("@sinclair/typebox").TString>;
                            country: import("@sinclair/typebox").TOptional<import("@sinclair/typebox").TString>;
                            phone: import("@sinclair/typebox").TOptional<import("@sinclair/typebox").TString>;
                        }>>;
                    }>, import("@sinclair/typebox").TUndefined]>>;
                    totals: import("@sinclair/typebox").TOptional<import("@sinclair/typebox").TUnion<[import("@sinclair/typebox").TObject<{
                        subtotal: import("@sinclair/typebox").TOptional<import("@sinclair/typebox").TNumber>;
                        tax: import("@sinclair/typebox").TOptional<import("@sinclair/typebox").TNumber>;
                        shipping: import("@sinclair/typebox").TOptional<import("@sinclair/typebox").TNumber>;
                        discount: import("@sinclair/typebox").TOptional<import("@sinclair/typebox").TNumber>;
                        total: import("@sinclair/typebox").TOptional<import("@sinclair/typebox").TNumber>;
                    }>, import("@sinclair/typebox").TUndefined]>>;
                    timeline: import("@sinclair/typebox").TOptional<import("@sinclair/typebox").TUnion<[import("@sinclair/typebox").TArray<import("@sinclair/typebox").TObject<{
                        status: import("@sinclair/typebox").TOptional<import("@sinclair/typebox").TString>;
                        timestamp: import("@sinclair/typebox").TOptional<import("@sinclair/typebox").TString>;
                        note: import("@sinclair/typebox").TOptional<import("@sinclair/typebox").TString>;
                    }>>, import("@sinclair/typebox").TUndefined]>>;
                    createdAt: import("@sinclair/typebox").TOptional<import("@sinclair/typebox").TUnion<[import("@sinclair/typebox").TString, import("@sinclair/typebox").TUndefined]>>;
                    updatedAt: import("@sinclair/typebox").TOptional<import("@sinclair/typebox").TUnion<[import("@sinclair/typebox").TString, import("@sinclair/typebox").TUndefined]>>;
                }>;
            }>;
            responses: import("@sinclair/typebox").TObject<{
                200: import("@sinclair/typebox").TObject<{
                    id: import("@sinclair/typebox").TNumber;
                    userId: import("@sinclair/typebox").TOptional<import("@sinclair/typebox").TUnion<[import("@sinclair/typebox").TNumber, import("@sinclair/typebox").TUndefined]>>;
                    orderNumber: import("@sinclair/typebox").TOptional<import("@sinclair/typebox").TUnion<[import("@sinclair/typebox").TString, import("@sinclair/typebox").TUndefined]>>;
                    items: import("@sinclair/typebox").TOptional<import("@sinclair/typebox").TUnion<[import("@sinclair/typebox").TArray<import("@sinclair/typebox").TObject<{
                        productId: import("@sinclair/typebox").TOptional<import("@sinclair/typebox").TNumber>;
                        productName: import("@sinclair/typebox").TOptional<import("@sinclair/typebox").TString>;
                        quantity: import("@sinclair/typebox").TOptional<import("@sinclair/typebox").TNumber>;
                        unitPrice: import("@sinclair/typebox").TOptional<import("@sinclair/typebox").TNumber>;
                        totalPrice: import("@sinclair/typebox").TOptional<import("@sinclair/typebox").TNumber>;
                        sku: import("@sinclair/typebox").TOptional<import("@sinclair/typebox").TString>;
                    }>>, import("@sinclair/typebox").TUndefined]>>;
                    status: import("@sinclair/typebox").TOptional<import("@sinclair/typebox").TUnion<[import("@sinclair/typebox").TString, import("@sinclair/typebox").TUndefined]>>;
                    paymentStatus: import("@sinclair/typebox").TOptional<import("@sinclair/typebox").TUnion<[import("@sinclair/typebox").TString, import("@sinclair/typebox").TUndefined]>>;
                    shippingMethod: import("@sinclair/typebox").TOptional<import("@sinclair/typebox").TUnion<[import("@sinclair/typebox").TString, import("@sinclair/typebox").TUndefined]>>;
                    trackingNumber: import("@sinclair/typebox").TOptional<import("@sinclair/typebox").TUnion<[import("@sinclair/typebox").TString, import("@sinclair/typebox").TUndefined]>>;
                    addresses: import("@sinclair/typebox").TOptional<import("@sinclair/typebox").TUnion<[import("@sinclair/typebox").TObject<{
                        shipping: import("@sinclair/typebox").TOptional<import("@sinclair/typebox").TObject<{
                            name: import("@sinclair/typebox").TOptional<import("@sinclair/typebox").TString>;
                            street: import("@sinclair/typebox").TOptional<import("@sinclair/typebox").TString>;
                            apartment: import("@sinclair/typebox").TOptional<import("@sinclair/typebox").TString>;
                            city: import("@sinclair/typebox").TOptional<import("@sinclair/typebox").TString>;
                            state: import("@sinclair/typebox").TOptional<import("@sinclair/typebox").TString>;
                            zipCode: import("@sinclair/typebox").TOptional<import("@sinclair/typebox").TString>;
                            country: import("@sinclair/typebox").TOptional<import("@sinclair/typebox").TString>;
                            phone: import("@sinclair/typebox").TOptional<import("@sinclair/typebox").TString>;
                        }>>;
                        billing: import("@sinclair/typebox").TOptional<import("@sinclair/typebox").TObject<{
                            name: import("@sinclair/typebox").TOptional<import("@sinclair/typebox").TString>;
                            street: import("@sinclair/typebox").TOptional<import("@sinclair/typebox").TString>;
                            apartment: import("@sinclair/typebox").TOptional<import("@sinclair/typebox").TString>;
                            city: import("@sinclair/typebox").TOptional<import("@sinclair/typebox").TString>;
                            state: import("@sinclair/typebox").TOptional<import("@sinclair/typebox").TString>;
                            zipCode: import("@sinclair/typebox").TOptional<import("@sinclair/typebox").TString>;
                            country: import("@sinclair/typebox").TOptional<import("@sinclair/typebox").TString>;
                            phone: import("@sinclair/typebox").TOptional<import("@sinclair/typebox").TString>;
                        }>>;
                    }>, import("@sinclair/typebox").TUndefined]>>;
                    totals: import("@sinclair/typebox").TOptional<import("@sinclair/typebox").TUnion<[import("@sinclair/typebox").TObject<{
                        subtotal: import("@sinclair/typebox").TOptional<import("@sinclair/typebox").TNumber>;
                        tax: import("@sinclair/typebox").TOptional<import("@sinclair/typebox").TNumber>;
                        shipping: import("@sinclair/typebox").TOptional<import("@sinclair/typebox").TNumber>;
                        discount: import("@sinclair/typebox").TOptional<import("@sinclair/typebox").TNumber>;
                        total: import("@sinclair/typebox").TOptional<import("@sinclair/typebox").TNumber>;
                    }>, import("@sinclair/typebox").TUndefined]>>;
                    timeline: import("@sinclair/typebox").TOptional<import("@sinclair/typebox").TUnion<[import("@sinclair/typebox").TArray<import("@sinclair/typebox").TObject<{
                        status: import("@sinclair/typebox").TOptional<import("@sinclair/typebox").TString>;
                        timestamp: import("@sinclair/typebox").TOptional<import("@sinclair/typebox").TString>;
                        note: import("@sinclair/typebox").TOptional<import("@sinclair/typebox").TString>;
                    }>>, import("@sinclair/typebox").TUndefined]>>;
                    createdAt: import("@sinclair/typebox").TOptional<import("@sinclair/typebox").TUnion<[import("@sinclair/typebox").TString, import("@sinclair/typebox").TUndefined]>>;
                    updatedAt: import("@sinclair/typebox").TOptional<import("@sinclair/typebox").TUnion<[import("@sinclair/typebox").TString, import("@sinclair/typebox").TUndefined]>>;
                }>;
                400: import("@sinclair/typebox").TUnknown;
                404: import("@sinclair/typebox").TUnknown;
            }>;
        }>;
        "/analytics/{id}": import("@sinclair/typebox").TObject<{
            method: import("@sinclair/typebox").TLiteral<"PUT">;
            path: import("@sinclair/typebox").TLiteral<"/analytics/{id}">;
            requestFormat: import("@sinclair/typebox").TLiteral<"json">;
            parameters: import("@sinclair/typebox").TObject<{
                path: import("@sinclair/typebox").TObject<{
                    id: import("@sinclair/typebox").TNumber;
                }>;
                body: import("@sinclair/typebox").TObject<{
                    id: import("@sinclair/typebox").TNumber;
                    date: import("@sinclair/typebox").TOptional<import("@sinclair/typebox").TUnion<[import("@sinclair/typebox").TString, import("@sinclair/typebox").TUndefined]>>;
                    period: import("@sinclair/typebox").TOptional<import("@sinclair/typebox").TUnion<[import("@sinclair/typebox").TString, import("@sinclair/typebox").TUndefined]>>;
                    metrics: import("@sinclair/typebox").TOptional<import("@sinclair/typebox").TUnion<[import("@sinclair/typebox").TObject<{
                        users: import("@sinclair/typebox").TOptional<import("@sinclair/typebox").TObject<{
                            total: import("@sinclair/typebox").TOptional<import("@sinclair/typebox").TNumber>;
                            new: import("@sinclair/typebox").TOptional<import("@sinclair/typebox").TNumber>;
                            returning: import("@sinclair/typebox").TOptional<import("@sinclair/typebox").TNumber>;
                            active: import("@sinclair/typebox").TOptional<import("@sinclair/typebox").TNumber>;
                        }>>;
                        traffic: import("@sinclair/typebox").TOptional<import("@sinclair/typebox").TObject<{
                            pageViews: import("@sinclair/typebox").TOptional<import("@sinclair/typebox").TNumber>;
                            uniqueViews: import("@sinclair/typebox").TOptional<import("@sinclair/typebox").TNumber>;
                            bounceRate: import("@sinclair/typebox").TOptional<import("@sinclair/typebox").TNumber>;
                            avgSessionDuration: import("@sinclair/typebox").TOptional<import("@sinclair/typebox").TNumber>;
                            topPages: import("@sinclair/typebox").TOptional<import("@sinclair/typebox").TArray<import("@sinclair/typebox").TObject<{
                                path: import("@sinclair/typebox").TOptional<import("@sinclair/typebox").TString>;
                                views: import("@sinclair/typebox").TOptional<import("@sinclair/typebox").TNumber>;
                            }>>>;
                        }>>;
                        performance: import("@sinclair/typebox").TOptional<import("@sinclair/typebox").TObject<{
                            avgLoadTime: import("@sinclair/typebox").TOptional<import("@sinclair/typebox").TNumber>;
                            apiCalls: import("@sinclair/typebox").TOptional<import("@sinclair/typebox").TNumber>;
                            cacheHitRate: import("@sinclair/typebox").TOptional<import("@sinclair/typebox").TNumber>;
                            errorRate: import("@sinclair/typebox").TOptional<import("@sinclair/typebox").TNumber>;
                        }>>;
                        business: import("@sinclair/typebox").TOptional<import("@sinclair/typebox").TObject<{
                            orders: import("@sinclair/typebox").TOptional<import("@sinclair/typebox").TNumber>;
                            revenue: import("@sinclair/typebox").TOptional<import("@sinclair/typebox").TNumber>;
                            conversionRate: import("@sinclair/typebox").TOptional<import("@sinclair/typebox").TNumber>;
                            avgOrderValue: import("@sinclair/typebox").TOptional<import("@sinclair/typebox").TNumber>;
                        }>>;
                    }>, import("@sinclair/typebox").TUndefined]>>;
                }>;
            }>;
            responses: import("@sinclair/typebox").TObject<{
                200: import("@sinclair/typebox").TObject<{
                    id: import("@sinclair/typebox").TNumber;
                    date: import("@sinclair/typebox").TOptional<import("@sinclair/typebox").TUnion<[import("@sinclair/typebox").TString, import("@sinclair/typebox").TUndefined]>>;
                    period: import("@sinclair/typebox").TOptional<import("@sinclair/typebox").TUnion<[import("@sinclair/typebox").TString, import("@sinclair/typebox").TUndefined]>>;
                    metrics: import("@sinclair/typebox").TOptional<import("@sinclair/typebox").TUnion<[import("@sinclair/typebox").TObject<{
                        users: import("@sinclair/typebox").TOptional<import("@sinclair/typebox").TObject<{
                            total: import("@sinclair/typebox").TOptional<import("@sinclair/typebox").TNumber>;
                            new: import("@sinclair/typebox").TOptional<import("@sinclair/typebox").TNumber>;
                            returning: import("@sinclair/typebox").TOptional<import("@sinclair/typebox").TNumber>;
                            active: import("@sinclair/typebox").TOptional<import("@sinclair/typebox").TNumber>;
                        }>>;
                        traffic: import("@sinclair/typebox").TOptional<import("@sinclair/typebox").TObject<{
                            pageViews: import("@sinclair/typebox").TOptional<import("@sinclair/typebox").TNumber>;
                            uniqueViews: import("@sinclair/typebox").TOptional<import("@sinclair/typebox").TNumber>;
                            bounceRate: import("@sinclair/typebox").TOptional<import("@sinclair/typebox").TNumber>;
                            avgSessionDuration: import("@sinclair/typebox").TOptional<import("@sinclair/typebox").TNumber>;
                            topPages: import("@sinclair/typebox").TOptional<import("@sinclair/typebox").TArray<import("@sinclair/typebox").TObject<{
                                path: import("@sinclair/typebox").TOptional<import("@sinclair/typebox").TString>;
                                views: import("@sinclair/typebox").TOptional<import("@sinclair/typebox").TNumber>;
                            }>>>;
                        }>>;
                        performance: import("@sinclair/typebox").TOptional<import("@sinclair/typebox").TObject<{
                            avgLoadTime: import("@sinclair/typebox").TOptional<import("@sinclair/typebox").TNumber>;
                            apiCalls: import("@sinclair/typebox").TOptional<import("@sinclair/typebox").TNumber>;
                            cacheHitRate: import("@sinclair/typebox").TOptional<import("@sinclair/typebox").TNumber>;
                            errorRate: import("@sinclair/typebox").TOptional<import("@sinclair/typebox").TNumber>;
                        }>>;
                        business: import("@sinclair/typebox").TOptional<import("@sinclair/typebox").TObject<{
                            orders: import("@sinclair/typebox").TOptional<import("@sinclair/typebox").TNumber>;
                            revenue: import("@sinclair/typebox").TOptional<import("@sinclair/typebox").TNumber>;
                            conversionRate: import("@sinclair/typebox").TOptional<import("@sinclair/typebox").TNumber>;
                            avgOrderValue: import("@sinclair/typebox").TOptional<import("@sinclair/typebox").TNumber>;
                        }>>;
                    }>, import("@sinclair/typebox").TUndefined]>>;
                }>;
                400: import("@sinclair/typebox").TUnknown;
                404: import("@sinclair/typebox").TUnknown;
            }>;
        }>;
        "/notifications/{id}": import("@sinclair/typebox").TObject<{
            method: import("@sinclair/typebox").TLiteral<"PUT">;
            path: import("@sinclair/typebox").TLiteral<"/notifications/{id}">;
            requestFormat: import("@sinclair/typebox").TLiteral<"json">;
            parameters: import("@sinclair/typebox").TObject<{
                path: import("@sinclair/typebox").TObject<{
                    id: import("@sinclair/typebox").TNumber;
                }>;
                body: import("@sinclair/typebox").TObject<{
                    id: import("@sinclair/typebox").TNumber;
                    userId: import("@sinclair/typebox").TOptional<import("@sinclair/typebox").TUnion<[import("@sinclair/typebox").TNumber, import("@sinclair/typebox").TUndefined]>>;
                    type: import("@sinclair/typebox").TOptional<import("@sinclair/typebox").TUnion<[import("@sinclair/typebox").TString, import("@sinclair/typebox").TUndefined]>>;
                    title: import("@sinclair/typebox").TOptional<import("@sinclair/typebox").TUnion<[import("@sinclair/typebox").TString, import("@sinclair/typebox").TUndefined]>>;
                    message: import("@sinclair/typebox").TOptional<import("@sinclair/typebox").TUnion<[import("@sinclair/typebox").TString, import("@sinclair/typebox").TUndefined]>>;
                    data: import("@sinclair/typebox").TOptional<import("@sinclair/typebox").TUnion<[import("@sinclair/typebox").TObject<{
                        orderId: import("@sinclair/typebox").TOptional<import("@sinclair/typebox").TNumber>;
                        trackingNumber: import("@sinclair/typebox").TOptional<import("@sinclair/typebox").TString>;
                    }>, import("@sinclair/typebox").TUndefined]>>;
                    isRead: import("@sinclair/typebox").TOptional<import("@sinclair/typebox").TUnion<[import("@sinclair/typebox").TBoolean, import("@sinclair/typebox").TUndefined]>>;
                    priority: import("@sinclair/typebox").TOptional<import("@sinclair/typebox").TUnion<[import("@sinclair/typebox").TString, import("@sinclair/typebox").TUndefined]>>;
                    createdAt: import("@sinclair/typebox").TOptional<import("@sinclair/typebox").TUnion<[import("@sinclair/typebox").TString, import("@sinclair/typebox").TUndefined]>>;
                }>;
            }>;
            responses: import("@sinclair/typebox").TObject<{
                200: import("@sinclair/typebox").TObject<{
                    id: import("@sinclair/typebox").TNumber;
                    userId: import("@sinclair/typebox").TOptional<import("@sinclair/typebox").TUnion<[import("@sinclair/typebox").TNumber, import("@sinclair/typebox").TUndefined]>>;
                    type: import("@sinclair/typebox").TOptional<import("@sinclair/typebox").TUnion<[import("@sinclair/typebox").TString, import("@sinclair/typebox").TUndefined]>>;
                    title: import("@sinclair/typebox").TOptional<import("@sinclair/typebox").TUnion<[import("@sinclair/typebox").TString, import("@sinclair/typebox").TUndefined]>>;
                    message: import("@sinclair/typebox").TOptional<import("@sinclair/typebox").TUnion<[import("@sinclair/typebox").TString, import("@sinclair/typebox").TUndefined]>>;
                    data: import("@sinclair/typebox").TOptional<import("@sinclair/typebox").TUnion<[import("@sinclair/typebox").TObject<{
                        orderId: import("@sinclair/typebox").TOptional<import("@sinclair/typebox").TNumber>;
                        trackingNumber: import("@sinclair/typebox").TOptional<import("@sinclair/typebox").TString>;
                    }>, import("@sinclair/typebox").TUndefined]>>;
                    isRead: import("@sinclair/typebox").TOptional<import("@sinclair/typebox").TUnion<[import("@sinclair/typebox").TBoolean, import("@sinclair/typebox").TUndefined]>>;
                    priority: import("@sinclair/typebox").TOptional<import("@sinclair/typebox").TUnion<[import("@sinclair/typebox").TString, import("@sinclair/typebox").TUndefined]>>;
                    createdAt: import("@sinclair/typebox").TOptional<import("@sinclair/typebox").TUnion<[import("@sinclair/typebox").TString, import("@sinclair/typebox").TUndefined]>>;
                }>;
                400: import("@sinclair/typebox").TUnknown;
                404: import("@sinclair/typebox").TUnknown;
            }>;
        }>;
    };
    patch: {
        "/users/{id}": import("@sinclair/typebox").TObject<{
            method: import("@sinclair/typebox").TLiteral<"PATCH">;
            path: import("@sinclair/typebox").TLiteral<"/users/{id}">;
            requestFormat: import("@sinclair/typebox").TLiteral<"json">;
            parameters: import("@sinclair/typebox").TObject<{
                path: import("@sinclair/typebox").TObject<{
                    id: import("@sinclair/typebox").TNumber;
                }>;
                body: import("@sinclair/typebox").TObject<{
                    id: import("@sinclair/typebox").TNumber;
                    username: import("@sinclair/typebox").TOptional<import("@sinclair/typebox").TUnion<[import("@sinclair/typebox").TString, import("@sinclair/typebox").TUndefined]>>;
                    email: import("@sinclair/typebox").TOptional<import("@sinclair/typebox").TUnion<[import("@sinclair/typebox").TString, import("@sinclair/typebox").TUndefined]>>;
                    profile: import("@sinclair/typebox").TOptional<import("@sinclair/typebox").TUnion<[import("@sinclair/typebox").TObject<{
                        firstName: import("@sinclair/typebox").TOptional<import("@sinclair/typebox").TString>;
                        lastName: import("@sinclair/typebox").TOptional<import("@sinclair/typebox").TString>;
                        avatar: import("@sinclair/typebox").TOptional<import("@sinclair/typebox").TString>;
                        bio: import("@sinclair/typebox").TOptional<import("@sinclair/typebox").TString>;
                        location: import("@sinclair/typebox").TOptional<import("@sinclair/typebox").TString>;
                        website: import("@sinclair/typebox").TOptional<import("@sinclair/typebox").TString>;
                    }>, import("@sinclair/typebox").TUndefined]>>;
                    preferences: import("@sinclair/typebox").TOptional<import("@sinclair/typebox").TUnion<[import("@sinclair/typebox").TObject<{
                        theme: import("@sinclair/typebox").TOptional<import("@sinclair/typebox").TString>;
                        notifications: import("@sinclair/typebox").TOptional<import("@sinclair/typebox").TBoolean>;
                        language: import("@sinclair/typebox").TOptional<import("@sinclair/typebox").TString>;
                        timezone: import("@sinclair/typebox").TOptional<import("@sinclair/typebox").TString>;
                        emailNotifications: import("@sinclair/typebox").TOptional<import("@sinclair/typebox").TObject<{
                            marketing: import("@sinclair/typebox").TOptional<import("@sinclair/typebox").TBoolean>;
                            security: import("@sinclair/typebox").TOptional<import("@sinclair/typebox").TBoolean>;
                            updates: import("@sinclair/typebox").TOptional<import("@sinclair/typebox").TBoolean>;
                        }>>;
                    }>, import("@sinclair/typebox").TUndefined]>>;
                    createdAt: import("@sinclair/typebox").TOptional<import("@sinclair/typebox").TUnion<[import("@sinclair/typebox").TString, import("@sinclair/typebox").TUndefined]>>;
                    lastLogin: import("@sinclair/typebox").TOptional<import("@sinclair/typebox").TUnion<[import("@sinclair/typebox").TString, import("@sinclair/typebox").TUndefined]>>;
                    isActive: import("@sinclair/typebox").TOptional<import("@sinclair/typebox").TUnion<[import("@sinclair/typebox").TBoolean, import("@sinclair/typebox").TUndefined]>>;
                    role: import("@sinclair/typebox").TOptional<import("@sinclair/typebox").TUnion<[import("@sinclair/typebox").TString, import("@sinclair/typebox").TUndefined]>>;
                    stats: import("@sinclair/typebox").TOptional<import("@sinclair/typebox").TUnion<[import("@sinclair/typebox").TObject<{
                        postsCreated: import("@sinclair/typebox").TOptional<import("@sinclair/typebox").TNumber>;
                        commentsPosted: import("@sinclair/typebox").TOptional<import("@sinclair/typebox").TNumber>;
                        loginCount: import("@sinclair/typebox").TOptional<import("@sinclair/typebox").TNumber>;
                    }>, import("@sinclair/typebox").TUndefined]>>;
                }>;
            }>;
            responses: import("@sinclair/typebox").TObject<{
                200: import("@sinclair/typebox").TObject<{
                    id: import("@sinclair/typebox").TNumber;
                    username: import("@sinclair/typebox").TOptional<import("@sinclair/typebox").TUnion<[import("@sinclair/typebox").TString, import("@sinclair/typebox").TUndefined]>>;
                    email: import("@sinclair/typebox").TOptional<import("@sinclair/typebox").TUnion<[import("@sinclair/typebox").TString, import("@sinclair/typebox").TUndefined]>>;
                    profile: import("@sinclair/typebox").TOptional<import("@sinclair/typebox").TUnion<[import("@sinclair/typebox").TObject<{
                        firstName: import("@sinclair/typebox").TOptional<import("@sinclair/typebox").TString>;
                        lastName: import("@sinclair/typebox").TOptional<import("@sinclair/typebox").TString>;
                        avatar: import("@sinclair/typebox").TOptional<import("@sinclair/typebox").TString>;
                        bio: import("@sinclair/typebox").TOptional<import("@sinclair/typebox").TString>;
                        location: import("@sinclair/typebox").TOptional<import("@sinclair/typebox").TString>;
                        website: import("@sinclair/typebox").TOptional<import("@sinclair/typebox").TString>;
                    }>, import("@sinclair/typebox").TUndefined]>>;
                    preferences: import("@sinclair/typebox").TOptional<import("@sinclair/typebox").TUnion<[import("@sinclair/typebox").TObject<{
                        theme: import("@sinclair/typebox").TOptional<import("@sinclair/typebox").TString>;
                        notifications: import("@sinclair/typebox").TOptional<import("@sinclair/typebox").TBoolean>;
                        language: import("@sinclair/typebox").TOptional<import("@sinclair/typebox").TString>;
                        timezone: import("@sinclair/typebox").TOptional<import("@sinclair/typebox").TString>;
                        emailNotifications: import("@sinclair/typebox").TOptional<import("@sinclair/typebox").TObject<{
                            marketing: import("@sinclair/typebox").TOptional<import("@sinclair/typebox").TBoolean>;
                            security: import("@sinclair/typebox").TOptional<import("@sinclair/typebox").TBoolean>;
                            updates: import("@sinclair/typebox").TOptional<import("@sinclair/typebox").TBoolean>;
                        }>>;
                    }>, import("@sinclair/typebox").TUndefined]>>;
                    createdAt: import("@sinclair/typebox").TOptional<import("@sinclair/typebox").TUnion<[import("@sinclair/typebox").TString, import("@sinclair/typebox").TUndefined]>>;
                    lastLogin: import("@sinclair/typebox").TOptional<import("@sinclair/typebox").TUnion<[import("@sinclair/typebox").TString, import("@sinclair/typebox").TUndefined]>>;
                    isActive: import("@sinclair/typebox").TOptional<import("@sinclair/typebox").TUnion<[import("@sinclair/typebox").TBoolean, import("@sinclair/typebox").TUndefined]>>;
                    role: import("@sinclair/typebox").TOptional<import("@sinclair/typebox").TUnion<[import("@sinclair/typebox").TString, import("@sinclair/typebox").TUndefined]>>;
                    stats: import("@sinclair/typebox").TOptional<import("@sinclair/typebox").TUnion<[import("@sinclair/typebox").TObject<{
                        postsCreated: import("@sinclair/typebox").TOptional<import("@sinclair/typebox").TNumber>;
                        commentsPosted: import("@sinclair/typebox").TOptional<import("@sinclair/typebox").TNumber>;
                        loginCount: import("@sinclair/typebox").TOptional<import("@sinclair/typebox").TNumber>;
                    }>, import("@sinclair/typebox").TUndefined]>>;
                }>;
                400: import("@sinclair/typebox").TUnknown;
                404: import("@sinclair/typebox").TUnknown;
            }>;
        }>;
        "/posts/{id}": import("@sinclair/typebox").TObject<{
            method: import("@sinclair/typebox").TLiteral<"PATCH">;
            path: import("@sinclair/typebox").TLiteral<"/posts/{id}">;
            requestFormat: import("@sinclair/typebox").TLiteral<"json">;
            parameters: import("@sinclair/typebox").TObject<{
                path: import("@sinclair/typebox").TObject<{
                    id: import("@sinclair/typebox").TNumber;
                }>;
                body: import("@sinclair/typebox").TObject<{
                    id: import("@sinclair/typebox").TNumber;
                    title: import("@sinclair/typebox").TOptional<import("@sinclair/typebox").TUnion<[import("@sinclair/typebox").TString, import("@sinclair/typebox").TUndefined]>>;
                    content: import("@sinclair/typebox").TOptional<import("@sinclair/typebox").TUnion<[import("@sinclair/typebox").TString, import("@sinclair/typebox").TUndefined]>>;
                    excerpt: import("@sinclair/typebox").TOptional<import("@sinclair/typebox").TUnion<[import("@sinclair/typebox").TString, import("@sinclair/typebox").TUndefined]>>;
                    authorId: import("@sinclair/typebox").TOptional<import("@sinclair/typebox").TUnion<[import("@sinclair/typebox").TNumber, import("@sinclair/typebox").TUndefined]>>;
                    categoryId: import("@sinclair/typebox").TOptional<import("@sinclair/typebox").TUnion<[import("@sinclair/typebox").TNumber, import("@sinclair/typebox").TUndefined]>>;
                    tags: import("@sinclair/typebox").TOptional<import("@sinclair/typebox").TUnion<[import("@sinclair/typebox").TArray<import("@sinclair/typebox").TString>, import("@sinclair/typebox").TUndefined]>>;
                    status: import("@sinclair/typebox").TOptional<import("@sinclair/typebox").TUnion<[import("@sinclair/typebox").TString, import("@sinclair/typebox").TUndefined]>>;
                    featured: import("@sinclair/typebox").TOptional<import("@sinclair/typebox").TUnion<[import("@sinclair/typebox").TBoolean, import("@sinclair/typebox").TUndefined]>>;
                    metadata: import("@sinclair/typebox").TOptional<import("@sinclair/typebox").TUnion<[import("@sinclair/typebox").TObject<{
                        views: import("@sinclair/typebox").TOptional<import("@sinclair/typebox").TNumber>;
                        likes: import("@sinclair/typebox").TOptional<import("@sinclair/typebox").TNumber>;
                        comments: import("@sinclair/typebox").TOptional<import("@sinclair/typebox").TNumber>;
                        shares: import("@sinclair/typebox").TOptional<import("@sinclair/typebox").TNumber>;
                        bookmarks: import("@sinclair/typebox").TOptional<import("@sinclair/typebox").TNumber>;
                        readTime: import("@sinclair/typebox").TOptional<import("@sinclair/typebox").TNumber>;
                    }>, import("@sinclair/typebox").TUndefined]>>;
                    seo: import("@sinclair/typebox").TOptional<import("@sinclair/typebox").TUnion<[import("@sinclair/typebox").TObject<{
                        slug: import("@sinclair/typebox").TOptional<import("@sinclair/typebox").TString>;
                        metaTitle: import("@sinclair/typebox").TOptional<import("@sinclair/typebox").TString>;
                        metaDescription: import("@sinclair/typebox").TOptional<import("@sinclair/typebox").TString>;
                        keywords: import("@sinclair/typebox").TOptional<import("@sinclair/typebox").TArray<import("@sinclair/typebox").TString>>;
                    }>, import("@sinclair/typebox").TUndefined]>>;
                    createdAt: import("@sinclair/typebox").TOptional<import("@sinclair/typebox").TUnion<[import("@sinclair/typebox").TString, import("@sinclair/typebox").TUndefined]>>;
                    updatedAt: import("@sinclair/typebox").TOptional<import("@sinclair/typebox").TUnion<[import("@sinclair/typebox").TString, import("@sinclair/typebox").TUndefined]>>;
                    publishedAt: import("@sinclair/typebox").TOptional<import("@sinclair/typebox").TUnion<[import("@sinclair/typebox").TString, import("@sinclair/typebox").TUndefined]>>;
                }>;
            }>;
            responses: import("@sinclair/typebox").TObject<{
                200: import("@sinclair/typebox").TObject<{
                    id: import("@sinclair/typebox").TNumber;
                    title: import("@sinclair/typebox").TOptional<import("@sinclair/typebox").TUnion<[import("@sinclair/typebox").TString, import("@sinclair/typebox").TUndefined]>>;
                    content: import("@sinclair/typebox").TOptional<import("@sinclair/typebox").TUnion<[import("@sinclair/typebox").TString, import("@sinclair/typebox").TUndefined]>>;
                    excerpt: import("@sinclair/typebox").TOptional<import("@sinclair/typebox").TUnion<[import("@sinclair/typebox").TString, import("@sinclair/typebox").TUndefined]>>;
                    authorId: import("@sinclair/typebox").TOptional<import("@sinclair/typebox").TUnion<[import("@sinclair/typebox").TNumber, import("@sinclair/typebox").TUndefined]>>;
                    categoryId: import("@sinclair/typebox").TOptional<import("@sinclair/typebox").TUnion<[import("@sinclair/typebox").TNumber, import("@sinclair/typebox").TUndefined]>>;
                    tags: import("@sinclair/typebox").TOptional<import("@sinclair/typebox").TUnion<[import("@sinclair/typebox").TArray<import("@sinclair/typebox").TString>, import("@sinclair/typebox").TUndefined]>>;
                    status: import("@sinclair/typebox").TOptional<import("@sinclair/typebox").TUnion<[import("@sinclair/typebox").TString, import("@sinclair/typebox").TUndefined]>>;
                    featured: import("@sinclair/typebox").TOptional<import("@sinclair/typebox").TUnion<[import("@sinclair/typebox").TBoolean, import("@sinclair/typebox").TUndefined]>>;
                    metadata: import("@sinclair/typebox").TOptional<import("@sinclair/typebox").TUnion<[import("@sinclair/typebox").TObject<{
                        views: import("@sinclair/typebox").TOptional<import("@sinclair/typebox").TNumber>;
                        likes: import("@sinclair/typebox").TOptional<import("@sinclair/typebox").TNumber>;
                        comments: import("@sinclair/typebox").TOptional<import("@sinclair/typebox").TNumber>;
                        shares: import("@sinclair/typebox").TOptional<import("@sinclair/typebox").TNumber>;
                        bookmarks: import("@sinclair/typebox").TOptional<import("@sinclair/typebox").TNumber>;
                        readTime: import("@sinclair/typebox").TOptional<import("@sinclair/typebox").TNumber>;
                    }>, import("@sinclair/typebox").TUndefined]>>;
                    seo: import("@sinclair/typebox").TOptional<import("@sinclair/typebox").TUnion<[import("@sinclair/typebox").TObject<{
                        slug: import("@sinclair/typebox").TOptional<import("@sinclair/typebox").TString>;
                        metaTitle: import("@sinclair/typebox").TOptional<import("@sinclair/typebox").TString>;
                        metaDescription: import("@sinclair/typebox").TOptional<import("@sinclair/typebox").TString>;
                        keywords: import("@sinclair/typebox").TOptional<import("@sinclair/typebox").TArray<import("@sinclair/typebox").TString>>;
                    }>, import("@sinclair/typebox").TUndefined]>>;
                    createdAt: import("@sinclair/typebox").TOptional<import("@sinclair/typebox").TUnion<[import("@sinclair/typebox").TString, import("@sinclair/typebox").TUndefined]>>;
                    updatedAt: import("@sinclair/typebox").TOptional<import("@sinclair/typebox").TUnion<[import("@sinclair/typebox").TString, import("@sinclair/typebox").TUndefined]>>;
                    publishedAt: import("@sinclair/typebox").TOptional<import("@sinclair/typebox").TUnion<[import("@sinclair/typebox").TString, import("@sinclair/typebox").TUndefined]>>;
                }>;
                400: import("@sinclair/typebox").TUnknown;
                404: import("@sinclair/typebox").TUnknown;
            }>;
        }>;
        "/comments/{id}": import("@sinclair/typebox").TObject<{
            method: import("@sinclair/typebox").TLiteral<"PATCH">;
            path: import("@sinclair/typebox").TLiteral<"/comments/{id}">;
            requestFormat: import("@sinclair/typebox").TLiteral<"json">;
            parameters: import("@sinclair/typebox").TObject<{
                path: import("@sinclair/typebox").TObject<{
                    id: import("@sinclair/typebox").TNumber;
                }>;
                body: import("@sinclair/typebox").TObject<{
                    id: import("@sinclair/typebox").TNumber;
                    postId: import("@sinclair/typebox").TOptional<import("@sinclair/typebox").TUnion<[import("@sinclair/typebox").TNumber, import("@sinclair/typebox").TUndefined]>>;
                    authorId: import("@sinclair/typebox").TOptional<import("@sinclair/typebox").TUnion<[import("@sinclair/typebox").TNumber, import("@sinclair/typebox").TUndefined]>>;
                    content: import("@sinclair/typebox").TOptional<import("@sinclair/typebox").TUnion<[import("@sinclair/typebox").TString, import("@sinclair/typebox").TUndefined]>>;
                    parentId: import("@sinclair/typebox").TOptional<import("@sinclair/typebox").TUnion<[import("@sinclair/typebox").TNull, import("@sinclair/typebox").TUndefined]>>;
                    likes: import("@sinclair/typebox").TOptional<import("@sinclair/typebox").TUnion<[import("@sinclair/typebox").TNumber, import("@sinclair/typebox").TUndefined]>>;
                    isApproved: import("@sinclair/typebox").TOptional<import("@sinclair/typebox").TUnion<[import("@sinclair/typebox").TBoolean, import("@sinclair/typebox").TUndefined]>>;
                    isEdited: import("@sinclair/typebox").TOptional<import("@sinclair/typebox").TUnion<[import("@sinclair/typebox").TBoolean, import("@sinclair/typebox").TUndefined]>>;
                    createdAt: import("@sinclair/typebox").TOptional<import("@sinclair/typebox").TUnion<[import("@sinclair/typebox").TString, import("@sinclair/typebox").TUndefined]>>;
                    updatedAt: import("@sinclair/typebox").TOptional<import("@sinclair/typebox").TUnion<[import("@sinclair/typebox").TString, import("@sinclair/typebox").TUndefined]>>;
                }>;
            }>;
            responses: import("@sinclair/typebox").TObject<{
                200: import("@sinclair/typebox").TObject<{
                    id: import("@sinclair/typebox").TNumber;
                    postId: import("@sinclair/typebox").TOptional<import("@sinclair/typebox").TUnion<[import("@sinclair/typebox").TNumber, import("@sinclair/typebox").TUndefined]>>;
                    authorId: import("@sinclair/typebox").TOptional<import("@sinclair/typebox").TUnion<[import("@sinclair/typebox").TNumber, import("@sinclair/typebox").TUndefined]>>;
                    content: import("@sinclair/typebox").TOptional<import("@sinclair/typebox").TUnion<[import("@sinclair/typebox").TString, import("@sinclair/typebox").TUndefined]>>;
                    parentId: import("@sinclair/typebox").TOptional<import("@sinclair/typebox").TUnion<[import("@sinclair/typebox").TNull, import("@sinclair/typebox").TUndefined]>>;
                    likes: import("@sinclair/typebox").TOptional<import("@sinclair/typebox").TUnion<[import("@sinclair/typebox").TNumber, import("@sinclair/typebox").TUndefined]>>;
                    isApproved: import("@sinclair/typebox").TOptional<import("@sinclair/typebox").TUnion<[import("@sinclair/typebox").TBoolean, import("@sinclair/typebox").TUndefined]>>;
                    isEdited: import("@sinclair/typebox").TOptional<import("@sinclair/typebox").TUnion<[import("@sinclair/typebox").TBoolean, import("@sinclair/typebox").TUndefined]>>;
                    createdAt: import("@sinclair/typebox").TOptional<import("@sinclair/typebox").TUnion<[import("@sinclair/typebox").TString, import("@sinclair/typebox").TUndefined]>>;
                    updatedAt: import("@sinclair/typebox").TOptional<import("@sinclair/typebox").TUnion<[import("@sinclair/typebox").TString, import("@sinclair/typebox").TUndefined]>>;
                }>;
                400: import("@sinclair/typebox").TUnknown;
                404: import("@sinclair/typebox").TUnknown;
            }>;
        }>;
        "/categories/{id}": import("@sinclair/typebox").TObject<{
            method: import("@sinclair/typebox").TLiteral<"PATCH">;
            path: import("@sinclair/typebox").TLiteral<"/categories/{id}">;
            requestFormat: import("@sinclair/typebox").TLiteral<"json">;
            parameters: import("@sinclair/typebox").TObject<{
                path: import("@sinclair/typebox").TObject<{
                    id: import("@sinclair/typebox").TNumber;
                }>;
                body: import("@sinclair/typebox").TObject<{
                    id: import("@sinclair/typebox").TNumber;
                    name: import("@sinclair/typebox").TOptional<import("@sinclair/typebox").TUnion<[import("@sinclair/typebox").TString, import("@sinclair/typebox").TUndefined]>>;
                    slug: import("@sinclair/typebox").TOptional<import("@sinclair/typebox").TUnion<[import("@sinclair/typebox").TString, import("@sinclair/typebox").TUndefined]>>;
                    description: import("@sinclair/typebox").TOptional<import("@sinclair/typebox").TUnion<[import("@sinclair/typebox").TString, import("@sinclair/typebox").TUndefined]>>;
                    postCount: import("@sinclair/typebox").TOptional<import("@sinclair/typebox").TUnion<[import("@sinclair/typebox").TNumber, import("@sinclair/typebox").TUndefined]>>;
                    color: import("@sinclair/typebox").TOptional<import("@sinclair/typebox").TUnion<[import("@sinclair/typebox").TString, import("@sinclair/typebox").TUndefined]>>;
                    icon: import("@sinclair/typebox").TOptional<import("@sinclair/typebox").TUnion<[import("@sinclair/typebox").TString, import("@sinclair/typebox").TUndefined]>>;
                    isActive: import("@sinclair/typebox").TOptional<import("@sinclair/typebox").TUnion<[import("@sinclair/typebox").TBoolean, import("@sinclair/typebox").TUndefined]>>;
                    parentId: import("@sinclair/typebox").TOptional<import("@sinclair/typebox").TUnion<[import("@sinclair/typebox").TNull, import("@sinclair/typebox").TUndefined]>>;
                    createdAt: import("@sinclair/typebox").TOptional<import("@sinclair/typebox").TUnion<[import("@sinclair/typebox").TString, import("@sinclair/typebox").TUndefined]>>;
                    metadata: import("@sinclair/typebox").TOptional<import("@sinclair/typebox").TUnion<[import("@sinclair/typebox").TObject<{
                        totalViews: import("@sinclair/typebox").TOptional<import("@sinclair/typebox").TNumber>;
                        averageRating: import("@sinclair/typebox").TOptional<import("@sinclair/typebox").TNumber>;
                    }>, import("@sinclair/typebox").TUndefined]>>;
                }>;
            }>;
            responses: import("@sinclair/typebox").TObject<{
                200: import("@sinclair/typebox").TObject<{
                    id: import("@sinclair/typebox").TNumber;
                    name: import("@sinclair/typebox").TOptional<import("@sinclair/typebox").TUnion<[import("@sinclair/typebox").TString, import("@sinclair/typebox").TUndefined]>>;
                    slug: import("@sinclair/typebox").TOptional<import("@sinclair/typebox").TUnion<[import("@sinclair/typebox").TString, import("@sinclair/typebox").TUndefined]>>;
                    description: import("@sinclair/typebox").TOptional<import("@sinclair/typebox").TUnion<[import("@sinclair/typebox").TString, import("@sinclair/typebox").TUndefined]>>;
                    postCount: import("@sinclair/typebox").TOptional<import("@sinclair/typebox").TUnion<[import("@sinclair/typebox").TNumber, import("@sinclair/typebox").TUndefined]>>;
                    color: import("@sinclair/typebox").TOptional<import("@sinclair/typebox").TUnion<[import("@sinclair/typebox").TString, import("@sinclair/typebox").TUndefined]>>;
                    icon: import("@sinclair/typebox").TOptional<import("@sinclair/typebox").TUnion<[import("@sinclair/typebox").TString, import("@sinclair/typebox").TUndefined]>>;
                    isActive: import("@sinclair/typebox").TOptional<import("@sinclair/typebox").TUnion<[import("@sinclair/typebox").TBoolean, import("@sinclair/typebox").TUndefined]>>;
                    parentId: import("@sinclair/typebox").TOptional<import("@sinclair/typebox").TUnion<[import("@sinclair/typebox").TNull, import("@sinclair/typebox").TUndefined]>>;
                    createdAt: import("@sinclair/typebox").TOptional<import("@sinclair/typebox").TUnion<[import("@sinclair/typebox").TString, import("@sinclair/typebox").TUndefined]>>;
                    metadata: import("@sinclair/typebox").TOptional<import("@sinclair/typebox").TUnion<[import("@sinclair/typebox").TObject<{
                        totalViews: import("@sinclair/typebox").TOptional<import("@sinclair/typebox").TNumber>;
                        averageRating: import("@sinclair/typebox").TOptional<import("@sinclair/typebox").TNumber>;
                    }>, import("@sinclair/typebox").TUndefined]>>;
                }>;
                400: import("@sinclair/typebox").TUnknown;
                404: import("@sinclair/typebox").TUnknown;
            }>;
        }>;
        "/products/{id}": import("@sinclair/typebox").TObject<{
            method: import("@sinclair/typebox").TLiteral<"PATCH">;
            path: import("@sinclair/typebox").TLiteral<"/products/{id}">;
            requestFormat: import("@sinclair/typebox").TLiteral<"json">;
            parameters: import("@sinclair/typebox").TObject<{
                path: import("@sinclair/typebox").TObject<{
                    id: import("@sinclair/typebox").TNumber;
                }>;
                body: import("@sinclair/typebox").TObject<{
                    id: import("@sinclair/typebox").TNumber;
                    name: import("@sinclair/typebox").TOptional<import("@sinclair/typebox").TUnion<[import("@sinclair/typebox").TString, import("@sinclair/typebox").TUndefined]>>;
                    description: import("@sinclair/typebox").TOptional<import("@sinclair/typebox").TUnion<[import("@sinclair/typebox").TString, import("@sinclair/typebox").TUndefined]>>;
                    shortDescription: import("@sinclair/typebox").TOptional<import("@sinclair/typebox").TUnion<[import("@sinclair/typebox").TString, import("@sinclair/typebox").TUndefined]>>;
                    price: import("@sinclair/typebox").TOptional<import("@sinclair/typebox").TUnion<[import("@sinclair/typebox").TNumber, import("@sinclair/typebox").TUndefined]>>;
                    originalPrice: import("@sinclair/typebox").TOptional<import("@sinclair/typebox").TUnion<[import("@sinclair/typebox").TNumber, import("@sinclair/typebox").TUndefined]>>;
                    currency: import("@sinclair/typebox").TOptional<import("@sinclair/typebox").TUnion<[import("@sinclair/typebox").TString, import("@sinclair/typebox").TUndefined]>>;
                    categoryId: import("@sinclair/typebox").TOptional<import("@sinclair/typebox").TUnion<[import("@sinclair/typebox").TNumber, import("@sinclair/typebox").TUndefined]>>;
                    brand: import("@sinclair/typebox").TOptional<import("@sinclair/typebox").TUnion<[import("@sinclair/typebox").TString, import("@sinclair/typebox").TUndefined]>>;
                    model: import("@sinclair/typebox").TOptional<import("@sinclair/typebox").TUnion<[import("@sinclair/typebox").TString, import("@sinclair/typebox").TUndefined]>>;
                    sku: import("@sinclair/typebox").TOptional<import("@sinclair/typebox").TUnion<[import("@sinclair/typebox").TString, import("@sinclair/typebox").TUndefined]>>;
                    barcode: import("@sinclair/typebox").TOptional<import("@sinclair/typebox").TUnion<[import("@sinclair/typebox").TString, import("@sinclair/typebox").TUndefined]>>;
                    inventory: import("@sinclair/typebox").TOptional<import("@sinclair/typebox").TUnion<[import("@sinclair/typebox").TObject<{
                        inStock: import("@sinclair/typebox").TOptional<import("@sinclair/typebox").TNumber>;
                        reserved: import("@sinclair/typebox").TOptional<import("@sinclair/typebox").TNumber>;
                        available: import("@sinclair/typebox").TOptional<import("@sinclair/typebox").TNumber>;
                        lowStockThreshold: import("@sinclair/typebox").TOptional<import("@sinclair/typebox").TNumber>;
                    }>, import("@sinclair/typebox").TUndefined]>>;
                    images: import("@sinclair/typebox").TOptional<import("@sinclair/typebox").TUnion<[import("@sinclair/typebox").TArray<import("@sinclair/typebox").TString>, import("@sinclair/typebox").TUndefined]>>;
                    specifications: import("@sinclair/typebox").TOptional<import("@sinclair/typebox").TUnion<[import("@sinclair/typebox").TObject<{
                        batteryLife: import("@sinclair/typebox").TOptional<import("@sinclair/typebox").TString>;
                        chargingTime: import("@sinclair/typebox").TOptional<import("@sinclair/typebox").TString>;
                        connectivity: import("@sinclair/typebox").TOptional<import("@sinclair/typebox").TString>;
                        weight: import("@sinclair/typebox").TOptional<import("@sinclair/typebox").TString>;
                        dimensions: import("@sinclair/typebox").TOptional<import("@sinclair/typebox").TString>;
                        colors: import("@sinclair/typebox").TOptional<import("@sinclair/typebox").TArray<import("@sinclair/typebox").TString>>;
                        warranty: import("@sinclair/typebox").TOptional<import("@sinclair/typebox").TString>;
                    }>, import("@sinclair/typebox").TUndefined]>>;
                    features: import("@sinclair/typebox").TOptional<import("@sinclair/typebox").TUnion<[import("@sinclair/typebox").TArray<import("@sinclair/typebox").TString>, import("@sinclair/typebox").TUndefined]>>;
                    ratings: import("@sinclair/typebox").TOptional<import("@sinclair/typebox").TUnion<[import("@sinclair/typebox").TObject<{
                        average: import("@sinclair/typebox").TOptional<import("@sinclair/typebox").TNumber>;
                        count: import("@sinclair/typebox").TOptional<import("@sinclair/typebox").TNumber>;
                        breakdown: import("@sinclair/typebox").TOptional<import("@sinclair/typebox").TObject<{
                            1: import("@sinclair/typebox").TOptional<import("@sinclair/typebox").TNumber>;
                            2: import("@sinclair/typebox").TOptional<import("@sinclair/typebox").TNumber>;
                            3: import("@sinclair/typebox").TOptional<import("@sinclair/typebox").TNumber>;
                            4: import("@sinclair/typebox").TOptional<import("@sinclair/typebox").TNumber>;
                            5: import("@sinclair/typebox").TOptional<import("@sinclair/typebox").TNumber>;
                        }>>;
                    }>, import("@sinclair/typebox").TUndefined]>>;
                    tags: import("@sinclair/typebox").TOptional<import("@sinclair/typebox").TUnion<[import("@sinclair/typebox").TArray<import("@sinclair/typebox").TString>, import("@sinclair/typebox").TUndefined]>>;
                    isActive: import("@sinclair/typebox").TOptional<import("@sinclair/typebox").TUnion<[import("@sinclair/typebox").TBoolean, import("@sinclair/typebox").TUndefined]>>;
                    isFeatured: import("@sinclair/typebox").TOptional<import("@sinclair/typebox").TUnion<[import("@sinclair/typebox").TBoolean, import("@sinclair/typebox").TUndefined]>>;
                    createdAt: import("@sinclair/typebox").TOptional<import("@sinclair/typebox").TUnion<[import("@sinclair/typebox").TString, import("@sinclair/typebox").TUndefined]>>;
                    updatedAt: import("@sinclair/typebox").TOptional<import("@sinclair/typebox").TUnion<[import("@sinclair/typebox").TString, import("@sinclair/typebox").TUndefined]>>;
                }>;
            }>;
            responses: import("@sinclair/typebox").TObject<{
                200: import("@sinclair/typebox").TObject<{
                    id: import("@sinclair/typebox").TNumber;
                    name: import("@sinclair/typebox").TOptional<import("@sinclair/typebox").TUnion<[import("@sinclair/typebox").TString, import("@sinclair/typebox").TUndefined]>>;
                    description: import("@sinclair/typebox").TOptional<import("@sinclair/typebox").TUnion<[import("@sinclair/typebox").TString, import("@sinclair/typebox").TUndefined]>>;
                    shortDescription: import("@sinclair/typebox").TOptional<import("@sinclair/typebox").TUnion<[import("@sinclair/typebox").TString, import("@sinclair/typebox").TUndefined]>>;
                    price: import("@sinclair/typebox").TOptional<import("@sinclair/typebox").TUnion<[import("@sinclair/typebox").TNumber, import("@sinclair/typebox").TUndefined]>>;
                    originalPrice: import("@sinclair/typebox").TOptional<import("@sinclair/typebox").TUnion<[import("@sinclair/typebox").TNumber, import("@sinclair/typebox").TUndefined]>>;
                    currency: import("@sinclair/typebox").TOptional<import("@sinclair/typebox").TUnion<[import("@sinclair/typebox").TString, import("@sinclair/typebox").TUndefined]>>;
                    categoryId: import("@sinclair/typebox").TOptional<import("@sinclair/typebox").TUnion<[import("@sinclair/typebox").TNumber, import("@sinclair/typebox").TUndefined]>>;
                    brand: import("@sinclair/typebox").TOptional<import("@sinclair/typebox").TUnion<[import("@sinclair/typebox").TString, import("@sinclair/typebox").TUndefined]>>;
                    model: import("@sinclair/typebox").TOptional<import("@sinclair/typebox").TUnion<[import("@sinclair/typebox").TString, import("@sinclair/typebox").TUndefined]>>;
                    sku: import("@sinclair/typebox").TOptional<import("@sinclair/typebox").TUnion<[import("@sinclair/typebox").TString, import("@sinclair/typebox").TUndefined]>>;
                    barcode: import("@sinclair/typebox").TOptional<import("@sinclair/typebox").TUnion<[import("@sinclair/typebox").TString, import("@sinclair/typebox").TUndefined]>>;
                    inventory: import("@sinclair/typebox").TOptional<import("@sinclair/typebox").TUnion<[import("@sinclair/typebox").TObject<{
                        inStock: import("@sinclair/typebox").TOptional<import("@sinclair/typebox").TNumber>;
                        reserved: import("@sinclair/typebox").TOptional<import("@sinclair/typebox").TNumber>;
                        available: import("@sinclair/typebox").TOptional<import("@sinclair/typebox").TNumber>;
                        lowStockThreshold: import("@sinclair/typebox").TOptional<import("@sinclair/typebox").TNumber>;
                    }>, import("@sinclair/typebox").TUndefined]>>;
                    images: import("@sinclair/typebox").TOptional<import("@sinclair/typebox").TUnion<[import("@sinclair/typebox").TArray<import("@sinclair/typebox").TString>, import("@sinclair/typebox").TUndefined]>>;
                    specifications: import("@sinclair/typebox").TOptional<import("@sinclair/typebox").TUnion<[import("@sinclair/typebox").TObject<{
                        batteryLife: import("@sinclair/typebox").TOptional<import("@sinclair/typebox").TString>;
                        chargingTime: import("@sinclair/typebox").TOptional<import("@sinclair/typebox").TString>;
                        connectivity: import("@sinclair/typebox").TOptional<import("@sinclair/typebox").TString>;
                        weight: import("@sinclair/typebox").TOptional<import("@sinclair/typebox").TString>;
                        dimensions: import("@sinclair/typebox").TOptional<import("@sinclair/typebox").TString>;
                        colors: import("@sinclair/typebox").TOptional<import("@sinclair/typebox").TArray<import("@sinclair/typebox").TString>>;
                        warranty: import("@sinclair/typebox").TOptional<import("@sinclair/typebox").TString>;
                    }>, import("@sinclair/typebox").TUndefined]>>;
                    features: import("@sinclair/typebox").TOptional<import("@sinclair/typebox").TUnion<[import("@sinclair/typebox").TArray<import("@sinclair/typebox").TString>, import("@sinclair/typebox").TUndefined]>>;
                    ratings: import("@sinclair/typebox").TOptional<import("@sinclair/typebox").TUnion<[import("@sinclair/typebox").TObject<{
                        average: import("@sinclair/typebox").TOptional<import("@sinclair/typebox").TNumber>;
                        count: import("@sinclair/typebox").TOptional<import("@sinclair/typebox").TNumber>;
                        breakdown: import("@sinclair/typebox").TOptional<import("@sinclair/typebox").TObject<{
                            1: import("@sinclair/typebox").TOptional<import("@sinclair/typebox").TNumber>;
                            2: import("@sinclair/typebox").TOptional<import("@sinclair/typebox").TNumber>;
                            3: import("@sinclair/typebox").TOptional<import("@sinclair/typebox").TNumber>;
                            4: import("@sinclair/typebox").TOptional<import("@sinclair/typebox").TNumber>;
                            5: import("@sinclair/typebox").TOptional<import("@sinclair/typebox").TNumber>;
                        }>>;
                    }>, import("@sinclair/typebox").TUndefined]>>;
                    tags: import("@sinclair/typebox").TOptional<import("@sinclair/typebox").TUnion<[import("@sinclair/typebox").TArray<import("@sinclair/typebox").TString>, import("@sinclair/typebox").TUndefined]>>;
                    isActive: import("@sinclair/typebox").TOptional<import("@sinclair/typebox").TUnion<[import("@sinclair/typebox").TBoolean, import("@sinclair/typebox").TUndefined]>>;
                    isFeatured: import("@sinclair/typebox").TOptional<import("@sinclair/typebox").TUnion<[import("@sinclair/typebox").TBoolean, import("@sinclair/typebox").TUndefined]>>;
                    createdAt: import("@sinclair/typebox").TOptional<import("@sinclair/typebox").TUnion<[import("@sinclair/typebox").TString, import("@sinclair/typebox").TUndefined]>>;
                    updatedAt: import("@sinclair/typebox").TOptional<import("@sinclair/typebox").TUnion<[import("@sinclair/typebox").TString, import("@sinclair/typebox").TUndefined]>>;
                }>;
                400: import("@sinclair/typebox").TUnknown;
                404: import("@sinclair/typebox").TUnknown;
            }>;
        }>;
        "/orders/{id}": import("@sinclair/typebox").TObject<{
            method: import("@sinclair/typebox").TLiteral<"PATCH">;
            path: import("@sinclair/typebox").TLiteral<"/orders/{id}">;
            requestFormat: import("@sinclair/typebox").TLiteral<"json">;
            parameters: import("@sinclair/typebox").TObject<{
                path: import("@sinclair/typebox").TObject<{
                    id: import("@sinclair/typebox").TNumber;
                }>;
                body: import("@sinclair/typebox").TObject<{
                    id: import("@sinclair/typebox").TNumber;
                    userId: import("@sinclair/typebox").TOptional<import("@sinclair/typebox").TUnion<[import("@sinclair/typebox").TNumber, import("@sinclair/typebox").TUndefined]>>;
                    orderNumber: import("@sinclair/typebox").TOptional<import("@sinclair/typebox").TUnion<[import("@sinclair/typebox").TString, import("@sinclair/typebox").TUndefined]>>;
                    items: import("@sinclair/typebox").TOptional<import("@sinclair/typebox").TUnion<[import("@sinclair/typebox").TArray<import("@sinclair/typebox").TObject<{
                        productId: import("@sinclair/typebox").TOptional<import("@sinclair/typebox").TNumber>;
                        productName: import("@sinclair/typebox").TOptional<import("@sinclair/typebox").TString>;
                        quantity: import("@sinclair/typebox").TOptional<import("@sinclair/typebox").TNumber>;
                        unitPrice: import("@sinclair/typebox").TOptional<import("@sinclair/typebox").TNumber>;
                        totalPrice: import("@sinclair/typebox").TOptional<import("@sinclair/typebox").TNumber>;
                        sku: import("@sinclair/typebox").TOptional<import("@sinclair/typebox").TString>;
                    }>>, import("@sinclair/typebox").TUndefined]>>;
                    status: import("@sinclair/typebox").TOptional<import("@sinclair/typebox").TUnion<[import("@sinclair/typebox").TString, import("@sinclair/typebox").TUndefined]>>;
                    paymentStatus: import("@sinclair/typebox").TOptional<import("@sinclair/typebox").TUnion<[import("@sinclair/typebox").TString, import("@sinclair/typebox").TUndefined]>>;
                    shippingMethod: import("@sinclair/typebox").TOptional<import("@sinclair/typebox").TUnion<[import("@sinclair/typebox").TString, import("@sinclair/typebox").TUndefined]>>;
                    trackingNumber: import("@sinclair/typebox").TOptional<import("@sinclair/typebox").TUnion<[import("@sinclair/typebox").TString, import("@sinclair/typebox").TUndefined]>>;
                    addresses: import("@sinclair/typebox").TOptional<import("@sinclair/typebox").TUnion<[import("@sinclair/typebox").TObject<{
                        shipping: import("@sinclair/typebox").TOptional<import("@sinclair/typebox").TObject<{
                            name: import("@sinclair/typebox").TOptional<import("@sinclair/typebox").TString>;
                            street: import("@sinclair/typebox").TOptional<import("@sinclair/typebox").TString>;
                            apartment: import("@sinclair/typebox").TOptional<import("@sinclair/typebox").TString>;
                            city: import("@sinclair/typebox").TOptional<import("@sinclair/typebox").TString>;
                            state: import("@sinclair/typebox").TOptional<import("@sinclair/typebox").TString>;
                            zipCode: import("@sinclair/typebox").TOptional<import("@sinclair/typebox").TString>;
                            country: import("@sinclair/typebox").TOptional<import("@sinclair/typebox").TString>;
                            phone: import("@sinclair/typebox").TOptional<import("@sinclair/typebox").TString>;
                        }>>;
                        billing: import("@sinclair/typebox").TOptional<import("@sinclair/typebox").TObject<{
                            name: import("@sinclair/typebox").TOptional<import("@sinclair/typebox").TString>;
                            street: import("@sinclair/typebox").TOptional<import("@sinclair/typebox").TString>;
                            apartment: import("@sinclair/typebox").TOptional<import("@sinclair/typebox").TString>;
                            city: import("@sinclair/typebox").TOptional<import("@sinclair/typebox").TString>;
                            state: import("@sinclair/typebox").TOptional<import("@sinclair/typebox").TString>;
                            zipCode: import("@sinclair/typebox").TOptional<import("@sinclair/typebox").TString>;
                            country: import("@sinclair/typebox").TOptional<import("@sinclair/typebox").TString>;
                            phone: import("@sinclair/typebox").TOptional<import("@sinclair/typebox").TString>;
                        }>>;
                    }>, import("@sinclair/typebox").TUndefined]>>;
                    totals: import("@sinclair/typebox").TOptional<import("@sinclair/typebox").TUnion<[import("@sinclair/typebox").TObject<{
                        subtotal: import("@sinclair/typebox").TOptional<import("@sinclair/typebox").TNumber>;
                        tax: import("@sinclair/typebox").TOptional<import("@sinclair/typebox").TNumber>;
                        shipping: import("@sinclair/typebox").TOptional<import("@sinclair/typebox").TNumber>;
                        discount: import("@sinclair/typebox").TOptional<import("@sinclair/typebox").TNumber>;
                        total: import("@sinclair/typebox").TOptional<import("@sinclair/typebox").TNumber>;
                    }>, import("@sinclair/typebox").TUndefined]>>;
                    timeline: import("@sinclair/typebox").TOptional<import("@sinclair/typebox").TUnion<[import("@sinclair/typebox").TArray<import("@sinclair/typebox").TObject<{
                        status: import("@sinclair/typebox").TOptional<import("@sinclair/typebox").TString>;
                        timestamp: import("@sinclair/typebox").TOptional<import("@sinclair/typebox").TString>;
                        note: import("@sinclair/typebox").TOptional<import("@sinclair/typebox").TString>;
                    }>>, import("@sinclair/typebox").TUndefined]>>;
                    createdAt: import("@sinclair/typebox").TOptional<import("@sinclair/typebox").TUnion<[import("@sinclair/typebox").TString, import("@sinclair/typebox").TUndefined]>>;
                    updatedAt: import("@sinclair/typebox").TOptional<import("@sinclair/typebox").TUnion<[import("@sinclair/typebox").TString, import("@sinclair/typebox").TUndefined]>>;
                }>;
            }>;
            responses: import("@sinclair/typebox").TObject<{
                200: import("@sinclair/typebox").TObject<{
                    id: import("@sinclair/typebox").TNumber;
                    userId: import("@sinclair/typebox").TOptional<import("@sinclair/typebox").TUnion<[import("@sinclair/typebox").TNumber, import("@sinclair/typebox").TUndefined]>>;
                    orderNumber: import("@sinclair/typebox").TOptional<import("@sinclair/typebox").TUnion<[import("@sinclair/typebox").TString, import("@sinclair/typebox").TUndefined]>>;
                    items: import("@sinclair/typebox").TOptional<import("@sinclair/typebox").TUnion<[import("@sinclair/typebox").TArray<import("@sinclair/typebox").TObject<{
                        productId: import("@sinclair/typebox").TOptional<import("@sinclair/typebox").TNumber>;
                        productName: import("@sinclair/typebox").TOptional<import("@sinclair/typebox").TString>;
                        quantity: import("@sinclair/typebox").TOptional<import("@sinclair/typebox").TNumber>;
                        unitPrice: import("@sinclair/typebox").TOptional<import("@sinclair/typebox").TNumber>;
                        totalPrice: import("@sinclair/typebox").TOptional<import("@sinclair/typebox").TNumber>;
                        sku: import("@sinclair/typebox").TOptional<import("@sinclair/typebox").TString>;
                    }>>, import("@sinclair/typebox").TUndefined]>>;
                    status: import("@sinclair/typebox").TOptional<import("@sinclair/typebox").TUnion<[import("@sinclair/typebox").TString, import("@sinclair/typebox").TUndefined]>>;
                    paymentStatus: import("@sinclair/typebox").TOptional<import("@sinclair/typebox").TUnion<[import("@sinclair/typebox").TString, import("@sinclair/typebox").TUndefined]>>;
                    shippingMethod: import("@sinclair/typebox").TOptional<import("@sinclair/typebox").TUnion<[import("@sinclair/typebox").TString, import("@sinclair/typebox").TUndefined]>>;
                    trackingNumber: import("@sinclair/typebox").TOptional<import("@sinclair/typebox").TUnion<[import("@sinclair/typebox").TString, import("@sinclair/typebox").TUndefined]>>;
                    addresses: import("@sinclair/typebox").TOptional<import("@sinclair/typebox").TUnion<[import("@sinclair/typebox").TObject<{
                        shipping: import("@sinclair/typebox").TOptional<import("@sinclair/typebox").TObject<{
                            name: import("@sinclair/typebox").TOptional<import("@sinclair/typebox").TString>;
                            street: import("@sinclair/typebox").TOptional<import("@sinclair/typebox").TString>;
                            apartment: import("@sinclair/typebox").TOptional<import("@sinclair/typebox").TString>;
                            city: import("@sinclair/typebox").TOptional<import("@sinclair/typebox").TString>;
                            state: import("@sinclair/typebox").TOptional<import("@sinclair/typebox").TString>;
                            zipCode: import("@sinclair/typebox").TOptional<import("@sinclair/typebox").TString>;
                            country: import("@sinclair/typebox").TOptional<import("@sinclair/typebox").TString>;
                            phone: import("@sinclair/typebox").TOptional<import("@sinclair/typebox").TString>;
                        }>>;
                        billing: import("@sinclair/typebox").TOptional<import("@sinclair/typebox").TObject<{
                            name: import("@sinclair/typebox").TOptional<import("@sinclair/typebox").TString>;
                            street: import("@sinclair/typebox").TOptional<import("@sinclair/typebox").TString>;
                            apartment: import("@sinclair/typebox").TOptional<import("@sinclair/typebox").TString>;
                            city: import("@sinclair/typebox").TOptional<import("@sinclair/typebox").TString>;
                            state: import("@sinclair/typebox").TOptional<import("@sinclair/typebox").TString>;
                            zipCode: import("@sinclair/typebox").TOptional<import("@sinclair/typebox").TString>;
                            country: import("@sinclair/typebox").TOptional<import("@sinclair/typebox").TString>;
                            phone: import("@sinclair/typebox").TOptional<import("@sinclair/typebox").TString>;
                        }>>;
                    }>, import("@sinclair/typebox").TUndefined]>>;
                    totals: import("@sinclair/typebox").TOptional<import("@sinclair/typebox").TUnion<[import("@sinclair/typebox").TObject<{
                        subtotal: import("@sinclair/typebox").TOptional<import("@sinclair/typebox").TNumber>;
                        tax: import("@sinclair/typebox").TOptional<import("@sinclair/typebox").TNumber>;
                        shipping: import("@sinclair/typebox").TOptional<import("@sinclair/typebox").TNumber>;
                        discount: import("@sinclair/typebox").TOptional<import("@sinclair/typebox").TNumber>;
                        total: import("@sinclair/typebox").TOptional<import("@sinclair/typebox").TNumber>;
                    }>, import("@sinclair/typebox").TUndefined]>>;
                    timeline: import("@sinclair/typebox").TOptional<import("@sinclair/typebox").TUnion<[import("@sinclair/typebox").TArray<import("@sinclair/typebox").TObject<{
                        status: import("@sinclair/typebox").TOptional<import("@sinclair/typebox").TString>;
                        timestamp: import("@sinclair/typebox").TOptional<import("@sinclair/typebox").TString>;
                        note: import("@sinclair/typebox").TOptional<import("@sinclair/typebox").TString>;
                    }>>, import("@sinclair/typebox").TUndefined]>>;
                    createdAt: import("@sinclair/typebox").TOptional<import("@sinclair/typebox").TUnion<[import("@sinclair/typebox").TString, import("@sinclair/typebox").TUndefined]>>;
                    updatedAt: import("@sinclair/typebox").TOptional<import("@sinclair/typebox").TUnion<[import("@sinclair/typebox").TString, import("@sinclair/typebox").TUndefined]>>;
                }>;
                400: import("@sinclair/typebox").TUnknown;
                404: import("@sinclair/typebox").TUnknown;
            }>;
        }>;
        "/analytics/{id}": import("@sinclair/typebox").TObject<{
            method: import("@sinclair/typebox").TLiteral<"PATCH">;
            path: import("@sinclair/typebox").TLiteral<"/analytics/{id}">;
            requestFormat: import("@sinclair/typebox").TLiteral<"json">;
            parameters: import("@sinclair/typebox").TObject<{
                path: import("@sinclair/typebox").TObject<{
                    id: import("@sinclair/typebox").TNumber;
                }>;
                body: import("@sinclair/typebox").TObject<{
                    id: import("@sinclair/typebox").TNumber;
                    date: import("@sinclair/typebox").TOptional<import("@sinclair/typebox").TUnion<[import("@sinclair/typebox").TString, import("@sinclair/typebox").TUndefined]>>;
                    period: import("@sinclair/typebox").TOptional<import("@sinclair/typebox").TUnion<[import("@sinclair/typebox").TString, import("@sinclair/typebox").TUndefined]>>;
                    metrics: import("@sinclair/typebox").TOptional<import("@sinclair/typebox").TUnion<[import("@sinclair/typebox").TObject<{
                        users: import("@sinclair/typebox").TOptional<import("@sinclair/typebox").TObject<{
                            total: import("@sinclair/typebox").TOptional<import("@sinclair/typebox").TNumber>;
                            new: import("@sinclair/typebox").TOptional<import("@sinclair/typebox").TNumber>;
                            returning: import("@sinclair/typebox").TOptional<import("@sinclair/typebox").TNumber>;
                            active: import("@sinclair/typebox").TOptional<import("@sinclair/typebox").TNumber>;
                        }>>;
                        traffic: import("@sinclair/typebox").TOptional<import("@sinclair/typebox").TObject<{
                            pageViews: import("@sinclair/typebox").TOptional<import("@sinclair/typebox").TNumber>;
                            uniqueViews: import("@sinclair/typebox").TOptional<import("@sinclair/typebox").TNumber>;
                            bounceRate: import("@sinclair/typebox").TOptional<import("@sinclair/typebox").TNumber>;
                            avgSessionDuration: import("@sinclair/typebox").TOptional<import("@sinclair/typebox").TNumber>;
                            topPages: import("@sinclair/typebox").TOptional<import("@sinclair/typebox").TArray<import("@sinclair/typebox").TObject<{
                                path: import("@sinclair/typebox").TOptional<import("@sinclair/typebox").TString>;
                                views: import("@sinclair/typebox").TOptional<import("@sinclair/typebox").TNumber>;
                            }>>>;
                        }>>;
                        performance: import("@sinclair/typebox").TOptional<import("@sinclair/typebox").TObject<{
                            avgLoadTime: import("@sinclair/typebox").TOptional<import("@sinclair/typebox").TNumber>;
                            apiCalls: import("@sinclair/typebox").TOptional<import("@sinclair/typebox").TNumber>;
                            cacheHitRate: import("@sinclair/typebox").TOptional<import("@sinclair/typebox").TNumber>;
                            errorRate: import("@sinclair/typebox").TOptional<import("@sinclair/typebox").TNumber>;
                        }>>;
                        business: import("@sinclair/typebox").TOptional<import("@sinclair/typebox").TObject<{
                            orders: import("@sinclair/typebox").TOptional<import("@sinclair/typebox").TNumber>;
                            revenue: import("@sinclair/typebox").TOptional<import("@sinclair/typebox").TNumber>;
                            conversionRate: import("@sinclair/typebox").TOptional<import("@sinclair/typebox").TNumber>;
                            avgOrderValue: import("@sinclair/typebox").TOptional<import("@sinclair/typebox").TNumber>;
                        }>>;
                    }>, import("@sinclair/typebox").TUndefined]>>;
                }>;
            }>;
            responses: import("@sinclair/typebox").TObject<{
                200: import("@sinclair/typebox").TObject<{
                    id: import("@sinclair/typebox").TNumber;
                    date: import("@sinclair/typebox").TOptional<import("@sinclair/typebox").TUnion<[import("@sinclair/typebox").TString, import("@sinclair/typebox").TUndefined]>>;
                    period: import("@sinclair/typebox").TOptional<import("@sinclair/typebox").TUnion<[import("@sinclair/typebox").TString, import("@sinclair/typebox").TUndefined]>>;
                    metrics: import("@sinclair/typebox").TOptional<import("@sinclair/typebox").TUnion<[import("@sinclair/typebox").TObject<{
                        users: import("@sinclair/typebox").TOptional<import("@sinclair/typebox").TObject<{
                            total: import("@sinclair/typebox").TOptional<import("@sinclair/typebox").TNumber>;
                            new: import("@sinclair/typebox").TOptional<import("@sinclair/typebox").TNumber>;
                            returning: import("@sinclair/typebox").TOptional<import("@sinclair/typebox").TNumber>;
                            active: import("@sinclair/typebox").TOptional<import("@sinclair/typebox").TNumber>;
                        }>>;
                        traffic: import("@sinclair/typebox").TOptional<import("@sinclair/typebox").TObject<{
                            pageViews: import("@sinclair/typebox").TOptional<import("@sinclair/typebox").TNumber>;
                            uniqueViews: import("@sinclair/typebox").TOptional<import("@sinclair/typebox").TNumber>;
                            bounceRate: import("@sinclair/typebox").TOptional<import("@sinclair/typebox").TNumber>;
                            avgSessionDuration: import("@sinclair/typebox").TOptional<import("@sinclair/typebox").TNumber>;
                            topPages: import("@sinclair/typebox").TOptional<import("@sinclair/typebox").TArray<import("@sinclair/typebox").TObject<{
                                path: import("@sinclair/typebox").TOptional<import("@sinclair/typebox").TString>;
                                views: import("@sinclair/typebox").TOptional<import("@sinclair/typebox").TNumber>;
                            }>>>;
                        }>>;
                        performance: import("@sinclair/typebox").TOptional<import("@sinclair/typebox").TObject<{
                            avgLoadTime: import("@sinclair/typebox").TOptional<import("@sinclair/typebox").TNumber>;
                            apiCalls: import("@sinclair/typebox").TOptional<import("@sinclair/typebox").TNumber>;
                            cacheHitRate: import("@sinclair/typebox").TOptional<import("@sinclair/typebox").TNumber>;
                            errorRate: import("@sinclair/typebox").TOptional<import("@sinclair/typebox").TNumber>;
                        }>>;
                        business: import("@sinclair/typebox").TOptional<import("@sinclair/typebox").TObject<{
                            orders: import("@sinclair/typebox").TOptional<import("@sinclair/typebox").TNumber>;
                            revenue: import("@sinclair/typebox").TOptional<import("@sinclair/typebox").TNumber>;
                            conversionRate: import("@sinclair/typebox").TOptional<import("@sinclair/typebox").TNumber>;
                            avgOrderValue: import("@sinclair/typebox").TOptional<import("@sinclair/typebox").TNumber>;
                        }>>;
                    }>, import("@sinclair/typebox").TUndefined]>>;
                }>;
                400: import("@sinclair/typebox").TUnknown;
                404: import("@sinclair/typebox").TUnknown;
            }>;
        }>;
        "/notifications/{id}": import("@sinclair/typebox").TObject<{
            method: import("@sinclair/typebox").TLiteral<"PATCH">;
            path: import("@sinclair/typebox").TLiteral<"/notifications/{id}">;
            requestFormat: import("@sinclair/typebox").TLiteral<"json">;
            parameters: import("@sinclair/typebox").TObject<{
                path: import("@sinclair/typebox").TObject<{
                    id: import("@sinclair/typebox").TNumber;
                }>;
                body: import("@sinclair/typebox").TObject<{
                    id: import("@sinclair/typebox").TNumber;
                    userId: import("@sinclair/typebox").TOptional<import("@sinclair/typebox").TUnion<[import("@sinclair/typebox").TNumber, import("@sinclair/typebox").TUndefined]>>;
                    type: import("@sinclair/typebox").TOptional<import("@sinclair/typebox").TUnion<[import("@sinclair/typebox").TString, import("@sinclair/typebox").TUndefined]>>;
                    title: import("@sinclair/typebox").TOptional<import("@sinclair/typebox").TUnion<[import("@sinclair/typebox").TString, import("@sinclair/typebox").TUndefined]>>;
                    message: import("@sinclair/typebox").TOptional<import("@sinclair/typebox").TUnion<[import("@sinclair/typebox").TString, import("@sinclair/typebox").TUndefined]>>;
                    data: import("@sinclair/typebox").TOptional<import("@sinclair/typebox").TUnion<[import("@sinclair/typebox").TObject<{
                        orderId: import("@sinclair/typebox").TOptional<import("@sinclair/typebox").TNumber>;
                        trackingNumber: import("@sinclair/typebox").TOptional<import("@sinclair/typebox").TString>;
                    }>, import("@sinclair/typebox").TUndefined]>>;
                    isRead: import("@sinclair/typebox").TOptional<import("@sinclair/typebox").TUnion<[import("@sinclair/typebox").TBoolean, import("@sinclair/typebox").TUndefined]>>;
                    priority: import("@sinclair/typebox").TOptional<import("@sinclair/typebox").TUnion<[import("@sinclair/typebox").TString, import("@sinclair/typebox").TUndefined]>>;
                    createdAt: import("@sinclair/typebox").TOptional<import("@sinclair/typebox").TUnion<[import("@sinclair/typebox").TString, import("@sinclair/typebox").TUndefined]>>;
                }>;
            }>;
            responses: import("@sinclair/typebox").TObject<{
                200: import("@sinclair/typebox").TObject<{
                    id: import("@sinclair/typebox").TNumber;
                    userId: import("@sinclair/typebox").TOptional<import("@sinclair/typebox").TUnion<[import("@sinclair/typebox").TNumber, import("@sinclair/typebox").TUndefined]>>;
                    type: import("@sinclair/typebox").TOptional<import("@sinclair/typebox").TUnion<[import("@sinclair/typebox").TString, import("@sinclair/typebox").TUndefined]>>;
                    title: import("@sinclair/typebox").TOptional<import("@sinclair/typebox").TUnion<[import("@sinclair/typebox").TString, import("@sinclair/typebox").TUndefined]>>;
                    message: import("@sinclair/typebox").TOptional<import("@sinclair/typebox").TUnion<[import("@sinclair/typebox").TString, import("@sinclair/typebox").TUndefined]>>;
                    data: import("@sinclair/typebox").TOptional<import("@sinclair/typebox").TUnion<[import("@sinclair/typebox").TObject<{
                        orderId: import("@sinclair/typebox").TOptional<import("@sinclair/typebox").TNumber>;
                        trackingNumber: import("@sinclair/typebox").TOptional<import("@sinclair/typebox").TString>;
                    }>, import("@sinclair/typebox").TUndefined]>>;
                    isRead: import("@sinclair/typebox").TOptional<import("@sinclair/typebox").TUnion<[import("@sinclair/typebox").TBoolean, import("@sinclair/typebox").TUndefined]>>;
                    priority: import("@sinclair/typebox").TOptional<import("@sinclair/typebox").TUnion<[import("@sinclair/typebox").TString, import("@sinclair/typebox").TUndefined]>>;
                    createdAt: import("@sinclair/typebox").TOptional<import("@sinclair/typebox").TUnion<[import("@sinclair/typebox").TString, import("@sinclair/typebox").TUndefined]>>;
                }>;
                400: import("@sinclair/typebox").TUnknown;
                404: import("@sinclair/typebox").TUnknown;
            }>;
        }>;
    };
    delete: {
        "/users/{id}": import("@sinclair/typebox").TObject<{
            method: import("@sinclair/typebox").TLiteral<"DELETE">;
            path: import("@sinclair/typebox").TLiteral<"/users/{id}">;
            requestFormat: import("@sinclair/typebox").TLiteral<"json">;
            parameters: import("@sinclair/typebox").TObject<{
                path: import("@sinclair/typebox").TObject<{
                    id: import("@sinclair/typebox").TNumber;
                }>;
            }>;
            responses: import("@sinclair/typebox").TObject<{
                200: import("@sinclair/typebox").TUnknown;
                404: import("@sinclair/typebox").TUnknown;
            }>;
        }>;
        "/posts/{id}": import("@sinclair/typebox").TObject<{
            method: import("@sinclair/typebox").TLiteral<"DELETE">;
            path: import("@sinclair/typebox").TLiteral<"/posts/{id}">;
            requestFormat: import("@sinclair/typebox").TLiteral<"json">;
            parameters: import("@sinclair/typebox").TObject<{
                path: import("@sinclair/typebox").TObject<{
                    id: import("@sinclair/typebox").TNumber;
                }>;
            }>;
            responses: import("@sinclair/typebox").TObject<{
                200: import("@sinclair/typebox").TUnknown;
                404: import("@sinclair/typebox").TUnknown;
            }>;
        }>;
        "/comments/{id}": import("@sinclair/typebox").TObject<{
            method: import("@sinclair/typebox").TLiteral<"DELETE">;
            path: import("@sinclair/typebox").TLiteral<"/comments/{id}">;
            requestFormat: import("@sinclair/typebox").TLiteral<"json">;
            parameters: import("@sinclair/typebox").TObject<{
                path: import("@sinclair/typebox").TObject<{
                    id: import("@sinclair/typebox").TNumber;
                }>;
            }>;
            responses: import("@sinclair/typebox").TObject<{
                200: import("@sinclair/typebox").TUnknown;
                404: import("@sinclair/typebox").TUnknown;
            }>;
        }>;
        "/categories/{id}": import("@sinclair/typebox").TObject<{
            method: import("@sinclair/typebox").TLiteral<"DELETE">;
            path: import("@sinclair/typebox").TLiteral<"/categories/{id}">;
            requestFormat: import("@sinclair/typebox").TLiteral<"json">;
            parameters: import("@sinclair/typebox").TObject<{
                path: import("@sinclair/typebox").TObject<{
                    id: import("@sinclair/typebox").TNumber;
                }>;
            }>;
            responses: import("@sinclair/typebox").TObject<{
                200: import("@sinclair/typebox").TUnknown;
                404: import("@sinclair/typebox").TUnknown;
            }>;
        }>;
        "/products/{id}": import("@sinclair/typebox").TObject<{
            method: import("@sinclair/typebox").TLiteral<"DELETE">;
            path: import("@sinclair/typebox").TLiteral<"/products/{id}">;
            requestFormat: import("@sinclair/typebox").TLiteral<"json">;
            parameters: import("@sinclair/typebox").TObject<{
                path: import("@sinclair/typebox").TObject<{
                    id: import("@sinclair/typebox").TNumber;
                }>;
            }>;
            responses: import("@sinclair/typebox").TObject<{
                200: import("@sinclair/typebox").TUnknown;
                404: import("@sinclair/typebox").TUnknown;
            }>;
        }>;
        "/orders/{id}": import("@sinclair/typebox").TObject<{
            method: import("@sinclair/typebox").TLiteral<"DELETE">;
            path: import("@sinclair/typebox").TLiteral<"/orders/{id}">;
            requestFormat: import("@sinclair/typebox").TLiteral<"json">;
            parameters: import("@sinclair/typebox").TObject<{
                path: import("@sinclair/typebox").TObject<{
                    id: import("@sinclair/typebox").TNumber;
                }>;
            }>;
            responses: import("@sinclair/typebox").TObject<{
                200: import("@sinclair/typebox").TUnknown;
                404: import("@sinclair/typebox").TUnknown;
            }>;
        }>;
        "/analytics/{id}": import("@sinclair/typebox").TObject<{
            method: import("@sinclair/typebox").TLiteral<"DELETE">;
            path: import("@sinclair/typebox").TLiteral<"/analytics/{id}">;
            requestFormat: import("@sinclair/typebox").TLiteral<"json">;
            parameters: import("@sinclair/typebox").TObject<{
                path: import("@sinclair/typebox").TObject<{
                    id: import("@sinclair/typebox").TNumber;
                }>;
            }>;
            responses: import("@sinclair/typebox").TObject<{
                200: import("@sinclair/typebox").TUnknown;
                404: import("@sinclair/typebox").TUnknown;
            }>;
        }>;
        "/notifications/{id}": import("@sinclair/typebox").TObject<{
            method: import("@sinclair/typebox").TLiteral<"DELETE">;
            path: import("@sinclair/typebox").TLiteral<"/notifications/{id}">;
            requestFormat: import("@sinclair/typebox").TLiteral<"json">;
            parameters: import("@sinclair/typebox").TObject<{
                path: import("@sinclair/typebox").TObject<{
                    id: import("@sinclair/typebox").TNumber;
                }>;
            }>;
            responses: import("@sinclair/typebox").TObject<{
                200: import("@sinclair/typebox").TUnknown;
                404: import("@sinclair/typebox").TUnknown;
            }>;
        }>;
    };
};
export type EndpointByMethod = typeof EndpointByMethod;
export type GetEndpoints = EndpointByMethod["get"];
export type PostEndpoints = EndpointByMethod["post"];
export type PutEndpoints = EndpointByMethod["put"];
export type PatchEndpoints = EndpointByMethod["patch"];
export type DeleteEndpoints = EndpointByMethod["delete"];
export interface ClientConfig {
    baseURL?: string;
    defaultHeaders?: Record<string, string>;
}
export declare class GeneratedClient {
    private baseURL;
    private defaultHeaders;
    constructor(config?: ClientConfig);
    private request;
    get(path: string, params?: any): Promise<any>;
    post(path: string, body?: any): Promise<any>;
    put(path: string, body?: any): Promise<any>;
    patch(path: string, body?: any): Promise<any>;
    delete(path: string): Promise<any>;
}
export declare function createClient(config?: ClientConfig): GeneratedClient;
