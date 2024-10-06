import { context } from '@actions/github';

export async function getOwner(): Promise<string> {
    const owner = context.repo.owner;  // Access the owner from the repo context
    console.log(owner);
    return owner;
}

getOwner();
