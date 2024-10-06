import { context } from '@actions/github';

export async function getOwner(): Promise<string> {
    const owner = context.repo.owner;
    console.log(owner);
    return owner;
}
