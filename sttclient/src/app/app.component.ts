import { Component } from '@angular/core'
import { DateTime } from 'luxon'

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'sttclient'

  mNow = DateTime.now()

  mTodayStart = this.mNow.startOf('day')
  mTodayStop = this.mNow.endOf('day')

  m1990Utc = DateTime.fromObject({ year: 1990 }, { zone: 'UTC' }).startOf('year')

  iso1990Utc = this.m1990Utc.toISO()

  unix1990Utc = this.m1990Utc.toSeconds()

  m1997Utc = DateTime.fromObject({ year: 1997 }, { zone: 'UTC' }).startOf('year')

  iso1997Utc = this.m1997Utc.toISO()

  unix1997Utc = this.m1997Utc.toSeconds()

  mTodayDuration = this.mTodayStop.diff(this.mTodayStart)

  secondsToday = Math.round(this.mTodayDuration.as('seconds'))

  minutesToday = Math.round(this.mTodayDuration.as('minutes'))

  mLast7DaysDuration = this.mNow.diff(this.mNow.minus({ days: 7 }))

  secondsDuringTheLast7Days = Math.round(this.mLast7DaysDuration.as('seconds'))

  constructor () { }
}
