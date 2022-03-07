export abstract class AbstractCustomer {
    protected name: string;
    public abstract isNil(): boolean;
    public abstract getName(): string;
}