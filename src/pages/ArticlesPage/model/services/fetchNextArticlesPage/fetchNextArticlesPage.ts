import { createAsyncThunk } from '@reduxjs/toolkit';

import {
    getArticlesPageHasMore,
    getArticlesPageNum,
    getArticlesPageIsLoading,
} from '../../selectors/articlePageSelectors';
import { articlesPageActions } from '../../slice/articlePageSlice';
import { fetchArticlesList } from '../fetchArticlesList/fetchArticlesList';

import { ThunkConfig } from '@/app/providers/StoreProvider';

export const fetchNextArticlesPage = createAsyncThunk<
    void,
    void,
    ThunkConfig<string>
>('articlesPage/fetchNextArticlesPage', async (props, thunkAPI) => {
    const { getState, dispatch } = thunkAPI;

    const hasMore = getArticlesPageHasMore(getState());
    const page = getArticlesPageNum(getState());
    const isLoading = getArticlesPageIsLoading(getState());

    if (hasMore && !isLoading) {
        dispatch(articlesPageActions.setPage(page + 1));
        dispatch(fetchArticlesList({}));
    }
});
