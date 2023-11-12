import express from 'express';
import type { Request, Response } from 'express';
import * as ProfileService from '../services/profile';

export const ProfileRouter = express.Router();

ProfileRouter.get('/', async (request: Request, response: Response) => {
  try {
    const user = await ProfileService.getProfile(1);
    return response.status(200).json(user);
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
  } catch (error: any) {
    return response.status(error.code).json(error.message);
  }
});
