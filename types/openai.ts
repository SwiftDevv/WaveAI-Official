import { OPENAI_API_TYPE } from '../utils/app/const';

export interface OpenAIModel {
  id: string;
  name: string;
  maxLength: number; // maximum length of a message
  tokenLimit: number;
}

export enum OpenAIModelID {
  GPT_3_5 = 'gpt-3.5-turbo',
  GPT_3_5_AZ = 'gpt-35-turbo',
  GPT_4 = 'gpt-4',
  GPT_4_32K = 'gpt-4-32k',
  GPT_3_5_16K = 'gpt-3.5-turbo-16k',
  GPT_3_5_16K_OPENAI = 'gpt-3.5-turbo-16k-openai',
  GPT_4_32K_POE = 'gpt-4-32k-poe',
  CLAUDE = 'claude-2-100k'
}

// in case the `DEFAULT_MODEL` environment variable is not set or set to an unsupported model
export const fallbackModelID = OpenAIModelID.GPT_4_32K_POE;

export const OpenAIModels: Record<OpenAIModelID, OpenAIModel> = {
  [OpenAIModelID.GPT_3_5]: {
    id: OpenAIModelID.GPT_3_5,
    name: 'GPT-3.5',
    maxLength: 16000,
    tokenLimit: 4000,
  },
  [OpenAIModelID.GPT_3_5_AZ]: {
    id: OpenAIModelID.GPT_3_5_AZ,
    name: 'GPT-3.5',
    maxLength: 16000,
    tokenLimit: 4000,
  },
  [OpenAIModelID.GPT_4]: {
    id: OpenAIModelID.GPT_4,
    name: 'GPT-4',
    maxLength: 32000,
    tokenLimit: 8000,
  },
  [OpenAIModelID.GPT_4_32K]: {
    id: OpenAIModelID.GPT_4_32K,
    name: 'GPT-4-32K-OPENAI',
    maxLength: 128000,
    tokenLimit: 32000,
  },
  [OpenAIModelID.GPT_3_5_16K]: {
    id: OpenAIModelID.GPT_3_5_16K,
    name: 'GPT-3.5-16K',
    maxLength: 64000,
    tokenLimit: 16000,
  },
  [OpenAIModelID.GPT_3_5_16K_OPENAI]: {
    id: OpenAIModelID.GPT_3_5_16K_OPENAI,
    name: 'GPT-3.5-TURBO-16K OPENAI',
    maxLength: 128000,
    tokenLimit: 16000,
  },
  [OpenAIModelID.GPT_4_32K_POE]: {
    id: OpenAIModelID.GPT_4_32K_POE,
    name: 'GPT-4-32K',
    maxLength: 128000,
    tokenLimit: 128000,
  },
  [OpenAIModelID.CLAUDE]: {
    id: OpenAIModelID.CLAUDE,
    name: 'Claude-2-100K',
    maxLength: 128000,
    tokenLimit: 128000,
  }
};

export interface OpenAIFunction {
  name: string;
  description: string;
  parameters: {
    type: string;
    properties: {
      [key: string]: {},
    },
    required: string[];
  };
}

export interface OpenAIFunctionList {
  [name: string]: OpenAIFunction;
}
