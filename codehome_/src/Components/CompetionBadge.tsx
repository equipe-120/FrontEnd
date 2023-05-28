import React from 'react';
import PropsBadge from '../Props/PropsBadge'

import imgAwardsSecond from '../Assets/RankingScreen/imgAwardsSecond.svg'
import imgAwardsThird from '../Assets/RankingScreen/imgAwardsThird.svg'
import imgAwardsFirst from '../Assets/RankingScreen/imgAwardsFirst.svg'

const CompetitionBadge: React.FC<PropsBadge> = ({ name, expirience, position }) => {
    if (position == 1) {
        return (
            <div className="w-1/3 justify-center">
                <div className="w-12 h-12 rounded-full bg-red-500 mx-auto">
                </div>
                <div>
                    <img
                        className="top-0 left-0 flex mx-auto relative -mt-3"
                        src={imgAwardsFirst}
                        alt="" />
                </div>
                <div
                    className="text-center">
                    {name}
                </div>
                <div className="bg-gray-50 rounded-3xl text-blue-400 w-1/3 text-center mx-auto mb-2 ">
                    {expirience} XP
                </div>
            </div>

        );
    } else if (position == 2) {
        return (
            <div className="w-1/3 space-y-1 justify-center">
                <div className="w-12 h-12 rounded-full bg-blue-600 mx-auto"></div>
                <div>
                    <img
                        className="top-0 left-0 flex mx-auto relative -mt-3"
                        src={imgAwardsSecond}
                        alt="" />
                </div>
                <div
                    className="text-center">
                    {name}
                </div>
                <div className="bg-gray-50 rounded-3xl text-blue-400 w-1/3 text-center mx-auto mb-2">
                    {expirience} XP
                </div>
            </div>

        );
    } else {
        return (
            <div className="w-1/3 space-y-1 justify-center">
                <div className="w-12 h-12 rounded-full bg-yellow-400 mx-auto"></div>
                <div>
                    <img
                        className="top-0 left-0 flex mx-auto relative -mt-3"
                        src={imgAwardsThird}
                        alt="" />
                </div>
                <div
                    className="text-center">
                    {name}
                </div>
                <div className="bg-gray-50 rounded-3xl text-blue-400 w-1/3 text-center mx-auto mb-2">
                    {expirience} XP
                </div>
            </div>

        );
    }
};

export default CompetitionBadge;