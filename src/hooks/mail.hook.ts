import { mailDummy } from "../data/dummy";
import { IMail } from "../model/mail.model";
import { useQuery, UseQueryResult } from "@tanstack/react-query";

export const useMailDetail = (id:any): UseQueryResult<IMail> => {
    const queryResult = useQuery<IMail>({
        queryKey: ["mailDetail", id],
        queryFn:async (): Promise<IMail> => {
            const response = await mailDummy[id];
            if (typeof response === 'object' && 'status' in response) {
                throw new Error(`Error: ${response.status}`);
            }
            return response;
        },
    });
    return queryResult;
}