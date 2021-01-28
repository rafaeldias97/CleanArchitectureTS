import { CreateMachine } from "@/domain/usecases";
import { Controller, HttpResponse, ok, serverError } from "@/presentation/contracts";
import { CreateMachineViewModel } from "@/presentation/view-models";

export class MachineController implements Controller {
    constructor (private readonly createMachine: CreateMachine) {
        
    }
    async handle (req): Promise<HttpResponse<CreateMachineViewModel>> {
        try {
            const _ranking = await this.createMachine.create({id: 0, name: 'Rafae;', code: 'TESTE' })
            return ok(_ranking)
          } catch (error) {
            return serverError(error)
          }
    }
}