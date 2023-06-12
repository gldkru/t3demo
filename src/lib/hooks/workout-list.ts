/* eslint-disable */
import type { Prisma, WorkoutList } from '@prisma/client';
import { useContext } from 'react';
import type { UseMutationOptions, UseQueryOptions } from '@tanstack/react-query';
import { RequestHandlerContext } from './_helper';
import { query, postMutation, putMutation, deleteMutation } from './_helper';

export function useCreateWorkoutList(
    options?: Omit<UseMutationOptions<WorkoutList, unknown, Prisma.WorkoutListCreateArgs>, 'mutationFn'>,
    invalidateQueries: boolean = true,
) {
    const { endpoint } = useContext(RequestHandlerContext);
    const _mutation = postMutation<Prisma.WorkoutListCreateArgs, WorkoutList>(
        'WorkoutList',
        `${endpoint}/workoutList/create`,
        options,
        invalidateQueries,
    );
    const mutation = {
        ..._mutation,
        async mutateAsync<T extends Prisma.WorkoutListCreateArgs>(
            args: Prisma.SelectSubset<T, Prisma.WorkoutListCreateArgs>,
            options?: Omit<
                UseMutationOptions<
                    Prisma.CheckSelect<T, WorkoutList, Prisma.WorkoutListGetPayload<T>>,
                    unknown,
                    Prisma.SelectSubset<T, Prisma.WorkoutListCreateArgs>
                >,
                'mutationFn'
            >,
        ) {
            return (await _mutation.mutateAsync(args, options as any)) as Prisma.CheckSelect<
                T,
                WorkoutList,
                Prisma.WorkoutListGetPayload<T>
            >;
        },
    };
    return mutation;
}

export function useCreateManyWorkoutList(
    options?: Omit<UseMutationOptions<Prisma.BatchPayload, unknown, Prisma.WorkoutListCreateManyArgs>, 'mutationFn'>,
    invalidateQueries: boolean = true,
) {
    const { endpoint } = useContext(RequestHandlerContext);
    const _mutation = postMutation<Prisma.WorkoutListCreateManyArgs, Prisma.BatchPayload>(
        'WorkoutList',
        `${endpoint}/workoutList/createMany`,
        options,
        invalidateQueries,
    );
    const mutation = {
        ..._mutation,
        async mutateAsync<T extends Prisma.WorkoutListCreateManyArgs>(
            args: Prisma.SelectSubset<T, Prisma.WorkoutListCreateManyArgs>,
            options?: Omit<
                UseMutationOptions<
                    Prisma.BatchPayload,
                    unknown,
                    Prisma.SelectSubset<T, Prisma.WorkoutListCreateManyArgs>
                >,
                'mutationFn'
            >,
        ) {
            return (await _mutation.mutateAsync(args, options as any)) as Prisma.BatchPayload;
        },
    };
    return mutation;
}

export function useFindManyWorkoutList<T extends Prisma.WorkoutListFindManyArgs>(
    args?: Prisma.SelectSubset<T, Prisma.WorkoutListFindManyArgs>,
    options?: UseQueryOptions<Array<Prisma.WorkoutListGetPayload<T>>>,
) {
    const { endpoint } = useContext(RequestHandlerContext);
    return query<Array<Prisma.WorkoutListGetPayload<T>>>(
        'WorkoutList',
        `${endpoint}/workoutList/findMany`,
        args,
        options,
    );
}

export function useFindUniqueWorkoutList<T extends Prisma.WorkoutListFindUniqueArgs>(
    args: Prisma.SelectSubset<T, Prisma.WorkoutListFindUniqueArgs>,
    options?: UseQueryOptions<Prisma.WorkoutListGetPayload<T>>,
) {
    const { endpoint } = useContext(RequestHandlerContext);
    return query<Prisma.WorkoutListGetPayload<T>>('WorkoutList', `${endpoint}/workoutList/findUnique`, args, options);
}

export function useFindFirstWorkoutList<T extends Prisma.WorkoutListFindFirstArgs>(
    args?: Prisma.SelectSubset<T, Prisma.WorkoutListFindFirstArgs>,
    options?: UseQueryOptions<Prisma.WorkoutListGetPayload<T>>,
) {
    const { endpoint } = useContext(RequestHandlerContext);
    return query<Prisma.WorkoutListGetPayload<T>>('WorkoutList', `${endpoint}/workoutList/findFirst`, args, options);
}

export function useUpdateWorkoutList(
    options?: Omit<UseMutationOptions<WorkoutList, unknown, Prisma.WorkoutListUpdateArgs>, 'mutationFn'>,
    invalidateQueries: boolean = true,
) {
    const { endpoint } = useContext(RequestHandlerContext);
    const _mutation = putMutation<Prisma.WorkoutListUpdateArgs, WorkoutList>(
        'WorkoutList',
        `${endpoint}/workoutList/update`,
        options,
        invalidateQueries,
    );
    const mutation = {
        ..._mutation,
        async mutateAsync<T extends Prisma.WorkoutListUpdateArgs>(
            args: Prisma.SelectSubset<T, Prisma.WorkoutListUpdateArgs>,
            options?: Omit<
                UseMutationOptions<
                    Prisma.CheckSelect<T, WorkoutList, Prisma.WorkoutListGetPayload<T>>,
                    unknown,
                    Prisma.SelectSubset<T, Prisma.WorkoutListUpdateArgs>
                >,
                'mutationFn'
            >,
        ) {
            return (await _mutation.mutateAsync(args, options as any)) as Prisma.CheckSelect<
                T,
                WorkoutList,
                Prisma.WorkoutListGetPayload<T>
            >;
        },
    };
    return mutation;
}

export function useUpdateManyWorkoutList(
    options?: Omit<UseMutationOptions<Prisma.BatchPayload, unknown, Prisma.WorkoutListUpdateManyArgs>, 'mutationFn'>,
    invalidateQueries: boolean = true,
) {
    const { endpoint } = useContext(RequestHandlerContext);
    const _mutation = putMutation<Prisma.WorkoutListUpdateManyArgs, Prisma.BatchPayload>(
        'WorkoutList',
        `${endpoint}/workoutList/updateMany`,
        options,
        invalidateQueries,
    );
    const mutation = {
        ..._mutation,
        async mutateAsync<T extends Prisma.WorkoutListUpdateManyArgs>(
            args: Prisma.SelectSubset<T, Prisma.WorkoutListUpdateManyArgs>,
            options?: Omit<
                UseMutationOptions<
                    Prisma.BatchPayload,
                    unknown,
                    Prisma.SelectSubset<T, Prisma.WorkoutListUpdateManyArgs>
                >,
                'mutationFn'
            >,
        ) {
            return (await _mutation.mutateAsync(args, options as any)) as Prisma.BatchPayload;
        },
    };
    return mutation;
}

export function useUpsertWorkoutList(
    options?: Omit<UseMutationOptions<WorkoutList, unknown, Prisma.WorkoutListUpsertArgs>, 'mutationFn'>,
    invalidateQueries: boolean = true,
) {
    const { endpoint } = useContext(RequestHandlerContext);
    const _mutation = postMutation<Prisma.WorkoutListUpsertArgs, WorkoutList>(
        'WorkoutList',
        `${endpoint}/workoutList/upsert`,
        options,
        invalidateQueries,
    );
    const mutation = {
        ..._mutation,
        async mutateAsync<T extends Prisma.WorkoutListUpsertArgs>(
            args: Prisma.SelectSubset<T, Prisma.WorkoutListUpsertArgs>,
            options?: Omit<
                UseMutationOptions<
                    Prisma.CheckSelect<T, WorkoutList, Prisma.WorkoutListGetPayload<T>>,
                    unknown,
                    Prisma.SelectSubset<T, Prisma.WorkoutListUpsertArgs>
                >,
                'mutationFn'
            >,
        ) {
            return (await _mutation.mutateAsync(args, options as any)) as Prisma.CheckSelect<
                T,
                WorkoutList,
                Prisma.WorkoutListGetPayload<T>
            >;
        },
    };
    return mutation;
}

export function useDeleteWorkoutList(
    options?: Omit<UseMutationOptions<WorkoutList, unknown, Prisma.WorkoutListDeleteArgs>, 'mutationFn'>,
    invalidateQueries: boolean = true,
) {
    const { endpoint } = useContext(RequestHandlerContext);
    const _mutation = deleteMutation<Prisma.WorkoutListDeleteArgs, WorkoutList>(
        'WorkoutList',
        `${endpoint}/workoutList/delete`,
        options,
        invalidateQueries,
    );
    const mutation = {
        ..._mutation,
        async mutateAsync<T extends Prisma.WorkoutListDeleteArgs>(
            args: Prisma.SelectSubset<T, Prisma.WorkoutListDeleteArgs>,
            options?: Omit<
                UseMutationOptions<
                    Prisma.CheckSelect<T, WorkoutList, Prisma.WorkoutListGetPayload<T>>,
                    unknown,
                    Prisma.SelectSubset<T, Prisma.WorkoutListDeleteArgs>
                >,
                'mutationFn'
            >,
        ) {
            return (await _mutation.mutateAsync(args, options as any)) as Prisma.CheckSelect<
                T,
                WorkoutList,
                Prisma.WorkoutListGetPayload<T>
            >;
        },
    };
    return mutation;
}

export function useDeleteManyWorkoutList(
    options?: Omit<UseMutationOptions<Prisma.BatchPayload, unknown, Prisma.WorkoutListDeleteManyArgs>, 'mutationFn'>,
    invalidateQueries: boolean = true,
) {
    const { endpoint } = useContext(RequestHandlerContext);
    const _mutation = deleteMutation<Prisma.WorkoutListDeleteManyArgs, Prisma.BatchPayload>(
        'WorkoutList',
        `${endpoint}/workoutList/deleteMany`,
        options,
        invalidateQueries,
    );
    const mutation = {
        ..._mutation,
        async mutateAsync<T extends Prisma.WorkoutListDeleteManyArgs>(
            args: Prisma.SelectSubset<T, Prisma.WorkoutListDeleteManyArgs>,
            options?: Omit<
                UseMutationOptions<
                    Prisma.BatchPayload,
                    unknown,
                    Prisma.SelectSubset<T, Prisma.WorkoutListDeleteManyArgs>
                >,
                'mutationFn'
            >,
        ) {
            return (await _mutation.mutateAsync(args, options as any)) as Prisma.BatchPayload;
        },
    };
    return mutation;
}

export function useAggregateWorkoutList<T extends Prisma.WorkoutListAggregateArgs>(
    args: Prisma.SelectSubset<T, Prisma.WorkoutListAggregateArgs>,
    options?: UseQueryOptions<Prisma.GetWorkoutListAggregateType<T>>,
) {
    const { endpoint } = useContext(RequestHandlerContext);
    return query<Prisma.GetWorkoutListAggregateType<T>>(
        'WorkoutList',
        `${endpoint}/workoutList/aggregate`,
        args,
        options,
    );
}

export function useGroupByWorkoutList<
    T extends Prisma.WorkoutListGroupByArgs,
    HasSelectOrTake extends Prisma.Or<Prisma.Extends<'skip', Prisma.Keys<T>>, Prisma.Extends<'take', Prisma.Keys<T>>>,
    OrderByArg extends Prisma.True extends HasSelectOrTake
        ? { orderBy: Prisma.WorkoutListGroupByArgs['orderBy'] }
        : { orderBy?: Prisma.WorkoutListGroupByArgs['orderBy'] },
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
    args: Prisma.SelectSubset<T, Prisma.SubsetIntersection<T, Prisma.WorkoutListGroupByArgs, OrderByArg> & InputErrors>,
    options?: UseQueryOptions<
        {} extends InputErrors
            ? Array<
                  Prisma.PickArray<Prisma.WorkoutListGroupByOutputType, T['by']> & {
                      [P in keyof T & keyof Prisma.WorkoutListGroupByOutputType]: P extends '_count'
                          ? T[P] extends boolean
                              ? number
                              : Prisma.GetScalarType<T[P], Prisma.WorkoutListGroupByOutputType[P]>
                          : Prisma.GetScalarType<T[P], Prisma.WorkoutListGroupByOutputType[P]>;
                  }
              >
            : InputErrors
    >,
) {
    const { endpoint } = useContext(RequestHandlerContext);
    return query<
        {} extends InputErrors
            ? Array<
                  Prisma.PickArray<Prisma.WorkoutListGroupByOutputType, T['by']> & {
                      [P in keyof T & keyof Prisma.WorkoutListGroupByOutputType]: P extends '_count'
                          ? T[P] extends boolean
                              ? number
                              : Prisma.GetScalarType<T[P], Prisma.WorkoutListGroupByOutputType[P]>
                          : Prisma.GetScalarType<T[P], Prisma.WorkoutListGroupByOutputType[P]>;
                  }
              >
            : InputErrors
    >('WorkoutList', `${endpoint}/workoutList/groupBy`, args, options);
}

export function useCountWorkoutList<T extends Prisma.WorkoutListCountArgs>(
    args?: Prisma.SelectSubset<T, Prisma.WorkoutListCountArgs>,
    options?: UseQueryOptions<
        T extends { select: any }
            ? T['select'] extends true
                ? number
                : Prisma.GetScalarType<T['select'], Prisma.WorkoutListCountAggregateOutputType>
            : number
    >,
) {
    const { endpoint } = useContext(RequestHandlerContext);
    return query<
        T extends { select: any }
            ? T['select'] extends true
                ? number
                : Prisma.GetScalarType<T['select'], Prisma.WorkoutListCountAggregateOutputType>
            : number
    >('WorkoutList', `${endpoint}/workoutList/count`, args, options);
}
