// lib/vapiClient.ts
import Vapi from "@vapi-ai/web";

let vapiInstance: Vapi | null = null;

export const getVapiInstance = () => {
  if (!vapiInstance) {
    vapiInstance = new Vapi(process.env.NEXT_PUBLIC_VAPI_API_KEY as string);
  }
  return vapiInstance;
};

export const clearVapiInstance = () => {
  if (vapiInstance) {
    vapiInstance.stop();
    vapiInstance = null;
  }
};
