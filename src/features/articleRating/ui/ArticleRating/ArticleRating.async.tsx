import { lazy, Suspense } from 'react';

import { ArticleRatingProps } from './ArticleRating';

import { Skeleton } from '@/shared/ui/deprecated/Skeleton';

export const ArticleRatingLazy = lazy(() => import('./ArticleRating'));

export const ArticleRatingAsync = (props: ArticleRatingProps) => (
    <Suspense fallback={<Skeleton width='100%' height={140} />}>
        <ArticleRatingLazy {...props} />
    </Suspense>
);
