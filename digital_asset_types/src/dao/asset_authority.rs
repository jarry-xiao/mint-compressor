//! SeaORM Entity. Generated by sea-orm-codegen 0.8.0

use sea_orm::entity::prelude::*;
use serde::{Deserialize, Serialize};

#[derive(Copy, Clone, Default, Debug, DeriveEntity)]
pub struct Entity;

impl EntityName for Entity {
    fn table_name(&self) -> &str {
        "asset_authority"
    }
}

#[derive(Clone, Debug, PartialEq, DeriveModel, DeriveActiveModel, Serialize, Deserialize)]
pub struct Model {
    pub id: i64,
    pub asset_id: Vec<u8>,
    pub scopes: Option<String>,
    pub authority: Vec<u8>,
    pub bgum_tx_seq: Option<i64>,
    pub bgum_burn_seq: Option<i64>,
    pub bgum_delegate_seq: Option<i64>,
    pub bgum_mint_seq: Option<i64>,
    pub bgum_redeem_seq: Option<i64>,
    pub bgum_cx_redeem_seq: Option<i64>,
}

#[derive(Copy, Clone, Debug, EnumIter, DeriveColumn)]
pub enum Column {
    Id,
    AssetId,
    Scopes,
    Authority,
    BgumTxSeq,
    BgumBurnSeq,
    BgumDelegateSeq,
    BgumMintSeq,
    BgumRedeemSeq,
    BgumCxRedeemSeq,
}

#[derive(Copy, Clone, Debug, EnumIter, DerivePrimaryKey)]
pub enum PrimaryKey {
    Id,
}

impl PrimaryKeyTrait for PrimaryKey {
    type ValueType = i64;
    fn auto_increment() -> bool {
        true
    }
}

#[derive(Copy, Clone, Debug, EnumIter)]
pub enum Relation {
    Asset,
}

impl ColumnTrait for Column {
    type EntityName = Entity;
    fn def(&self) -> ColumnDef {
        match self {
            Self::Id => ColumnType::BigInteger.def(),
            Self::AssetId => ColumnType::Binary.def(),
            Self::Scopes => ColumnType::Custom("array".to_owned()).def().null(),
            Self::Authority => ColumnType::Binary.def(),
            Self::BgumTxSeq => ColumnType::BigInteger.def().null(),
            Self::BgumBurnSeq => ColumnType::BigInteger.def().null(),
            Self::BgumDelegateSeq => ColumnType::BigInteger.def().null(),
            Self::BgumMintSeq => ColumnType::BigInteger.def().null(),
            Self::BgumRedeemSeq => ColumnType::BigInteger.def().null(),
            Self::BgumCxRedeemSeq => ColumnType::BigInteger.def().null(),
        }
    }
}

impl RelationTrait for Relation {
    fn def(&self) -> RelationDef {
        match self {
            Self::Asset => Entity::belongs_to(super::asset::Entity)
                .from(Column::AssetId)
                .to(super::asset::Column::Id)
                .into(),
        }
    }
}

impl Related<super::asset::Entity> for Entity {
    fn to() -> RelationDef {
        Relation::Asset.def()
    }
}

impl ActiveModelBehavior for ActiveModel {}
