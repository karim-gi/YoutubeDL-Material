/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

import type { SubscriptionRequestData } from './SubscriptionRequestData';

export type DeleteSubscriptionFileRequest = {
    file: string;
    file_uid?: string;
    sub: SubscriptionRequestData;
    /**
     * If true, does not remove id from archive. Only valid if youtube-dl archive is enabled in settings.
     */
    deleteForever?: boolean;
};