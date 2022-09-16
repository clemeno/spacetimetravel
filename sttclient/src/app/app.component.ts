import { Component, OnInit } from '@angular/core'
import { DateTime } from 'luxon'

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  title = 'sttclient'

  clockInterval: any

  clockrefreshIntervalSeconds = 1

  bClockRunning = false

  mNow = DateTime.now()

  nowIso = this.mNow.toISO()

  nowDttz = this.mNow.toFormat('D TT z')

  nowUnix = this.mNow.toSeconds()

  mTodayStart = this.mNow.startOf('day')

  todayStartIso = this.mTodayStart.toISO()

  todayStartDttz = this.mTodayStart.toFormat('D TT z')

  todayStartUnix = this.mTodayStart.toSeconds()

  mTodayStop = this.mNow.endOf('day')

  todayStopIso = this.mTodayStop.toISO()

  todayStopDttz = this.mTodayStop.toFormat('D TT z')

  todayStopUnix = this.mTodayStop.toSeconds()

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

  ngOnInit () {
    this.clockStart()
  }

  onClockTick () {
    this.mNow = DateTime.now()

    this.nowDttz = this.mNow.toFormat('D TT z')
    this.nowUnix = this.mNow.toSeconds()

    this.mTodayStart = this.mNow.startOf('day')

    this.todayStartDttz = this.mTodayStart.toFormat('D TT z')
    this.todayStartUnix = this.mTodayStart.toSeconds()

    this.mTodayStop = this.mNow.endOf('day')

    this.todayStopDttz = this.mTodayStop.toFormat('D TT z')
    this.todayStopUnix = this.mTodayStop.toSeconds()
  }

  clockStop () {
    clearInterval(this.clockInterval)
    this.bClockRunning = false
  }

  clockStart () {
    this.onClockTick()
    this.clockInterval = setInterval(() => { this.onClockTick() }, 1000 * this.clockrefreshIntervalSeconds)
    this.bClockRunning = true
  }

  onRefreshIntervalChange () {
    this.clockStop()
    this.clockStart()
  }
}
