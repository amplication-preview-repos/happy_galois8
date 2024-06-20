import { Injectable } from "@nestjs/common";
import { PrismaService } from "../prisma/prisma.service";
import { InstrumentServiceBase } from "./base/instrument.service.base";

@Injectable()
export class InstrumentService extends InstrumentServiceBase {
  constructor(protected readonly prisma: PrismaService) {
    super(prisma);
  }
}
