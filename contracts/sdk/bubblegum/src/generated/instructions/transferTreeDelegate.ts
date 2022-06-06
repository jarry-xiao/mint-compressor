/**
 * This code was GENERATED using the solita package.
 * Please DO NOT EDIT THIS FILE, instead rerun solita to update it or write a wrapper to add functionality.
 *
 * See: https://github.com/metaplex-foundation/solita
 */

import * as beet from '@metaplex-foundation/beet'
import * as web3 from '@solana/web3.js'

/**
 * @category Instructions
 * @category TransferTreeDelegate
 * @category generated
 */
export const transferTreeDelegateStruct = new beet.BeetArgsStruct<{
  instructionDiscriminator: number[] /* size: 8 */
}>(
  [['instructionDiscriminator', beet.uniformFixedSizeArray(beet.u8, 8)]],
  'TransferTreeDelegateInstructionArgs'
)
/**
 * Accounts required by the _transferTreeDelegate_ instruction
 *
 * @property [**signer**] treeDelegate
 * @property [] newDelegate
 * @property [_writable_] authority
 * @category Instructions
 * @category TransferTreeDelegate
 * @category generated
 */
export type TransferTreeDelegateInstructionAccounts = {
  treeDelegate: web3.PublicKey
  newDelegate: web3.PublicKey
  authority: web3.PublicKey
}

export const transferTreeDelegateInstructionDiscriminator = [
  18, 104, 30, 61, 112, 183, 161, 193,
]

/**
 * Creates a _TransferTreeDelegate_ instruction.
 *
 * @param accounts that will be accessed while the instruction is processed
 * @category Instructions
 * @category TransferTreeDelegate
 * @category generated
 */
export function createTransferTreeDelegateInstruction(
  accounts: TransferTreeDelegateInstructionAccounts,
  programId = new web3.PublicKey('BGUMAp9Gq7iTEuizy4pqaxsTyUCBK68MDfK752saRPUY')
) {
  const [data] = transferTreeDelegateStruct.serialize({
    instructionDiscriminator: transferTreeDelegateInstructionDiscriminator,
  })
  const keys: web3.AccountMeta[] = [
    {
      pubkey: accounts.treeDelegate,
      isWritable: false,
      isSigner: true,
    },
    {
      pubkey: accounts.newDelegate,
      isWritable: false,
      isSigner: false,
    },
    {
      pubkey: accounts.authority,
      isWritable: true,
      isSigner: false,
    },
  ]

  const ix = new web3.TransactionInstruction({
    programId,
    keys,
    data,
  })
  return ix
}
