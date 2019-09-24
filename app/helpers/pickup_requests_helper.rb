module PickupRequestsHelper
    def pri_limit_reached?(pr)
        pr.item_count == 3
    end
end
