import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable, throwError, from } from 'rxjs';
import { retry, catchError } from 'rxjs/operators';

import { ProfessorDto, ProfessorsGrpcDto } from '../interfaces/professor-dto';
import { environment } from 'src/environments/environment';

import { CollegeSvcClient, ServiceError } from '../proto/college_pb_service';
import { AllProfessorsResonse } from '../proto/college_pb';
import { Empty } from 'google-protobuf/google/protobuf/empty_pb';
import { BrowserHeaders } from 'browser-headers';

const baseUrl = 'https://localhost:5002/api/v1';
const apiName = 'professors';
const httpOptions = {
    headers: new HttpHeaders({
        'Content-Type': 'application/json',
    }),
};

const headers = new BrowserHeaders({
    "content-type": "application/json"
});


@Injectable({
    providedIn: 'root',
})
export class ProfessorsGrpcserviceService {

    gRpcClient: CollegeSvcClient;

    constructor(private httpClient: HttpClient) {
        this.gRpcClient = new CollegeSvcClient(environment.gRPCUrl);
    }


    GetAllProfessorsFromgRPC(): Promise<object> {

        return new Promise((resolve, reject) => {

            this.gRpcClient.getAllProfessors(new Empty(), headers, (err: ServiceError | null, response: AllProfessorsResonse | null) => {
                if (err) {

                    console.log(`Error while invoking gRPC: ${err}`);
                    return reject(err);

                } else {

                    const allProfessors = response?.getProfessorsList();
                    console.log(`Inside Service: ${JSON.stringify(allProfessors)}`);

                    if (response !== null) {
                        return resolve(response.toObject());
                    }

                    return resolve({});
                }
            });

        });

    }

    // Error handling
    errorHandler(error: any) {
        let errorMessage = '';
        if (error.error instanceof ErrorEvent) {
            // Get client-side error
            errorMessage = error.error.message;
        } else {
            // Get server-side error
            errorMessage = `Error Code: ${error.status}\nMessage: ${error.message}`;
        }
        console.log(errorMessage);
        return throwError(errorMessage);
    }
}
