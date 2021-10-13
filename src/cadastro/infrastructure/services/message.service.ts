import { Injectable } from '@nestjs/common';
import * as AWS from 'aws-sdk';

@Injectable()
export class MessageService {
  private _sqs: AWS.SQS;
  constructor() {
    AWS.config.update({
      region: 'us-east-1',
      accessKeyId: 'AKIAIOSFODNN7EXAMPLE',
      secretAccessKey: 'wJalrXUtnFEMI/K7MDENG/bPxRfiCYEXAMPLEKEY',
    });
    this._sqs = new AWS.SQS({
      apiVersion: '2012-11-05',
      endpoint: new AWS.Endpoint('http://localhost:4566'),
    });
  }

  async sendMessage(title: string, content: any) {
    try {
      const formatMessageBody = {
        type: title,
        content,
      };
      const messageBody = JSON.stringify(formatMessageBody);
      const params = {
        MessageAttributes: {
          Title: {
            DataType: 'String',
            StringValue: title,
          },
          Author: {
            DataType: 'String',
            StringValue: 'Applicação de cadastro',
          },
        },
        MessageBody: messageBody,
        QueueUrl: 'http://localhost:4566/000000000000/myqueue',
      };
      this._sqs.sendMessage(params, (error, data) => {
        if (error) {
          console.log('INFRASTRUCTURE_WARNING: Erro ao enviar mensagem');
        }
        console.log(
          `INFRASTRUCTURE_INFO: Mensagem enviada com sucesso: ${data.MessageId}`,
        );
      });
      return true;
    } catch (error) {
      throw new Error(
        `INFRASTRUCTURE_ERROR: Erro ao enviar mensagem SQS: ${error}`,
      );
    }
  }
}
