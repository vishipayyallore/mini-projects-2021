import { Timestamp } from 'google-protobuf/google/protobuf/timestamp_pb';
import { Guid } from 'guid-typescript';

export interface ProfessorDto {
  professorid: string;

  name: string;

  doj: Timestamp | undefined;

  teaches: string;

  salary: number;

  isphd: boolean;

  pictureurl: string;
}

export interface ProfessorDtoApi {
  professorId: Guid;

  name: string;

  doj: Date;

  teaches: string;

  salary: number;

  isPhd: boolean;

  pictureUrl: string;
}

export interface ProfessorsGrpcDto {
  count: number;

  message: string;

  professorsList: ProfessorDto[];
}