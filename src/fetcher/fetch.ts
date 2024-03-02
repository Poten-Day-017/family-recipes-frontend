/* fetch type
    function fetch(
        input: string | URL | Request,
        init?: RequestInit,
    ): Promise<Response>;
*/

type FetchParameters = Parameters<typeof fetch>;
type Promiseable<T> = T | Promise<T>;
type Nullable<T> = T | null;

type Params = Record<
  "params",
  Record<string, number | string | null | undefined>
>;

type Options =
  | (NonNullable<FetchParameters[1]> & Params)
  | NonNullable<FetchParameters[1]>;

export type HTTPClient<Res = Response> = ReturnType<typeof httpClient<Res>>;

export interface HTTPClientOption<T = Response>
  extends Omit<NonNullable<FetchParameters[1]>, "body"> {
  baseUrl?: string;

  interceptors?: {
    request?(
      input: NonNullable<FetchParameters[0]>,
      init: NonNullable<FetchParameters[1]>,
    ): Promiseable<FetchParameters[1]>;
    response?(response: Response): Promiseable<T>;
  };
}

const applyBaseUrl = (input: FetchParameters[0], baseUrl?: string) => {
  if (!baseUrl) {
    return input;
  }

  if (typeof input === "object" && "url" in input) {
    return new URL(input.url, baseUrl);
  }

  return new URL(input, baseUrl);
};

export default function httpClient<T = Response>({
  baseUrl,
  interceptors = {},
  ...requestInit
}: HTTPClientOption<T> = {}) {
  return async function <Res = T extends Response ? Response : T>(
    input: FetchParameters[0],
    init?: Options,
  ): Promise<Res> {
    const searchParams = new URLSearchParams();

    if (init && "params" in init) {
      for (const key in init.params) {
        const value = init.params[key];
        if (value !== null || value !== undefined)
          searchParams.append(key, String(value));
      }
    }

    console.log("searchParams Test: ", searchParams.toString());
    const url = applyBaseUrl(input, baseUrl) + "?" + searchParams.toString();

    const option = { ...requestInit, ...init };

    const interceptorAppliedOption = interceptors.request
      ? await interceptors.request(url, option)
      : option;

    const response = await fetch(url, interceptorAppliedOption);

    if (interceptors.response) {
      return (await interceptors.response(response)) as Res;
    }

    return response as Res;
  };
}
