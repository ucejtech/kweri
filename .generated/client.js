import { Type } from "@sinclair/typebox";
export const Order = Type.Partial(Type.Object({
    id: Type.Number(),
    petId: Type.Number(),
    quantity: Type.Number(),
    shipDate: Type.String(),
    status: Type.Union([Type.Literal("placed"), Type.Literal("approved"), Type.Literal("delivered")]),
    complete: Type.Boolean(),
}));
export const Category = Type.Partial(Type.Object({
    id: Type.Number(),
    name: Type.String(),
}));
export const User = Type.Partial(Type.Object({
    id: Type.Number(),
    username: Type.String(),
    firstName: Type.String(),
    lastName: Type.String(),
    email: Type.String(),
    password: Type.String(),
    phone: Type.String(),
    userStatus: Type.Number(),
}));
export const Tag = Type.Partial(Type.Object({
    id: Type.Number(),
    name: Type.String(),
}));
export const Pet = Type.Object({
    id: Type.Optional(Type.Union([Type.Number(), Type.Undefined()])),
    name: Type.String(),
    category: Type.Optional(Type.Union([Category, Type.Undefined()])),
    photoUrls: Type.Array(Type.String()),
    tags: Type.Optional(Type.Union([Type.Array(Tag), Type.Undefined()])),
    status: Type.Optional(Type.Union([
        Type.Union([Type.Literal("available"), Type.Literal("pending"), Type.Literal("sold")]),
        Type.Undefined(),
    ])),
});
export const ApiResponse = Type.Partial(Type.Object({
    code: Type.Number(),
    type: Type.String(),
    message: Type.String(),
}));
const __ENDPOINTS_START__ = Type.Object({});
export const put_UpdatePet = Type.Object({
    method: Type.Literal("PUT"),
    path: Type.Literal("/pet"),
    requestFormat: Type.Literal("json"),
    parameters: Type.Object({
        body: Pet,
    }),
    responses: Type.Object({
        200: Pet,
        400: Type.Unknown(),
        404: Type.Unknown(),
        422: Type.Unknown(),
        default: Type.Unknown(),
    }),
});
export const post_AddPet = Type.Object({
    method: Type.Literal("POST"),
    path: Type.Literal("/pet"),
    requestFormat: Type.Literal("json"),
    parameters: Type.Object({
        body: Pet,
    }),
    responses: Type.Object({
        200: Pet,
        400: Type.Unknown(),
        422: Type.Unknown(),
        default: Type.Unknown(),
    }),
});
export const get_FindPetsByStatus = Type.Object({
    method: Type.Literal("GET"),
    path: Type.Literal("/pet/findByStatus"),
    requestFormat: Type.Literal("json"),
    parameters: Type.Object({
        query: Type.Object({
            status: Type.Union([Type.Literal("available"), Type.Literal("pending"), Type.Literal("sold")]),
        }),
    }),
    responses: Type.Object({
        200: Type.Array(Pet),
        400: Type.Unknown(),
        default: Type.Unknown(),
    }),
});
export const get_FindPetsByTags = Type.Object({
    method: Type.Literal("GET"),
    path: Type.Literal("/pet/findByTags"),
    requestFormat: Type.Literal("json"),
    parameters: Type.Object({
        query: Type.Object({
            tags: Type.Array(Type.String()),
        }),
    }),
    responses: Type.Object({
        200: Type.Array(Pet),
        400: Type.Unknown(),
        default: Type.Unknown(),
    }),
});
export const get_GetPetById = Type.Object({
    method: Type.Literal("GET"),
    path: Type.Literal("/pet/{petId}"),
    requestFormat: Type.Literal("json"),
    parameters: Type.Object({
        path: Type.Object({
            petId: Type.Number(),
        }),
    }),
    responses: Type.Object({
        200: Pet,
        400: Type.Unknown(),
        404: Type.Unknown(),
        default: Type.Unknown(),
    }),
});
export const post_UpdatePetWithForm = Type.Object({
    method: Type.Literal("POST"),
    path: Type.Literal("/pet/{petId}"),
    requestFormat: Type.Literal("json"),
    parameters: Type.Object({
        query: Type.Partial(Type.Object({
            name: Type.String(),
            status: Type.String(),
        })),
        path: Type.Object({
            petId: Type.Number(),
        }),
    }),
    responses: Type.Object({
        200: Pet,
        400: Type.Unknown(),
        default: Type.Unknown(),
    }),
});
export const delete_DeletePet = Type.Object({
    method: Type.Literal("DELETE"),
    path: Type.Literal("/pet/{petId}"),
    requestFormat: Type.Literal("json"),
    parameters: Type.Object({
        path: Type.Object({
            petId: Type.Number(),
        }),
        header: Type.Partial(Type.Object({
            api_key: Type.String(),
        })),
    }),
    responses: Type.Object({
        200: Type.Unknown(),
        400: Type.Unknown(),
        default: Type.Unknown(),
    }),
});
export const post_UploadFile = Type.Object({
    method: Type.Literal("POST"),
    path: Type.Literal("/pet/{petId}/uploadImage"),
    requestFormat: Type.Literal("binary"),
    parameters: Type.Object({
        query: Type.Partial(Type.Object({
            additionalMetadata: Type.String(),
        })),
        path: Type.Object({
            petId: Type.Number(),
        }),
        body: Type.String(),
    }),
    responses: Type.Object({
        200: ApiResponse,
        400: Type.Unknown(),
        404: Type.Unknown(),
        default: Type.Unknown(),
    }),
});
export const get_GetInventory = Type.Object({
    method: Type.Literal("GET"),
    path: Type.Literal("/store/inventory"),
    requestFormat: Type.Literal("json"),
    parameters: Type.Never(),
    responses: Type.Object({
        200: Type.Record(Type.String(), Type.Number()),
        default: Type.Unknown(),
    }),
});
export const post_PlaceOrder = Type.Object({
    method: Type.Literal("POST"),
    path: Type.Literal("/store/order"),
    requestFormat: Type.Literal("json"),
    parameters: Type.Object({
        body: Order,
    }),
    responses: Type.Object({
        200: Order,
        400: Type.Unknown(),
        422: Type.Unknown(),
        default: Type.Unknown(),
    }),
});
export const get_GetOrderById = Type.Object({
    method: Type.Literal("GET"),
    path: Type.Literal("/store/order/{orderId}"),
    requestFormat: Type.Literal("json"),
    parameters: Type.Object({
        path: Type.Object({
            orderId: Type.Number(),
        }),
    }),
    responses: Type.Object({
        200: Order,
        400: Type.Unknown(),
        404: Type.Unknown(),
        default: Type.Unknown(),
    }),
});
export const delete_DeleteOrder = Type.Object({
    method: Type.Literal("DELETE"),
    path: Type.Literal("/store/order/{orderId}"),
    requestFormat: Type.Literal("json"),
    parameters: Type.Object({
        path: Type.Object({
            orderId: Type.Number(),
        }),
    }),
    responses: Type.Object({
        200: Type.Unknown(),
        400: Type.Unknown(),
        404: Type.Unknown(),
        default: Type.Unknown(),
    }),
});
export const post_CreateUser = Type.Object({
    method: Type.Literal("POST"),
    path: Type.Literal("/user"),
    requestFormat: Type.Literal("json"),
    parameters: Type.Object({
        body: User,
    }),
    responses: Type.Object({
        200: User,
        default: Type.Unknown(),
    }),
});
export const post_CreateUsersWithListInput = Type.Object({
    method: Type.Literal("POST"),
    path: Type.Literal("/user/createWithList"),
    requestFormat: Type.Literal("json"),
    parameters: Type.Object({
        body: Type.Array(User),
    }),
    responses: Type.Object({
        200: User,
        default: Type.Unknown(),
    }),
});
export const get_LoginUser = Type.Object({
    method: Type.Literal("GET"),
    path: Type.Literal("/user/login"),
    requestFormat: Type.Literal("json"),
    parameters: Type.Object({
        query: Type.Partial(Type.Object({
            username: Type.String(),
            password: Type.String(),
        })),
    }),
    responses: Type.Object({
        200: Type.String(),
        400: Type.Unknown(),
        default: Type.Unknown(),
    }),
    responseHeaders: Type.Object({
        200: Type.Object({
            "X-Rate-Limit": Type.Number(),
            "X-Expires-After": Type.String(),
        }),
    }),
});
export const get_LogoutUser = Type.Object({
    method: Type.Literal("GET"),
    path: Type.Literal("/user/logout"),
    requestFormat: Type.Literal("json"),
    parameters: Type.Never(),
    responses: Type.Object({
        200: Type.Unknown(),
        default: Type.Unknown(),
    }),
});
export const get_GetUserByName = Type.Object({
    method: Type.Literal("GET"),
    path: Type.Literal("/user/{username}"),
    requestFormat: Type.Literal("json"),
    parameters: Type.Object({
        path: Type.Object({
            username: Type.String(),
        }),
    }),
    responses: Type.Object({
        200: User,
        400: Type.Unknown(),
        404: Type.Unknown(),
        default: Type.Unknown(),
    }),
});
export const put_UpdateUser = Type.Object({
    method: Type.Literal("PUT"),
    path: Type.Literal("/user/{username}"),
    requestFormat: Type.Literal("json"),
    parameters: Type.Object({
        path: Type.Object({
            username: Type.String(),
        }),
        body: User,
    }),
    responses: Type.Object({
        200: Type.Unknown(),
        400: Type.Unknown(),
        404: Type.Unknown(),
        default: Type.Unknown(),
    }),
});
export const delete_DeleteUser = Type.Object({
    method: Type.Literal("DELETE"),
    path: Type.Literal("/user/{username}"),
    requestFormat: Type.Literal("json"),
    parameters: Type.Object({
        path: Type.Object({
            username: Type.String(),
        }),
    }),
    responses: Type.Object({
        200: Type.Unknown(),
        400: Type.Unknown(),
        404: Type.Unknown(),
        default: Type.Unknown(),
    }),
});
const __ENDPOINTS_END__ = Type.Object({});
// <EndpointByMethod>
export const EndpointByMethod = {
    put: {
        "/pet": put_UpdatePet,
        "/user/{username}": put_UpdateUser,
    },
    post: {
        "/pet": post_AddPet,
        "/pet/{petId}": post_UpdatePetWithForm,
        "/pet/{petId}/uploadImage": post_UploadFile,
        "/store/order": post_PlaceOrder,
        "/user": post_CreateUser,
        "/user/createWithList": post_CreateUsersWithListInput,
    },
    get: {
        "/pet/findByStatus": get_FindPetsByStatus,
        "/pet/findByTags": get_FindPetsByTags,
        "/pet/{petId}": get_GetPetById,
        "/store/inventory": get_GetInventory,
        "/store/order/{orderId}": get_GetOrderById,
        "/user/login": get_LoginUser,
        "/user/logout": get_LogoutUser,
        "/user/{username}": get_GetUserByName,
    },
    delete: {
        "/pet/{petId}": delete_DeletePet,
        "/store/order/{orderId}": delete_DeleteOrder,
        "/user/{username}": delete_DeleteUser,
    },
};
export const successStatusCodes = [
    200, 201, 202, 203, 204, 205, 206, 207, 208, 226, 300, 301, 302, 303, 304, 305, 306, 307, 308,
];
export const errorStatusCodes = [
    400, 401, 402, 403, 404, 405, 406, 407, 408, 409, 410, 411, 412, 413, 414, 415, 416, 417, 418, 421, 422, 423, 424,
    425, 426, 428, 429, 431, 451, 500, 501, 502, 503, 504, 505, 506, 507, 508, 510, 511,
];
// </ApiClientTypes>
// <TypedStatusError>
export class TypedStatusError extends Error {
    response;
    status;
    constructor(response) {
        super(`HTTP ${response.status}: ${response.statusText}`);
        this.name = "TypedStatusError";
        this.response = response;
        this.status = response.status;
    }
}
// </TypedStatusError>
// <ApiClient>
import { ApiClient, defineEndpoint } from 'kweri';
export const GetEndpoints = Type.Object({
    '/pet/findByStatus': Type.Object({
        parameters: Type.Object({ query: Type.Optional(Type.Object({ status: Type.Optional(Type.Union([Type.Literal("available"), Type.Literal("pending"), Type.Literal("sold")])) })) }),
        response: Type.Any()
    }),
    '/pet/findByTags': Type.Object({
        parameters: Type.Object({ query: Type.Optional(Type.Object({ tags: Type.Optional(Type.Array(Type.String())) })) }),
        response: Type.Any()
    }),
    '/pet/{petId}': Type.Object({
        parameters: Type.Object({ path: Type.Object({ petId: Type.String() }) }),
        response: Type.Any()
    }),
    '/store/inventory': Type.Object({
        parameters: Type.Object({}),
        response: Type.Any()
    }),
    '/store/order/{orderId}': Type.Object({
        parameters: Type.Object({ path: Type.Object({ orderId: Type.String() }) }),
        response: Type.Any()
    }),
    '/user/login': Type.Object({
        parameters: Type.Object({ query: Type.Optional(Type.Object({ username: Type.Optional(Type.String()), password: Type.Optional(Type.String()) })) }),
        response: Type.Any()
    }),
    '/user/logout': Type.Object({
        parameters: Type.Object({}),
        response: Type.Any()
    }),
    '/user/{username}': Type.Object({
        parameters: Type.Object({ path: Type.Object({ username: Type.String() }) }),
        response: Type.Any()
    })
});
export const PostEndpoints = Type.Object({
    '/pet': Type.Object({
        parameters: Type.Object({ body: Type.Any() }),
        response: Type.Any()
    }),
    '/pet/{petId}': Type.Object({
        parameters: Type.Object({ path: Type.Object({ petId: Type.String() }), query: Type.Optional(Type.Object({ name: Type.Optional(Type.String()), status: Type.Optional(Type.String()) })) }),
        response: Type.Any()
    }),
    '/pet/{petId}/uploadImage': Type.Object({
        parameters: Type.Object({ path: Type.Object({ petId: Type.String() }), query: Type.Optional(Type.Object({ additionalMetadata: Type.Optional(Type.String()) })), body: Type.Any() }),
        response: Type.Any()
    }),
    '/store/order': Type.Object({
        parameters: Type.Object({ body: Type.Any() }),
        response: Type.Any()
    }),
    '/user': Type.Object({
        parameters: Type.Object({ body: Type.Any() }),
        response: Type.Any()
    }),
    '/user/createWithList': Type.Object({
        parameters: Type.Object({ body: Type.Any() }),
        response: Type.Any()
    })
});
export const PutEndpoints = Type.Object({
    '/pet': Type.Object({
        parameters: Type.Object({ body: Type.Any() }),
        response: Type.Any()
    }),
    '/user/{username}': Type.Object({
        parameters: Type.Object({ path: Type.Object({ username: Type.String() }), body: Type.Any() }),
        response: Type.Any()
    })
});
export const DeleteEndpoints = Type.Object({
    '/pet/{petId}': Type.Object({
        parameters: Type.Object({ path: Type.Object({ petId: Type.String() }) }),
        response: Type.Any()
    }),
    '/store/order/{orderId}': Type.Object({
        parameters: Type.Object({ path: Type.Object({ orderId: Type.String() }) }),
        response: Type.Any()
    }),
    '/user/{username}': Type.Object({
        parameters: Type.Object({ path: Type.Object({ username: Type.String() }) }),
        response: Type.Any()
    })
});
export const updatePet = defineEndpoint({
    method: 'PUT',
    path: '/pet',
    params: Type.Object({ body: Type.Any() }),
    response: put_UpdatePet.properties.responses.properties[200],
});
export const addPet = defineEndpoint({
    method: 'POST',
    path: '/pet',
    params: Type.Object({ body: Type.Any() }),
    response: post_AddPet.properties.responses.properties[200],
});
export const findPetsByStatus = defineEndpoint({
    method: 'GET',
    path: '/pet/findByStatus',
    params: Type.Object({ query: Type.Optional(Type.Object({ status: Type.Optional(Type.Union([Type.Literal("available"), Type.Literal("pending"), Type.Literal("sold")])) })) }),
    response: get_FindPetsByStatus.properties.responses.properties[200],
});
export const findPetsByTags = defineEndpoint({
    method: 'GET',
    path: '/pet/findByTags',
    params: Type.Object({ query: Type.Optional(Type.Object({ tags: Type.Optional(Type.Array(Type.String())) })) }),
    response: get_FindPetsByTags.properties.responses.properties[200],
});
export const getPetById = defineEndpoint({
    method: 'GET',
    path: '/pet/{petId}',
    params: Type.Object({ path: Type.Object({ petId: Type.String() }) }),
    response: get_GetPetById.properties.responses.properties[200],
});
export const updatePetWithForm = defineEndpoint({
    method: 'POST',
    path: '/pet/{petId}',
    params: Type.Object({ path: Type.Object({ petId: Type.String() }), query: Type.Optional(Type.Object({ name: Type.Optional(Type.String()), status: Type.Optional(Type.String()) })) }),
    response: post_UpdatePetWithForm.properties.responses.properties[200],
});
export const deletePet = defineEndpoint({
    method: 'DELETE',
    path: '/pet/{petId}',
    params: Type.Object({ path: Type.Object({ petId: Type.String() }) }),
    response: delete_DeletePet.properties.responses.properties[200],
});
export const uploadFile = defineEndpoint({
    method: 'POST',
    path: '/pet/{petId}/uploadImage',
    params: Type.Object({ path: Type.Object({ petId: Type.String() }), query: Type.Optional(Type.Object({ additionalMetadata: Type.Optional(Type.String()) })), body: Type.Any() }),
    response: post_UploadFile.properties.responses.properties[200],
});
export const getInventory = defineEndpoint({
    method: 'GET',
    path: '/store/inventory',
    params: Type.Object({}),
    response: get_GetInventory.properties.responses.properties[200],
});
export const placeOrder = defineEndpoint({
    method: 'POST',
    path: '/store/order',
    params: Type.Object({ body: Type.Any() }),
    response: post_PlaceOrder.properties.responses.properties[200],
});
export const getOrderById = defineEndpoint({
    method: 'GET',
    path: '/store/order/{orderId}',
    params: Type.Object({ path: Type.Object({ orderId: Type.String() }) }),
    response: get_GetOrderById.properties.responses.properties[200],
});
export const deleteOrder = defineEndpoint({
    method: 'DELETE',
    path: '/store/order/{orderId}',
    params: Type.Object({ path: Type.Object({ orderId: Type.String() }) }),
    response: delete_DeleteOrder.properties.responses.properties[200],
});
export const createUser = defineEndpoint({
    method: 'POST',
    path: '/user',
    params: Type.Object({ body: Type.Any() }),
    response: post_CreateUser.properties.responses.properties[200],
});
export const createUsersWithListInput = defineEndpoint({
    method: 'POST',
    path: '/user/createWithList',
    params: Type.Object({ body: Type.Any() }),
    response: post_CreateUsersWithListInput.properties.responses.properties[200],
});
export const loginUser = defineEndpoint({
    method: 'GET',
    path: '/user/login',
    params: Type.Object({ query: Type.Optional(Type.Object({ username: Type.Optional(Type.String()), password: Type.Optional(Type.String()) })) }),
    response: get_LoginUser.properties.responses.properties[200],
});
export const logoutUser = defineEndpoint({
    method: 'GET',
    path: '/user/logout',
    params: Type.Object({}),
    response: get_LogoutUser.properties.responses.properties[200],
});
export const getUserByName = defineEndpoint({
    method: 'GET',
    path: '/user/{username}',
    params: Type.Object({ path: Type.Object({ username: Type.String() }) }),
    response: get_GetUserByName.properties.responses.properties[200],
});
export const updateUser = defineEndpoint({
    method: 'PUT',
    path: '/user/{username}',
    params: Type.Object({ path: Type.Object({ username: Type.String() }), body: Type.Any() }),
    response: put_UpdateUser.properties.responses.properties[200],
});
export const deleteUser = defineEndpoint({
    method: 'DELETE',
    path: '/user/{username}',
    params: Type.Object({ path: Type.Object({ username: Type.String() }) }),
    response: delete_DeleteUser.properties.responses.properties[200],
});
export class GeneratedClient {
    client;
    constructor(config) {
        const defaultFetcher = async (options) => {
            return fetch(options.url, {
                method: options.method,
                headers: options.body ? { 'Content-Type': 'application/json' } : {},
                body: options.body ? JSON.stringify(options.body) : undefined
            });
        };
        this.client = new ApiClient(config.baseURL, config.fetcher || defaultFetcher);
    }
    async get(path, params = {}) {
        const flatParams = {
            ...(params.path || {}),
            ...(params.query || {}),
            ...(params.body ? { body: params.body } : {})
        };
        const endpoint = {
            method: 'GET',
            path: path,
            params: Type.Any(),
            response: Type.Any()
        };
        return this.client.execute(endpoint, flatParams);
    }
    async post(path, params = {}) {
        const flatParams = {
            ...(params.path || {}),
            ...(params.query || {}),
            ...(params.body ? { body: params.body } : {})
        };
        const endpoint = {
            method: 'POST',
            path: path,
            params: Type.Any(),
            response: Type.Any()
        };
        return this.client.execute(endpoint, flatParams);
    }
    async put(path, params = {}) {
        const flatParams = {
            ...(params.path || {}),
            ...(params.query || {}),
            ...(params.body ? { body: params.body } : {})
        };
        const endpoint = {
            method: 'PUT',
            path: path,
            params: Type.Any(),
            response: Type.Any()
        };
        return this.client.execute(endpoint, flatParams);
    }
    async delete(path, params = {}) {
        const flatParams = {
            ...(params.path || {}),
            ...(params.query || {}),
            ...(params.body ? { body: params.body } : {})
        };
        const endpoint = {
            method: 'DELETE',
            path: path,
            params: Type.Any(),
            response: Type.Any()
        };
        return this.client.execute(endpoint, flatParams);
    }
    async updatePet(params) {
        const updatePetParamsSchema = Type.Object({ body: Type.Any() });
        const updatePetResponseSchema = Type.Any();
        const endpoint = {
            method: 'PUT',
            path: '/pet',
            params: updatePetParamsSchema,
            response: updatePetResponseSchema
        };
        return this.client.execute(endpoint, params);
    }
    async addPet(params) {
        const addPetParamsSchema = Type.Object({ body: Type.Any() });
        const addPetResponseSchema = Type.Any();
        const endpoint = {
            method: 'POST',
            path: '/pet',
            params: addPetParamsSchema,
            response: addPetResponseSchema
        };
        return this.client.execute(endpoint, params);
    }
    async findPetsByStatus(params) {
        const findPetsByStatusParamsSchema = Type.Object({ status: Type.Optional(Type.Union([Type.Literal("available"), Type.Literal("pending"), Type.Literal("sold")])) });
        const findPetsByStatusResponseSchema = Type.Any();
        const endpoint = {
            method: 'GET',
            path: '/pet/findByStatus',
            params: findPetsByStatusParamsSchema,
            response: findPetsByStatusResponseSchema
        };
        return this.client.execute(endpoint, params);
    }
    async findPetsByTags(params) {
        const findPetsByTagsParamsSchema = Type.Object({ tags: Type.Optional(Type.Array(Type.String())) });
        const findPetsByTagsResponseSchema = Type.Any();
        const endpoint = {
            method: 'GET',
            path: '/pet/findByTags',
            params: findPetsByTagsParamsSchema,
            response: findPetsByTagsResponseSchema
        };
        return this.client.execute(endpoint, params);
    }
    async getPetById(params) {
        const getPetByIdParamsSchema = Type.Object({ petId: Type.String() });
        const getPetByIdResponseSchema = Type.Any();
        const endpoint = {
            method: 'GET',
            path: '/pet/{petId}',
            params: getPetByIdParamsSchema,
            response: getPetByIdResponseSchema
        };
        return this.client.execute(endpoint, params);
    }
    async updatePetWithForm(params) {
        const updatePetWithFormParamsSchema = Type.Object({ petId: Type.String() });
        const updatePetWithFormResponseSchema = Type.Any();
        const endpoint = {
            method: 'POST',
            path: '/pet/{petId}',
            params: updatePetWithFormParamsSchema,
            response: updatePetWithFormResponseSchema
        };
        return this.client.execute(endpoint, params);
    }
    async deletePet(params) {
        const deletePetParamsSchema = Type.Object({ petId: Type.String() });
        const deletePetResponseSchema = Type.Any();
        const endpoint = {
            method: 'DELETE',
            path: '/pet/{petId}',
            params: deletePetParamsSchema,
            response: deletePetResponseSchema
        };
        return this.client.execute(endpoint, params);
    }
    async uploadFile(params) {
        const uploadFileParamsSchema = Type.Object({ petId: Type.String(), body: Type.Any() });
        const uploadFileResponseSchema = Type.Any();
        const endpoint = {
            method: 'POST',
            path: '/pet/{petId}/uploadImage',
            params: uploadFileParamsSchema,
            response: uploadFileResponseSchema
        };
        return this.client.execute(endpoint, params);
    }
    async getInventory() {
        const getInventoryParamsSchema = Type.Object({});
        const getInventoryResponseSchema = Type.Any();
        const endpoint = {
            method: 'GET',
            path: '/store/inventory',
            params: getInventoryParamsSchema,
            response: getInventoryResponseSchema
        };
        return this.client.execute(endpoint, {});
    }
    async placeOrder(params) {
        const placeOrderParamsSchema = Type.Object({ body: Type.Any() });
        const placeOrderResponseSchema = Type.Any();
        const endpoint = {
            method: 'POST',
            path: '/store/order',
            params: placeOrderParamsSchema,
            response: placeOrderResponseSchema
        };
        return this.client.execute(endpoint, params);
    }
    async getOrderById(params) {
        const getOrderByIdParamsSchema = Type.Object({ orderId: Type.String() });
        const getOrderByIdResponseSchema = Type.Any();
        const endpoint = {
            method: 'GET',
            path: '/store/order/{orderId}',
            params: getOrderByIdParamsSchema,
            response: getOrderByIdResponseSchema
        };
        return this.client.execute(endpoint, params);
    }
    async deleteOrder(params) {
        const deleteOrderParamsSchema = Type.Object({ orderId: Type.String() });
        const deleteOrderResponseSchema = Type.Any();
        const endpoint = {
            method: 'DELETE',
            path: '/store/order/{orderId}',
            params: deleteOrderParamsSchema,
            response: deleteOrderResponseSchema
        };
        return this.client.execute(endpoint, params);
    }
    async createUser(params) {
        const createUserParamsSchema = Type.Object({ body: Type.Any() });
        const createUserResponseSchema = Type.Any();
        const endpoint = {
            method: 'POST',
            path: '/user',
            params: createUserParamsSchema,
            response: createUserResponseSchema
        };
        return this.client.execute(endpoint, params);
    }
    async createUsersWithListInput(params) {
        const createUsersWithListInputParamsSchema = Type.Object({ body: Type.Any() });
        const createUsersWithListInputResponseSchema = Type.Any();
        const endpoint = {
            method: 'POST',
            path: '/user/createWithList',
            params: createUsersWithListInputParamsSchema,
            response: createUsersWithListInputResponseSchema
        };
        return this.client.execute(endpoint, params);
    }
    async loginUser(params) {
        const loginUserParamsSchema = Type.Object({ username: Type.Optional(Type.String()), password: Type.Optional(Type.String()) });
        const loginUserResponseSchema = Type.Any();
        const endpoint = {
            method: 'GET',
            path: '/user/login',
            params: loginUserParamsSchema,
            response: loginUserResponseSchema
        };
        return this.client.execute(endpoint, params);
    }
    async logoutUser() {
        const logoutUserParamsSchema = Type.Object({});
        const logoutUserResponseSchema = Type.Any();
        const endpoint = {
            method: 'GET',
            path: '/user/logout',
            params: logoutUserParamsSchema,
            response: logoutUserResponseSchema
        };
        return this.client.execute(endpoint, {});
    }
    async getUserByName(params) {
        const getUserByNameParamsSchema = Type.Object({ username: Type.String() });
        const getUserByNameResponseSchema = Type.Any();
        const endpoint = {
            method: 'GET',
            path: '/user/{username}',
            params: getUserByNameParamsSchema,
            response: getUserByNameResponseSchema
        };
        return this.client.execute(endpoint, params);
    }
    async updateUser(params) {
        const updateUserParamsSchema = Type.Object({ username: Type.String(), body: Type.Any() });
        const updateUserResponseSchema = Type.Any();
        const endpoint = {
            method: 'PUT',
            path: '/user/{username}',
            params: updateUserParamsSchema,
            response: updateUserResponseSchema
        };
        return this.client.execute(endpoint, params);
    }
    async deleteUser(params) {
        const deleteUserParamsSchema = Type.Object({ username: Type.String() });
        const deleteUserResponseSchema = Type.Any();
        const endpoint = {
            method: 'DELETE',
            path: '/user/{username}',
            params: deleteUserParamsSchema,
            response: deleteUserResponseSchema
        };
        return this.client.execute(endpoint, params);
    }
}
export function createClient(config) {
    return new GeneratedClient(config);
}
