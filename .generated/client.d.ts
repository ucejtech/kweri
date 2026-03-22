import type { Static } from "@sinclair/typebox";
export type Order = Static<typeof Order>;
export declare const Order: import("@sinclair/typebox").TObject<{
    id: import("@sinclair/typebox").TOptional<import("@sinclair/typebox").TNumber>;
    petId: import("@sinclair/typebox").TOptional<import("@sinclair/typebox").TNumber>;
    quantity: import("@sinclair/typebox").TOptional<import("@sinclair/typebox").TNumber>;
    shipDate: import("@sinclair/typebox").TOptional<import("@sinclair/typebox").TString>;
    status: import("@sinclair/typebox").TOptional<import("@sinclair/typebox").TUnion<[import("@sinclair/typebox").TLiteral<"placed">, import("@sinclair/typebox").TLiteral<"approved">, import("@sinclair/typebox").TLiteral<"delivered">]>>;
    complete: import("@sinclair/typebox").TOptional<import("@sinclair/typebox").TBoolean>;
}>;
export type Category = Static<typeof Category>;
export declare const Category: import("@sinclair/typebox").TObject<{
    id: import("@sinclair/typebox").TOptional<import("@sinclair/typebox").TNumber>;
    name: import("@sinclair/typebox").TOptional<import("@sinclair/typebox").TString>;
}>;
export type User = Static<typeof User>;
export declare const User: import("@sinclair/typebox").TObject<{
    id: import("@sinclair/typebox").TOptional<import("@sinclair/typebox").TNumber>;
    username: import("@sinclair/typebox").TOptional<import("@sinclair/typebox").TString>;
    firstName: import("@sinclair/typebox").TOptional<import("@sinclair/typebox").TString>;
    lastName: import("@sinclair/typebox").TOptional<import("@sinclair/typebox").TString>;
    email: import("@sinclair/typebox").TOptional<import("@sinclair/typebox").TString>;
    password: import("@sinclair/typebox").TOptional<import("@sinclair/typebox").TString>;
    phone: import("@sinclair/typebox").TOptional<import("@sinclair/typebox").TString>;
    userStatus: import("@sinclair/typebox").TOptional<import("@sinclair/typebox").TNumber>;
}>;
export type Tag = Static<typeof Tag>;
export declare const Tag: import("@sinclair/typebox").TObject<{
    id: import("@sinclair/typebox").TOptional<import("@sinclair/typebox").TNumber>;
    name: import("@sinclair/typebox").TOptional<import("@sinclair/typebox").TString>;
}>;
export type Pet = Static<typeof Pet>;
export declare const Pet: import("@sinclair/typebox").TObject<{
    id: import("@sinclair/typebox").TOptional<import("@sinclair/typebox").TUnion<[import("@sinclair/typebox").TNumber, import("@sinclair/typebox").TUndefined]>>;
    name: import("@sinclair/typebox").TString;
    category: import("@sinclair/typebox").TOptional<import("@sinclair/typebox").TUnion<[import("@sinclair/typebox").TObject<{
        id: import("@sinclair/typebox").TOptional<import("@sinclair/typebox").TNumber>;
        name: import("@sinclair/typebox").TOptional<import("@sinclair/typebox").TString>;
    }>, import("@sinclair/typebox").TUndefined]>>;
    photoUrls: import("@sinclair/typebox").TArray<import("@sinclair/typebox").TString>;
    tags: import("@sinclair/typebox").TOptional<import("@sinclair/typebox").TUnion<[import("@sinclair/typebox").TArray<import("@sinclair/typebox").TObject<{
        id: import("@sinclair/typebox").TOptional<import("@sinclair/typebox").TNumber>;
        name: import("@sinclair/typebox").TOptional<import("@sinclair/typebox").TString>;
    }>>, import("@sinclair/typebox").TUndefined]>>;
    status: import("@sinclair/typebox").TOptional<import("@sinclair/typebox").TUnion<[import("@sinclair/typebox").TUnion<[import("@sinclair/typebox").TLiteral<"available">, import("@sinclair/typebox").TLiteral<"pending">, import("@sinclair/typebox").TLiteral<"sold">]>, import("@sinclair/typebox").TUndefined]>>;
}>;
export type ApiResponse = Static<typeof ApiResponse>;
export declare const ApiResponse: import("@sinclair/typebox").TObject<{
    code: import("@sinclair/typebox").TOptional<import("@sinclair/typebox").TNumber>;
    type: import("@sinclair/typebox").TOptional<import("@sinclair/typebox").TString>;
    message: import("@sinclair/typebox").TOptional<import("@sinclair/typebox").TString>;
}>;
export type put_UpdatePet = Static<typeof put_UpdatePet>;
export declare const put_UpdatePet: import("@sinclair/typebox").TObject<{
    method: import("@sinclair/typebox").TLiteral<"PUT">;
    path: import("@sinclair/typebox").TLiteral<"/pet">;
    requestFormat: import("@sinclair/typebox").TLiteral<"json">;
    parameters: import("@sinclair/typebox").TObject<{
        body: import("@sinclair/typebox").TObject<{
            id: import("@sinclair/typebox").TOptional<import("@sinclair/typebox").TUnion<[import("@sinclair/typebox").TNumber, import("@sinclair/typebox").TUndefined]>>;
            name: import("@sinclair/typebox").TString;
            category: import("@sinclair/typebox").TOptional<import("@sinclair/typebox").TUnion<[import("@sinclair/typebox").TObject<{
                id: import("@sinclair/typebox").TOptional<import("@sinclair/typebox").TNumber>;
                name: import("@sinclair/typebox").TOptional<import("@sinclair/typebox").TString>;
            }>, import("@sinclair/typebox").TUndefined]>>;
            photoUrls: import("@sinclair/typebox").TArray<import("@sinclair/typebox").TString>;
            tags: import("@sinclair/typebox").TOptional<import("@sinclair/typebox").TUnion<[import("@sinclair/typebox").TArray<import("@sinclair/typebox").TObject<{
                id: import("@sinclair/typebox").TOptional<import("@sinclair/typebox").TNumber>;
                name: import("@sinclair/typebox").TOptional<import("@sinclair/typebox").TString>;
            }>>, import("@sinclair/typebox").TUndefined]>>;
            status: import("@sinclair/typebox").TOptional<import("@sinclair/typebox").TUnion<[import("@sinclair/typebox").TUnion<[import("@sinclair/typebox").TLiteral<"available">, import("@sinclair/typebox").TLiteral<"pending">, import("@sinclair/typebox").TLiteral<"sold">]>, import("@sinclair/typebox").TUndefined]>>;
        }>;
    }>;
    responses: import("@sinclair/typebox").TObject<{
        200: import("@sinclair/typebox").TObject<{
            id: import("@sinclair/typebox").TOptional<import("@sinclair/typebox").TUnion<[import("@sinclair/typebox").TNumber, import("@sinclair/typebox").TUndefined]>>;
            name: import("@sinclair/typebox").TString;
            category: import("@sinclair/typebox").TOptional<import("@sinclair/typebox").TUnion<[import("@sinclair/typebox").TObject<{
                id: import("@sinclair/typebox").TOptional<import("@sinclair/typebox").TNumber>;
                name: import("@sinclair/typebox").TOptional<import("@sinclair/typebox").TString>;
            }>, import("@sinclair/typebox").TUndefined]>>;
            photoUrls: import("@sinclair/typebox").TArray<import("@sinclair/typebox").TString>;
            tags: import("@sinclair/typebox").TOptional<import("@sinclair/typebox").TUnion<[import("@sinclair/typebox").TArray<import("@sinclair/typebox").TObject<{
                id: import("@sinclair/typebox").TOptional<import("@sinclair/typebox").TNumber>;
                name: import("@sinclair/typebox").TOptional<import("@sinclair/typebox").TString>;
            }>>, import("@sinclair/typebox").TUndefined]>>;
            status: import("@sinclair/typebox").TOptional<import("@sinclair/typebox").TUnion<[import("@sinclair/typebox").TUnion<[import("@sinclair/typebox").TLiteral<"available">, import("@sinclair/typebox").TLiteral<"pending">, import("@sinclair/typebox").TLiteral<"sold">]>, import("@sinclair/typebox").TUndefined]>>;
        }>;
        400: import("@sinclair/typebox").TUnknown;
        404: import("@sinclair/typebox").TUnknown;
        422: import("@sinclair/typebox").TUnknown;
        default: import("@sinclair/typebox").TUnknown;
    }>;
}>;
export type post_AddPet = Static<typeof post_AddPet>;
export declare const post_AddPet: import("@sinclair/typebox").TObject<{
    method: import("@sinclair/typebox").TLiteral<"POST">;
    path: import("@sinclair/typebox").TLiteral<"/pet">;
    requestFormat: import("@sinclair/typebox").TLiteral<"json">;
    parameters: import("@sinclair/typebox").TObject<{
        body: import("@sinclair/typebox").TObject<{
            id: import("@sinclair/typebox").TOptional<import("@sinclair/typebox").TUnion<[import("@sinclair/typebox").TNumber, import("@sinclair/typebox").TUndefined]>>;
            name: import("@sinclair/typebox").TString;
            category: import("@sinclair/typebox").TOptional<import("@sinclair/typebox").TUnion<[import("@sinclair/typebox").TObject<{
                id: import("@sinclair/typebox").TOptional<import("@sinclair/typebox").TNumber>;
                name: import("@sinclair/typebox").TOptional<import("@sinclair/typebox").TString>;
            }>, import("@sinclair/typebox").TUndefined]>>;
            photoUrls: import("@sinclair/typebox").TArray<import("@sinclair/typebox").TString>;
            tags: import("@sinclair/typebox").TOptional<import("@sinclair/typebox").TUnion<[import("@sinclair/typebox").TArray<import("@sinclair/typebox").TObject<{
                id: import("@sinclair/typebox").TOptional<import("@sinclair/typebox").TNumber>;
                name: import("@sinclair/typebox").TOptional<import("@sinclair/typebox").TString>;
            }>>, import("@sinclair/typebox").TUndefined]>>;
            status: import("@sinclair/typebox").TOptional<import("@sinclair/typebox").TUnion<[import("@sinclair/typebox").TUnion<[import("@sinclair/typebox").TLiteral<"available">, import("@sinclair/typebox").TLiteral<"pending">, import("@sinclair/typebox").TLiteral<"sold">]>, import("@sinclair/typebox").TUndefined]>>;
        }>;
    }>;
    responses: import("@sinclair/typebox").TObject<{
        200: import("@sinclair/typebox").TObject<{
            id: import("@sinclair/typebox").TOptional<import("@sinclair/typebox").TUnion<[import("@sinclair/typebox").TNumber, import("@sinclair/typebox").TUndefined]>>;
            name: import("@sinclair/typebox").TString;
            category: import("@sinclair/typebox").TOptional<import("@sinclair/typebox").TUnion<[import("@sinclair/typebox").TObject<{
                id: import("@sinclair/typebox").TOptional<import("@sinclair/typebox").TNumber>;
                name: import("@sinclair/typebox").TOptional<import("@sinclair/typebox").TString>;
            }>, import("@sinclair/typebox").TUndefined]>>;
            photoUrls: import("@sinclair/typebox").TArray<import("@sinclair/typebox").TString>;
            tags: import("@sinclair/typebox").TOptional<import("@sinclair/typebox").TUnion<[import("@sinclair/typebox").TArray<import("@sinclair/typebox").TObject<{
                id: import("@sinclair/typebox").TOptional<import("@sinclair/typebox").TNumber>;
                name: import("@sinclair/typebox").TOptional<import("@sinclair/typebox").TString>;
            }>>, import("@sinclair/typebox").TUndefined]>>;
            status: import("@sinclair/typebox").TOptional<import("@sinclair/typebox").TUnion<[import("@sinclair/typebox").TUnion<[import("@sinclair/typebox").TLiteral<"available">, import("@sinclair/typebox").TLiteral<"pending">, import("@sinclair/typebox").TLiteral<"sold">]>, import("@sinclair/typebox").TUndefined]>>;
        }>;
        400: import("@sinclair/typebox").TUnknown;
        422: import("@sinclair/typebox").TUnknown;
        default: import("@sinclair/typebox").TUnknown;
    }>;
}>;
export type get_FindPetsByStatus = Static<typeof get_FindPetsByStatus>;
export declare const get_FindPetsByStatus: import("@sinclair/typebox").TObject<{
    method: import("@sinclair/typebox").TLiteral<"GET">;
    path: import("@sinclair/typebox").TLiteral<"/pet/findByStatus">;
    requestFormat: import("@sinclair/typebox").TLiteral<"json">;
    parameters: import("@sinclair/typebox").TObject<{
        query: import("@sinclair/typebox").TObject<{
            status: import("@sinclair/typebox").TUnion<[import("@sinclair/typebox").TLiteral<"available">, import("@sinclair/typebox").TLiteral<"pending">, import("@sinclair/typebox").TLiteral<"sold">]>;
        }>;
    }>;
    responses: import("@sinclair/typebox").TObject<{
        200: import("@sinclair/typebox").TArray<import("@sinclair/typebox").TObject<{
            id: import("@sinclair/typebox").TOptional<import("@sinclair/typebox").TUnion<[import("@sinclair/typebox").TNumber, import("@sinclair/typebox").TUndefined]>>;
            name: import("@sinclair/typebox").TString;
            category: import("@sinclair/typebox").TOptional<import("@sinclair/typebox").TUnion<[import("@sinclair/typebox").TObject<{
                id: import("@sinclair/typebox").TOptional<import("@sinclair/typebox").TNumber>;
                name: import("@sinclair/typebox").TOptional<import("@sinclair/typebox").TString>;
            }>, import("@sinclair/typebox").TUndefined]>>;
            photoUrls: import("@sinclair/typebox").TArray<import("@sinclair/typebox").TString>;
            tags: import("@sinclair/typebox").TOptional<import("@sinclair/typebox").TUnion<[import("@sinclair/typebox").TArray<import("@sinclair/typebox").TObject<{
                id: import("@sinclair/typebox").TOptional<import("@sinclair/typebox").TNumber>;
                name: import("@sinclair/typebox").TOptional<import("@sinclair/typebox").TString>;
            }>>, import("@sinclair/typebox").TUndefined]>>;
            status: import("@sinclair/typebox").TOptional<import("@sinclair/typebox").TUnion<[import("@sinclair/typebox").TUnion<[import("@sinclair/typebox").TLiteral<"available">, import("@sinclair/typebox").TLiteral<"pending">, import("@sinclair/typebox").TLiteral<"sold">]>, import("@sinclair/typebox").TUndefined]>>;
        }>>;
        400: import("@sinclair/typebox").TUnknown;
        default: import("@sinclair/typebox").TUnknown;
    }>;
}>;
export type get_FindPetsByTags = Static<typeof get_FindPetsByTags>;
export declare const get_FindPetsByTags: import("@sinclair/typebox").TObject<{
    method: import("@sinclair/typebox").TLiteral<"GET">;
    path: import("@sinclair/typebox").TLiteral<"/pet/findByTags">;
    requestFormat: import("@sinclair/typebox").TLiteral<"json">;
    parameters: import("@sinclair/typebox").TObject<{
        query: import("@sinclair/typebox").TObject<{
            tags: import("@sinclair/typebox").TArray<import("@sinclair/typebox").TString>;
        }>;
    }>;
    responses: import("@sinclair/typebox").TObject<{
        200: import("@sinclair/typebox").TArray<import("@sinclair/typebox").TObject<{
            id: import("@sinclair/typebox").TOptional<import("@sinclair/typebox").TUnion<[import("@sinclair/typebox").TNumber, import("@sinclair/typebox").TUndefined]>>;
            name: import("@sinclair/typebox").TString;
            category: import("@sinclair/typebox").TOptional<import("@sinclair/typebox").TUnion<[import("@sinclair/typebox").TObject<{
                id: import("@sinclair/typebox").TOptional<import("@sinclair/typebox").TNumber>;
                name: import("@sinclair/typebox").TOptional<import("@sinclair/typebox").TString>;
            }>, import("@sinclair/typebox").TUndefined]>>;
            photoUrls: import("@sinclair/typebox").TArray<import("@sinclair/typebox").TString>;
            tags: import("@sinclair/typebox").TOptional<import("@sinclair/typebox").TUnion<[import("@sinclair/typebox").TArray<import("@sinclair/typebox").TObject<{
                id: import("@sinclair/typebox").TOptional<import("@sinclair/typebox").TNumber>;
                name: import("@sinclair/typebox").TOptional<import("@sinclair/typebox").TString>;
            }>>, import("@sinclair/typebox").TUndefined]>>;
            status: import("@sinclair/typebox").TOptional<import("@sinclair/typebox").TUnion<[import("@sinclair/typebox").TUnion<[import("@sinclair/typebox").TLiteral<"available">, import("@sinclair/typebox").TLiteral<"pending">, import("@sinclair/typebox").TLiteral<"sold">]>, import("@sinclair/typebox").TUndefined]>>;
        }>>;
        400: import("@sinclair/typebox").TUnknown;
        default: import("@sinclair/typebox").TUnknown;
    }>;
}>;
export type get_GetPetById = Static<typeof get_GetPetById>;
export declare const get_GetPetById: import("@sinclair/typebox").TObject<{
    method: import("@sinclair/typebox").TLiteral<"GET">;
    path: import("@sinclair/typebox").TLiteral<"/pet/{petId}">;
    requestFormat: import("@sinclair/typebox").TLiteral<"json">;
    parameters: import("@sinclair/typebox").TObject<{
        path: import("@sinclair/typebox").TObject<{
            petId: import("@sinclair/typebox").TNumber;
        }>;
    }>;
    responses: import("@sinclair/typebox").TObject<{
        200: import("@sinclair/typebox").TObject<{
            id: import("@sinclair/typebox").TOptional<import("@sinclair/typebox").TUnion<[import("@sinclair/typebox").TNumber, import("@sinclair/typebox").TUndefined]>>;
            name: import("@sinclair/typebox").TString;
            category: import("@sinclair/typebox").TOptional<import("@sinclair/typebox").TUnion<[import("@sinclair/typebox").TObject<{
                id: import("@sinclair/typebox").TOptional<import("@sinclair/typebox").TNumber>;
                name: import("@sinclair/typebox").TOptional<import("@sinclair/typebox").TString>;
            }>, import("@sinclair/typebox").TUndefined]>>;
            photoUrls: import("@sinclair/typebox").TArray<import("@sinclair/typebox").TString>;
            tags: import("@sinclair/typebox").TOptional<import("@sinclair/typebox").TUnion<[import("@sinclair/typebox").TArray<import("@sinclair/typebox").TObject<{
                id: import("@sinclair/typebox").TOptional<import("@sinclair/typebox").TNumber>;
                name: import("@sinclair/typebox").TOptional<import("@sinclair/typebox").TString>;
            }>>, import("@sinclair/typebox").TUndefined]>>;
            status: import("@sinclair/typebox").TOptional<import("@sinclair/typebox").TUnion<[import("@sinclair/typebox").TUnion<[import("@sinclair/typebox").TLiteral<"available">, import("@sinclair/typebox").TLiteral<"pending">, import("@sinclair/typebox").TLiteral<"sold">]>, import("@sinclair/typebox").TUndefined]>>;
        }>;
        400: import("@sinclair/typebox").TUnknown;
        404: import("@sinclair/typebox").TUnknown;
        default: import("@sinclair/typebox").TUnknown;
    }>;
}>;
export type post_UpdatePetWithForm = Static<typeof post_UpdatePetWithForm>;
export declare const post_UpdatePetWithForm: import("@sinclair/typebox").TObject<{
    method: import("@sinclair/typebox").TLiteral<"POST">;
    path: import("@sinclair/typebox").TLiteral<"/pet/{petId}">;
    requestFormat: import("@sinclair/typebox").TLiteral<"json">;
    parameters: import("@sinclair/typebox").TObject<{
        query: import("@sinclair/typebox").TObject<{
            name: import("@sinclair/typebox").TOptional<import("@sinclair/typebox").TString>;
            status: import("@sinclair/typebox").TOptional<import("@sinclair/typebox").TString>;
        }>;
        path: import("@sinclair/typebox").TObject<{
            petId: import("@sinclair/typebox").TNumber;
        }>;
    }>;
    responses: import("@sinclair/typebox").TObject<{
        200: import("@sinclair/typebox").TObject<{
            id: import("@sinclair/typebox").TOptional<import("@sinclair/typebox").TUnion<[import("@sinclair/typebox").TNumber, import("@sinclair/typebox").TUndefined]>>;
            name: import("@sinclair/typebox").TString;
            category: import("@sinclair/typebox").TOptional<import("@sinclair/typebox").TUnion<[import("@sinclair/typebox").TObject<{
                id: import("@sinclair/typebox").TOptional<import("@sinclair/typebox").TNumber>;
                name: import("@sinclair/typebox").TOptional<import("@sinclair/typebox").TString>;
            }>, import("@sinclair/typebox").TUndefined]>>;
            photoUrls: import("@sinclair/typebox").TArray<import("@sinclair/typebox").TString>;
            tags: import("@sinclair/typebox").TOptional<import("@sinclair/typebox").TUnion<[import("@sinclair/typebox").TArray<import("@sinclair/typebox").TObject<{
                id: import("@sinclair/typebox").TOptional<import("@sinclair/typebox").TNumber>;
                name: import("@sinclair/typebox").TOptional<import("@sinclair/typebox").TString>;
            }>>, import("@sinclair/typebox").TUndefined]>>;
            status: import("@sinclair/typebox").TOptional<import("@sinclair/typebox").TUnion<[import("@sinclair/typebox").TUnion<[import("@sinclair/typebox").TLiteral<"available">, import("@sinclair/typebox").TLiteral<"pending">, import("@sinclair/typebox").TLiteral<"sold">]>, import("@sinclair/typebox").TUndefined]>>;
        }>;
        400: import("@sinclair/typebox").TUnknown;
        default: import("@sinclair/typebox").TUnknown;
    }>;
}>;
export type delete_DeletePet = Static<typeof delete_DeletePet>;
export declare const delete_DeletePet: import("@sinclair/typebox").TObject<{
    method: import("@sinclair/typebox").TLiteral<"DELETE">;
    path: import("@sinclair/typebox").TLiteral<"/pet/{petId}">;
    requestFormat: import("@sinclair/typebox").TLiteral<"json">;
    parameters: import("@sinclair/typebox").TObject<{
        path: import("@sinclair/typebox").TObject<{
            petId: import("@sinclair/typebox").TNumber;
        }>;
        header: import("@sinclair/typebox").TObject<{
            api_key: import("@sinclair/typebox").TOptional<import("@sinclair/typebox").TString>;
        }>;
    }>;
    responses: import("@sinclair/typebox").TObject<{
        200: import("@sinclair/typebox").TUnknown;
        400: import("@sinclair/typebox").TUnknown;
        default: import("@sinclair/typebox").TUnknown;
    }>;
}>;
export type post_UploadFile = Static<typeof post_UploadFile>;
export declare const post_UploadFile: import("@sinclair/typebox").TObject<{
    method: import("@sinclair/typebox").TLiteral<"POST">;
    path: import("@sinclair/typebox").TLiteral<"/pet/{petId}/uploadImage">;
    requestFormat: import("@sinclair/typebox").TLiteral<"binary">;
    parameters: import("@sinclair/typebox").TObject<{
        query: import("@sinclair/typebox").TObject<{
            additionalMetadata: import("@sinclair/typebox").TOptional<import("@sinclair/typebox").TString>;
        }>;
        path: import("@sinclair/typebox").TObject<{
            petId: import("@sinclair/typebox").TNumber;
        }>;
        body: import("@sinclair/typebox").TString;
    }>;
    responses: import("@sinclair/typebox").TObject<{
        200: import("@sinclair/typebox").TObject<{
            code: import("@sinclair/typebox").TOptional<import("@sinclair/typebox").TNumber>;
            type: import("@sinclair/typebox").TOptional<import("@sinclair/typebox").TString>;
            message: import("@sinclair/typebox").TOptional<import("@sinclair/typebox").TString>;
        }>;
        400: import("@sinclair/typebox").TUnknown;
        404: import("@sinclair/typebox").TUnknown;
        default: import("@sinclair/typebox").TUnknown;
    }>;
}>;
export type get_GetInventory = Static<typeof get_GetInventory>;
export declare const get_GetInventory: import("@sinclair/typebox").TObject<{
    method: import("@sinclair/typebox").TLiteral<"GET">;
    path: import("@sinclair/typebox").TLiteral<"/store/inventory">;
    requestFormat: import("@sinclair/typebox").TLiteral<"json">;
    parameters: import("@sinclair/typebox").TNever;
    responses: import("@sinclair/typebox").TObject<{
        200: import("@sinclair/typebox").TRecord<import("@sinclair/typebox").TString, import("@sinclair/typebox").TNumber>;
        default: import("@sinclair/typebox").TUnknown;
    }>;
}>;
export type post_PlaceOrder = Static<typeof post_PlaceOrder>;
export declare const post_PlaceOrder: import("@sinclair/typebox").TObject<{
    method: import("@sinclair/typebox").TLiteral<"POST">;
    path: import("@sinclair/typebox").TLiteral<"/store/order">;
    requestFormat: import("@sinclair/typebox").TLiteral<"json">;
    parameters: import("@sinclair/typebox").TObject<{
        body: import("@sinclair/typebox").TObject<{
            id: import("@sinclair/typebox").TOptional<import("@sinclair/typebox").TNumber>;
            petId: import("@sinclair/typebox").TOptional<import("@sinclair/typebox").TNumber>;
            quantity: import("@sinclair/typebox").TOptional<import("@sinclair/typebox").TNumber>;
            shipDate: import("@sinclair/typebox").TOptional<import("@sinclair/typebox").TString>;
            status: import("@sinclair/typebox").TOptional<import("@sinclair/typebox").TUnion<[import("@sinclair/typebox").TLiteral<"placed">, import("@sinclair/typebox").TLiteral<"approved">, import("@sinclair/typebox").TLiteral<"delivered">]>>;
            complete: import("@sinclair/typebox").TOptional<import("@sinclair/typebox").TBoolean>;
        }>;
    }>;
    responses: import("@sinclair/typebox").TObject<{
        200: import("@sinclair/typebox").TObject<{
            id: import("@sinclair/typebox").TOptional<import("@sinclair/typebox").TNumber>;
            petId: import("@sinclair/typebox").TOptional<import("@sinclair/typebox").TNumber>;
            quantity: import("@sinclair/typebox").TOptional<import("@sinclair/typebox").TNumber>;
            shipDate: import("@sinclair/typebox").TOptional<import("@sinclair/typebox").TString>;
            status: import("@sinclair/typebox").TOptional<import("@sinclair/typebox").TUnion<[import("@sinclair/typebox").TLiteral<"placed">, import("@sinclair/typebox").TLiteral<"approved">, import("@sinclair/typebox").TLiteral<"delivered">]>>;
            complete: import("@sinclair/typebox").TOptional<import("@sinclair/typebox").TBoolean>;
        }>;
        400: import("@sinclair/typebox").TUnknown;
        422: import("@sinclair/typebox").TUnknown;
        default: import("@sinclair/typebox").TUnknown;
    }>;
}>;
export type get_GetOrderById = Static<typeof get_GetOrderById>;
export declare const get_GetOrderById: import("@sinclair/typebox").TObject<{
    method: import("@sinclair/typebox").TLiteral<"GET">;
    path: import("@sinclair/typebox").TLiteral<"/store/order/{orderId}">;
    requestFormat: import("@sinclair/typebox").TLiteral<"json">;
    parameters: import("@sinclair/typebox").TObject<{
        path: import("@sinclair/typebox").TObject<{
            orderId: import("@sinclair/typebox").TNumber;
        }>;
    }>;
    responses: import("@sinclair/typebox").TObject<{
        200: import("@sinclair/typebox").TObject<{
            id: import("@sinclair/typebox").TOptional<import("@sinclair/typebox").TNumber>;
            petId: import("@sinclair/typebox").TOptional<import("@sinclair/typebox").TNumber>;
            quantity: import("@sinclair/typebox").TOptional<import("@sinclair/typebox").TNumber>;
            shipDate: import("@sinclair/typebox").TOptional<import("@sinclair/typebox").TString>;
            status: import("@sinclair/typebox").TOptional<import("@sinclair/typebox").TUnion<[import("@sinclair/typebox").TLiteral<"placed">, import("@sinclair/typebox").TLiteral<"approved">, import("@sinclair/typebox").TLiteral<"delivered">]>>;
            complete: import("@sinclair/typebox").TOptional<import("@sinclair/typebox").TBoolean>;
        }>;
        400: import("@sinclair/typebox").TUnknown;
        404: import("@sinclair/typebox").TUnknown;
        default: import("@sinclair/typebox").TUnknown;
    }>;
}>;
export type delete_DeleteOrder = Static<typeof delete_DeleteOrder>;
export declare const delete_DeleteOrder: import("@sinclair/typebox").TObject<{
    method: import("@sinclair/typebox").TLiteral<"DELETE">;
    path: import("@sinclair/typebox").TLiteral<"/store/order/{orderId}">;
    requestFormat: import("@sinclair/typebox").TLiteral<"json">;
    parameters: import("@sinclair/typebox").TObject<{
        path: import("@sinclair/typebox").TObject<{
            orderId: import("@sinclair/typebox").TNumber;
        }>;
    }>;
    responses: import("@sinclair/typebox").TObject<{
        200: import("@sinclair/typebox").TUnknown;
        400: import("@sinclair/typebox").TUnknown;
        404: import("@sinclair/typebox").TUnknown;
        default: import("@sinclair/typebox").TUnknown;
    }>;
}>;
export type post_CreateUser = Static<typeof post_CreateUser>;
export declare const post_CreateUser: import("@sinclair/typebox").TObject<{
    method: import("@sinclair/typebox").TLiteral<"POST">;
    path: import("@sinclair/typebox").TLiteral<"/user">;
    requestFormat: import("@sinclair/typebox").TLiteral<"json">;
    parameters: import("@sinclair/typebox").TObject<{
        body: import("@sinclair/typebox").TObject<{
            id: import("@sinclair/typebox").TOptional<import("@sinclair/typebox").TNumber>;
            username: import("@sinclair/typebox").TOptional<import("@sinclair/typebox").TString>;
            firstName: import("@sinclair/typebox").TOptional<import("@sinclair/typebox").TString>;
            lastName: import("@sinclair/typebox").TOptional<import("@sinclair/typebox").TString>;
            email: import("@sinclair/typebox").TOptional<import("@sinclair/typebox").TString>;
            password: import("@sinclair/typebox").TOptional<import("@sinclair/typebox").TString>;
            phone: import("@sinclair/typebox").TOptional<import("@sinclair/typebox").TString>;
            userStatus: import("@sinclair/typebox").TOptional<import("@sinclair/typebox").TNumber>;
        }>;
    }>;
    responses: import("@sinclair/typebox").TObject<{
        200: import("@sinclair/typebox").TObject<{
            id: import("@sinclair/typebox").TOptional<import("@sinclair/typebox").TNumber>;
            username: import("@sinclair/typebox").TOptional<import("@sinclair/typebox").TString>;
            firstName: import("@sinclair/typebox").TOptional<import("@sinclair/typebox").TString>;
            lastName: import("@sinclair/typebox").TOptional<import("@sinclair/typebox").TString>;
            email: import("@sinclair/typebox").TOptional<import("@sinclair/typebox").TString>;
            password: import("@sinclair/typebox").TOptional<import("@sinclair/typebox").TString>;
            phone: import("@sinclair/typebox").TOptional<import("@sinclair/typebox").TString>;
            userStatus: import("@sinclair/typebox").TOptional<import("@sinclair/typebox").TNumber>;
        }>;
        default: import("@sinclair/typebox").TUnknown;
    }>;
}>;
export type post_CreateUsersWithListInput = Static<typeof post_CreateUsersWithListInput>;
export declare const post_CreateUsersWithListInput: import("@sinclair/typebox").TObject<{
    method: import("@sinclair/typebox").TLiteral<"POST">;
    path: import("@sinclair/typebox").TLiteral<"/user/createWithList">;
    requestFormat: import("@sinclair/typebox").TLiteral<"json">;
    parameters: import("@sinclair/typebox").TObject<{
        body: import("@sinclair/typebox").TArray<import("@sinclair/typebox").TObject<{
            id: import("@sinclair/typebox").TOptional<import("@sinclair/typebox").TNumber>;
            username: import("@sinclair/typebox").TOptional<import("@sinclair/typebox").TString>;
            firstName: import("@sinclair/typebox").TOptional<import("@sinclair/typebox").TString>;
            lastName: import("@sinclair/typebox").TOptional<import("@sinclair/typebox").TString>;
            email: import("@sinclair/typebox").TOptional<import("@sinclair/typebox").TString>;
            password: import("@sinclair/typebox").TOptional<import("@sinclair/typebox").TString>;
            phone: import("@sinclair/typebox").TOptional<import("@sinclair/typebox").TString>;
            userStatus: import("@sinclair/typebox").TOptional<import("@sinclair/typebox").TNumber>;
        }>>;
    }>;
    responses: import("@sinclair/typebox").TObject<{
        200: import("@sinclair/typebox").TObject<{
            id: import("@sinclair/typebox").TOptional<import("@sinclair/typebox").TNumber>;
            username: import("@sinclair/typebox").TOptional<import("@sinclair/typebox").TString>;
            firstName: import("@sinclair/typebox").TOptional<import("@sinclair/typebox").TString>;
            lastName: import("@sinclair/typebox").TOptional<import("@sinclair/typebox").TString>;
            email: import("@sinclair/typebox").TOptional<import("@sinclair/typebox").TString>;
            password: import("@sinclair/typebox").TOptional<import("@sinclair/typebox").TString>;
            phone: import("@sinclair/typebox").TOptional<import("@sinclair/typebox").TString>;
            userStatus: import("@sinclair/typebox").TOptional<import("@sinclair/typebox").TNumber>;
        }>;
        default: import("@sinclair/typebox").TUnknown;
    }>;
}>;
export type get_LoginUser = Static<typeof get_LoginUser>;
export declare const get_LoginUser: import("@sinclair/typebox").TObject<{
    method: import("@sinclair/typebox").TLiteral<"GET">;
    path: import("@sinclair/typebox").TLiteral<"/user/login">;
    requestFormat: import("@sinclair/typebox").TLiteral<"json">;
    parameters: import("@sinclair/typebox").TObject<{
        query: import("@sinclair/typebox").TObject<{
            username: import("@sinclair/typebox").TOptional<import("@sinclair/typebox").TString>;
            password: import("@sinclair/typebox").TOptional<import("@sinclair/typebox").TString>;
        }>;
    }>;
    responses: import("@sinclair/typebox").TObject<{
        200: import("@sinclair/typebox").TString;
        400: import("@sinclair/typebox").TUnknown;
        default: import("@sinclair/typebox").TUnknown;
    }>;
    responseHeaders: import("@sinclair/typebox").TObject<{
        200: import("@sinclair/typebox").TObject<{
            "X-Rate-Limit": import("@sinclair/typebox").TNumber;
            "X-Expires-After": import("@sinclair/typebox").TString;
        }>;
    }>;
}>;
export type get_LogoutUser = Static<typeof get_LogoutUser>;
export declare const get_LogoutUser: import("@sinclair/typebox").TObject<{
    method: import("@sinclair/typebox").TLiteral<"GET">;
    path: import("@sinclair/typebox").TLiteral<"/user/logout">;
    requestFormat: import("@sinclair/typebox").TLiteral<"json">;
    parameters: import("@sinclair/typebox").TNever;
    responses: import("@sinclair/typebox").TObject<{
        200: import("@sinclair/typebox").TUnknown;
        default: import("@sinclair/typebox").TUnknown;
    }>;
}>;
export type get_GetUserByName = Static<typeof get_GetUserByName>;
export declare const get_GetUserByName: import("@sinclair/typebox").TObject<{
    method: import("@sinclair/typebox").TLiteral<"GET">;
    path: import("@sinclair/typebox").TLiteral<"/user/{username}">;
    requestFormat: import("@sinclair/typebox").TLiteral<"json">;
    parameters: import("@sinclair/typebox").TObject<{
        path: import("@sinclair/typebox").TObject<{
            username: import("@sinclair/typebox").TString;
        }>;
    }>;
    responses: import("@sinclair/typebox").TObject<{
        200: import("@sinclair/typebox").TObject<{
            id: import("@sinclair/typebox").TOptional<import("@sinclair/typebox").TNumber>;
            username: import("@sinclair/typebox").TOptional<import("@sinclair/typebox").TString>;
            firstName: import("@sinclair/typebox").TOptional<import("@sinclair/typebox").TString>;
            lastName: import("@sinclair/typebox").TOptional<import("@sinclair/typebox").TString>;
            email: import("@sinclair/typebox").TOptional<import("@sinclair/typebox").TString>;
            password: import("@sinclair/typebox").TOptional<import("@sinclair/typebox").TString>;
            phone: import("@sinclair/typebox").TOptional<import("@sinclair/typebox").TString>;
            userStatus: import("@sinclair/typebox").TOptional<import("@sinclair/typebox").TNumber>;
        }>;
        400: import("@sinclair/typebox").TUnknown;
        404: import("@sinclair/typebox").TUnknown;
        default: import("@sinclair/typebox").TUnknown;
    }>;
}>;
export type put_UpdateUser = Static<typeof put_UpdateUser>;
export declare const put_UpdateUser: import("@sinclair/typebox").TObject<{
    method: import("@sinclair/typebox").TLiteral<"PUT">;
    path: import("@sinclair/typebox").TLiteral<"/user/{username}">;
    requestFormat: import("@sinclair/typebox").TLiteral<"json">;
    parameters: import("@sinclair/typebox").TObject<{
        path: import("@sinclair/typebox").TObject<{
            username: import("@sinclair/typebox").TString;
        }>;
        body: import("@sinclair/typebox").TObject<{
            id: import("@sinclair/typebox").TOptional<import("@sinclair/typebox").TNumber>;
            username: import("@sinclair/typebox").TOptional<import("@sinclair/typebox").TString>;
            firstName: import("@sinclair/typebox").TOptional<import("@sinclair/typebox").TString>;
            lastName: import("@sinclair/typebox").TOptional<import("@sinclair/typebox").TString>;
            email: import("@sinclair/typebox").TOptional<import("@sinclair/typebox").TString>;
            password: import("@sinclair/typebox").TOptional<import("@sinclair/typebox").TString>;
            phone: import("@sinclair/typebox").TOptional<import("@sinclair/typebox").TString>;
            userStatus: import("@sinclair/typebox").TOptional<import("@sinclair/typebox").TNumber>;
        }>;
    }>;
    responses: import("@sinclair/typebox").TObject<{
        200: import("@sinclair/typebox").TUnknown;
        400: import("@sinclair/typebox").TUnknown;
        404: import("@sinclair/typebox").TUnknown;
        default: import("@sinclair/typebox").TUnknown;
    }>;
}>;
export type delete_DeleteUser = Static<typeof delete_DeleteUser>;
export declare const delete_DeleteUser: import("@sinclair/typebox").TObject<{
    method: import("@sinclair/typebox").TLiteral<"DELETE">;
    path: import("@sinclair/typebox").TLiteral<"/user/{username}">;
    requestFormat: import("@sinclair/typebox").TLiteral<"json">;
    parameters: import("@sinclair/typebox").TObject<{
        path: import("@sinclair/typebox").TObject<{
            username: import("@sinclair/typebox").TString;
        }>;
    }>;
    responses: import("@sinclair/typebox").TObject<{
        200: import("@sinclair/typebox").TUnknown;
        400: import("@sinclair/typebox").TUnknown;
        404: import("@sinclair/typebox").TUnknown;
        default: import("@sinclair/typebox").TUnknown;
    }>;
}>;
export declare const EndpointByMethod: {
    put: {
        "/pet": import("@sinclair/typebox").TObject<{
            method: import("@sinclair/typebox").TLiteral<"PUT">;
            path: import("@sinclair/typebox").TLiteral<"/pet">;
            requestFormat: import("@sinclair/typebox").TLiteral<"json">;
            parameters: import("@sinclair/typebox").TObject<{
                body: import("@sinclair/typebox").TObject<{
                    id: import("@sinclair/typebox").TOptional<import("@sinclair/typebox").TUnion<[import("@sinclair/typebox").TNumber, import("@sinclair/typebox").TUndefined]>>;
                    name: import("@sinclair/typebox").TString;
                    category: import("@sinclair/typebox").TOptional<import("@sinclair/typebox").TUnion<[import("@sinclair/typebox").TObject<{
                        id: import("@sinclair/typebox").TOptional<import("@sinclair/typebox").TNumber>;
                        name: import("@sinclair/typebox").TOptional<import("@sinclair/typebox").TString>;
                    }>, import("@sinclair/typebox").TUndefined]>>;
                    photoUrls: import("@sinclair/typebox").TArray<import("@sinclair/typebox").TString>;
                    tags: import("@sinclair/typebox").TOptional<import("@sinclair/typebox").TUnion<[import("@sinclair/typebox").TArray<import("@sinclair/typebox").TObject<{
                        id: import("@sinclair/typebox").TOptional<import("@sinclair/typebox").TNumber>;
                        name: import("@sinclair/typebox").TOptional<import("@sinclair/typebox").TString>;
                    }>>, import("@sinclair/typebox").TUndefined]>>;
                    status: import("@sinclair/typebox").TOptional<import("@sinclair/typebox").TUnion<[import("@sinclair/typebox").TUnion<[import("@sinclair/typebox").TLiteral<"available">, import("@sinclair/typebox").TLiteral<"pending">, import("@sinclair/typebox").TLiteral<"sold">]>, import("@sinclair/typebox").TUndefined]>>;
                }>;
            }>;
            responses: import("@sinclair/typebox").TObject<{
                200: import("@sinclair/typebox").TObject<{
                    id: import("@sinclair/typebox").TOptional<import("@sinclair/typebox").TUnion<[import("@sinclair/typebox").TNumber, import("@sinclair/typebox").TUndefined]>>;
                    name: import("@sinclair/typebox").TString;
                    category: import("@sinclair/typebox").TOptional<import("@sinclair/typebox").TUnion<[import("@sinclair/typebox").TObject<{
                        id: import("@sinclair/typebox").TOptional<import("@sinclair/typebox").TNumber>;
                        name: import("@sinclair/typebox").TOptional<import("@sinclair/typebox").TString>;
                    }>, import("@sinclair/typebox").TUndefined]>>;
                    photoUrls: import("@sinclair/typebox").TArray<import("@sinclair/typebox").TString>;
                    tags: import("@sinclair/typebox").TOptional<import("@sinclair/typebox").TUnion<[import("@sinclair/typebox").TArray<import("@sinclair/typebox").TObject<{
                        id: import("@sinclair/typebox").TOptional<import("@sinclair/typebox").TNumber>;
                        name: import("@sinclair/typebox").TOptional<import("@sinclair/typebox").TString>;
                    }>>, import("@sinclair/typebox").TUndefined]>>;
                    status: import("@sinclair/typebox").TOptional<import("@sinclair/typebox").TUnion<[import("@sinclair/typebox").TUnion<[import("@sinclair/typebox").TLiteral<"available">, import("@sinclair/typebox").TLiteral<"pending">, import("@sinclair/typebox").TLiteral<"sold">]>, import("@sinclair/typebox").TUndefined]>>;
                }>;
                400: import("@sinclair/typebox").TUnknown;
                404: import("@sinclair/typebox").TUnknown;
                422: import("@sinclair/typebox").TUnknown;
                default: import("@sinclair/typebox").TUnknown;
            }>;
        }>;
        "/user/{username}": import("@sinclair/typebox").TObject<{
            method: import("@sinclair/typebox").TLiteral<"PUT">;
            path: import("@sinclair/typebox").TLiteral<"/user/{username}">;
            requestFormat: import("@sinclair/typebox").TLiteral<"json">;
            parameters: import("@sinclair/typebox").TObject<{
                path: import("@sinclair/typebox").TObject<{
                    username: import("@sinclair/typebox").TString;
                }>;
                body: import("@sinclair/typebox").TObject<{
                    id: import("@sinclair/typebox").TOptional<import("@sinclair/typebox").TNumber>;
                    username: import("@sinclair/typebox").TOptional<import("@sinclair/typebox").TString>;
                    firstName: import("@sinclair/typebox").TOptional<import("@sinclair/typebox").TString>;
                    lastName: import("@sinclair/typebox").TOptional<import("@sinclair/typebox").TString>;
                    email: import("@sinclair/typebox").TOptional<import("@sinclair/typebox").TString>;
                    password: import("@sinclair/typebox").TOptional<import("@sinclair/typebox").TString>;
                    phone: import("@sinclair/typebox").TOptional<import("@sinclair/typebox").TString>;
                    userStatus: import("@sinclair/typebox").TOptional<import("@sinclair/typebox").TNumber>;
                }>;
            }>;
            responses: import("@sinclair/typebox").TObject<{
                200: import("@sinclair/typebox").TUnknown;
                400: import("@sinclair/typebox").TUnknown;
                404: import("@sinclair/typebox").TUnknown;
                default: import("@sinclair/typebox").TUnknown;
            }>;
        }>;
    };
    post: {
        "/pet": import("@sinclair/typebox").TObject<{
            method: import("@sinclair/typebox").TLiteral<"POST">;
            path: import("@sinclair/typebox").TLiteral<"/pet">;
            requestFormat: import("@sinclair/typebox").TLiteral<"json">;
            parameters: import("@sinclair/typebox").TObject<{
                body: import("@sinclair/typebox").TObject<{
                    id: import("@sinclair/typebox").TOptional<import("@sinclair/typebox").TUnion<[import("@sinclair/typebox").TNumber, import("@sinclair/typebox").TUndefined]>>;
                    name: import("@sinclair/typebox").TString;
                    category: import("@sinclair/typebox").TOptional<import("@sinclair/typebox").TUnion<[import("@sinclair/typebox").TObject<{
                        id: import("@sinclair/typebox").TOptional<import("@sinclair/typebox").TNumber>;
                        name: import("@sinclair/typebox").TOptional<import("@sinclair/typebox").TString>;
                    }>, import("@sinclair/typebox").TUndefined]>>;
                    photoUrls: import("@sinclair/typebox").TArray<import("@sinclair/typebox").TString>;
                    tags: import("@sinclair/typebox").TOptional<import("@sinclair/typebox").TUnion<[import("@sinclair/typebox").TArray<import("@sinclair/typebox").TObject<{
                        id: import("@sinclair/typebox").TOptional<import("@sinclair/typebox").TNumber>;
                        name: import("@sinclair/typebox").TOptional<import("@sinclair/typebox").TString>;
                    }>>, import("@sinclair/typebox").TUndefined]>>;
                    status: import("@sinclair/typebox").TOptional<import("@sinclair/typebox").TUnion<[import("@sinclair/typebox").TUnion<[import("@sinclair/typebox").TLiteral<"available">, import("@sinclair/typebox").TLiteral<"pending">, import("@sinclair/typebox").TLiteral<"sold">]>, import("@sinclair/typebox").TUndefined]>>;
                }>;
            }>;
            responses: import("@sinclair/typebox").TObject<{
                200: import("@sinclair/typebox").TObject<{
                    id: import("@sinclair/typebox").TOptional<import("@sinclair/typebox").TUnion<[import("@sinclair/typebox").TNumber, import("@sinclair/typebox").TUndefined]>>;
                    name: import("@sinclair/typebox").TString;
                    category: import("@sinclair/typebox").TOptional<import("@sinclair/typebox").TUnion<[import("@sinclair/typebox").TObject<{
                        id: import("@sinclair/typebox").TOptional<import("@sinclair/typebox").TNumber>;
                        name: import("@sinclair/typebox").TOptional<import("@sinclair/typebox").TString>;
                    }>, import("@sinclair/typebox").TUndefined]>>;
                    photoUrls: import("@sinclair/typebox").TArray<import("@sinclair/typebox").TString>;
                    tags: import("@sinclair/typebox").TOptional<import("@sinclair/typebox").TUnion<[import("@sinclair/typebox").TArray<import("@sinclair/typebox").TObject<{
                        id: import("@sinclair/typebox").TOptional<import("@sinclair/typebox").TNumber>;
                        name: import("@sinclair/typebox").TOptional<import("@sinclair/typebox").TString>;
                    }>>, import("@sinclair/typebox").TUndefined]>>;
                    status: import("@sinclair/typebox").TOptional<import("@sinclair/typebox").TUnion<[import("@sinclair/typebox").TUnion<[import("@sinclair/typebox").TLiteral<"available">, import("@sinclair/typebox").TLiteral<"pending">, import("@sinclair/typebox").TLiteral<"sold">]>, import("@sinclair/typebox").TUndefined]>>;
                }>;
                400: import("@sinclair/typebox").TUnknown;
                422: import("@sinclair/typebox").TUnknown;
                default: import("@sinclair/typebox").TUnknown;
            }>;
        }>;
        "/pet/{petId}": import("@sinclair/typebox").TObject<{
            method: import("@sinclair/typebox").TLiteral<"POST">;
            path: import("@sinclair/typebox").TLiteral<"/pet/{petId}">;
            requestFormat: import("@sinclair/typebox").TLiteral<"json">;
            parameters: import("@sinclair/typebox").TObject<{
                query: import("@sinclair/typebox").TObject<{
                    name: import("@sinclair/typebox").TOptional<import("@sinclair/typebox").TString>;
                    status: import("@sinclair/typebox").TOptional<import("@sinclair/typebox").TString>;
                }>;
                path: import("@sinclair/typebox").TObject<{
                    petId: import("@sinclair/typebox").TNumber;
                }>;
            }>;
            responses: import("@sinclair/typebox").TObject<{
                200: import("@sinclair/typebox").TObject<{
                    id: import("@sinclair/typebox").TOptional<import("@sinclair/typebox").TUnion<[import("@sinclair/typebox").TNumber, import("@sinclair/typebox").TUndefined]>>;
                    name: import("@sinclair/typebox").TString;
                    category: import("@sinclair/typebox").TOptional<import("@sinclair/typebox").TUnion<[import("@sinclair/typebox").TObject<{
                        id: import("@sinclair/typebox").TOptional<import("@sinclair/typebox").TNumber>;
                        name: import("@sinclair/typebox").TOptional<import("@sinclair/typebox").TString>;
                    }>, import("@sinclair/typebox").TUndefined]>>;
                    photoUrls: import("@sinclair/typebox").TArray<import("@sinclair/typebox").TString>;
                    tags: import("@sinclair/typebox").TOptional<import("@sinclair/typebox").TUnion<[import("@sinclair/typebox").TArray<import("@sinclair/typebox").TObject<{
                        id: import("@sinclair/typebox").TOptional<import("@sinclair/typebox").TNumber>;
                        name: import("@sinclair/typebox").TOptional<import("@sinclair/typebox").TString>;
                    }>>, import("@sinclair/typebox").TUndefined]>>;
                    status: import("@sinclair/typebox").TOptional<import("@sinclair/typebox").TUnion<[import("@sinclair/typebox").TUnion<[import("@sinclair/typebox").TLiteral<"available">, import("@sinclair/typebox").TLiteral<"pending">, import("@sinclair/typebox").TLiteral<"sold">]>, import("@sinclair/typebox").TUndefined]>>;
                }>;
                400: import("@sinclair/typebox").TUnknown;
                default: import("@sinclair/typebox").TUnknown;
            }>;
        }>;
        "/pet/{petId}/uploadImage": import("@sinclair/typebox").TObject<{
            method: import("@sinclair/typebox").TLiteral<"POST">;
            path: import("@sinclair/typebox").TLiteral<"/pet/{petId}/uploadImage">;
            requestFormat: import("@sinclair/typebox").TLiteral<"binary">;
            parameters: import("@sinclair/typebox").TObject<{
                query: import("@sinclair/typebox").TObject<{
                    additionalMetadata: import("@sinclair/typebox").TOptional<import("@sinclair/typebox").TString>;
                }>;
                path: import("@sinclair/typebox").TObject<{
                    petId: import("@sinclair/typebox").TNumber;
                }>;
                body: import("@sinclair/typebox").TString;
            }>;
            responses: import("@sinclair/typebox").TObject<{
                200: import("@sinclair/typebox").TObject<{
                    code: import("@sinclair/typebox").TOptional<import("@sinclair/typebox").TNumber>;
                    type: import("@sinclair/typebox").TOptional<import("@sinclair/typebox").TString>;
                    message: import("@sinclair/typebox").TOptional<import("@sinclair/typebox").TString>;
                }>;
                400: import("@sinclair/typebox").TUnknown;
                404: import("@sinclair/typebox").TUnknown;
                default: import("@sinclair/typebox").TUnknown;
            }>;
        }>;
        "/store/order": import("@sinclair/typebox").TObject<{
            method: import("@sinclair/typebox").TLiteral<"POST">;
            path: import("@sinclair/typebox").TLiteral<"/store/order">;
            requestFormat: import("@sinclair/typebox").TLiteral<"json">;
            parameters: import("@sinclair/typebox").TObject<{
                body: import("@sinclair/typebox").TObject<{
                    id: import("@sinclair/typebox").TOptional<import("@sinclair/typebox").TNumber>;
                    petId: import("@sinclair/typebox").TOptional<import("@sinclair/typebox").TNumber>;
                    quantity: import("@sinclair/typebox").TOptional<import("@sinclair/typebox").TNumber>;
                    shipDate: import("@sinclair/typebox").TOptional<import("@sinclair/typebox").TString>;
                    status: import("@sinclair/typebox").TOptional<import("@sinclair/typebox").TUnion<[import("@sinclair/typebox").TLiteral<"placed">, import("@sinclair/typebox").TLiteral<"approved">, import("@sinclair/typebox").TLiteral<"delivered">]>>;
                    complete: import("@sinclair/typebox").TOptional<import("@sinclair/typebox").TBoolean>;
                }>;
            }>;
            responses: import("@sinclair/typebox").TObject<{
                200: import("@sinclair/typebox").TObject<{
                    id: import("@sinclair/typebox").TOptional<import("@sinclair/typebox").TNumber>;
                    petId: import("@sinclair/typebox").TOptional<import("@sinclair/typebox").TNumber>;
                    quantity: import("@sinclair/typebox").TOptional<import("@sinclair/typebox").TNumber>;
                    shipDate: import("@sinclair/typebox").TOptional<import("@sinclair/typebox").TString>;
                    status: import("@sinclair/typebox").TOptional<import("@sinclair/typebox").TUnion<[import("@sinclair/typebox").TLiteral<"placed">, import("@sinclair/typebox").TLiteral<"approved">, import("@sinclair/typebox").TLiteral<"delivered">]>>;
                    complete: import("@sinclair/typebox").TOptional<import("@sinclair/typebox").TBoolean>;
                }>;
                400: import("@sinclair/typebox").TUnknown;
                422: import("@sinclair/typebox").TUnknown;
                default: import("@sinclair/typebox").TUnknown;
            }>;
        }>;
        "/user": import("@sinclair/typebox").TObject<{
            method: import("@sinclair/typebox").TLiteral<"POST">;
            path: import("@sinclair/typebox").TLiteral<"/user">;
            requestFormat: import("@sinclair/typebox").TLiteral<"json">;
            parameters: import("@sinclair/typebox").TObject<{
                body: import("@sinclair/typebox").TObject<{
                    id: import("@sinclair/typebox").TOptional<import("@sinclair/typebox").TNumber>;
                    username: import("@sinclair/typebox").TOptional<import("@sinclair/typebox").TString>;
                    firstName: import("@sinclair/typebox").TOptional<import("@sinclair/typebox").TString>;
                    lastName: import("@sinclair/typebox").TOptional<import("@sinclair/typebox").TString>;
                    email: import("@sinclair/typebox").TOptional<import("@sinclair/typebox").TString>;
                    password: import("@sinclair/typebox").TOptional<import("@sinclair/typebox").TString>;
                    phone: import("@sinclair/typebox").TOptional<import("@sinclair/typebox").TString>;
                    userStatus: import("@sinclair/typebox").TOptional<import("@sinclair/typebox").TNumber>;
                }>;
            }>;
            responses: import("@sinclair/typebox").TObject<{
                200: import("@sinclair/typebox").TObject<{
                    id: import("@sinclair/typebox").TOptional<import("@sinclair/typebox").TNumber>;
                    username: import("@sinclair/typebox").TOptional<import("@sinclair/typebox").TString>;
                    firstName: import("@sinclair/typebox").TOptional<import("@sinclair/typebox").TString>;
                    lastName: import("@sinclair/typebox").TOptional<import("@sinclair/typebox").TString>;
                    email: import("@sinclair/typebox").TOptional<import("@sinclair/typebox").TString>;
                    password: import("@sinclair/typebox").TOptional<import("@sinclair/typebox").TString>;
                    phone: import("@sinclair/typebox").TOptional<import("@sinclair/typebox").TString>;
                    userStatus: import("@sinclair/typebox").TOptional<import("@sinclair/typebox").TNumber>;
                }>;
                default: import("@sinclair/typebox").TUnknown;
            }>;
        }>;
        "/user/createWithList": import("@sinclair/typebox").TObject<{
            method: import("@sinclair/typebox").TLiteral<"POST">;
            path: import("@sinclair/typebox").TLiteral<"/user/createWithList">;
            requestFormat: import("@sinclair/typebox").TLiteral<"json">;
            parameters: import("@sinclair/typebox").TObject<{
                body: import("@sinclair/typebox").TArray<import("@sinclair/typebox").TObject<{
                    id: import("@sinclair/typebox").TOptional<import("@sinclair/typebox").TNumber>;
                    username: import("@sinclair/typebox").TOptional<import("@sinclair/typebox").TString>;
                    firstName: import("@sinclair/typebox").TOptional<import("@sinclair/typebox").TString>;
                    lastName: import("@sinclair/typebox").TOptional<import("@sinclair/typebox").TString>;
                    email: import("@sinclair/typebox").TOptional<import("@sinclair/typebox").TString>;
                    password: import("@sinclair/typebox").TOptional<import("@sinclair/typebox").TString>;
                    phone: import("@sinclair/typebox").TOptional<import("@sinclair/typebox").TString>;
                    userStatus: import("@sinclair/typebox").TOptional<import("@sinclair/typebox").TNumber>;
                }>>;
            }>;
            responses: import("@sinclair/typebox").TObject<{
                200: import("@sinclair/typebox").TObject<{
                    id: import("@sinclair/typebox").TOptional<import("@sinclair/typebox").TNumber>;
                    username: import("@sinclair/typebox").TOptional<import("@sinclair/typebox").TString>;
                    firstName: import("@sinclair/typebox").TOptional<import("@sinclair/typebox").TString>;
                    lastName: import("@sinclair/typebox").TOptional<import("@sinclair/typebox").TString>;
                    email: import("@sinclair/typebox").TOptional<import("@sinclair/typebox").TString>;
                    password: import("@sinclair/typebox").TOptional<import("@sinclair/typebox").TString>;
                    phone: import("@sinclair/typebox").TOptional<import("@sinclair/typebox").TString>;
                    userStatus: import("@sinclair/typebox").TOptional<import("@sinclair/typebox").TNumber>;
                }>;
                default: import("@sinclair/typebox").TUnknown;
            }>;
        }>;
    };
    get: {
        "/pet/findByStatus": import("@sinclair/typebox").TObject<{
            method: import("@sinclair/typebox").TLiteral<"GET">;
            path: import("@sinclair/typebox").TLiteral<"/pet/findByStatus">;
            requestFormat: import("@sinclair/typebox").TLiteral<"json">;
            parameters: import("@sinclair/typebox").TObject<{
                query: import("@sinclair/typebox").TObject<{
                    status: import("@sinclair/typebox").TUnion<[import("@sinclair/typebox").TLiteral<"available">, import("@sinclair/typebox").TLiteral<"pending">, import("@sinclair/typebox").TLiteral<"sold">]>;
                }>;
            }>;
            responses: import("@sinclair/typebox").TObject<{
                200: import("@sinclair/typebox").TArray<import("@sinclair/typebox").TObject<{
                    id: import("@sinclair/typebox").TOptional<import("@sinclair/typebox").TUnion<[import("@sinclair/typebox").TNumber, import("@sinclair/typebox").TUndefined]>>;
                    name: import("@sinclair/typebox").TString;
                    category: import("@sinclair/typebox").TOptional<import("@sinclair/typebox").TUnion<[import("@sinclair/typebox").TObject<{
                        id: import("@sinclair/typebox").TOptional<import("@sinclair/typebox").TNumber>;
                        name: import("@sinclair/typebox").TOptional<import("@sinclair/typebox").TString>;
                    }>, import("@sinclair/typebox").TUndefined]>>;
                    photoUrls: import("@sinclair/typebox").TArray<import("@sinclair/typebox").TString>;
                    tags: import("@sinclair/typebox").TOptional<import("@sinclair/typebox").TUnion<[import("@sinclair/typebox").TArray<import("@sinclair/typebox").TObject<{
                        id: import("@sinclair/typebox").TOptional<import("@sinclair/typebox").TNumber>;
                        name: import("@sinclair/typebox").TOptional<import("@sinclair/typebox").TString>;
                    }>>, import("@sinclair/typebox").TUndefined]>>;
                    status: import("@sinclair/typebox").TOptional<import("@sinclair/typebox").TUnion<[import("@sinclair/typebox").TUnion<[import("@sinclair/typebox").TLiteral<"available">, import("@sinclair/typebox").TLiteral<"pending">, import("@sinclair/typebox").TLiteral<"sold">]>, import("@sinclair/typebox").TUndefined]>>;
                }>>;
                400: import("@sinclair/typebox").TUnknown;
                default: import("@sinclair/typebox").TUnknown;
            }>;
        }>;
        "/pet/findByTags": import("@sinclair/typebox").TObject<{
            method: import("@sinclair/typebox").TLiteral<"GET">;
            path: import("@sinclair/typebox").TLiteral<"/pet/findByTags">;
            requestFormat: import("@sinclair/typebox").TLiteral<"json">;
            parameters: import("@sinclair/typebox").TObject<{
                query: import("@sinclair/typebox").TObject<{
                    tags: import("@sinclair/typebox").TArray<import("@sinclair/typebox").TString>;
                }>;
            }>;
            responses: import("@sinclair/typebox").TObject<{
                200: import("@sinclair/typebox").TArray<import("@sinclair/typebox").TObject<{
                    id: import("@sinclair/typebox").TOptional<import("@sinclair/typebox").TUnion<[import("@sinclair/typebox").TNumber, import("@sinclair/typebox").TUndefined]>>;
                    name: import("@sinclair/typebox").TString;
                    category: import("@sinclair/typebox").TOptional<import("@sinclair/typebox").TUnion<[import("@sinclair/typebox").TObject<{
                        id: import("@sinclair/typebox").TOptional<import("@sinclair/typebox").TNumber>;
                        name: import("@sinclair/typebox").TOptional<import("@sinclair/typebox").TString>;
                    }>, import("@sinclair/typebox").TUndefined]>>;
                    photoUrls: import("@sinclair/typebox").TArray<import("@sinclair/typebox").TString>;
                    tags: import("@sinclair/typebox").TOptional<import("@sinclair/typebox").TUnion<[import("@sinclair/typebox").TArray<import("@sinclair/typebox").TObject<{
                        id: import("@sinclair/typebox").TOptional<import("@sinclair/typebox").TNumber>;
                        name: import("@sinclair/typebox").TOptional<import("@sinclair/typebox").TString>;
                    }>>, import("@sinclair/typebox").TUndefined]>>;
                    status: import("@sinclair/typebox").TOptional<import("@sinclair/typebox").TUnion<[import("@sinclair/typebox").TUnion<[import("@sinclair/typebox").TLiteral<"available">, import("@sinclair/typebox").TLiteral<"pending">, import("@sinclair/typebox").TLiteral<"sold">]>, import("@sinclair/typebox").TUndefined]>>;
                }>>;
                400: import("@sinclair/typebox").TUnknown;
                default: import("@sinclair/typebox").TUnknown;
            }>;
        }>;
        "/pet/{petId}": import("@sinclair/typebox").TObject<{
            method: import("@sinclair/typebox").TLiteral<"GET">;
            path: import("@sinclair/typebox").TLiteral<"/pet/{petId}">;
            requestFormat: import("@sinclair/typebox").TLiteral<"json">;
            parameters: import("@sinclair/typebox").TObject<{
                path: import("@sinclair/typebox").TObject<{
                    petId: import("@sinclair/typebox").TNumber;
                }>;
            }>;
            responses: import("@sinclair/typebox").TObject<{
                200: import("@sinclair/typebox").TObject<{
                    id: import("@sinclair/typebox").TOptional<import("@sinclair/typebox").TUnion<[import("@sinclair/typebox").TNumber, import("@sinclair/typebox").TUndefined]>>;
                    name: import("@sinclair/typebox").TString;
                    category: import("@sinclair/typebox").TOptional<import("@sinclair/typebox").TUnion<[import("@sinclair/typebox").TObject<{
                        id: import("@sinclair/typebox").TOptional<import("@sinclair/typebox").TNumber>;
                        name: import("@sinclair/typebox").TOptional<import("@sinclair/typebox").TString>;
                    }>, import("@sinclair/typebox").TUndefined]>>;
                    photoUrls: import("@sinclair/typebox").TArray<import("@sinclair/typebox").TString>;
                    tags: import("@sinclair/typebox").TOptional<import("@sinclair/typebox").TUnion<[import("@sinclair/typebox").TArray<import("@sinclair/typebox").TObject<{
                        id: import("@sinclair/typebox").TOptional<import("@sinclair/typebox").TNumber>;
                        name: import("@sinclair/typebox").TOptional<import("@sinclair/typebox").TString>;
                    }>>, import("@sinclair/typebox").TUndefined]>>;
                    status: import("@sinclair/typebox").TOptional<import("@sinclair/typebox").TUnion<[import("@sinclair/typebox").TUnion<[import("@sinclair/typebox").TLiteral<"available">, import("@sinclair/typebox").TLiteral<"pending">, import("@sinclair/typebox").TLiteral<"sold">]>, import("@sinclair/typebox").TUndefined]>>;
                }>;
                400: import("@sinclair/typebox").TUnknown;
                404: import("@sinclair/typebox").TUnknown;
                default: import("@sinclair/typebox").TUnknown;
            }>;
        }>;
        "/store/inventory": import("@sinclair/typebox").TObject<{
            method: import("@sinclair/typebox").TLiteral<"GET">;
            path: import("@sinclair/typebox").TLiteral<"/store/inventory">;
            requestFormat: import("@sinclair/typebox").TLiteral<"json">;
            parameters: import("@sinclair/typebox").TNever;
            responses: import("@sinclair/typebox").TObject<{
                200: import("@sinclair/typebox").TRecord<import("@sinclair/typebox").TString, import("@sinclair/typebox").TNumber>;
                default: import("@sinclair/typebox").TUnknown;
            }>;
        }>;
        "/store/order/{orderId}": import("@sinclair/typebox").TObject<{
            method: import("@sinclair/typebox").TLiteral<"GET">;
            path: import("@sinclair/typebox").TLiteral<"/store/order/{orderId}">;
            requestFormat: import("@sinclair/typebox").TLiteral<"json">;
            parameters: import("@sinclair/typebox").TObject<{
                path: import("@sinclair/typebox").TObject<{
                    orderId: import("@sinclair/typebox").TNumber;
                }>;
            }>;
            responses: import("@sinclair/typebox").TObject<{
                200: import("@sinclair/typebox").TObject<{
                    id: import("@sinclair/typebox").TOptional<import("@sinclair/typebox").TNumber>;
                    petId: import("@sinclair/typebox").TOptional<import("@sinclair/typebox").TNumber>;
                    quantity: import("@sinclair/typebox").TOptional<import("@sinclair/typebox").TNumber>;
                    shipDate: import("@sinclair/typebox").TOptional<import("@sinclair/typebox").TString>;
                    status: import("@sinclair/typebox").TOptional<import("@sinclair/typebox").TUnion<[import("@sinclair/typebox").TLiteral<"placed">, import("@sinclair/typebox").TLiteral<"approved">, import("@sinclair/typebox").TLiteral<"delivered">]>>;
                    complete: import("@sinclair/typebox").TOptional<import("@sinclair/typebox").TBoolean>;
                }>;
                400: import("@sinclair/typebox").TUnknown;
                404: import("@sinclair/typebox").TUnknown;
                default: import("@sinclair/typebox").TUnknown;
            }>;
        }>;
        "/user/login": import("@sinclair/typebox").TObject<{
            method: import("@sinclair/typebox").TLiteral<"GET">;
            path: import("@sinclair/typebox").TLiteral<"/user/login">;
            requestFormat: import("@sinclair/typebox").TLiteral<"json">;
            parameters: import("@sinclair/typebox").TObject<{
                query: import("@sinclair/typebox").TObject<{
                    username: import("@sinclair/typebox").TOptional<import("@sinclair/typebox").TString>;
                    password: import("@sinclair/typebox").TOptional<import("@sinclair/typebox").TString>;
                }>;
            }>;
            responses: import("@sinclair/typebox").TObject<{
                200: import("@sinclair/typebox").TString;
                400: import("@sinclair/typebox").TUnknown;
                default: import("@sinclair/typebox").TUnknown;
            }>;
            responseHeaders: import("@sinclair/typebox").TObject<{
                200: import("@sinclair/typebox").TObject<{
                    "X-Rate-Limit": import("@sinclair/typebox").TNumber;
                    "X-Expires-After": import("@sinclair/typebox").TString;
                }>;
            }>;
        }>;
        "/user/logout": import("@sinclair/typebox").TObject<{
            method: import("@sinclair/typebox").TLiteral<"GET">;
            path: import("@sinclair/typebox").TLiteral<"/user/logout">;
            requestFormat: import("@sinclair/typebox").TLiteral<"json">;
            parameters: import("@sinclair/typebox").TNever;
            responses: import("@sinclair/typebox").TObject<{
                200: import("@sinclair/typebox").TUnknown;
                default: import("@sinclair/typebox").TUnknown;
            }>;
        }>;
        "/user/{username}": import("@sinclair/typebox").TObject<{
            method: import("@sinclair/typebox").TLiteral<"GET">;
            path: import("@sinclair/typebox").TLiteral<"/user/{username}">;
            requestFormat: import("@sinclair/typebox").TLiteral<"json">;
            parameters: import("@sinclair/typebox").TObject<{
                path: import("@sinclair/typebox").TObject<{
                    username: import("@sinclair/typebox").TString;
                }>;
            }>;
            responses: import("@sinclair/typebox").TObject<{
                200: import("@sinclair/typebox").TObject<{
                    id: import("@sinclair/typebox").TOptional<import("@sinclair/typebox").TNumber>;
                    username: import("@sinclair/typebox").TOptional<import("@sinclair/typebox").TString>;
                    firstName: import("@sinclair/typebox").TOptional<import("@sinclair/typebox").TString>;
                    lastName: import("@sinclair/typebox").TOptional<import("@sinclair/typebox").TString>;
                    email: import("@sinclair/typebox").TOptional<import("@sinclair/typebox").TString>;
                    password: import("@sinclair/typebox").TOptional<import("@sinclair/typebox").TString>;
                    phone: import("@sinclair/typebox").TOptional<import("@sinclair/typebox").TString>;
                    userStatus: import("@sinclair/typebox").TOptional<import("@sinclair/typebox").TNumber>;
                }>;
                400: import("@sinclair/typebox").TUnknown;
                404: import("@sinclair/typebox").TUnknown;
                default: import("@sinclair/typebox").TUnknown;
            }>;
        }>;
    };
    delete: {
        "/pet/{petId}": import("@sinclair/typebox").TObject<{
            method: import("@sinclair/typebox").TLiteral<"DELETE">;
            path: import("@sinclair/typebox").TLiteral<"/pet/{petId}">;
            requestFormat: import("@sinclair/typebox").TLiteral<"json">;
            parameters: import("@sinclair/typebox").TObject<{
                path: import("@sinclair/typebox").TObject<{
                    petId: import("@sinclair/typebox").TNumber;
                }>;
                header: import("@sinclair/typebox").TObject<{
                    api_key: import("@sinclair/typebox").TOptional<import("@sinclair/typebox").TString>;
                }>;
            }>;
            responses: import("@sinclair/typebox").TObject<{
                200: import("@sinclair/typebox").TUnknown;
                400: import("@sinclair/typebox").TUnknown;
                default: import("@sinclair/typebox").TUnknown;
            }>;
        }>;
        "/store/order/{orderId}": import("@sinclair/typebox").TObject<{
            method: import("@sinclair/typebox").TLiteral<"DELETE">;
            path: import("@sinclair/typebox").TLiteral<"/store/order/{orderId}">;
            requestFormat: import("@sinclair/typebox").TLiteral<"json">;
            parameters: import("@sinclair/typebox").TObject<{
                path: import("@sinclair/typebox").TObject<{
                    orderId: import("@sinclair/typebox").TNumber;
                }>;
            }>;
            responses: import("@sinclair/typebox").TObject<{
                200: import("@sinclair/typebox").TUnknown;
                400: import("@sinclair/typebox").TUnknown;
                404: import("@sinclair/typebox").TUnknown;
                default: import("@sinclair/typebox").TUnknown;
            }>;
        }>;
        "/user/{username}": import("@sinclair/typebox").TObject<{
            method: import("@sinclair/typebox").TLiteral<"DELETE">;
            path: import("@sinclair/typebox").TLiteral<"/user/{username}">;
            requestFormat: import("@sinclair/typebox").TLiteral<"json">;
            parameters: import("@sinclair/typebox").TObject<{
                path: import("@sinclair/typebox").TObject<{
                    username: import("@sinclair/typebox").TString;
                }>;
            }>;
            responses: import("@sinclair/typebox").TObject<{
                200: import("@sinclair/typebox").TUnknown;
                400: import("@sinclair/typebox").TUnknown;
                404: import("@sinclair/typebox").TUnknown;
                default: import("@sinclair/typebox").TUnknown;
            }>;
        }>;
    };
};
export type EndpointByMethod = typeof EndpointByMethod;
export type PutEndpoints = EndpointByMethod["put"];
export type PostEndpoints = EndpointByMethod["post"];
export type GetEndpoints = EndpointByMethod["get"];
export type DeleteEndpoints = EndpointByMethod["delete"];
export type EndpointParameters = {
    body?: unknown;
    query?: Record<string, unknown>;
    header?: Record<string, unknown>;
    path?: Record<string, unknown>;
};
export type MutationMethod = "post" | "put" | "patch" | "delete";
export type Method = "get" | "head" | "options" | MutationMethod;
type RequestFormat = "json" | "form-data" | "form-url" | "binary" | "text";
export type DefaultEndpoint = {
    parameters?: EndpointParameters | undefined;
    responses?: Record<string, unknown>;
    responseHeaders?: Record<string, unknown>;
};
export type Endpoint<TConfig extends DefaultEndpoint = DefaultEndpoint> = {
    operationId: string;
    method: Method;
    path: string;
    requestFormat: RequestFormat;
    parameters?: TConfig["parameters"];
    meta: {
        alias: string;
        hasParameters: boolean;
        areParametersRequired: boolean;
    };
    responses?: TConfig["responses"];
    responseHeaders?: TConfig["responseHeaders"];
};
export interface Fetcher {
    decodePathParams?: (path: string, pathParams: Record<string, string>) => string;
    encodeSearchParams?: (searchParams: Record<string, unknown> | undefined) => URLSearchParams;
    fetch: (input: {
        method: Method;
        url: URL;
        urlSearchParams?: URLSearchParams | undefined;
        parameters?: EndpointParameters | undefined;
        path: string;
        overrides?: RequestInit;
        throwOnStatusError?: boolean;
    }) => Promise<Response>;
    parseResponseData?: (response: Response) => Promise<unknown>;
}
export declare const successStatusCodes: readonly [200, 201, 202, 203, 204, 205, 206, 207, 208, 226, 300, 301, 302, 303, 304, 305, 306, 307, 308];
export type SuccessStatusCode = (typeof successStatusCodes)[number];
export declare const errorStatusCodes: readonly [400, 401, 402, 403, 404, 405, 406, 407, 408, 409, 410, 411, 412, 413, 414, 415, 416, 417, 418, 421, 422, 423, 424, 425, 426, 428, 429, 431, 451, 500, 501, 502, 503, 504, 505, 506, 507, 508, 510, 511];
export type ErrorStatusCode = (typeof errorStatusCodes)[number];
export interface TypedHeaders<TypedHeaderValues extends Record<string, string> | unknown> extends Omit<Headers, "append" | "delete" | "get" | "getSetCookie" | "has" | "set" | "forEach"> {
    /** [MDN Reference](https://developer.mozilla.org/docs/Web/API/Headers/append) */
    append: <Name extends Extract<keyof TypedHeaderValues, string> | (string & {})>(name: Name, value: Lowercase<Name> extends keyof TypedHeaderValues ? TypedHeaderValues[Lowercase<Name>] : string) => void;
    /** [MDN Reference](https://developer.mozilla.org/docs/Web/API/Headers/delete) */
    delete: <Name extends Extract<keyof TypedHeaderValues, string> | (string & {})>(name: Name) => void;
    /** [MDN Reference](https://developer.mozilla.org/docs/Web/API/Headers/get) */
    get: <Name extends Extract<keyof TypedHeaderValues, string> | (string & {})>(name: Name) => (Lowercase<Name> extends keyof TypedHeaderValues ? TypedHeaderValues[Lowercase<Name>] : string) | null;
    /** [MDN Reference](https://developer.mozilla.org/docs/Web/API/Headers/getSetCookie) */
    getSetCookie: () => string[];
    /** [MDN Reference](https://developer.mozilla.org/docs/Web/API/Headers/has) */
    has: <Name extends Extract<keyof TypedHeaderValues, string> | (string & {})>(name: Name) => boolean;
    /** [MDN Reference](https://developer.mozilla.org/docs/Web/API/Headers/set) */
    set: <Name extends Extract<keyof TypedHeaderValues, string> | (string & {})>(name: Name, value: Lowercase<Name> extends keyof TypedHeaderValues ? TypedHeaderValues[Lowercase<Name>] : string) => void;
    forEach: (callbackfn: (value: TypedHeaderValues[keyof TypedHeaderValues] | (string & {}), key: Extract<keyof TypedHeaderValues, string> | (string & {}), parent: TypedHeaders<TypedHeaderValues>) => void, thisArg?: any) => void;
}
/** @see https://developer.mozilla.org/en-US/docs/Web/API/Response */
export interface TypedSuccessResponse<TSuccess, TStatusCode, THeaders> extends Omit<Response, "ok" | "status" | "json" | "headers"> {
    ok: true;
    status: TStatusCode;
    headers: never extends THeaders ? Headers : TypedHeaders<THeaders>;
    data: TSuccess;
    /** [MDN Reference](https://developer.mozilla.org/en-US/docs/Web/API/Response/json) */
    json: () => Promise<TSuccess>;
}
/** @see https://developer.mozilla.org/en-US/docs/Web/API/Response */
export interface TypedErrorResponse<TData, TStatusCode, THeaders> extends Omit<Response, "ok" | "status" | "json" | "headers"> {
    ok: false;
    status: TStatusCode;
    headers: never extends THeaders ? Headers : TypedHeaders<THeaders>;
    data: TData;
    /** [MDN Reference](https://developer.mozilla.org/en-US/docs/Web/API/Response/json) */
    json: () => Promise<TData>;
}
export type TypedApiResponse<TAllResponses extends Record<string | number, unknown> = {}, THeaders = {}> = {
    [K in keyof TAllResponses]: K extends string ? K extends `${infer TStatusCode extends number}` ? TStatusCode extends SuccessStatusCode ? TypedSuccessResponse<TAllResponses[K], TStatusCode, K extends keyof THeaders ? THeaders[K] : never> : TypedErrorResponse<TAllResponses[K], TStatusCode, K extends keyof THeaders ? THeaders[K] : never> : never : K extends number ? K extends SuccessStatusCode ? TypedSuccessResponse<TAllResponses[K], K, K extends keyof THeaders ? THeaders[K] : never> : TypedErrorResponse<TAllResponses[K], K, K extends keyof THeaders ? THeaders[K] : never> : never;
}[keyof TAllResponses];
export type SafeApiResponse<TEndpoint> = TEndpoint extends {
    responses: infer TResponses;
} ? TResponses extends Record<string, unknown> ? TypedApiResponse<TResponses, TEndpoint extends {
    responseHeaders: infer THeaders;
} ? THeaders : never> : never : never;
export type InferResponseByStatus<TEndpoint, TStatusCode> = Extract<SafeApiResponse<TEndpoint>, {
    status: TStatusCode;
}>;
export declare class TypedStatusError<TData = unknown> extends Error {
    response: TypedErrorResponse<TData, ErrorStatusCode, unknown>;
    status: number;
    constructor(response: TypedErrorResponse<TData, ErrorStatusCode, unknown>);
}
export declare const GetEndpoints: import("@sinclair/typebox").TObject<{
    '/pet/findByStatus': import("@sinclair/typebox").TObject<{
        parameters: import("@sinclair/typebox").TObject<{
            query: import("@sinclair/typebox").TOptional<import("@sinclair/typebox").TObject<{
                status: import("@sinclair/typebox").TOptional<import("@sinclair/typebox").TUnion<[import("@sinclair/typebox").TLiteral<"available">, import("@sinclair/typebox").TLiteral<"pending">, import("@sinclair/typebox").TLiteral<"sold">]>>;
            }>>;
        }>;
        response: import("@sinclair/typebox").TAny;
    }>;
    '/pet/findByTags': import("@sinclair/typebox").TObject<{
        parameters: import("@sinclair/typebox").TObject<{
            query: import("@sinclair/typebox").TOptional<import("@sinclair/typebox").TObject<{
                tags: import("@sinclair/typebox").TOptional<import("@sinclair/typebox").TArray<import("@sinclair/typebox").TString>>;
            }>>;
        }>;
        response: import("@sinclair/typebox").TAny;
    }>;
    '/pet/{petId}': import("@sinclair/typebox").TObject<{
        parameters: import("@sinclair/typebox").TObject<{
            path: import("@sinclair/typebox").TObject<{
                petId: import("@sinclair/typebox").TString;
            }>;
        }>;
        response: import("@sinclair/typebox").TAny;
    }>;
    '/store/inventory': import("@sinclair/typebox").TObject<{
        parameters: import("@sinclair/typebox").TObject<{}>;
        response: import("@sinclair/typebox").TAny;
    }>;
    '/store/order/{orderId}': import("@sinclair/typebox").TObject<{
        parameters: import("@sinclair/typebox").TObject<{
            path: import("@sinclair/typebox").TObject<{
                orderId: import("@sinclair/typebox").TString;
            }>;
        }>;
        response: import("@sinclair/typebox").TAny;
    }>;
    '/user/login': import("@sinclair/typebox").TObject<{
        parameters: import("@sinclair/typebox").TObject<{
            query: import("@sinclair/typebox").TOptional<import("@sinclair/typebox").TObject<{
                username: import("@sinclair/typebox").TOptional<import("@sinclair/typebox").TString>;
                password: import("@sinclair/typebox").TOptional<import("@sinclair/typebox").TString>;
            }>>;
        }>;
        response: import("@sinclair/typebox").TAny;
    }>;
    '/user/logout': import("@sinclair/typebox").TObject<{
        parameters: import("@sinclair/typebox").TObject<{}>;
        response: import("@sinclair/typebox").TAny;
    }>;
    '/user/{username}': import("@sinclair/typebox").TObject<{
        parameters: import("@sinclair/typebox").TObject<{
            path: import("@sinclair/typebox").TObject<{
                username: import("@sinclair/typebox").TString;
            }>;
        }>;
        response: import("@sinclair/typebox").TAny;
    }>;
}>;
export type GetEndpointsType = {
    [K in keyof Static<typeof GetEndpoints>]: {
        parameters: Static<typeof GetEndpoints>[K]['parameters'];
        response: Static<typeof GetEndpoints>[K]['response'];
    };
};
export declare const PostEndpoints: import("@sinclair/typebox").TObject<{
    '/pet': import("@sinclair/typebox").TObject<{
        parameters: import("@sinclair/typebox").TObject<{
            body: import("@sinclair/typebox").TAny;
        }>;
        response: import("@sinclair/typebox").TAny;
    }>;
    '/pet/{petId}': import("@sinclair/typebox").TObject<{
        parameters: import("@sinclair/typebox").TObject<{
            path: import("@sinclair/typebox").TObject<{
                petId: import("@sinclair/typebox").TString;
            }>;
            query: import("@sinclair/typebox").TOptional<import("@sinclair/typebox").TObject<{
                name: import("@sinclair/typebox").TOptional<import("@sinclair/typebox").TString>;
                status: import("@sinclair/typebox").TOptional<import("@sinclair/typebox").TString>;
            }>>;
        }>;
        response: import("@sinclair/typebox").TAny;
    }>;
    '/pet/{petId}/uploadImage': import("@sinclair/typebox").TObject<{
        parameters: import("@sinclair/typebox").TObject<{
            path: import("@sinclair/typebox").TObject<{
                petId: import("@sinclair/typebox").TString;
            }>;
            query: import("@sinclair/typebox").TOptional<import("@sinclair/typebox").TObject<{
                additionalMetadata: import("@sinclair/typebox").TOptional<import("@sinclair/typebox").TString>;
            }>>;
            body: import("@sinclair/typebox").TAny;
        }>;
        response: import("@sinclair/typebox").TAny;
    }>;
    '/store/order': import("@sinclair/typebox").TObject<{
        parameters: import("@sinclair/typebox").TObject<{
            body: import("@sinclair/typebox").TAny;
        }>;
        response: import("@sinclair/typebox").TAny;
    }>;
    '/user': import("@sinclair/typebox").TObject<{
        parameters: import("@sinclair/typebox").TObject<{
            body: import("@sinclair/typebox").TAny;
        }>;
        response: import("@sinclair/typebox").TAny;
    }>;
    '/user/createWithList': import("@sinclair/typebox").TObject<{
        parameters: import("@sinclair/typebox").TObject<{
            body: import("@sinclair/typebox").TAny;
        }>;
        response: import("@sinclair/typebox").TAny;
    }>;
}>;
export type PostEndpointsType = {
    [K in keyof Static<typeof PostEndpoints>]: {
        parameters: Static<typeof PostEndpoints>[K]['parameters'];
        response: Static<typeof PostEndpoints>[K]['response'];
    };
};
export declare const PutEndpoints: import("@sinclair/typebox").TObject<{
    '/pet': import("@sinclair/typebox").TObject<{
        parameters: import("@sinclair/typebox").TObject<{
            body: import("@sinclair/typebox").TAny;
        }>;
        response: import("@sinclair/typebox").TAny;
    }>;
    '/user/{username}': import("@sinclair/typebox").TObject<{
        parameters: import("@sinclair/typebox").TObject<{
            path: import("@sinclair/typebox").TObject<{
                username: import("@sinclair/typebox").TString;
            }>;
            body: import("@sinclair/typebox").TAny;
        }>;
        response: import("@sinclair/typebox").TAny;
    }>;
}>;
export type PutEndpointsType = {
    [K in keyof Static<typeof PutEndpoints>]: {
        parameters: Static<typeof PutEndpoints>[K]['parameters'];
        response: Static<typeof PutEndpoints>[K]['response'];
    };
};
export declare const DeleteEndpoints: import("@sinclair/typebox").TObject<{
    '/pet/{petId}': import("@sinclair/typebox").TObject<{
        parameters: import("@sinclair/typebox").TObject<{
            path: import("@sinclair/typebox").TObject<{
                petId: import("@sinclair/typebox").TString;
            }>;
        }>;
        response: import("@sinclair/typebox").TAny;
    }>;
    '/store/order/{orderId}': import("@sinclair/typebox").TObject<{
        parameters: import("@sinclair/typebox").TObject<{
            path: import("@sinclair/typebox").TObject<{
                orderId: import("@sinclair/typebox").TString;
            }>;
        }>;
        response: import("@sinclair/typebox").TAny;
    }>;
    '/user/{username}': import("@sinclair/typebox").TObject<{
        parameters: import("@sinclair/typebox").TObject<{
            path: import("@sinclair/typebox").TObject<{
                username: import("@sinclair/typebox").TString;
            }>;
        }>;
        response: import("@sinclair/typebox").TAny;
    }>;
}>;
export type DeleteEndpointsType = {
    [K in keyof Static<typeof DeleteEndpoints>]: {
        parameters: Static<typeof DeleteEndpoints>[K]['parameters'];
        response: Static<typeof DeleteEndpoints>[K]['response'];
    };
};
export declare const updatePet: import("kweri").Endpoint<import("@sinclair/typebox").TObject<{
    body: import("@sinclair/typebox").TAny;
}>, import("@sinclair/typebox").TObject<{
    id: import("@sinclair/typebox").TOptional<import("@sinclair/typebox").TUnion<[import("@sinclair/typebox").TNumber, import("@sinclair/typebox").TUndefined]>>;
    name: import("@sinclair/typebox").TString;
    category: import("@sinclair/typebox").TOptional<import("@sinclair/typebox").TUnion<[import("@sinclair/typebox").TObject<{
        id: import("@sinclair/typebox").TOptional<import("@sinclair/typebox").TNumber>;
        name: import("@sinclair/typebox").TOptional<import("@sinclair/typebox").TString>;
    }>, import("@sinclair/typebox").TUndefined]>>;
    photoUrls: import("@sinclair/typebox").TArray<import("@sinclair/typebox").TString>;
    tags: import("@sinclair/typebox").TOptional<import("@sinclair/typebox").TUnion<[import("@sinclair/typebox").TArray<import("@sinclair/typebox").TObject<{
        id: import("@sinclair/typebox").TOptional<import("@sinclair/typebox").TNumber>;
        name: import("@sinclair/typebox").TOptional<import("@sinclair/typebox").TString>;
    }>>, import("@sinclair/typebox").TUndefined]>>;
    status: import("@sinclair/typebox").TOptional<import("@sinclair/typebox").TUnion<[import("@sinclair/typebox").TUnion<[import("@sinclair/typebox").TLiteral<"available">, import("@sinclair/typebox").TLiteral<"pending">, import("@sinclair/typebox").TLiteral<"sold">]>, import("@sinclair/typebox").TUndefined]>>;
}>>;
export declare const addPet: import("kweri").Endpoint<import("@sinclair/typebox").TObject<{
    body: import("@sinclair/typebox").TAny;
}>, import("@sinclair/typebox").TObject<{
    id: import("@sinclair/typebox").TOptional<import("@sinclair/typebox").TUnion<[import("@sinclair/typebox").TNumber, import("@sinclair/typebox").TUndefined]>>;
    name: import("@sinclair/typebox").TString;
    category: import("@sinclair/typebox").TOptional<import("@sinclair/typebox").TUnion<[import("@sinclair/typebox").TObject<{
        id: import("@sinclair/typebox").TOptional<import("@sinclair/typebox").TNumber>;
        name: import("@sinclair/typebox").TOptional<import("@sinclair/typebox").TString>;
    }>, import("@sinclair/typebox").TUndefined]>>;
    photoUrls: import("@sinclair/typebox").TArray<import("@sinclair/typebox").TString>;
    tags: import("@sinclair/typebox").TOptional<import("@sinclair/typebox").TUnion<[import("@sinclair/typebox").TArray<import("@sinclair/typebox").TObject<{
        id: import("@sinclair/typebox").TOptional<import("@sinclair/typebox").TNumber>;
        name: import("@sinclair/typebox").TOptional<import("@sinclair/typebox").TString>;
    }>>, import("@sinclair/typebox").TUndefined]>>;
    status: import("@sinclair/typebox").TOptional<import("@sinclair/typebox").TUnion<[import("@sinclair/typebox").TUnion<[import("@sinclair/typebox").TLiteral<"available">, import("@sinclair/typebox").TLiteral<"pending">, import("@sinclair/typebox").TLiteral<"sold">]>, import("@sinclair/typebox").TUndefined]>>;
}>>;
export declare const findPetsByStatus: import("kweri").Endpoint<import("@sinclair/typebox").TObject<{
    query: import("@sinclair/typebox").TOptional<import("@sinclair/typebox").TObject<{
        status: import("@sinclair/typebox").TOptional<import("@sinclair/typebox").TUnion<[import("@sinclair/typebox").TLiteral<"available">, import("@sinclair/typebox").TLiteral<"pending">, import("@sinclair/typebox").TLiteral<"sold">]>>;
    }>>;
}>, import("@sinclair/typebox").TArray<import("@sinclair/typebox").TObject<{
    id: import("@sinclair/typebox").TOptional<import("@sinclair/typebox").TUnion<[import("@sinclair/typebox").TNumber, import("@sinclair/typebox").TUndefined]>>;
    name: import("@sinclair/typebox").TString;
    category: import("@sinclair/typebox").TOptional<import("@sinclair/typebox").TUnion<[import("@sinclair/typebox").TObject<{
        id: import("@sinclair/typebox").TOptional<import("@sinclair/typebox").TNumber>;
        name: import("@sinclair/typebox").TOptional<import("@sinclair/typebox").TString>;
    }>, import("@sinclair/typebox").TUndefined]>>;
    photoUrls: import("@sinclair/typebox").TArray<import("@sinclair/typebox").TString>;
    tags: import("@sinclair/typebox").TOptional<import("@sinclair/typebox").TUnion<[import("@sinclair/typebox").TArray<import("@sinclair/typebox").TObject<{
        id: import("@sinclair/typebox").TOptional<import("@sinclair/typebox").TNumber>;
        name: import("@sinclair/typebox").TOptional<import("@sinclair/typebox").TString>;
    }>>, import("@sinclair/typebox").TUndefined]>>;
    status: import("@sinclair/typebox").TOptional<import("@sinclair/typebox").TUnion<[import("@sinclair/typebox").TUnion<[import("@sinclair/typebox").TLiteral<"available">, import("@sinclair/typebox").TLiteral<"pending">, import("@sinclair/typebox").TLiteral<"sold">]>, import("@sinclair/typebox").TUndefined]>>;
}>>>;
export declare const findPetsByTags: import("kweri").Endpoint<import("@sinclair/typebox").TObject<{
    query: import("@sinclair/typebox").TOptional<import("@sinclair/typebox").TObject<{
        tags: import("@sinclair/typebox").TOptional<import("@sinclair/typebox").TArray<import("@sinclair/typebox").TString>>;
    }>>;
}>, import("@sinclair/typebox").TArray<import("@sinclair/typebox").TObject<{
    id: import("@sinclair/typebox").TOptional<import("@sinclair/typebox").TUnion<[import("@sinclair/typebox").TNumber, import("@sinclair/typebox").TUndefined]>>;
    name: import("@sinclair/typebox").TString;
    category: import("@sinclair/typebox").TOptional<import("@sinclair/typebox").TUnion<[import("@sinclair/typebox").TObject<{
        id: import("@sinclair/typebox").TOptional<import("@sinclair/typebox").TNumber>;
        name: import("@sinclair/typebox").TOptional<import("@sinclair/typebox").TString>;
    }>, import("@sinclair/typebox").TUndefined]>>;
    photoUrls: import("@sinclair/typebox").TArray<import("@sinclair/typebox").TString>;
    tags: import("@sinclair/typebox").TOptional<import("@sinclair/typebox").TUnion<[import("@sinclair/typebox").TArray<import("@sinclair/typebox").TObject<{
        id: import("@sinclair/typebox").TOptional<import("@sinclair/typebox").TNumber>;
        name: import("@sinclair/typebox").TOptional<import("@sinclair/typebox").TString>;
    }>>, import("@sinclair/typebox").TUndefined]>>;
    status: import("@sinclair/typebox").TOptional<import("@sinclair/typebox").TUnion<[import("@sinclair/typebox").TUnion<[import("@sinclair/typebox").TLiteral<"available">, import("@sinclair/typebox").TLiteral<"pending">, import("@sinclair/typebox").TLiteral<"sold">]>, import("@sinclair/typebox").TUndefined]>>;
}>>>;
export declare const getPetById: import("kweri").Endpoint<import("@sinclair/typebox").TObject<{
    path: import("@sinclair/typebox").TObject<{
        petId: import("@sinclair/typebox").TString;
    }>;
}>, import("@sinclair/typebox").TObject<{
    id: import("@sinclair/typebox").TOptional<import("@sinclair/typebox").TUnion<[import("@sinclair/typebox").TNumber, import("@sinclair/typebox").TUndefined]>>;
    name: import("@sinclair/typebox").TString;
    category: import("@sinclair/typebox").TOptional<import("@sinclair/typebox").TUnion<[import("@sinclair/typebox").TObject<{
        id: import("@sinclair/typebox").TOptional<import("@sinclair/typebox").TNumber>;
        name: import("@sinclair/typebox").TOptional<import("@sinclair/typebox").TString>;
    }>, import("@sinclair/typebox").TUndefined]>>;
    photoUrls: import("@sinclair/typebox").TArray<import("@sinclair/typebox").TString>;
    tags: import("@sinclair/typebox").TOptional<import("@sinclair/typebox").TUnion<[import("@sinclair/typebox").TArray<import("@sinclair/typebox").TObject<{
        id: import("@sinclair/typebox").TOptional<import("@sinclair/typebox").TNumber>;
        name: import("@sinclair/typebox").TOptional<import("@sinclair/typebox").TString>;
    }>>, import("@sinclair/typebox").TUndefined]>>;
    status: import("@sinclair/typebox").TOptional<import("@sinclair/typebox").TUnion<[import("@sinclair/typebox").TUnion<[import("@sinclair/typebox").TLiteral<"available">, import("@sinclair/typebox").TLiteral<"pending">, import("@sinclair/typebox").TLiteral<"sold">]>, import("@sinclair/typebox").TUndefined]>>;
}>>;
export declare const updatePetWithForm: import("kweri").Endpoint<import("@sinclair/typebox").TObject<{
    path: import("@sinclair/typebox").TObject<{
        petId: import("@sinclair/typebox").TString;
    }>;
    query: import("@sinclair/typebox").TOptional<import("@sinclair/typebox").TObject<{
        name: import("@sinclair/typebox").TOptional<import("@sinclair/typebox").TString>;
        status: import("@sinclair/typebox").TOptional<import("@sinclair/typebox").TString>;
    }>>;
}>, import("@sinclair/typebox").TObject<{
    id: import("@sinclair/typebox").TOptional<import("@sinclair/typebox").TUnion<[import("@sinclair/typebox").TNumber, import("@sinclair/typebox").TUndefined]>>;
    name: import("@sinclair/typebox").TString;
    category: import("@sinclair/typebox").TOptional<import("@sinclair/typebox").TUnion<[import("@sinclair/typebox").TObject<{
        id: import("@sinclair/typebox").TOptional<import("@sinclair/typebox").TNumber>;
        name: import("@sinclair/typebox").TOptional<import("@sinclair/typebox").TString>;
    }>, import("@sinclair/typebox").TUndefined]>>;
    photoUrls: import("@sinclair/typebox").TArray<import("@sinclair/typebox").TString>;
    tags: import("@sinclair/typebox").TOptional<import("@sinclair/typebox").TUnion<[import("@sinclair/typebox").TArray<import("@sinclair/typebox").TObject<{
        id: import("@sinclair/typebox").TOptional<import("@sinclair/typebox").TNumber>;
        name: import("@sinclair/typebox").TOptional<import("@sinclair/typebox").TString>;
    }>>, import("@sinclair/typebox").TUndefined]>>;
    status: import("@sinclair/typebox").TOptional<import("@sinclair/typebox").TUnion<[import("@sinclair/typebox").TUnion<[import("@sinclair/typebox").TLiteral<"available">, import("@sinclair/typebox").TLiteral<"pending">, import("@sinclair/typebox").TLiteral<"sold">]>, import("@sinclair/typebox").TUndefined]>>;
}>>;
export declare const deletePet: import("kweri").Endpoint<import("@sinclair/typebox").TObject<{
    path: import("@sinclair/typebox").TObject<{
        petId: import("@sinclair/typebox").TString;
    }>;
}>, import("@sinclair/typebox").TUnknown>;
export declare const uploadFile: import("kweri").Endpoint<import("@sinclair/typebox").TObject<{
    path: import("@sinclair/typebox").TObject<{
        petId: import("@sinclair/typebox").TString;
    }>;
    query: import("@sinclair/typebox").TOptional<import("@sinclair/typebox").TObject<{
        additionalMetadata: import("@sinclair/typebox").TOptional<import("@sinclair/typebox").TString>;
    }>>;
    body: import("@sinclair/typebox").TAny;
}>, import("@sinclair/typebox").TObject<{
    code: import("@sinclair/typebox").TOptional<import("@sinclair/typebox").TNumber>;
    type: import("@sinclair/typebox").TOptional<import("@sinclair/typebox").TString>;
    message: import("@sinclair/typebox").TOptional<import("@sinclair/typebox").TString>;
}>>;
export declare const getInventory: import("kweri").Endpoint<import("@sinclair/typebox").TObject<{}>, import("@sinclair/typebox").TRecord<import("@sinclair/typebox").TString, import("@sinclair/typebox").TNumber>>;
export declare const placeOrder: import("kweri").Endpoint<import("@sinclair/typebox").TObject<{
    body: import("@sinclair/typebox").TAny;
}>, import("@sinclair/typebox").TObject<{
    id: import("@sinclair/typebox").TOptional<import("@sinclair/typebox").TNumber>;
    petId: import("@sinclair/typebox").TOptional<import("@sinclair/typebox").TNumber>;
    quantity: import("@sinclair/typebox").TOptional<import("@sinclair/typebox").TNumber>;
    shipDate: import("@sinclair/typebox").TOptional<import("@sinclair/typebox").TString>;
    status: import("@sinclair/typebox").TOptional<import("@sinclair/typebox").TUnion<[import("@sinclair/typebox").TLiteral<"placed">, import("@sinclair/typebox").TLiteral<"approved">, import("@sinclair/typebox").TLiteral<"delivered">]>>;
    complete: import("@sinclair/typebox").TOptional<import("@sinclair/typebox").TBoolean>;
}>>;
export declare const getOrderById: import("kweri").Endpoint<import("@sinclair/typebox").TObject<{
    path: import("@sinclair/typebox").TObject<{
        orderId: import("@sinclair/typebox").TString;
    }>;
}>, import("@sinclair/typebox").TObject<{
    id: import("@sinclair/typebox").TOptional<import("@sinclair/typebox").TNumber>;
    petId: import("@sinclair/typebox").TOptional<import("@sinclair/typebox").TNumber>;
    quantity: import("@sinclair/typebox").TOptional<import("@sinclair/typebox").TNumber>;
    shipDate: import("@sinclair/typebox").TOptional<import("@sinclair/typebox").TString>;
    status: import("@sinclair/typebox").TOptional<import("@sinclair/typebox").TUnion<[import("@sinclair/typebox").TLiteral<"placed">, import("@sinclair/typebox").TLiteral<"approved">, import("@sinclair/typebox").TLiteral<"delivered">]>>;
    complete: import("@sinclair/typebox").TOptional<import("@sinclair/typebox").TBoolean>;
}>>;
export declare const deleteOrder: import("kweri").Endpoint<import("@sinclair/typebox").TObject<{
    path: import("@sinclair/typebox").TObject<{
        orderId: import("@sinclair/typebox").TString;
    }>;
}>, import("@sinclair/typebox").TUnknown>;
export declare const createUser: import("kweri").Endpoint<import("@sinclair/typebox").TObject<{
    body: import("@sinclair/typebox").TAny;
}>, import("@sinclair/typebox").TObject<{
    id: import("@sinclair/typebox").TOptional<import("@sinclair/typebox").TNumber>;
    username: import("@sinclair/typebox").TOptional<import("@sinclair/typebox").TString>;
    firstName: import("@sinclair/typebox").TOptional<import("@sinclair/typebox").TString>;
    lastName: import("@sinclair/typebox").TOptional<import("@sinclair/typebox").TString>;
    email: import("@sinclair/typebox").TOptional<import("@sinclair/typebox").TString>;
    password: import("@sinclair/typebox").TOptional<import("@sinclair/typebox").TString>;
    phone: import("@sinclair/typebox").TOptional<import("@sinclair/typebox").TString>;
    userStatus: import("@sinclair/typebox").TOptional<import("@sinclair/typebox").TNumber>;
}>>;
export declare const createUsersWithListInput: import("kweri").Endpoint<import("@sinclair/typebox").TObject<{
    body: import("@sinclair/typebox").TAny;
}>, import("@sinclair/typebox").TObject<{
    id: import("@sinclair/typebox").TOptional<import("@sinclair/typebox").TNumber>;
    username: import("@sinclair/typebox").TOptional<import("@sinclair/typebox").TString>;
    firstName: import("@sinclair/typebox").TOptional<import("@sinclair/typebox").TString>;
    lastName: import("@sinclair/typebox").TOptional<import("@sinclair/typebox").TString>;
    email: import("@sinclair/typebox").TOptional<import("@sinclair/typebox").TString>;
    password: import("@sinclair/typebox").TOptional<import("@sinclair/typebox").TString>;
    phone: import("@sinclair/typebox").TOptional<import("@sinclair/typebox").TString>;
    userStatus: import("@sinclair/typebox").TOptional<import("@sinclair/typebox").TNumber>;
}>>;
export declare const loginUser: import("kweri").Endpoint<import("@sinclair/typebox").TObject<{
    query: import("@sinclair/typebox").TOptional<import("@sinclair/typebox").TObject<{
        username: import("@sinclair/typebox").TOptional<import("@sinclair/typebox").TString>;
        password: import("@sinclair/typebox").TOptional<import("@sinclair/typebox").TString>;
    }>>;
}>, import("@sinclair/typebox").TString>;
export declare const logoutUser: import("kweri").Endpoint<import("@sinclair/typebox").TObject<{}>, import("@sinclair/typebox").TUnknown>;
export declare const getUserByName: import("kweri").Endpoint<import("@sinclair/typebox").TObject<{
    path: import("@sinclair/typebox").TObject<{
        username: import("@sinclair/typebox").TString;
    }>;
}>, import("@sinclair/typebox").TObject<{
    id: import("@sinclair/typebox").TOptional<import("@sinclair/typebox").TNumber>;
    username: import("@sinclair/typebox").TOptional<import("@sinclair/typebox").TString>;
    firstName: import("@sinclair/typebox").TOptional<import("@sinclair/typebox").TString>;
    lastName: import("@sinclair/typebox").TOptional<import("@sinclair/typebox").TString>;
    email: import("@sinclair/typebox").TOptional<import("@sinclair/typebox").TString>;
    password: import("@sinclair/typebox").TOptional<import("@sinclair/typebox").TString>;
    phone: import("@sinclair/typebox").TOptional<import("@sinclair/typebox").TString>;
    userStatus: import("@sinclair/typebox").TOptional<import("@sinclair/typebox").TNumber>;
}>>;
export declare const updateUser: import("kweri").Endpoint<import("@sinclair/typebox").TObject<{
    path: import("@sinclair/typebox").TObject<{
        username: import("@sinclair/typebox").TString;
    }>;
    body: import("@sinclair/typebox").TAny;
}>, import("@sinclair/typebox").TUnknown>;
export declare const deleteUser: import("kweri").Endpoint<import("@sinclair/typebox").TObject<{
    path: import("@sinclair/typebox").TObject<{
        username: import("@sinclair/typebox").TString;
    }>;
}>, import("@sinclair/typebox").TUnknown>;
export interface ClientConfig {
    baseURL: string;
    fetcher?: (options: {
        method: string;
        url: string;
        body?: unknown;
    }) => Promise<Response>;
}
export declare class GeneratedClient {
    private client;
    constructor(config: ClientConfig);
    get<Path extends keyof GetEndpointsType>(path: Path, params?: GetEndpointsType[Path]['parameters']): Promise<GetEndpointsType[Path]['response']>;
    post<Path extends keyof PostEndpointsType>(path: Path, params?: PostEndpointsType[Path]['parameters']): Promise<PostEndpointsType[Path]['response']>;
    put<Path extends keyof PutEndpointsType>(path: Path, params?: PutEndpointsType[Path]['parameters']): Promise<PutEndpointsType[Path]['response']>;
    delete<Path extends keyof DeleteEndpointsType>(path: Path, params?: DeleteEndpointsType[Path]['parameters']): Promise<DeleteEndpointsType[Path]['response']>;
    updatePet(params: Static<typeof put_UpdatePet>['parameters']): Promise<Static<typeof put_UpdatePet>['responses'][keyof Static<typeof put_UpdatePet>['responses']]>;
    addPet(params: Static<typeof post_AddPet>['parameters']): Promise<Static<typeof post_AddPet>['responses'][keyof Static<typeof post_AddPet>['responses']]>;
    findPetsByStatus(params: Static<typeof get_FindPetsByStatus>['parameters']): Promise<Static<typeof get_FindPetsByStatus>['responses'][keyof Static<typeof get_FindPetsByStatus>['responses']]>;
    findPetsByTags(params: Static<typeof get_FindPetsByTags>['parameters']): Promise<Static<typeof get_FindPetsByTags>['responses'][keyof Static<typeof get_FindPetsByTags>['responses']]>;
    getPetById(params: Static<typeof get_GetPetById>['parameters']): Promise<Static<typeof get_GetPetById>['responses'][keyof Static<typeof get_GetPetById>['responses']]>;
    updatePetWithForm(params: Static<typeof post_UpdatePetWithForm>['parameters']): Promise<Static<typeof post_UpdatePetWithForm>['responses'][keyof Static<typeof post_UpdatePetWithForm>['responses']]>;
    deletePet(params: Static<typeof delete_DeletePet>['parameters']): Promise<Static<typeof delete_DeletePet>['responses'][keyof Static<typeof delete_DeletePet>['responses']]>;
    uploadFile(params: Static<typeof post_UploadFile>['parameters']): Promise<Static<typeof post_UploadFile>['responses'][keyof Static<typeof post_UploadFile>['responses']]>;
    getInventory(): Promise<Static<typeof get_GetInventory>['responses'][keyof Static<typeof get_GetInventory>['responses']]>;
    placeOrder(params: Static<typeof post_PlaceOrder>['parameters']): Promise<Static<typeof post_PlaceOrder>['responses'][keyof Static<typeof post_PlaceOrder>['responses']]>;
    getOrderById(params: Static<typeof get_GetOrderById>['parameters']): Promise<Static<typeof get_GetOrderById>['responses'][keyof Static<typeof get_GetOrderById>['responses']]>;
    deleteOrder(params: Static<typeof delete_DeleteOrder>['parameters']): Promise<Static<typeof delete_DeleteOrder>['responses'][keyof Static<typeof delete_DeleteOrder>['responses']]>;
    createUser(params: Static<typeof post_CreateUser>['parameters']): Promise<Static<typeof post_CreateUser>['responses'][keyof Static<typeof post_CreateUser>['responses']]>;
    createUsersWithListInput(params: Static<typeof post_CreateUsersWithListInput>['parameters']): Promise<Static<typeof post_CreateUsersWithListInput>['responses'][keyof Static<typeof post_CreateUsersWithListInput>['responses']]>;
    loginUser(params: Static<typeof get_LoginUser>['parameters']): Promise<Static<typeof get_LoginUser>['responses'][keyof Static<typeof get_LoginUser>['responses']]>;
    logoutUser(): Promise<Static<typeof get_LogoutUser>['responses'][keyof Static<typeof get_LogoutUser>['responses']]>;
    getUserByName(params: Static<typeof get_GetUserByName>['parameters']): Promise<Static<typeof get_GetUserByName>['responses'][keyof Static<typeof get_GetUserByName>['responses']]>;
    updateUser(params: Static<typeof put_UpdateUser>['parameters']): Promise<Static<typeof put_UpdateUser>['responses'][keyof Static<typeof put_UpdateUser>['responses']]>;
    deleteUser(params: Static<typeof delete_DeleteUser>['parameters']): Promise<Static<typeof delete_DeleteUser>['responses'][keyof Static<typeof delete_DeleteUser>['responses']]>;
}
export declare function createClient(config: any): GeneratedClient;
export {};
