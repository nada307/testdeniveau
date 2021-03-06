
export class Todo {

	private id: number;
	private titre: String;
    private description: String;
	private datededebut: Date;
	private datedecheance: Date;
	private status: String;

	public getId():number {
	return	this.id;

	}
	public setId(id: number): void {
		this.id=id;

	}
	
	public getTitre():String {
		return	this.titre;
	
		}
	public setTitre(titre: String): void {
		this.titre=titre;
		
	}


	public getDescription():String {
		return	this.description;
	
		}
	public setDescription(description: String): void {
		this.description=description;
		
	}

	public getDatededebut():Date {
		return	this.datededebut;
	
		}
	public setDatededebut(datededebut: Date): void {
		this.datededebut=datededebut;
		
	}

	public getDatedecheance():Date {
		return	this.datedecheance;
	
		}
	public setDatedecheance(datedecheance: Date): void {
		this.datedecheance=datedecheance;
		
	}
	
	
	public getStatus():String {
		return	this.status;	
		}
	public setStatus(status: String): void {
		this.status=status;
		
	}

	
}