import YTSearch from 'youtube-api-search';
import _                                from 'lodash';

import API_KEY from '../environment';

export const FETCH_VIDEOS = 'fetch_videos';

export function fetchvideos(state) {
    YTSearch({ key: API_KEY, term: term}, videos => {
        this.setState({
            videos:        videos,
            selectedVideo: videos[0]
        });
    });

    return {
        type:    FETCH_VIDEOS,
        payload: 12345
    };
}
