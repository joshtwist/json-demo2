import { ZuploContext, ZuploRequest } from "@zuplo/runtime";

type MyPolicyOptionsType = {
	myOption: any,
}
export default async function (
	request: ZuploRequest,
	context: ZuploContext,
	options: MyPolicyOptionsType,
	policyName: string) {
	// your policy code goes here, and can use the options to perform any
	// configuration
	// See the docs: https://www.zuplo.com/docs/policies/custom-code-inbound

	if (request.user?.data.roles.includes("super-admin")) {
		return request;
	}

	return new Response(`Nope, you gotta be an super-admin`, {
		status: 401
	});
}