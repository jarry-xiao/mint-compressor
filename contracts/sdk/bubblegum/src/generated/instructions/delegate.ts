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
 * @category Delegate
 * @category generated
 */
export type DelegateInstructionArgs = {
  root: number[] /* size: 32 */
  dataHash: number[] /* size: 32 */
  creatorHash: number[] /* size: 32 */
  nonce: beet.bignum
  index: number
}
/**
 * @category Instructions
 * @category Delegate
 * @category generated
 */
export const delegateStruct = new beet.BeetArgsStruct<
  DelegateInstructionArgs & {
    instructionDiscriminator: number[] /* size: 8 */
  }
>(
  [
    ['instructionDiscriminator', beet.uniformFixedSizeArray(beet.u8, 8)],
    ['root', beet.uniformFixedSizeArray(beet.u8, 32)],
    ['dataHash', beet.uniformFixedSizeArray(beet.u8, 32)],
    ['creatorHash', beet.uniformFixedSizeArray(beet.u8, 32)],
    ['nonce', beet.u64],
    ['index', beet.u32],
  ],
  'DelegateInstructionArgs'
)
/**
 * Accounts required by the _delegate_ instruction
 *
 * @property [] authority
 * @property [**signer**] owner
 * @property [] previousDelegate
 * @property [] newDelegate
 * @property [] candyWrapper
 * @property [] gummyrollProgram
 * @property [_writable_] merkleSlab
 * @category Instructions
 * @category Delegate
 * @category generated
 */
export type DelegateInstructionAccounts = {
  authority: web3.PublicKey
  owner: web3.PublicKey
  previousDelegate: web3.PublicKey
  newDelegate: web3.PublicKey
  candyWrapper: web3.PublicKey
  gummyrollProgram: web3.PublicKey
  merkleSlab: web3.PublicKey
}

export const delegateInstructionDiscriminator = [
  90, 147, 75, 178, 85, 88, 4, 137,
]

/**
 * Creates a _Delegate_ instruction.
 *
 * @param accounts that will be accessed while the instruction is processed
 * @param args to provide as instruction data to the program
 *
 * @category Instructions
 * @category Delegate
 * @category generated
 */
export function createDelegateInstruction(
  accounts: DelegateInstructionAccounts,
  args: DelegateInstructionArgs
) {
  const {
    authority,
    owner,
    previousDelegate,
    newDelegate,
    candyWrapper,
    gummyrollProgram,
    merkleSlab,
  } = accounts

  const [data] = delegateStruct.serialize({
    instructionDiscriminator: delegateInstructionDiscriminator,
    ...args,
  })
  const keys: web3.AccountMeta[] = [
    {
      pubkey: authority,
      isWritable: false,
      isSigner: false,
    },
    {
      pubkey: owner,
      isWritable: false,
      isSigner: true,
    },
    {
      pubkey: previousDelegate,
      isWritable: false,
      isSigner: false,
    },
    {
      pubkey: newDelegate,
      isWritable: false,
      isSigner: false,
    },
    {
      pubkey: candyWrapper,
      isWritable: false,
      isSigner: false,
    },
    {
      pubkey: gummyrollProgram,
      isWritable: false,
      isSigner: false,
    },
    {
      pubkey: merkleSlab,
      isWritable: true,
      isSigner: false,
    },
  ]

  const ix = new web3.TransactionInstruction({
    programId: new web3.PublicKey(
      'BGUMAp9Gq7iTEuizy4pqaxsTyUCBK68MDfK752saRPUY'
    ),
    keys,
    data,
  })
  return ix
}
