using com.teched.event as db from '../db/data-model';

service BusinessPartnerService{

    // Fetch From HANA Cloud DB
    @odata.draft.enabled
    entity BusinessPartner as projection on db.A_BusinessPartner;

    entity BusinessPartnerAddress as projection on db.A_BusinessPartnerAddress;

    function getBusinessPartner() returns BusinessPartner;
}