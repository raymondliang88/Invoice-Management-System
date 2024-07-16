import { useMutation, useQuery } from "@tanstack/react-query";
import { loginUser } from "../../api/Auth";
import { LoginFormData } from "../../types/LoginFormData";
import { QUERY_KEYS } from "./QueryKeys";
import { getInvoicById, getInvoices } from "../../api/Invoice";

export const useSignInAccount = () => {
    return useMutation({
        mutationFn: (user: LoginFormData) =>
            loginUser(user),
    });
};

export const useGetInvoices = () => {
    return useQuery({
        queryKey: [QUERY_KEYS.GET_INVOICES],
        queryFn: getInvoices,
    });
};

export const useGetInvoiceById = () => {
    return useMutation({
        mutationFn: (id: number) => getInvoicById(id),
    });
};