import { memo } from 'react';
import { useTranslation } from 'react-i18next';

import { useArticleRecommendationsList } from '../../api/articleRecommendationsApi';

import { ArticleList } from '@/entities/Article';
import { classNames } from '@/shared/lib/classNames/classNames';
import { VStack } from '@/shared/ui/deprecated/Stack';
import { Text, TextSize } from '@/shared/ui/deprecated/Text';

interface ArticleRecommendationsListProps {
    className?: string;
}

export const ArticleRecommendationsList = memo(
    (props: ArticleRecommendationsListProps) => {
        const { className } = props;
        const { t } = useTranslation();
        const { data, isLoading } = useArticleRecommendationsList(3);

        return (
            <VStack
                gap='8'
                className={classNames('', {}, [className])}
                data-testid='ArticleRecommendationsList'
            >
                <Text size={TextSize.L} title={t('Рекомендуем')} />
                {data && (
                    <ArticleList
                        articles={data}
                        target='_blank'
                        isLoading={isLoading}
                    />
                )}
            </VStack>
        );
    }
);
