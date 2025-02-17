/**
 * This file was auto-generated by openapi-typescript.
 * Do not make direct changes to the file.
 */

export interface paths {
    "/api/v1/repositories": {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        get?: never;
        put?: never;
        /**
         * Create Repository
         * @description Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
         */
        post: operations["createRepository"];
        delete?: never;
        options?: never;
        head?: never;
        patch?: never;
        trace?: never;
    };
}
export type webhooks = Record<string, never>;
export interface components {
    schemas: {
        /** @description Lorem ipsum dolor sit amet. */
        CreateRepositoryRequest: Record<string, never>;
        CreateAzureRepositoryRequest: {
            /** @description Lorem ipsum dolor sit amet. */
            organization: string;
            /** @description Lorem ipsum dolor sit amet. */
            project: string;
            /** @description Lorem ipsum dolor sit amet. */
            name: string;
        };
        CreateGitRepositoryRequest: {
            /** @description Lorem ipsum dolor sit amet. */
            name: string;
            /** @description Lorem ipsum dolor sit amet. */
            credentials: components["schemas"]["Credentials"];
            /** @description Lorem ipsum dolor sit amet. */
            url: string;
        };
        Credentials: {
            username: string;
            password: string;
        };
    };
    responses: never;
    parameters: never;
    requestBodies: never;
    headers: never;
    pathItems: never;
}
export type $defs = Record<string, never>;
export interface operations {
    createRepository: {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        requestBody?: {
            content: {
                "application/json": components["schemas"]["CreateRepositoryRequest"];
            };
        };
        responses: {
            /** @description Repository created successfully. */
            201: {
                headers: {
                    [name: string]: unknown;
                };
                content?: never;
            };
            /** @description Bad Request */
            400: {
                headers: {
                    [name: string]: unknown;
                };
                content?: never;
            };
        };
    };
}
