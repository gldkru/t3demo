/* eslint-disable */
import type { Prisma, VerificationToken } from '@prisma/client';
import { useContext } from 'react';
import type { UseMutationOptions, UseQueryOptions } from '@tanstack/react-query';
import { RequestHandlerContext } from './_helper';
import { query, postMutation, putMutation, deleteMutation } from './_helper';

export function useCreateVerificationToken(
    options?: Omit<UseMutationOptions<VerificationToken, unknown, Prisma.VerificationTokenCreateArgs>, 'mutationFn'>,
    invalidateQueries: boolean = true,
) {
    const { endpoint } = useContext(RequestHandlerContext);
    const _mutation = postMutation<Prisma.VerificationTokenCreateArgs, VerificationToken>(
        'VerificationToken',
        `${endpoint}/verificationToken/create`,
        options,
        invalidateQueries,
    );
    const mutation = {
        ..._mutation,
        async mutateAsync<T extends Prisma.VerificationTokenCreateArgs>(
            args: Prisma.SelectSubset<T, Prisma.VerificationTokenCreateArgs>,
            options?: Omit<
                UseMutationOptions<
                    Prisma.CheckSelect<T, VerificationToken, Prisma.VerificationTokenGetPayload<T>>,
                    unknown,
                    Prisma.SelectSubset<T, Prisma.VerificationTokenCreateArgs>
                >,
                'mutationFn'
            >,
        ) {
            return (await _mutation.mutateAsync(args, options as any)) as Prisma.CheckSelect<
                T,
                VerificationToken,
                Prisma.VerificationTokenGetPayload<T>
            >;
        },
    };
    return mutation;
}

export function useCreateManyVerificationToken(
    options?: Omit<
        UseMutationOptions<Prisma.BatchPayload, unknown, Prisma.VerificationTokenCreateManyArgs>,
        'mutationFn'
    >,
    invalidateQueries: boolean = true,
) {
    const { endpoint } = useContext(RequestHandlerContext);
    const _mutation = postMutation<Prisma.VerificationTokenCreateManyArgs, Prisma.BatchPayload>(
        'VerificationToken',
        `${endpoint}/verificationToken/createMany`,
        options,
        invalidateQueries,
    );
    const mutation = {
        ..._mutation,
        async mutateAsync<T extends Prisma.VerificationTokenCreateManyArgs>(
            args: Prisma.SelectSubset<T, Prisma.VerificationTokenCreateManyArgs>,
            options?: Omit<
                UseMutationOptions<
                    Prisma.BatchPayload,
                    unknown,
                    Prisma.SelectSubset<T, Prisma.VerificationTokenCreateManyArgs>
                >,
                'mutationFn'
            >,
        ) {
            return (await _mutation.mutateAsync(args, options as any)) as Prisma.BatchPayload;
        },
    };
    return mutation;
}

export function useFindManyVerificationToken<T extends Prisma.VerificationTokenFindManyArgs>(
    args?: Prisma.SelectSubset<T, Prisma.VerificationTokenFindManyArgs>,
    options?: UseQueryOptions<Array<Prisma.VerificationTokenGetPayload<T>>>,
) {
    const { endpoint } = useContext(RequestHandlerContext);
    return query<Array<Prisma.VerificationTokenGetPayload<T>>>(
        'VerificationToken',
        `${endpoint}/verificationToken/findMany`,
        args,
        options,
    );
}

export function useFindUniqueVerificationToken<T extends Prisma.VerificationTokenFindUniqueArgs>(
    args: Prisma.SelectSubset<T, Prisma.VerificationTokenFindUniqueArgs>,
    options?: UseQueryOptions<Prisma.VerificationTokenGetPayload<T>>,
) {
    const { endpoint } = useContext(RequestHandlerContext);
    return query<Prisma.VerificationTokenGetPayload<T>>(
        'VerificationToken',
        `${endpoint}/verificationToken/findUnique`,
        args,
        options,
    );
}

export function useFindFirstVerificationToken<T extends Prisma.VerificationTokenFindFirstArgs>(
    args?: Prisma.SelectSubset<T, Prisma.VerificationTokenFindFirstArgs>,
    options?: UseQueryOptions<Prisma.VerificationTokenGetPayload<T>>,
) {
    const { endpoint } = useContext(RequestHandlerContext);
    return query<Prisma.VerificationTokenGetPayload<T>>(
        'VerificationToken',
        `${endpoint}/verificationToken/findFirst`,
        args,
        options,
    );
}

export function useUpdateVerificationToken(
    options?: Omit<UseMutationOptions<VerificationToken, unknown, Prisma.VerificationTokenUpdateArgs>, 'mutationFn'>,
    invalidateQueries: boolean = true,
) {
    const { endpoint } = useContext(RequestHandlerContext);
    const _mutation = putMutation<Prisma.VerificationTokenUpdateArgs, VerificationToken>(
        'VerificationToken',
        `${endpoint}/verificationToken/update`,
        options,
        invalidateQueries,
    );
    const mutation = {
        ..._mutation,
        async mutateAsync<T extends Prisma.VerificationTokenUpdateArgs>(
            args: Prisma.SelectSubset<T, Prisma.VerificationTokenUpdateArgs>,
            options?: Omit<
                UseMutationOptions<
                    Prisma.CheckSelect<T, VerificationToken, Prisma.VerificationTokenGetPayload<T>>,
                    unknown,
                    Prisma.SelectSubset<T, Prisma.VerificationTokenUpdateArgs>
                >,
                'mutationFn'
            >,
        ) {
            return (await _mutation.mutateAsync(args, options as any)) as Prisma.CheckSelect<
                T,
                VerificationToken,
                Prisma.VerificationTokenGetPayload<T>
            >;
        },
    };
    return mutation;
}

export function useUpdateManyVerificationToken(
    options?: Omit<
        UseMutationOptions<Prisma.BatchPayload, unknown, Prisma.VerificationTokenUpdateManyArgs>,
        'mutationFn'
    >,
    invalidateQueries: boolean = true,
) {
    const { endpoint } = useContext(RequestHandlerContext);
    const _mutation = putMutation<Prisma.VerificationTokenUpdateManyArgs, Prisma.BatchPayload>(
        'VerificationToken',
        `${endpoint}/verificationToken/updateMany`,
        options,
        invalidateQueries,
    );
    const mutation = {
        ..._mutation,
        async mutateAsync<T extends Prisma.VerificationTokenUpdateManyArgs>(
            args: Prisma.SelectSubset<T, Prisma.VerificationTokenUpdateManyArgs>,
            options?: Omit<
                UseMutationOptions<
                    Prisma.BatchPayload,
                    unknown,
                    Prisma.SelectSubset<T, Prisma.VerificationTokenUpdateManyArgs>
                >,
                'mutationFn'
            >,
        ) {
            return (await _mutation.mutateAsync(args, options as any)) as Prisma.BatchPayload;
        },
    };
    return mutation;
}

export function useUpsertVerificationToken(
    options?: Omit<UseMutationOptions<VerificationToken, unknown, Prisma.VerificationTokenUpsertArgs>, 'mutationFn'>,
    invalidateQueries: boolean = true,
) {
    const { endpoint } = useContext(RequestHandlerContext);
    const _mutation = postMutation<Prisma.VerificationTokenUpsertArgs, VerificationToken>(
        'VerificationToken',
        `${endpoint}/verificationToken/upsert`,
        options,
        invalidateQueries,
    );
    const mutation = {
        ..._mutation,
        async mutateAsync<T extends Prisma.VerificationTokenUpsertArgs>(
            args: Prisma.SelectSubset<T, Prisma.VerificationTokenUpsertArgs>,
            options?: Omit<
                UseMutationOptions<
                    Prisma.CheckSelect<T, VerificationToken, Prisma.VerificationTokenGetPayload<T>>,
                    unknown,
                    Prisma.SelectSubset<T, Prisma.VerificationTokenUpsertArgs>
                >,
                'mutationFn'
            >,
        ) {
            return (await _mutation.mutateAsync(args, options as any)) as Prisma.CheckSelect<
                T,
                VerificationToken,
                Prisma.VerificationTokenGetPayload<T>
            >;
        },
    };
    return mutation;
}

export function useDeleteVerificationToken(
    options?: Omit<UseMutationOptions<VerificationToken, unknown, Prisma.VerificationTokenDeleteArgs>, 'mutationFn'>,
    invalidateQueries: boolean = true,
) {
    const { endpoint } = useContext(RequestHandlerContext);
    const _mutation = deleteMutation<Prisma.VerificationTokenDeleteArgs, VerificationToken>(
        'VerificationToken',
        `${endpoint}/verificationToken/delete`,
        options,
        invalidateQueries,
    );
    const mutation = {
        ..._mutation,
        async mutateAsync<T extends Prisma.VerificationTokenDeleteArgs>(
            args: Prisma.SelectSubset<T, Prisma.VerificationTokenDeleteArgs>,
            options?: Omit<
                UseMutationOptions<
                    Prisma.CheckSelect<T, VerificationToken, Prisma.VerificationTokenGetPayload<T>>,
                    unknown,
                    Prisma.SelectSubset<T, Prisma.VerificationTokenDeleteArgs>
                >,
                'mutationFn'
            >,
        ) {
            return (await _mutation.mutateAsync(args, options as any)) as Prisma.CheckSelect<
                T,
                VerificationToken,
                Prisma.VerificationTokenGetPayload<T>
            >;
        },
    };
    return mutation;
}

export function useDeleteManyVerificationToken(
    options?: Omit<
        UseMutationOptions<Prisma.BatchPayload, unknown, Prisma.VerificationTokenDeleteManyArgs>,
        'mutationFn'
    >,
    invalidateQueries: boolean = true,
) {
    const { endpoint } = useContext(RequestHandlerContext);
    const _mutation = deleteMutation<Prisma.VerificationTokenDeleteManyArgs, Prisma.BatchPayload>(
        'VerificationToken',
        `${endpoint}/verificationToken/deleteMany`,
        options,
        invalidateQueries,
    );
    const mutation = {
        ..._mutation,
        async mutateAsync<T extends Prisma.VerificationTokenDeleteManyArgs>(
            args: Prisma.SelectSubset<T, Prisma.VerificationTokenDeleteManyArgs>,
            options?: Omit<
                UseMutationOptions<
                    Prisma.BatchPayload,
                    unknown,
                    Prisma.SelectSubset<T, Prisma.VerificationTokenDeleteManyArgs>
                >,
                'mutationFn'
            >,
        ) {
            return (await _mutation.mutateAsync(args, options as any)) as Prisma.BatchPayload;
        },
    };
    return mutation;
}

export function useAggregateVerificationToken<T extends Prisma.VerificationTokenAggregateArgs>(
    args: Prisma.SelectSubset<T, Prisma.VerificationTokenAggregateArgs>,
    options?: UseQueryOptions<Prisma.GetVerificationTokenAggregateType<T>>,
) {
    const { endpoint } = useContext(RequestHandlerContext);
    return query<Prisma.GetVerificationTokenAggregateType<T>>(
        'VerificationToken',
        `${endpoint}/verificationToken/aggregate`,
        args,
        options,
    );
}

export function useGroupByVerificationToken<
    T extends Prisma.VerificationTokenGroupByArgs,
    HasSelectOrTake extends Prisma.Or<Prisma.Extends<'skip', Prisma.Keys<T>>, Prisma.Extends<'take', Prisma.Keys<T>>>,
    OrderByArg extends Prisma.True extends HasSelectOrTake
        ? { orderBy: Prisma.VerificationTokenGroupByArgs['orderBy'] }
        : { orderBy?: Prisma.VerificationTokenGroupByArgs['orderBy'] },
    OrderFields extends Prisma.ExcludeUnderscoreKeys<Prisma.Keys<Prisma.MaybeTupleToUnion<T['orderBy']>>>,
    ByFields extends Prisma.TupleToUnion<T['by']>,
    ByValid extends Prisma.Has<ByFields, OrderFields>,
    HavingFields extends Prisma.GetHavingFields<T['having']>,
    HavingValid extends Prisma.Has<ByFields, HavingFields>,
    ByEmpty extends T['by'] extends never[] ? Prisma.True : Prisma.False,
    InputErrors extends ByEmpty extends Prisma.True
        ? `Error: "by" must not be empty.`
        : HavingValid extends Prisma.False
        ? {
              [P in HavingFields]: P extends ByFields
                  ? never
                  : P extends string
                  ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
                  : [Error, 'Field ', P, ` in "having" needs to be provided in "by"`];
          }[HavingFields]
        : 'take' extends Prisma.Keys<T>
        ? 'orderBy' extends Prisma.Keys<T>
            ? ByValid extends Prisma.True
                ? {}
                : {
                      [P in OrderFields]: P extends ByFields
                          ? never
                          : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`;
                  }[OrderFields]
            : 'Error: If you provide "take", you also need to provide "orderBy"'
        : 'skip' extends Prisma.Keys<T>
        ? 'orderBy' extends Prisma.Keys<T>
            ? ByValid extends Prisma.True
                ? {}
                : {
                      [P in OrderFields]: P extends ByFields
                          ? never
                          : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`;
                  }[OrderFields]
            : 'Error: If you provide "skip", you also need to provide "orderBy"'
        : ByValid extends Prisma.True
        ? {}
        : {
              [P in OrderFields]: P extends ByFields
                  ? never
                  : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`;
          }[OrderFields],
>(
    args: Prisma.SelectSubset<
        T,
        Prisma.SubsetIntersection<T, Prisma.VerificationTokenGroupByArgs, OrderByArg> & InputErrors
    >,
    options?: UseQueryOptions<
        {} extends InputErrors
            ? Array<
                  Prisma.PickArray<Prisma.VerificationTokenGroupByOutputType, T['by']> & {
                      [P in keyof T & keyof Prisma.VerificationTokenGroupByOutputType]: P extends '_count'
                          ? T[P] extends boolean
                              ? number
                              : Prisma.GetScalarType<T[P], Prisma.VerificationTokenGroupByOutputType[P]>
                          : Prisma.GetScalarType<T[P], Prisma.VerificationTokenGroupByOutputType[P]>;
                  }
              >
            : InputErrors
    >,
) {
    const { endpoint } = useContext(RequestHandlerContext);
    return query<
        {} extends InputErrors
            ? Array<
                  Prisma.PickArray<Prisma.VerificationTokenGroupByOutputType, T['by']> & {
                      [P in keyof T & keyof Prisma.VerificationTokenGroupByOutputType]: P extends '_count'
                          ? T[P] extends boolean
                              ? number
                              : Prisma.GetScalarType<T[P], Prisma.VerificationTokenGroupByOutputType[P]>
                          : Prisma.GetScalarType<T[P], Prisma.VerificationTokenGroupByOutputType[P]>;
                  }
              >
            : InputErrors
    >('VerificationToken', `${endpoint}/verificationToken/groupBy`, args, options);
}

export function useCountVerificationToken<T extends Prisma.VerificationTokenCountArgs>(
    args?: Prisma.SelectSubset<T, Prisma.VerificationTokenCountArgs>,
    options?: UseQueryOptions<
        T extends { select: any }
            ? T['select'] extends true
                ? number
                : Prisma.GetScalarType<T['select'], Prisma.VerificationTokenCountAggregateOutputType>
            : number
    >,
) {
    const { endpoint } = useContext(RequestHandlerContext);
    return query<
        T extends { select: any }
            ? T['select'] extends true
                ? number
                : Prisma.GetScalarType<T['select'], Prisma.VerificationTokenCountAggregateOutputType>
            : number
    >('VerificationToken', `${endpoint}/verificationToken/count`, args, options);
}
