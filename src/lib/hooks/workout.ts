/* eslint-disable */
import type { Prisma, Workout } from '@prisma/client';
import { useContext } from 'react';
import type { UseMutationOptions, UseQueryOptions } from '@tanstack/react-query';
import { RequestHandlerContext } from './_helper';
import { query, postMutation, putMutation, deleteMutation } from './_helper';

export function useCreateWorkout(
    options?: Omit<UseMutationOptions<Workout, unknown, Prisma.WorkoutCreateArgs>, 'mutationFn'>,
    invalidateQueries: boolean = true,
) {
    const { endpoint } = useContext(RequestHandlerContext);
    const _mutation = postMutation<Prisma.WorkoutCreateArgs, Workout>(
        'Workout',
        `${endpoint}/workout/create`,
        options,
        invalidateQueries,
    );
    const mutation = {
        ..._mutation,
        async mutateAsync<T extends Prisma.WorkoutCreateArgs>(
            args: Prisma.SelectSubset<T, Prisma.WorkoutCreateArgs>,
            options?: Omit<
                UseMutationOptions<
                    Prisma.CheckSelect<T, Workout, Prisma.WorkoutGetPayload<T>>,
                    unknown,
                    Prisma.SelectSubset<T, Prisma.WorkoutCreateArgs>
                >,
                'mutationFn'
            >,
        ) {
            return (await _mutation.mutateAsync(args, options as any)) as Prisma.CheckSelect<
                T,
                Workout,
                Prisma.WorkoutGetPayload<T>
            >;
        },
    };
    return mutation;
}

export function useCreateManyWorkout(
    options?: Omit<UseMutationOptions<Prisma.BatchPayload, unknown, Prisma.WorkoutCreateManyArgs>, 'mutationFn'>,
    invalidateQueries: boolean = true,
) {
    const { endpoint } = useContext(RequestHandlerContext);
    const _mutation = postMutation<Prisma.WorkoutCreateManyArgs, Prisma.BatchPayload>(
        'Workout',
        `${endpoint}/workout/createMany`,
        options,
        invalidateQueries,
    );
    const mutation = {
        ..._mutation,
        async mutateAsync<T extends Prisma.WorkoutCreateManyArgs>(
            args: Prisma.SelectSubset<T, Prisma.WorkoutCreateManyArgs>,
            options?: Omit<
                UseMutationOptions<Prisma.BatchPayload, unknown, Prisma.SelectSubset<T, Prisma.WorkoutCreateManyArgs>>,
                'mutationFn'
            >,
        ) {
            return (await _mutation.mutateAsync(args, options as any)) as Prisma.BatchPayload;
        },
    };
    return mutation;
}

export function useFindManyWorkout<T extends Prisma.WorkoutFindManyArgs>(
    args?: Prisma.SelectSubset<T, Prisma.WorkoutFindManyArgs>,
    options?: UseQueryOptions<Array<Prisma.WorkoutGetPayload<T>>>,
) {
    const { endpoint } = useContext(RequestHandlerContext);
    return query<Array<Prisma.WorkoutGetPayload<T>>>('Workout', `${endpoint}/workout/findMany`, args, options);
}

export function useFindUniqueWorkout<T extends Prisma.WorkoutFindUniqueArgs>(
    args: Prisma.SelectSubset<T, Prisma.WorkoutFindUniqueArgs>,
    options?: UseQueryOptions<Prisma.WorkoutGetPayload<T>>,
) {
    const { endpoint } = useContext(RequestHandlerContext);
    return query<Prisma.WorkoutGetPayload<T>>('Workout', `${endpoint}/workout/findUnique`, args, options);
}

export function useFindFirstWorkout<T extends Prisma.WorkoutFindFirstArgs>(
    args?: Prisma.SelectSubset<T, Prisma.WorkoutFindFirstArgs>,
    options?: UseQueryOptions<Prisma.WorkoutGetPayload<T>>,
) {
    const { endpoint } = useContext(RequestHandlerContext);
    return query<Prisma.WorkoutGetPayload<T>>('Workout', `${endpoint}/workout/findFirst`, args, options);
}

export function useUpdateWorkout(
    options?: Omit<UseMutationOptions<Workout, unknown, Prisma.WorkoutUpdateArgs>, 'mutationFn'>,
    invalidateQueries: boolean = true,
) {
    const { endpoint } = useContext(RequestHandlerContext);
    const _mutation = putMutation<Prisma.WorkoutUpdateArgs, Workout>(
        'Workout',
        `${endpoint}/workout/update`,
        options,
        invalidateQueries,
    );
    const mutation = {
        ..._mutation,
        async mutateAsync<T extends Prisma.WorkoutUpdateArgs>(
            args: Prisma.SelectSubset<T, Prisma.WorkoutUpdateArgs>,
            options?: Omit<
                UseMutationOptions<
                    Prisma.CheckSelect<T, Workout, Prisma.WorkoutGetPayload<T>>,
                    unknown,
                    Prisma.SelectSubset<T, Prisma.WorkoutUpdateArgs>
                >,
                'mutationFn'
            >,
        ) {
            return (await _mutation.mutateAsync(args, options as any)) as Prisma.CheckSelect<
                T,
                Workout,
                Prisma.WorkoutGetPayload<T>
            >;
        },
    };
    return mutation;
}

export function useUpdateManyWorkout(
    options?: Omit<UseMutationOptions<Prisma.BatchPayload, unknown, Prisma.WorkoutUpdateManyArgs>, 'mutationFn'>,
    invalidateQueries: boolean = true,
) {
    const { endpoint } = useContext(RequestHandlerContext);
    const _mutation = putMutation<Prisma.WorkoutUpdateManyArgs, Prisma.BatchPayload>(
        'Workout',
        `${endpoint}/workout/updateMany`,
        options,
        invalidateQueries,
    );
    const mutation = {
        ..._mutation,
        async mutateAsync<T extends Prisma.WorkoutUpdateManyArgs>(
            args: Prisma.SelectSubset<T, Prisma.WorkoutUpdateManyArgs>,
            options?: Omit<
                UseMutationOptions<Prisma.BatchPayload, unknown, Prisma.SelectSubset<T, Prisma.WorkoutUpdateManyArgs>>,
                'mutationFn'
            >,
        ) {
            return (await _mutation.mutateAsync(args, options as any)) as Prisma.BatchPayload;
        },
    };
    return mutation;
}

export function useUpsertWorkout(
    options?: Omit<UseMutationOptions<Workout, unknown, Prisma.WorkoutUpsertArgs>, 'mutationFn'>,
    invalidateQueries: boolean = true,
) {
    const { endpoint } = useContext(RequestHandlerContext);
    const _mutation = postMutation<Prisma.WorkoutUpsertArgs, Workout>(
        'Workout',
        `${endpoint}/workout/upsert`,
        options,
        invalidateQueries,
    );
    const mutation = {
        ..._mutation,
        async mutateAsync<T extends Prisma.WorkoutUpsertArgs>(
            args: Prisma.SelectSubset<T, Prisma.WorkoutUpsertArgs>,
            options?: Omit<
                UseMutationOptions<
                    Prisma.CheckSelect<T, Workout, Prisma.WorkoutGetPayload<T>>,
                    unknown,
                    Prisma.SelectSubset<T, Prisma.WorkoutUpsertArgs>
                >,
                'mutationFn'
            >,
        ) {
            return (await _mutation.mutateAsync(args, options as any)) as Prisma.CheckSelect<
                T,
                Workout,
                Prisma.WorkoutGetPayload<T>
            >;
        },
    };
    return mutation;
}

export function useDeleteWorkout(
    options?: Omit<UseMutationOptions<Workout, unknown, Prisma.WorkoutDeleteArgs>, 'mutationFn'>,
    invalidateQueries: boolean = true,
) {
    const { endpoint } = useContext(RequestHandlerContext);
    const _mutation = deleteMutation<Prisma.WorkoutDeleteArgs, Workout>(
        'Workout',
        `${endpoint}/workout/delete`,
        options,
        invalidateQueries,
    );
    const mutation = {
        ..._mutation,
        async mutateAsync<T extends Prisma.WorkoutDeleteArgs>(
            args: Prisma.SelectSubset<T, Prisma.WorkoutDeleteArgs>,
            options?: Omit<
                UseMutationOptions<
                    Prisma.CheckSelect<T, Workout, Prisma.WorkoutGetPayload<T>>,
                    unknown,
                    Prisma.SelectSubset<T, Prisma.WorkoutDeleteArgs>
                >,
                'mutationFn'
            >,
        ) {
            return (await _mutation.mutateAsync(args, options as any)) as Prisma.CheckSelect<
                T,
                Workout,
                Prisma.WorkoutGetPayload<T>
            >;
        },
    };
    return mutation;
}

export function useDeleteManyWorkout(
    options?: Omit<UseMutationOptions<Prisma.BatchPayload, unknown, Prisma.WorkoutDeleteManyArgs>, 'mutationFn'>,
    invalidateQueries: boolean = true,
) {
    const { endpoint } = useContext(RequestHandlerContext);
    const _mutation = deleteMutation<Prisma.WorkoutDeleteManyArgs, Prisma.BatchPayload>(
        'Workout',
        `${endpoint}/workout/deleteMany`,
        options,
        invalidateQueries,
    );
    const mutation = {
        ..._mutation,
        async mutateAsync<T extends Prisma.WorkoutDeleteManyArgs>(
            args: Prisma.SelectSubset<T, Prisma.WorkoutDeleteManyArgs>,
            options?: Omit<
                UseMutationOptions<Prisma.BatchPayload, unknown, Prisma.SelectSubset<T, Prisma.WorkoutDeleteManyArgs>>,
                'mutationFn'
            >,
        ) {
            return (await _mutation.mutateAsync(args, options as any)) as Prisma.BatchPayload;
        },
    };
    return mutation;
}

export function useAggregateWorkout<T extends Prisma.WorkoutAggregateArgs>(
    args: Prisma.SelectSubset<T, Prisma.WorkoutAggregateArgs>,
    options?: UseQueryOptions<Prisma.GetWorkoutAggregateType<T>>,
) {
    const { endpoint } = useContext(RequestHandlerContext);
    return query<Prisma.GetWorkoutAggregateType<T>>('Workout', `${endpoint}/workout/aggregate`, args, options);
}

export function useGroupByWorkout<
    T extends Prisma.WorkoutGroupByArgs,
    HasSelectOrTake extends Prisma.Or<Prisma.Extends<'skip', Prisma.Keys<T>>, Prisma.Extends<'take', Prisma.Keys<T>>>,
    OrderByArg extends Prisma.True extends HasSelectOrTake
        ? { orderBy: Prisma.WorkoutGroupByArgs['orderBy'] }
        : { orderBy?: Prisma.WorkoutGroupByArgs['orderBy'] },
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
    args: Prisma.SelectSubset<T, Prisma.SubsetIntersection<T, Prisma.WorkoutGroupByArgs, OrderByArg> & InputErrors>,
    options?: UseQueryOptions<
        {} extends InputErrors
            ? Array<
                  Prisma.PickArray<Prisma.WorkoutGroupByOutputType, T['by']> & {
                      [P in keyof T & keyof Prisma.WorkoutGroupByOutputType]: P extends '_count'
                          ? T[P] extends boolean
                              ? number
                              : Prisma.GetScalarType<T[P], Prisma.WorkoutGroupByOutputType[P]>
                          : Prisma.GetScalarType<T[P], Prisma.WorkoutGroupByOutputType[P]>;
                  }
              >
            : InputErrors
    >,
) {
    const { endpoint } = useContext(RequestHandlerContext);
    return query<
        {} extends InputErrors
            ? Array<
                  Prisma.PickArray<Prisma.WorkoutGroupByOutputType, T['by']> & {
                      [P in keyof T & keyof Prisma.WorkoutGroupByOutputType]: P extends '_count'
                          ? T[P] extends boolean
                              ? number
                              : Prisma.GetScalarType<T[P], Prisma.WorkoutGroupByOutputType[P]>
                          : Prisma.GetScalarType<T[P], Prisma.WorkoutGroupByOutputType[P]>;
                  }
              >
            : InputErrors
    >('Workout', `${endpoint}/workout/groupBy`, args, options);
}

export function useCountWorkout<T extends Prisma.WorkoutCountArgs>(
    args?: Prisma.SelectSubset<T, Prisma.WorkoutCountArgs>,
    options?: UseQueryOptions<
        T extends { select: any }
            ? T['select'] extends true
                ? number
                : Prisma.GetScalarType<T['select'], Prisma.WorkoutCountAggregateOutputType>
            : number
    >,
) {
    const { endpoint } = useContext(RequestHandlerContext);
    return query<
        T extends { select: any }
            ? T['select'] extends true
                ? number
                : Prisma.GetScalarType<T['select'], Prisma.WorkoutCountAggregateOutputType>
            : number
    >('Workout', `${endpoint}/workout/count`, args, options);
}
