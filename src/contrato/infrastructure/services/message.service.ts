import { Injectable } from '@nestjs/common';
import {
  CustomTransportStrategy,
  Server,
  Transport,
} from '@nestjs/microservices';
import * as AWS from 'aws-sdk';
import { Consumer } from 'sqs-consumer';

@Injectable()
export class MessageService extends Server implements CustomTransportStrategy {
  sqs: AWS.SQS;
  transportId?: Transport;
  public consumer: Consumer;
  constructor() {
    super();
    AWS.config.update({
      region: 'us-east-1',
      accessKeyId: 'AKIAIOSFODNN7EXAMPLE',
      secretAccessKey: 'wJalrXUtnFEMI/K7MDENG/bPxRfiCYEXAMPLEKEY',
    });
    this.sqs = new AWS.SQS({
      apiVersion: '2012-11-05',
      endpoint: new AWS.Endpoint('http://localhost:4566'),
    });
  }

  listen(callback: () => void) {
    this.consumer = Consumer.create({
      queueUrl: 'http://localhost:4566/000000000000/myqueue',
      sqs: this.sqs,
      handleMessage: async (mensagem) => {
        const body = JSON.parse(mensagem.Body);
        const handlers = this.getHandlers();
        const handler = handlers.get(body.type);
        if (handler) {
          try {
            handler(body.content);
          } catch (error) {
            console.log(
              `INFRASTRUCTURE_ERROR: Erro ao processar o evento: ${mensagem.Body}`,
              error,
            );
          }
        } else {
          console.log(
            `INFRASTRUCTURE_ERROR: Não existe handler para o evento: ${mensagem.Body}`,
          );
        }
      },
    });
    this.consumer.start();
    callback();
  }

  close() {
    this.consumer.stop();
  }
}
