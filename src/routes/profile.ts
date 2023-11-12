import express from 'express';
import type { Request, Response } from 'express';
import * as ProfileService from '../services/profile';
import { body, validationResult } from 'express-validator';

export const ProfileRouter = express.Router();

ProfileRouter.get('/:id', async (request: Request, response: Response) => {
  // #swagger.summary = 'Some summary...'
  // #swagger.description = 'Some description...'
  // #swagger.operationId = 'Your_operationId_here'
  // #swagger.parameters['id'] = { description: 'Some description...' }

  try {
    const user = await ProfileService.getProfile(1);
    return response.status(200).json(user);
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
  } catch (error: any) {
    return response.status(error.code).json(error.message);
  }
});
ProfileRouter.delete(
  '/er',

  async (request: Request, response: Response) => {
    try {
      //   const user = await ProfileService.getProfile(1);
      return response.status(200).json('delete');
      // eslint-disable-next-line @typescript-eslint/no-explicit-any
    } catch (error: any) {
      return response.status(500).json(error.message);
    }
  },
);
ProfileRouter.post(
  '/',
  body('firstName').isString(),
  body('lastName').isString(),
  body('email').isString(),
  body('phone').isString(),
  body('password').isString(),
  async (request: Request, response: Response) => {
    // #swagger.tags = ['Profile']
    /*  #swagger.requestBody = {
            required: true,
            content: {
                "application/json": {
                    schema: {
                         type: "object",
                         properties: {  
                              firstName : {
                                   type:"string"
                              },
                              lastName: {
                                   type:"string"
                              },
                              email: {
                                   type:"string"
                              },
                              phone: {
                                   type:"string"
                              },
                              password:{
                                   type:"string"
                              },
                         }
                    }
                }
            }
        } 
*/

    try {
      const errors = validationResult(request);
      if (!errors.isEmpty()) {
        return response.status(400).json({ errors: errors.array() });
      }
      const user = request.body;
      const profile = await ProfileService.createProfile(user);

      return response.json(profile);
      // eslint-disable-next-line @typescript-eslint/no-explicit-any
    } catch (error: any) {
      return response.status(500).json(error.message);
    }
  },
);
